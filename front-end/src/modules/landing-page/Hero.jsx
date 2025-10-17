import React from "react";
import { useNavigate } from "react-router-dom";
const Hero = () =>{
    const navigate = useNavigate();
    const handleGetStarted = () =>{
        navigate("/register");
    }
    return(
        <div className="h-[calc(100vh-8rem)] max-w-7xl mx-auto flex justify-center font-sans">
            <div className="h-120 w-full  mt-20 flex justify-center items-center flex-col text-white bg-green-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-none bg-opacity-0 shadow-sm shadow-green-500/50">
                <div className="text-white">
                    <h1 className=" text-6xl font-bold text-shadow-2xs text-shadow-sky-300">WELCOME TO URL-SHORTENER</h1>
                </div>
                <div className="m-8 text-yellow-300">
                    <p className="text-2xl">short your url in one click</p>
                </div>
                <div className="flex justify-center gap-8 text-xl ">
                    <button onClick={handleGetStarted} className="bg-blue-500 border border-white rounded-4xl py-2 px-4 hover:bg-white hover:text-black">Get Started</button>
                    <button className="border border-white rounded-4xl py-2 px-8 hover:bg-white hover:text-black">more</button>
                </div>
            </div>
        </div>
    )
}
export default Hero;