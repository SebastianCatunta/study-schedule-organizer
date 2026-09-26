# NestJS and Prisma practices

Enable global `ValidationPipe` with transform/whitelist when the app supports it. Keep DTOs at the HTTP boundary, use Prisma types internally, map missing records to `NotFoundException`, and scope queries by authenticated `userId` when data is user-owned. Use parameter validation such as `ParseIntPipe` consistently. Keep migration generation separate from code generation and never edit applied migrations.
