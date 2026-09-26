# Example: `materia`

Backend:

```text
prisma/schema.prisma                 # model Materia
src/materia/dto/create-materia.dto.ts
src/materia/dto/update-materia.dto.ts
src/materia/materia.entity.ts
src/materia/materia.repository.ts    # only when repository pattern exists
src/materia/materia.service.ts
src/materia/materia.controller.ts
src/materia/materia.service.spec.ts
test/materia.e2e-spec.ts
```

Frontend:

```text
src/app/materia/models/materia.ts
src/app/materia/services/materia.service.ts
src/app/materia/components/materia-list.component.ts
src/app/materia/components/materia-detail.component.ts
src/app/materia/components/materia-form.component.ts
src/app/materia/materia.routes.ts
```

Migration: `npx prisma migrate dev --name add-materia`.
