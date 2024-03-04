import React, { useState } from 'react'
import { REGISTER_AUTHOR } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';

export default function RegisterAuthorsForm() {

  const [notification, setNotification] = useState(false);
  const [notificationString, setNotificationString] = useState('');
  const [addAuthor, { error }] = useMutation(REGISTER_AUTHOR);
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formEntries = Object.fromEntries(formData);
    console.log(formEntries);
    const res = addAuthor({ variables: { authorInput: formEntries } });
    res.then((result) => {
      e.target.reset();
      setNotification(true);
      setNotificationString('AUTHOR ADDED SUCCESSFULLY');
      setTimeout(() => {
        setNotification(false);
      }, 10000);
      console.log(result);
      Navigate('/');
    }).catch((error) => {
      setNotification(true);
      setNotificationString('AUTHOR NOT ADDED');
      setTimeout(() => {
        setNotification(false);
      }, 10000);
      console.log(error);
      
    });
  }
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen'>
      {
        notification && <h1 className='bg-green-500 text-white rounded-lg font-bold text-center mb-2 px-2'>
          {notificationString}
        </h1>
      }
      <form onSubmit={handleSubmit} className='w-2/5 flex flex-col justify-start items-between py-4 px-10  border border-gray-400 rounded-lg '>
        <h1 className='text-2xl font-bold text-center mb-2 text-white bg-slate-950 rounded-lg' >REGISTER AUTHOR</h1>
        <label className='mb-2 font-bold text-gray-700' htmlFor="name">User Name</label>
        <input required type="text" name="name" id="name" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
        <label className='mb-2 font-bold text-gray-700' htmlFor="verified">Verified</label>
        <input required type="boolean" name="verified" id="verified" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
        <label className='mb-2 font-bold text-gray-700' htmlFor="email">Email</label>
        <input required type="email" name="email" id="email" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
        <label className='mb-2 font-bold text-gray-700' htmlFor="password">Password</label>
        <input required type="password" name="password" id="password" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
        <div className='flex w-full justify-center items-center mt-4'>
          <button className='rounded-lg px-2 py-1 bg-green-600 text-white font-bold'>Register</button>
        </div>
      </form>
    </div>
  )
}
