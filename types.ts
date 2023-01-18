/**
 * Action types
 */
export enum ItemsTypes {
ADD_TODO = 'ADD_TODO',
TOGGLE_DONE = 'TOGGLE_DONE',
DELETE_TODO = 'DELETE_TODO',
}


/**
 * Data types
 */
export interface Item {
  id: string,
  inputTitle: string,
  input: string,
  isDone: boolean
}

/**
 * State types
 */
export interface ApplicationState {
  items: ItemsState,
  filterState: string
}

export interface ItemsState {
  readonly data: Item[]
}

export interface TodoListActionTypes {
  type: string,
  payload: Item,
  data: Item[]
}