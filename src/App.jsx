import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from './components/Layout';
import Home from './pages/home';
import EditNotePage from './pages/edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="note/edit/:id" element={<EditNotePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
