import React, { Fragment, useState } from 'react';

const InputTodo = () => {
  const [description, setDescription] = useState('');
  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {description};
      const response = await fetch('http://localhost:5000/todos', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(body)
      });
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <Fragment>
      <h1 className='text-center mt-5'>Pern Todo List</h1>
      <h2 className='mt-5'>Add todo</h2>
      <form className='d-fle' onSubmit={onSubmitForm}>
        <input 
          type='text' 
          className='form-control'
          onChange={e => setDescription(e.target.value)}
        />
        <button className='btn btn-success'>Add</button>
      </form>
    </Fragment>
  )
}

export default InputTodo;