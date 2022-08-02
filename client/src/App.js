import React, { Fragment } from 'react';
import './App.css';

import EditTodo from './components/EditTodo';
import InputTodo from './components/InputTodo';
import ListTodos from './components/ListTodos';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <InputTodo />
      </div>
    </Fragment>
  );
}

export default App;
