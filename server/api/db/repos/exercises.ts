import { IDatabase, IMain } from 'pg-promise';
import { IResult } from 'pg-promise/typescript/pg-subset';
import { Exercise } from '../models';
import { exercises as sql } from '../sql';

export class ExercisesRepository {
  constructor(private db: IDatabase<any>, private pgp: IMain) {}

  async findAll(): Promise<Exercise[]> {
    return this.db.any(sql.findAll);
  }

  async find(exerciseId: number): Promise<Exercise> {
    return this.db.oneOrNone(sql.find, [exerciseId]);
  }
}
