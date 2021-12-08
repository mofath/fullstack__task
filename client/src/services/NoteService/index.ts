import { API } from '../../constants';

export default function NoteService(httpClient: any) {
  const getCategories = () => {
    return httpClient.get(API.GET_CATEGORIES, {});
  };

  return Object.freeze({
    getCategories,
  });
}
