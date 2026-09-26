# Individual Presentation Guide

## Five-minute demonstration

1. Open the skill folder and show `SKILL.md`, `scripts/`, `references/`, `assets/`, `demo/`, `tests/`, and `evidence/`.
2. Explain that `SKILL.md` is the workflow, `references/` preserve project conventions, `assets/` provide templates, and `scripts/` make structural checks deterministic.
3. Run `python demo/run-demo.py` and point out the successful validation and the intentional failure.
4. In OpenCode, request the `materia` example from `docs/INSTALLATION.md` in a disposable Angular/NestJS + Prisma repository.
5. Show the generated paths, migration command, tests, and validation result.

## Main design decisions

- Inspect first instead of assuming folder structure, authentication, or route style.
- Reuse the repository's architecture instead of forcing a repository layer.
- Separate naming references, framework practices, templates, and executable checks so each resource is loaded only when needed.
- Never overwrite a conflicting feature silently.
- Report assumptions and unavailable commands instead of claiming that they passed.

## Rubric mapping

| Criterion | Evidence |
| --- | --- |
| Functionality | Generated backend/frontend CRUD and output contract in `SKILL.md` |
| Structure | `SKILL.md`, `scripts/`, `assets/`, and `references/` |
| Documentation | `docs/INSTALLATION.md` and this guide |
| Tests and errors | `demo/run-demo.py`, `tests/`, and `evidence/screenshots/` |
| Presentation | This script and the captured terminal/application results |
