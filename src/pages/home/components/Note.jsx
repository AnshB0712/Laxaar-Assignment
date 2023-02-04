import { ActionIcon, Card, Text } from '@mantine/core';
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Pencil, Trash } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import reducerActions from '../../../constants/reducerActions';
import useNotesContext from '../../../hooks/useNotesContext';

function Note({ note }) {
  const { dispatch } = useNotesContext();
  const handleDelete = () => dispatch({
    type: reducerActions.DELETE_NOTE,
    payload: { id: note.id },
  });
  return (
    <Card
      withBorder
      p="md"
      radius="md"
      sx={() => ({ maxWidth: '300px' })}
    >
      <Card.Section p={5}>
        <Text fw={500} fz="lg" ta="center" fs="italic">{note?.title}</Text>
      </Card.Section>
      <Card.Section py={5} px={10}>
        <Text fw={500} fz="sm" color="dimmed" ta="center">{note?.description}</Text>
      </Card.Section>
      <Card.Section p={5} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <ActionIcon component={Link} to={`note/edit/${note.id}`} p={7} sx={(theme) => ({ border: `1px solid ${theme.colors.gray[5]}`, borderRadius: '8px' })}>
          <Pencil size={18} />
        </ActionIcon>
        <ActionIcon onClick={handleDelete} p={7} sx={(theme) => ({ border: `1px solid ${theme.colors.gray[5]}`, borderRadius: '8px' })}>
          <Trash size={18} />
        </ActionIcon>
      </Card.Section>
    </Card>
  );
}

export default Note;
