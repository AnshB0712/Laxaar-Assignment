import {
  Button, List, Modal, Paper, Stack, Text, TextInput,
} from '@mantine/core';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v1 as uuid } from 'uuid';
import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import useNotesContext from '../../../hooks/useNotesContext';
import matchStringFromObjArrays from '../../../utils/matchStringFromObjArrays';
import reducerActions from '../../../constants/reducerActions';

function AddANoteModal() {
  const [note, setNote] = useState({
    title: '',
    description: '',
  });
  const [duplicateTitleError, setDuplicateTitleError] = useState(false);
  const { openModal, setOpenModal } = useOutletContext();
  const { dispatch, state } = useNotesContext();

  useEffect(() => {
    setDuplicateTitleError(false);
  }, [note.title]);

  const handleChange = (e) => setNote((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (matchStringFromObjArrays(state, 'title', note.title)) {
      setDuplicateTitleError(true);
      return;
    }

    dispatch({
      type: reducerActions.ADD_NOTE,
      payload: {
        id: uuid(),
        ...note,
      },
    });
    setOpenModal(false);
    setNote({ title: '', description: '' });
  };

  const disabledSubmit = !note.title || (note.title?.length < 10 && !note.description);

  return (
    <Modal
      opened={openModal}
      centered
      withCloseButton={false}
      closeOnClickOutside
      onClose={() => setOpenModal(false)}
    >
      <Text size="lg" ta="center" fw={500}>ADD NOTE</Text>
      <Paper
        p="lg"
        style={{
          position: 'relative',
        }}
      >
        <form onSubmit={handleSubmit}>

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
            required={note.title.length < 10}
            placeholder="Note Description"
            label="Description"
            name="description"
            onChange={handleChange}
            value={note.description}
          />
          {duplicateTitleError && <Text fw={600} color="red" fz="xs" ta="center">Encountered a card with the same title please change the title of the card.</Text>}
          {!duplicateTitleError && (
            <Stack justify="center" spacing={0} mt={10}>
              <Text fz="sm" ta="center" fw={500} fs="italic">Points To Remeber</Text>
              <List
                spacing="xs"
                size="sm"
                my={5}
              >
                <List.Item>Title is  necessary.</List.Item>
                <List.Item>Title should be unique for notes.</List.Item>
                <List.Item>
                  { /* eslint-disable-next-line max-len */}
                  If the title length is less than 10 characters then description is required otherwise not.
                </List.Item>
              </List>
            </Stack>
          )}
          <Button mt="md" color="blue" type="submit" fullWidth disabled={disabledSubmit || duplicateTitleError}>
            Submit
          </Button>

        </form>
      </Paper>
    </Modal>
  );
}

export default AddANoteModal;
