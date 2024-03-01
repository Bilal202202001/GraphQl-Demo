import React, { useState } from 'react'
import { ADD_GAME } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
export default function AddGames() {

    const [addGame, { error }] = useMutation(ADD_GAME);
    const [notification, setNotification] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const formEntries = Object.fromEntries(formData);
        const platform = formEntries.platform;
        const platformArray = platform.split(',').map(platform => platform.trim());
        console.log(platformArray);
        try {
            addGame({ variables: { gameInput: { ...formEntries, platform: platformArray } } })
            e.target.reset();
            setNotification(true);
            setTimeout(() => {
                setNotification(false);
            }, 10000);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (

        <form onSubmit={handleSubmit} className='flex flex-col justify-start items-between py-2 px-10 mt-5 border border-gray-400 rounded-lg w-2/6 bg-white'>
            {
                notification && <h1 className='bg-green-500 text-white rounded-lg font-bold text-center mb-2'>GAME ADDED SUCCESSFULLY</h1>
            }
            <h1 className='text-3xl font-bold w-full text-center mb-2'>ADD GAME</h1>
            <label className='mb-1 font-medium' htmlFor="title">Title</label>
            <input type="text" name="title" id="title" className='border border-gray-400 rounded-lg mb-3 py-1' required />
            <label className='mb-1 font-medium' htmlFor="price">Price</label>
            <input type="text" name="price" id="price" className='border border-gray-400 rounded-lg mb-3 py-1' required />
            <label className='mb-1 font-medium' htmlFor="developer">Developer</label>
            <input type="text" name="developer" id="developer" className='border border-gray-400 rounded-lg mb-3 py-1' required />
            <label className='mb-1 font-medium' htmlFor="version">Version</label>
            <input type="text" name="version" id="version" className='border border-gray-400 rounded-lg mb-3 py-1' required />
            <label className='mb-1 font-medium' htmlFor="platform">Platform</label>
            <input type="text" name="platform" id="platform" className='border border-gray-400 rounded-lg mb-3 py-1' required />
            <div className='flex w-full justify-center items-center mt-4'>
                <button className='rounded-lg px-2 py-1 bg-green-600 text-white font-bold'>ADD GAME</button>
            </div>
        </form>

    )
}
