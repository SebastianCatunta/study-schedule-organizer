#!/usr/bin/env python3
"""Check that backend and frontend use the same entity endpoint and fields."""
import argparse
import re
from pathlib import Path

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("backend", type=Path)
    parser.add_argument("frontend", type=Path)
    parser.add_argument("entity")
    args = parser.parse_args()
    entity = args.entity.lower().replace("_", "-")
    backend = "\n".join(p.read_text(encoding="utf-8", errors="ignore") for p in args.backend.rglob("*.ts"))
    frontend = "\n".join(p.read_text(encoding="utf-8", errors="ignore") for p in args.frontend.rglob("*.ts"))
    checks = {"backend endpoint": f"/{entity}" in backend, "frontend endpoint": f"/{entity}" in frontend, "backend service": bool(re.search(rf"class {re.escape(''.join(x.capitalize() for x in entity.split('-')))}Service", backend))}
    failed = [label for label, passed in checks.items() if not passed]
    for label, passed in checks.items(): print(f"{'PASS' if passed else 'FAIL'}: {label}")
    return 1 if failed else 0

if __name__ == "__main__": raise SystemExit(main())
