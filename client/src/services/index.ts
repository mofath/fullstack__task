import HTTPClient from './HTTPClient';
import NoteService from './NoteService';

const initServices = () => {
  const httpClient = HTTPClient();

  const noteService = NoteService(httpClient);

  return {
    noteService,
  };
};

export default initServices();
