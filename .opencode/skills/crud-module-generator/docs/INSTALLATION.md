# Installation and Usage

## Requirements

- OpenCode with skills enabled.
- An Angular + NestJS + Prisma project when generating a real module.
- Node.js 18+ and npm for the target project.
- Python 3.9+ for the bundled validators and demo.

## Installation

Copy the `crud-module-generator` folder into the target project's `.opencode/skills/` directory:

```text
your-project/
  .opencode/skills/crud-module-generator/SKILL.md
```

No `pip install` or `npm install` is needed for the skill itself. The target project must already contain its own Angular, NestJS, Prisma, Jest, and authentication dependencies.

## Execution

Start OpenCode in the target project and request a complete module. Example:

```text
Genera un CRUD completo para materia en este proyecto.

Campos:
- nombre: string requerido
- codigo: string requerido
- creditos: number entero positivo

La aplicación Angular está en la raíz del proyecto y utiliza:
- código fuente frontend en src/
- rutas en src/app.routes.ts
- configuración en angular.json

El backend NestJS está en backend/ y utiliza:
- código fuente en backend/src/
- Prisma en backend/prisma/
- autenticación existente en backend/src/auth/

Inspecciona primero las convenciones existentes. Genera el módulo completo
manteniendo esta estructura, sin crear una carpeta frontend/ y sin sobrescribir
archivos existentes sin avisar.

Incluye:
- modelo Prisma y migración
- DTOs
- service y controller NestJS
- protección JWT usando la autenticación existente
- pruebas backend
- interface, service, componentes y rutas Angular
- validación de consistencia entre backend/ y src/
- reporte final de archivos creados, comandos ejecutados, errores y supuestos
```

The skill should inspect the repository before writing files, ask about missing conventions, generate backend and frontend code, and report validation/test commands.

## Direct script checks

From this skill directory, run:

```bash
python scripts/validate-module.py demo/fixtures/valid materia
python scripts/check-consistency.py demo/fixtures/valid/backend demo/fixtures/valid/frontend materia
python scripts/generate-tests.py demo/output materia
```

Expected successful messages include `Validated Materia (materia)`, three `PASS` consistency lines, and `Generated test skeletons for Materia`.

## Expected result

The generated project should contain a Prisma model, DTOs, service, controller, tests, Angular interface/service/components/routes, module or export registration, and a migration command. The final response must list paths, assumptions, validation commands, and failures that could not be run.
