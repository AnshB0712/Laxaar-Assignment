import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';

const useNotesContext = () => useContext(NotesContext);

export default useNotesContext;
