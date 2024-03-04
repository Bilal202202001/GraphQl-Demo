import React, { useState } from 'react'
import { LOGIN_AUTHOR } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
import {useNavigate} from 'react-router-dom'
export default function LoginAuthor() {
    const [loginUser, { error }] = useMutation(LOGIN_AUTHOR);
    const[userID, setUserID] = useState(null);
    const [notification, setNotification] = useState(false);
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formEntries = Object.fromEntries(formData);
        
        try {
            await loginUser({ variables: { loginInput: formEntries } });
            navigate('/');
            
        } catch (error) {
            console.log("Error : ",error);
            setNotification(true);


        }

    }
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen'>
            {
                notification && <h1 className='text-white font-lighter text-lg my-3 bg-red-600 px-10 rounded-lg text-center'>Login Failed</h1>
            }
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

            <div>
            </div>
        </div>
    )
}
