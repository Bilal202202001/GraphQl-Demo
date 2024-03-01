import React from 'react'

function GamesReviewsMap({reviews}) {
    return (
        <>
            {reviews.map((review, index) => (
                <div key={index} className='w-full flex flex-col justify-center items-start border border-gray-400 bg-white rounded-lg my-1 font-bold mt-2 text-xs text-gray-700 pb-3'>
                    <h3 className='w-full bg-slate-950 rounded-t-lg text-white px-2'>
                        {review.author.name}
                    </h3>
                    <h3 className='font-normal w-full px-2 py-1'>{review.content}</h3>
                    <h3 className='font-bold w-full px-2 text-end'>Rating : <span className='text-gray-700 text-medium'>{review.rating}</span></h3>
                </div>
            ))}
        </>
    )
}

export default GamesReviewsMap