#!/usr/bin/env python3
"""Validate names and required CRUD files in a generated feature."""
import argparse
import re
from pathlib import Path

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("root", type=Path)
    parser.add_argument("entity")
    args = parser.parse_args()
    kebab = re.sub(r"(?<!^)(?=[A-Z])", "-", args.entity).lower().replace("_", "-")
    pascal = "".join(part.capitalize() for part in kebab.split("-"))
    files = list(args.root.rglob("*"))
    names = [p.name for p in files if p.is_file()]
    required = [f"create-{kebab}.dto.ts", f"update-{kebab}.dto.ts", f"{kebab}.service.ts", f"{kebab}.controller.ts"]
    missing = [name for name in required if name not in names]
    bad = [p for p in files if p.is_file() and p.suffix in {".ts", ".tsx"} and ("_" in p.name or any(c.isupper() for c in p.name))]
    if missing or bad:
        if missing: print("Missing: " + ", ".join(missing))
        if bad: print("Non kebab-case files: " + ", ".join(str(p) for p in bad))
        return 1
    print(f"Validated {pascal} ({kebab})")
    return 0

if __name__ == "__main__": raise SystemExit(main())
