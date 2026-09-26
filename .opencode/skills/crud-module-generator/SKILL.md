---
name: crud-module-generator
description: Generates complete, consistent CRUD modules for Angular + NestJS + Prisma projects, including Prisma schema changes, validated DTOs, repository/service/controller layers, JWT guards, Jest/Supertest tests, Angular interfaces/services/components/routes, and validation. Use this skill whenever the user asks to create or generate a module/entity/CRUD for usuarios, materias, horarios, bloques, or similar resources, even if they do not explicitly say "CRUD".
compatibility: Requires a NestJS + Prisma backend and Angular frontend; Python 3 is recommended for bundled validators.
---

# CRUD Module Generator

Create a production-ready CRUD slice from one entity name while preserving the conventions already used by the target repository.

## Required interaction

1. Ask for the entity name if it was not provided. Accept a singular Spanish or English noun such as `materia`, `horario`, or `usuario`.
2. Ask only the minimum follow-up questions needed to avoid overwriting project conventions: backend path, frontend path, required business fields/types, and whether repositories are already used. Infer the rest by inspecting the repository.
3. Convert the name into `entityName` (singular camelCase), `EntityName` (PascalCase), and `entity-name` (kebab-case). Confirm the conversion for irregular plurals or ambiguous names.

## Workflow

1. Inspect `package.json`, NestJS modules, Prisma schema, Angular routing, and one nearby feature. Read the relevant files in `references/` before generating code.
2. Choose the existing architecture. Do not introduce a repository layer when the project uses Prisma directly in services; if repositories are present, implement the new repository consistently.
3. Use the templates in `assets/` as a starting point, replacing every placeholder. Preserve project-specific imports, API prefixes, response envelopes, and Angular standalone/module style.
4. Generate backend files:
   - Prisma model with `id`, `createdAt`, `updatedAt`, `userId`, plus requested business fields. Match the project's ID and relation types.
   - DTOs with `class-validator` and `class-transformer` patterns already used by the project.
   - Entity type/class and repository when applicable.
   - Service methods `create`, `findAll`, `findOne`, `update`, and `remove` with `NotFoundException`/`HttpException` handling.
   - Controller routes `POST /entity`, `GET /entity`, `GET /entity/:id`, `PATCH` or `PUT /entity/:id`, and `DELETE /entity/:id`; use the project's route convention.
   - JWT protection using the existing `AuthGuard` import and `@UseGuards` placement. Never invent a new authentication strategy.
   - Service Jest tests and controller Supertest integration tests, adapted to existing test setup.
5. Generate frontend files:
   - Interface matching API response and DTO fields.
   - `HttpClient` service with typed CRUD methods and `catchError` behavior consistent with the app.
   - List, detail, and create/edit form components with reactive-form validation.
   - Routes using the existing standalone or NgModule convention.
6. Add or update exports/module registration and route registration. Keep changes scoped to the generated feature.
7. Run `scripts/validate-module.py` against the generated feature and `scripts/check-consistency.py` against backend/frontend roots. Fix reported issues.
8. Run the project's formatter, typecheck, unit tests, and integration tests where available. Report commands that could not run and why.

## Output contract

Report:

- Entity and paths generated.
- Backend files and frontend files created.
- Migration command, for example `npx prisma migrate dev --name add-materia`.
- Tests and validation commands run, including failures.
- Any assumptions about business fields, ID types, auth, or routing.

## Naming and safety

Use PascalCase classes, camelCase symbols, kebab-case filenames/routes, and singular resource names. Never silently overwrite an existing feature: inspect and ask before replacing conflicting files. Use `references/naming-conventions.md`, `references/folder-structure.md`, and the framework best-practice references when making choices.

## Bundled resources

- `assets/template-dto.ts`, `assets/template-service.ts`, and `assets/template-component.ts`: minimal replacement-ready examples.
- `assets/validation-checklist.md`: completion checklist.
- `assets/example-output.md`: complete `materia` output map.
- `references/`: conventions, architecture, and an example feature.
- `scripts/validate-module.py`: structural and naming checks.
- `scripts/generate-tests.py`: deterministic Jest/Supertest test scaffolding.
- `scripts/check-consistency.py`: backend/frontend symbol and endpoint consistency checks.
