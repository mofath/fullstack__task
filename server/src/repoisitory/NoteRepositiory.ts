import { Service, Inject, Container } from 'typedi';
import { IModels, NoteAttributes } from '../types/models';
import 'reflect-metadata';

interface INoteRepositiory {
  exists(findArgs: NoteAttributes): Promise<boolean>;
  findNote(conditions: NoteAttributes): Promise<NoteAttributes | null>;
  save(note: NoteAttributes): Promise<NoteAttributes>;
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
}
