import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Background Video */}
            <video
                className="absolute inset-0 w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/bgvideo.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Navbar */}
            <div className="absolute top-0 left-0 right-0 z-20 flex justify-end p-8 gap-4">
                
            </div>

            {/* Hero Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">

                <h1 className="text-7xl md:text-6xl font-extrabold italic">
                    Zomato
                </h1>

                <h2 className="text-2xl md:text-5xl font-bold mt-6 text-center max-w-4xl mb-6">
                    India's #1 
                    <br /> 
                    food delivery app
                </h2>

                <p className='text-3xl text-center'>
                    Experience fast & easy online ordering <br /> on the Zomato app</p>

                <div className="flex gap-2 mt-8">
                    <button
                        onClick={() => navigate('/auth/login')}
                        className="bg-black text-white text-xl md:text-2xl md:px-8 md:py-5 px-4 py-4 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                    >
                        Log in
                    </button>

                    <button
                        onClick={() => navigate('/auth/register')}
                        className="bg-black text-white text-xl md:text-2xl md:px-8 md:py-5 px-4 py-4 rounded-lg font-medium hover:bg-gray-800 transition duration-300"
                    >
                        Sign Up
                    </button>
                </div>

            </div>

        </div>
    )
}

export default Home