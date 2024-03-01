import React, { useState } from 'react'
import AllGames from './AllGames'
import GamesSelectedData from './GamesSelectedData'
import AddGames from './AddGames';
import NavBar from './NavBar';

function Home() {
    const [toogle1, setToogle1] = useState(false);
    const [toogle2, setToogle2] = useState(false);
    const toggleHandler1 = () => {
        setToogle1(!toogle1)
        if (toogle2) {
            setToogle2(!toogle2)
        }
    }
    const toggleHandler2 = () => {
        setToogle2(!toogle2)
        if (toogle1) {
            setToogle1(!toogle1)
        }
    }
    return (
        <div className='w-full flex flex-col justify-center items-center'>
            <div className="absolute inset-0 z-[-1]">
                <div className={` w-full h-full bg-cover bg-repeat opacity-20 bg-[url('./bg.jpg')]`}>

                </div>
            </div>
            <NavBar/>
            <div className='w-full flex justify-end pt-4 px-2'>
                    <button onClick={toggleHandler1} className='text-xs hover:bg-gray-300 hover:text-black rounded-lg bg-gray-400 text-white font-bold px-2 py-1 ml-2'>GAMES COMPLETE DATA</button>
                    <button onClick={toggleHandler2} className='text-xs hover:bg-gray-300 hover:text-black rounded-lg bg-gray-400 text-white font-bold px-2 py-1 ml-2'>GAMES SELECTED DATA</button>
                </div>
            {toogle1 || toogle2 ? null : <AddGames />}
            {
                toogle1 && <AllGames />
            }
            {
                toogle2 && <GamesSelectedData />
            }
        </div>
    )
}

export default Home