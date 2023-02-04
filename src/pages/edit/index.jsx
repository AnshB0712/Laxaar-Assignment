import {
  Button, Paper, Stack, Text, TextInput,
} from '@mantine/core';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import reducerActions from '../../constants/reducerActions';
import useNotesContext from '../../hooks/useNotesContext';
import matchStringFromObjArrays from '../../utils/matchStringFromObjArrays';

function EditNotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { state, dispatch } = useNotesContext();

  // TO GET EXISTING VALUE OF THE NOTE
  const currentNote = state.find((note) => note.id === id);
  const [note, setNote] = useState({
    title: currentNote.title || '',
    description: currentNote.description || '',
  });

  // TO SET ERROR WHEN TITLE OF TWO NOTES ARE SAME
  const [duplicateTitleError, setDuplicateTitleError] = useState(false);
  // TO RESET ERROR OF SAME TITLE OF TWO NOTES WHEN USER ENTER NEW VALUE
  useEffect(() => {
    setDuplicateTitleError(false);
  }, [note.title]);

  const handleChange = (e) => setNote((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    // TO CHECK THE ERROR OF SAME TITLE OF TWO NOTES ON THE SUBMIT
    if (matchStringFromObjArrays(state, 'title', note.title, id)) {
      setDuplicateTitleError(true);
      return;
    }

    dispatch({
      type: reducerActions.EDIT_NOTE,
      payload: {
        id,
        ...note,
      },
    });
    navigate('/');
  };

  // TO DISABLE SUBMIT BUTTON ON THE GIVEN CONDITIONS
  const disabledSubmit = !note.title || (note.title?.length < 10 && !note.description);

  return (
    <Stack p="xl">
      <Text size="lg" ta="center" fw={500}>EDIT NOTE</Text>
      <Paper
        p="lg"
        style={{
          position: 'relative',
        }}
      >
        <form onSubmit={handleSubmit} style={{ margin: '0 auto', maxWidth: '360px' }}>

          <TextInput
            data-autofocus
            required
            placeholder="Title of your note."
            label="Title"
            name="title"
            onChange={handleChange}
            value={note.title}
          />

          <TextInput
            mt="md"
            placeholder="Note Description"
            required={note.title.length < 10}
            label="Description"
            name="description"
            onChange={handleChange}
            value={note.description}
          />
          {duplicateTitleError && <Text fw={600} color="red" fz="xs" ta="center">Encountered a card with the same title please change the title of the card.</Text>}

          <Button mt="md" color="blue" type="submit" fullWidth disabled={disabledSubmit || duplicateTitleError}>
            Submit
          </Button>
          <Button mt="md" color="blue" variant="outline" fullWidth onClick={() => navigate('/')}>
            Cancel
          </Button>
        </form>
      </Paper>
    </Stack>
  );
}

export default EditNotePage;
