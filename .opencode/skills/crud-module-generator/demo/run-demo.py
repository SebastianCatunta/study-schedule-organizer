#!/usr/bin/env python3
"""Run a repeatable success/error demonstration without changing the project."""
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def run(script, *args):
    return subprocess.run([sys.executable, str(ROOT / "scripts" / script), *map(str, args)], capture_output=True, text=True)


def main():
    fixture = ROOT / "demo" / "fixtures"
    with tempfile.TemporaryDirectory() as temp:
        generated = Path(temp) / "generated-tests"
        valid = run("validate-module.py", fixture / "valid", "materia")
        consistency = run("check-consistency.py", fixture / "valid" / "backend", fixture / "valid" / "frontend", "materia")
        tests = run("generate-tests.py", generated, "materia")
        invalid = run("validate-module.py", fixture / "invalid", "materia")
        print("=== CASO EXITOSO ===")
        print(valid.stdout.strip())
        print(consistency.stdout.strip())
        print(tests.stdout.strip())
        if valid.returncode or consistency.returncode or tests.returncode:
            return 1
        print("=== CASO INVALIDO (esperado) ===")
        print(invalid.stdout.strip())
        if invalid.returncode == 0:
            print("ERROR: el fixture invalido fue aceptado")
            return 1
        print("Resultado: el caso invalido fue rechazado correctamente.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
