import React from 'react'
import CreateModal from '../../components/home/CreateModal'
import JoinModal from '../../components/home/JoinModal'

const Home = () => {
    return (
        <>
            <div className='w-full h-screen flex items-start justify-center pt-30 bg-base-300'>
                <div className="login-container">
                    <div className='text-center mb-9'>
                        <h1 className='text-6xl font-bold'>SCRIBBLE</h1>
                    </div>
                    <div className='w-full px-4 sm:px-6 lg:px-8'>
                        <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 gap-6 sm:gap-8">
                            <div className='flex justify-center'>
                                <div className="card card-dash bg-base-100 w-full max-w-md sm:max-w-lg md:w-96 bg-base-200 shadow-sm">
                                    <div className="card-body">
                                        <h2 className="card-title">Create Game</h2>
                                        <p>Create a new game session. Review the available settings and options. Share the <span className='italic'>RoomCode</span> to invite your friends to join.</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-neutral" onClick={()=>document.getElementById('createModal').showModal()}>Create</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-center'>
                                <div className="card card-dash bg-base-100 w-full max-w-md sm:max-w-lg md:w-96 bg-base-200 shadow-sm">
                                    <div className="card-body">
                                        <h2 className="card-title">Join Game</h2>
                                        <p>Join an existing game session by entering the <span className='italic'>RoomCode</span> provided by your friend.</p>
                                        <div className="justify-end card-actions">
                                            <button className="btn btn-neutral" onClick={()=>document.getElementById('joinModal').showModal()}>Join</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='text-center mt-9'>
                        <h1 className='text-lg italic'>ENJOY SCRIBBLING!</h1>
                    </div>
                </div>
            </div>
            <CreateModal />
            <JoinModal />
        </>
    )
}

export default Home