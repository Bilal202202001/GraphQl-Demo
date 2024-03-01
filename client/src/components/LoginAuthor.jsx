import React, { useState } from 'react'
import { LOGIN_AUTHOR } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';

export default function LoginAuthor() {
    const [loginUser, { error }] = useMutation(LOGIN_AUTHOR);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formEntries = Object.fromEntries(formData);
        console.log(formEntries);
        loginUser({ variables: { loginInput: formEntries } });


    }
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            <form onSubmit={handleSubmit} className='w-1/5 flex flex-col justify-start items-between py-4 px-10  border border-gray-400 rounded-lg '>
                <h1 className='text-2xl font-bold text-center mb-2 text-white bg-slate-950 rounded-lg' >LOGIN AUTHOR</h1>
                <label className='mb-2 font-bold text-gray-700' htmlFor="email">Email</label>
                <input required type="email" name="email" id="email" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
                <label className='mb-2 font-bold text-gray-700' htmlFor="password">Password</label>
                <input required type="password" name="password" id="password" className='border border-gray-400 rounded-lg mb-3 py-1 px-2' />
                <div className='flex w-full justify-center items-center mt-4'>
                    <button className='rounded-lg px-2 py-1 bg-green-600 text-white font-bold'>Login</button>
                </div>
            </form>
        </div>
    )
}
