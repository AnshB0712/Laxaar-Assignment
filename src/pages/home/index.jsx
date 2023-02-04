import React from 'react';
import DisplayData from '../../components/DisplayData';
import useNotesContext from '../../hooks/useNotesContext';
import AddANoteModal from './components/AddANoteModal';
import Note from './components/Note';

function Home() {
  const { state } = useNotesContext();
  return (
    <>
      <DisplayData data={state} Component={Note} />
      <AddANoteModal />
    </>
  );
}

export default Home;
