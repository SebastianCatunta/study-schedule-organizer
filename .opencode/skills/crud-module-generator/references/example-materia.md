# Reference feature: materia

Minimum model shape:

```prisma
model Materia {
  id        Int      @id @default(autoincrement())
  nombre    String   @db.VarChar(120)
  userId    Int
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  user      User     @relation(fields: [userId], references: [id])
}
```

The service exposes `create`, `findAll`, `findOne`, `update`, and `remove`; the controller exposes POST/GET/PATCH/DELETE at `/materia`. Adapt relation names and scalar types to the repository before copying this example.
