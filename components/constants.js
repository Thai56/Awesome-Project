const API_KEY = 'v6hVd8eN2ugdCGzKCVxhUmrHMU2BoD4k';
const TEST_URL = `http://api.giphy.com/v1/gifs/search?limit=20&offset=3&api_key=${API_KEY}&q=`;
const NO_SEARCH_RESULT = 'No Search Results Found Please Try Another Search';
const DEFAULT_SEARCH = 'cats';
export const GIF_CONSTANTS = {
  API_KEY,
  TEST_URL,
  NO_SEARCH_RESULT,
  DEFAULT_SEARCH,
};

const TODO_ID = 'todoId';
const TITLE = 'title';
const TODOS = 'todos';
const STATUS = 'status';
export const TODO_CONSTANTS = {
  TODO_ID,
  TITLE,
  TODOS,
  STATUS,
};

const INCOMPLETE = 'incomplete';
const IN_PROGRESS = 'in progress';
const COMPLETE = 'complete';

export const SERVER_URL = 'http://localhost:8021';

export const FORM_KEYS = {
  INCOMPLETE,
  IN_PROGRESS,
  COMPLETE,
  SERVER_URL,
};

