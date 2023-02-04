import React from 'react';

function NotesContainer({ children }) {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(320px,1fr))',
      gap: '8px',
      padding: '10px 20px',
      overflow: 'hidden',
    }}
    >
      {children}
    </section>
  );
}

export default NotesContainer;
