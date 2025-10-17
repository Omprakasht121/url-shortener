import React from "react";
const Header = () =>{
    return(
        <div className="font-sans p-8">
            <nav className="h-16 flex justify-between items-center text-lg text-white font-semibold  max-w-7xl mx-auto border border-black p-5 rounded-xl bg-green-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 shadow-lg shadow-green-500/50 ">
                <div className="hover:text-blue-500">
                    <h1 className="text-xl">Hustler</h1>
                    <p className=" text-sm font-normal">Coding</p>
                </div>
                <div>
                    <ul className="flex gap-8">
                        <li className="hover:text-red-500"><a href="">Home</a></li>
                        <li className="hover:text-red-500"><a href="">About</a></li>
                        <li className="hover:text-red-500"><a href="">ContactUs</a></li>
                        
                    </ul>
                </div>
                <div className="flex gap-5 ">
                    <button className="border border-white rounded-sm px-2 py-1 hover:bg-blue-500">Sign Up</button>

                </div>
            </nav>

        </div>
    );
}
export default Header;