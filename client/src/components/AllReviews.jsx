import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { LOAD_GAMES } from '../graphql/Query';

const AllReviews = () => {
    const [reviews, setReviews] = useState([]);

    const { error, loading, data: fulldata } = useQuery(LOAD_GAMES);


    useEffect(() => {
        if (fulldata) {
            console.log(fulldata.reviews);
            setReviews(fulldata.reviews);
        }


    }, [fulldata]);

    return (
        <>
            <h2 className='text-2xl font-bold text-center mt-5 text-white w-5/6 bg-slate-950 rounded-t-lg'> GAMES FULL DATA</h2>
            <div className='w-5/6 rounded-b-lg border border-gray-400 bg-white'>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>Title</th>
                            <th className='px-4 py-2'>Platform</th>
                            <th className='px-4 py-2'>Price</th>
                            <th className='px-4 py-2'>Developer</th>
                            <th className='px-4 py-2'>Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reviews.map(game => (
                            <tr key={game._id}>
                                <td className='border px-4 py-2 text-center'>{game.title}</td>
                                <td className='border px-4 py-2 text-center'>
                                    {game.platform.map((platform, index) => (
                                        <span key={index} className='ml-1 border border-gray-400 px-2 py-1 rounded-lg bg-green-600 text-white font-bold'>{platform}</span>
                                    ))}
                                </td>
                                <td className='border px-4 py-2 text-center'>{game.price}</td>
                                <td className='border px-4 py-2 text-center'>{game.developer}</td>
                                <td className='border px-4 py-2 text-center'>{game.version}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default AllReviews;
