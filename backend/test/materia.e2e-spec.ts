import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('Materia (e2e)', () => {
  let app: INestApplication;
  beforeAll(async () => { app = (await Test.createTestingModule({ imports: [AppModule] }).compile()).createNestApplication(); app.setGlobalPrefix('api'); app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true })); await app.init(); });
  afterAll(async () => app.close());
  it('requires JWT protection', () => request(app.getHttpServer()).get('/api/materia').expect(401));
});
