import { IsDefined, MinLength, MaxLength } from 'class-validator';

export class CreateNoteDTO {
  constructor(title: string, description: string, categoryId: string) {
    this.title = title;
    this.description = description;
    this.categoryId = categoryId;
  }

  @IsDefined({ message: 'Title is required' })
  @MinLength(3, { message: 'Title min length is 3' })
  @MaxLength(25, { message: 'Title max length is 25' })
  title: string;

  @IsDefined({ message: 'Description is required' })
  @MinLength(10, { message: 'Description min length is 10' })
  @MaxLength(255, { message: 'Description max length is 255' })
  description: string;

  @IsDefined({ message: 'Category ID is required' })
  categoryId: string;
}
