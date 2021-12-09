import { Service } from 'typedi';
import { NoteRepositiory, CategoryRepositiory } from '../repoisitory';
import { NoteAttributes } from '../types/models';
import 'reflect-metadata';
import { UnprocessableEntityError } from '../errors';

@Service()
class CategoryService {
  constructor(
    private readonly NoteRepositiory: NoteRepositiory,
    private readonly CategoryRepositiory: CategoryRepositiory
  ) {}

  async save(note: NoteAttributes) {
    const categoryExists = await this.CategoryRepositiory.exists({
      id: note.category_id,
    });

    if (!categoryExists)
      throw new UnprocessableEntityError('Category does not exist!');

    return this.NoteRepositiory.save(note);
  }

  async getAll({ limit = 10, offset = 0 }: { limit: number; offset: number }) {
    return this.NoteRepositiory.getAll({ limit, offset });
  }
}

export default CategoryService;
