import React, {
  createContext, useEffect, useMemo, useReducer,
} from 'react';
import notesReducer from './notesReducer';

export const NotesContext = createContext();

function NotesContextProvider({ children }) {
  const [state, dispatch] = useReducer(notesReducer, JSON.parse(localStorage.getItem('notes')) || []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(state));
  }, [state]);

  const memoisedProps = useMemo(() => ({ dispatch, state }), [state]);
  return (
    <NotesContext.Provider value={memoisedProps}>
      {children}
    </NotesContext.Provider>
  );
}

export default NotesContextProvider;
