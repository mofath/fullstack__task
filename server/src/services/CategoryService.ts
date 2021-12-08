import { Service } from 'typedi';
import { CategoryRepositiory } from '../repoisitory';
import 'reflect-metadata';

@Service()
class CategoryService {
  constructor(private readonly CategoryRepositiory: CategoryRepositiory) {}

  getAll() {
    return this.CategoryRepositiory.getAll();
  }
}

export default CategoryService;
