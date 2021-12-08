import { Actions } from '../actions';
import { ActionType } from '../action-types';
import { ICategory } from '../../interfaces';

interface CategoryState {
  loading: boolean;
  error: string | null;
  data: ICategory[];
}

const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: CategoryState = initialState,
  action: Actions
): CategoryState => {
  switch (action.type) {
    case ActionType.FETCH_CATEGORIES:
      return { loading: true, error: null, data: [] };
    case ActionType.FETCH_CATEGORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.FETCH_CATEGORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
