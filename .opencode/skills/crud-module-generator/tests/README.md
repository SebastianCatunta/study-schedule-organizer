# Reproducible Tests

Run from the skill directory. The valid fixture must exit with code `0`; the invalid fixture must exit with a non-zero code and print missing files.

```bash
python demo/run-demo.py
python scripts/validate-module.py demo/fixtures/valid materia
python scripts/validate-module.py demo/fixtures/invalid materia
```

For the presentation, capture the complete terminal output of `demo/run-demo.py`. This proves both the happy path and the handled invalid input. For a real-project proof, also capture the generated file tree and the project's formatter/typecheck/test commands after running the skill.
