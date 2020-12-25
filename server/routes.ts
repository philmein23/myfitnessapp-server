import { Application } from 'express';
import examplesRouter from './api/controllers/examples/router';
import programsRouter from './api/controllers/programs/router';
import exercisesRouter from './api/controllers/exercises/router';
export default function routes(app: Application): void {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/programs', programsRouter);
  app.use('/api/v1/exercises', exercisesRouter);
}
