import { Service, Inject, Container } from 'typedi';
import { IModels, NoteAttributes } from '../types/models';
import { IObjectKeys, PaginationResult } from '../types/general';
import 'reflect-metadata';

interface INoteRepositiory {
  exists(findArgs: NoteAttributes): Promise<boolean>;
  findNote(conditions: NoteAttributes): Promise<NoteAttributes | null>;
  save(note: NoteAttributes): Promise<NoteAttributes>;
  getAll({
    offset,
    limit,
    findArgs,
  }: {
    offset: number;
    limit: number;
    findArgs?: IObjectKeys;
  }): Promise<PaginationResult<NoteAttributes>>;
}

@Service()
export default class NoteRepository implements INoteRepositiory {
  constructor(@Inject('models') private Models: IModels) {}

  private createBaseQuery() {
    return {
      where: {},
    };
  }

  async exists(findArgs: NoteAttributes): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { ...findArgs };
    const Note = await this.Models.Note.findOne({ ...baseQuery, raw: true });
    return !!Note === true;
  }

  async findNote(findArgs: NoteAttributes): Promise<NoteAttributes | null> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { ...findArgs };
    const Note = await this.Models.Note.findOne({ ...baseQuery, raw: true });
    if (!!Note === true) return Note;
    return null;
  }

  async save(note: NoteAttributes): Promise<NoteAttributes> {
    return this.Models.Note.create(note);
  }

  async getAll({
    limit,
    offset,
    findArgs = {},
  }: {
    limit: number;
    offset: number;
    findArgs?: { [key: string]: string };
  }): Promise<PaginationResult<NoteAttributes>> {
    try {
      const result = await this.Models.Note.findAndCountAll({
        offset,
        limit,
        where: { ...findArgs },
        order: [['createdAt', 'DESC']],
        raw: true,
      });

      return {
        docs: result.rows,
        total: result.count,
        pages: Math.ceil(result.count / limit),
      };
    } catch (error: any) {
      throw error;
    }
  }
}
