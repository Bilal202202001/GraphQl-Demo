import React from 'react'

function NavBar() {
    return (
        <div className='flex justify-center items-center w-full py-3 bg-slate-950'>
            <h2 className='text-2xl font-bold text-yellow-600 w-2/6 px-3'>
                GRAPHQL <span className='text-sm text-gray-400'>_DEMO</span>
            </h2>
            <div className='flex justify-center w-3/6 px-3 text-sm font-medium font-bold text-gray-400'>
            <a href='/' className='font-bold border-b px-3  border-b-yellow-600 mx-1 py-1 hover:text-yellow-600 hover:border-b-gray-400'>HOME</a>
            <a href='/games' className='font-bold border-b px-3  border-b-yellow-600 mx-1 py-1 hover:text-yellow-600 hover:border-b-gray-400'>PRODUCTS</a>
            </div>
            <div className='flex justify-end w-3/6 px-3 text-sm font-bold text-black'>
            <a href='/register' className='mr-2 rounded-lg px-2 py-1 bg-yellow-500 text-xs'>REGISTER</a>
            <a href='/login' className='mr-2 rounded-lg px-2 py-1 bg-yellow-500 text-xs'>LOGIN</a>
            </div>
        </div>
    )
}

export default NavBar