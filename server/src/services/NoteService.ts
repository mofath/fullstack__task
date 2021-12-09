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
}

export default CategoryService;
