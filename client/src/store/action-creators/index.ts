import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Actions } from '../actions';
import services from '../../services';

export const fetchCategories = () => {
  return async (dispatch: Dispatch<Actions>) => {
    dispatch({
      type: ActionType.FETCH_CATEGORIES,
    });

    try {
      const data = await services.noteService.getCategories();
      dispatch({
        type: ActionType.FETCH_CATEGORIES_SUCCESS,
        payload: data.categories,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.FETCH_CATEGORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
