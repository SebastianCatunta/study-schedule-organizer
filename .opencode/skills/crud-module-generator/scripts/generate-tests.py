#!/usr/bin/env python3
"""Generate small test skeletons; project-specific mocks still require review."""
import argparse
from pathlib import Path

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("output", type=Path)
    parser.add_argument("entity")
    args = parser.parse_args()
    name = args.entity.lower().replace("_", "-")
    pascal = "".join(part.capitalize() for part in name.split("-"))
    args.output.mkdir(parents=True, exist_ok=True)
    (args.output / f"{name}.service.spec.ts").write_text(f"describe('{pascal}Service', () => {{ it('is defined', () => {{ expect(true).toBe(true); }}); }});\n", encoding="utf-8")
    (args.output / f"{name}.e2e-spec.ts").write_text(f"describe('{pascal}Controller', () => {{ it('GET /{name} responds', async () => {{ /* configure Supertest with the app */ }}); }});\n", encoding="utf-8")
    print(f"Generated test skeletons for {pascal}")

if __name__ == "__main__": main()
