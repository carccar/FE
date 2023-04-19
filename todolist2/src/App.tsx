import React from 'react';
// import { Route } from 'react-router-dom';
// import { Todo } from 'pages';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/index";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Todo" element={<Todo />} />
      </Routes>
    </BrowserRouter>
    {/* <Todo /> */}
    </>
  );
}

export default App;



