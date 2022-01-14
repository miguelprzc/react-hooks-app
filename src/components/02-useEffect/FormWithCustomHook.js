import React, { useEffect } from 'react';
import { useForm } from '../../hooks/useForm';
import './effect.css';

export const FormWithCustomHook = () => {

  const [formValues, setFormValues] = useForm({
    name: '',
    email: '',
    password: '',
  });

  const {name, email, password} = formValues;

  useEffect(() => {
    console.log('email changed')
  }, [email]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className="form-group">
        <input
          type="text"
          name="name"
          className='form-control'
          placeholder='Your name'
          autoComplete='off'
          value={name}
          onChange={setFormValues}
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
          onChange={setFormValues}
        />
      </div>

      <div className="form-group">
        <input
          type="password"
          name="password"
          className='form-control'
          placeholder='******'
          value={password}
          onChange={setFormValues}
        />
      </div>

      <button type='submit' className='btn btn-primary'> Save</button>
    </form>
  )
}
