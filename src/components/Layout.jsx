import {
  Button, Group, Header, Title,
} from '@mantine/core';
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Plus } from 'react-bootstrap-icons';
import { Link, Outlet } from 'react-router-dom';

function Layout() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <main>
      <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }} p="md">
        <Title order={2} fw={400} style={{ fontSize: 'clamp(1rem,2.5vw,2rem)' }}>
          Laxaar Notes
        </Title>
        <Group position="apart" align="center">
          <Button variant="subtle" component={Link} style={{ textDecoration: 'underline' }} to="/">Home</Button>
          <Button leftIcon={<Plus size={28} />} size="sm" onClick={() => setOpenModal(true)}>
            Add a Note
          </Button>
        </Group>
      </Header>
      <Outlet context={{ openModal, setOpenModal }} />
    </main>
  );
}

export default Layout;
