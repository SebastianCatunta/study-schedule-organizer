# Validation checklist

- [ ] Entity name has singular PascalCase/camelCase/kebab-case forms.
- [ ] Prisma model has `id`, `createdAt`, `updatedAt`, and `userId` with project-compatible types.
- [ ] DTOs validate required and optional business fields.
- [ ] Service handles missing IDs without leaking Prisma errors.
- [ ] Controller protects private endpoints with the existing JWT guard.
- [ ] All CRUD routes and route parameter types are covered.
- [ ] Angular service uses typed `HttpClient` methods and `catchError`.
- [ ] List, detail, and create/edit form routes are registered.
- [ ] Backend and frontend field names/types match.
- [ ] Unit, integration, formatter, and typecheck commands were run or explicitly reported.
