import React, { useEffect, useState } from 'react';
import './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formState;

  useEffect(() => {
    //console.log('hey')
  }, []);

  useEffect(() => {
    //console.log('from changed')
  }, [formState]);

  useEffect(() => {
    //console.log('email changed')
  }, [formState.email]);

  const handleInputChage = ({target}) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className='form-control'
          placeholder='Your name'
          autoComplete='off'
          value={name}
          onChange={handleInputChage}
        />
      </div>

      <div className="form-group">
        <input
          type="text"
          name="email"
          className='form-control'
          placeholder='email@mail.com'
          autoComplete='off'
          value={email}
          onChange={handleInputChage}
        />
      </div>

      {name==123 && <Message />}
    </>
  )
}
