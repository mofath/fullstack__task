import { Service, Inject } from 'typedi';
import { IModels, CategoryAttributes } from '../types/models';
import 'reflect-metadata';

interface ICategoryRepositiory {
  getAll(): Promise<CategoryAttributes[]>;
  exists(findArgs: CategoryAttributes): Promise<boolean>;
}

@Service()
export default class CategoryRepository implements ICategoryRepositiory {
  constructor(@Inject('models') private Models: IModels) {}

  private createBaseQuery() {
    return {
      where: {},
    };
  }

  async exists(findArgs: CategoryAttributes): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { ...findArgs };
    const category = await this.Models.Category.findOne({
      ...baseQuery,
      raw: true,
    });
    return !!category === true;
  }

  async getAll(): Promise<CategoryAttributes[]> {
    return await this.Models.Category.findAll({ raw: true });
  }
}
