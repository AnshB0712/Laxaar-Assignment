/* eslint-disable react/destructuring-assignment */
import { Text } from '@mantine/core';
import React from 'react';
import NotesContainer from './NotesContainer';

function DisplayData({
  data, Component, componentProps,
}) {
  if (!data) return <Text fz="md" ta="center" p="xl">No Data Show</Text>;

  if (!data.length) return <Text fz="md" ta="center" p="xl">No notes to Show, add some</Text>;

  return (
    <NotesContainer>
      {
    // eslint-disable-next-line react/jsx-props-no-spreading
    data
      .map((props, i) => (
        /* eslint-disable react/jsx-props-no-spreading */
        // eslint-disable-next-line no-underscore-dangle
        <Component key={props.id || i} note={{ ...props }} {...componentProps} />
      ))
      }
    </NotesContainer>
  );
}

export default DisplayData;
