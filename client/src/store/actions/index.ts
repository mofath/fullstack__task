import { ICategory } from '../../interfaces';
import { ActionType } from '../action-types';

interface FetchCategoriesAction {
  type: ActionType.FETCH_CATEGORIES;
}

interface FetchCategoriesSuccessAction {
  type: ActionType.FETCH_CATEGORIES_SUCCESS;
  payload: ICategory[];
}

interface FetchCategoriesErrorAction {
  type: ActionType.FETCH_CATEGORIES_ERROR;
  payload: string;
}

export type Actions =
  | FetchCategoriesAction
  | FetchCategoriesSuccessAction
  | FetchCategoriesErrorAction;
