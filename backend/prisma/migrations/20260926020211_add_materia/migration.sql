-- CreateTable
CREATE TABLE "Materia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nombre" TEXT NOT NULL,
    "codigo" TEXT NOT NULL,
    "creditos" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Materia_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Materia_codigo_key" ON "Materia"("codigo");

-- CreateIndex
CREATE INDEX "Materia_userId_idx" ON "Materia"("userId");
