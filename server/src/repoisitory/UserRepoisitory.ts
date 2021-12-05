import { Service, Inject } from 'typedi';
import { IModels, UserAttributes } from '../types/models';
import 'reflect-metadata';

export interface IUserRepository {
  exists(findArgs: UserAttributes): Promise<boolean>;
  findUser(conditions: UserAttributes): Promise<UserAttributes | null>;
  save(user: UserAttributes): Promise<void>;
}

@Service()
export default class UserRepository implements IUserRepository {
  constructor(@Inject('models') private Models: IModels) {}

  private createBaseQuery() {
    return {
      where: {},
    };
  }

  async exists(findArgs: UserAttributes): Promise<boolean> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { ...findArgs };
    const user = await this.Models.User.findOne({ ...baseQuery, raw: true });
    return !!user === true;
  }

  async findUser(findArgs: UserAttributes): Promise<UserAttributes | null> {
    const baseQuery = this.createBaseQuery();
    baseQuery.where = { ...findArgs };
    const user = await this.Models.User.findOne({ ...baseQuery, raw: true });
    if (!!user === true) return user;
    return null;
  }

  async save(user: UserAttributes): Promise<void> {
    const exists = await this.exists({ email: user.email });

    try {
      if (!exists) {
        // Create new
        await this.Models.create(user);
      } else {
        // Save old
        const baseQuery = this.createBaseQuery();
        baseQuery.where = { email: user.email };
        const userInstance = await this.Models.User.findOne({ ...baseQuery });
        await userInstance?.update(user);
      }
    } catch (error) {
      throw error;
    }
  }
}
