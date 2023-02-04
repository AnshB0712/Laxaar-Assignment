import reducerActions from '../constants/reducerActions';

const notesReducer = (state, action) => {
  const { type, payload } = action;

  if (type === reducerActions.ADD_NOTE) {
    return [...state, { ...payload }];
  }
  if (type === reducerActions.EDIT_NOTE) {
    const notesWithModifiedDetails = state
      .map((note) => ((note.id === payload.id) ? ({ ...payload }) : note));
    return [...notesWithModifiedDetails];
  }
  if (type === reducerActions.DELETE_NOTE) {
    const filteredNotes = state.filter((note) => note.id !== payload.id);
    return [...filteredNotes];
  }

  return state;
};

export default notesReducer;
