import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { ADD_REVIEW } from '../graphql/Mutations';
import { useMutation } from '@apollo/client';
function ReviewForm({ game }) {
    
    const [addReview, { error: addGameError }] = useMutation(ADD_REVIEW);
    const handleReview = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target)
        let formEntries = Object.fromEntries(formData);
        formEntries.rating = parseInt(formEntries.rating);
        console.log('Review clicked for game:', formEntries);
        try {
            addReview({ variables: { reviewInput: { ...formEntries } } })
            event.target.reset();
            window.location.reload();
        }
        catch (err) {
            console.log("ADD ERROR :", err);
        }
    }
    return (
        <div className='w-full mt-2 px-2'>
            <form onSubmit={handleReview}>
                <input type="text"
                    name='game'
                    defaultValue={game._id}
                    className='w-full rounded-lg text-slate-950 font-medium mt-2 text-xs px-2 py-1 border border-gray-400' hidden />
                <input type="text"
                    name='author'
                    placeholder='Author ID'
                    className='w-full rounded-lg text-slate-950 font-medium mt-2 text-xs px-2 py-1 border border-gray-400' />
                <input type="number"
                    max={5}
                    name='rating'
                    placeholder='Rating'
                    className='w-full rounded-lg text-slate-950 font-medium mt-2 text-xs px-2 py-1 border border-gray-400' />
                <textarea
                    id="content"
                    name="content"
                    className='w-full  rounded-lg text-slate-950 font-medium mt-2 text-xs px-2 py-1 border border-gray-400 py-4'
                    placeholder='Add a review'
                ></textarea>

                <div className='flex justify-end w-full'>
                    <button type="submit" className='px-2 py-1'> <FontAwesomeIcon icon={faPaperPlane} className='text-yellow-600 hover:text-green-600' /></button>
                </div>
            </form>
        </div>
    )
}

export default ReviewForm