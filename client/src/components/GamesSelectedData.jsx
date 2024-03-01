import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import {LOAD_HALF } from '../graphql/Query';

function GamesSelectedData() {

    const [halfGames, setHalfGames] = useState([]);
    const { err, load, data: halfData } = useQuery(LOAD_HALF);
    useEffect(() => {

        if (halfData) {

            console.log("Half", halfData.games);
            setHalfGames(halfData.games);
        }
    }, [halfData]);

    return (
        <>
            <h2 className='text-2xl font-bold text-center mt-5 text-white w-3/5 bg-slate-950 rounded-t-lg'> GAMES SELECTED DATA</h2>
            <div className='w-3/5 rounded-b-lg border border-gray-400 bg-white'>
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>Title</th>
                            <th className='px-4 py-2'>Price</th>
                            <th className='px-4 py-2'>Version</th>
                        </tr>
                    </thead>
                    <tbody>
                        {halfGames.map(game => (
                            <tr key={game._id}>
                                <td className='border px-4 py-2 text-center'>{game.title}</td>
                                <td className='border px-4 py-2 text-center'>{game.price}</td>
                                <td className='border px-4 py-2 text-center'>{game.version}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default GamesSelectedData