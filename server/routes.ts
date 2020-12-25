import { Application } from 'express';
import programsRouter from './api/controllers/programs/router';
import exercisesRouter from './api/controllers/exercises/router';
export default function routes(app: Application): void {
  app.use('/api/v1/programs', programsRouter);
  app.use('/api/v1/exercises', exercisesRouter);
}
