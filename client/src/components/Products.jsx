import React, { useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import { LOAD_PRODUCTS } from '../graphql/Query';
import GamesReviewsMap from './GamesReviewsMap';

import ReviewForm from './ReviewForm';
import NavBar from './NavBar';
export default function Products() {
    const [games, setGames] = useState([]);
    const [openReviewGameId, setOpenReviewGameId] = useState(null); 
    const { error, loading, data: fulldata } = useQuery(LOAD_PRODUCTS);

    useEffect(() => {
        if (fulldata) {
            console.log("Full ", fulldata.games);
            setGames(fulldata.games);
        }
    }, [fulldata]);

    const handleToggleReviews = (gameId) => {
        setOpenReviewGameId(openReviewGameId === gameId ? null : gameId);
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <NavBar/>
            <h2 className='text-3xl font-bold text-center mt-5 text-slate-950 w-full'>LISTED <span className='text-yellow-500'>GAMES</span></h2>
            <div className='w-full grid grid-cols-4 gap-2 bg-white p-5'>
            {games.map(game => (
                <div key={game._id} className='w-5/6 flex flex-col justify-start rounded-lg items-start '>
                    <img className='w-full rounded-t-lg' src='/game.jpg' alt={game.title} />
                    <h3 className='text-center w-full font-bold bg-slate-950 text-yellow-500 px-2'>{game.title}</h3>
                    <h3 className='font-bold mt-2 text-xs px-2'>
                        Platform:
                        <div className="flex flex-wrap mt-1">
                            {game.platform.map((platform, index) => (
                                <span key={index} className='ml-1 font-normal p-1 rounded-lg bg-green-600 text-white whitespace-nowrap'>{platform}</span>
                            ))}
                        </div>
                    </h3>

                    <h3 className='font-bold mt-2 text-xs px-2'>Developer : <span className='text-gray-700'>{game.developer}</span></h3>
                    <div className='flex justify-between w-full'>
                        <h3 className='font-bold mt-2 text-xs px-2'>Version : <span className='text-gray-700'>{game.version}</span></h3>
                        <span className='text-3xl font-bold text-gray-700 px-2'>{game.price}</span>
                    </div>
                    <ReviewForm game={game} />
                    <button onClick={() => handleToggleReviews(game._id)} className='w-full bg-slate-950 rounded-lg text-white font-bold mt-2 text-xs px-2 py-1'>Reviews</button>
                    {
                        openReviewGameId === game._id && 
                        <div className='w-full flex flex-col justify-center items-start bg-white p-2'>
                            <GamesReviewsMap reviews={game.reviews} />
                        </div>
                    }

                </div>
            ))}
        </div>
        </div>
    )
}
