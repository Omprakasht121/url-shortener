import React from "react";
import  {useLogin} from "../hooks/login-hook.js";

export const Login = () => {

    const {doSubmit,register,handleSubmit,errors}= useLogin();
    return(
        <div className="h-screen max-h-7xl mx-auto flex justify-evenly items-center  bg-[url('../../../../../public/login.jpg')] bg-cover bg-center"  >
            <div className=" flex justify-center items-center bg-green-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 ">
                <form onSubmit={handleSubmit(doSubmit)}>
                    
                    <div className="flex font-sans font-medium text-lg gap-4 flex-col px-8 py-20 text-white relative bg-transparent-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-500 text-amber-100 drop-shadow-2xl rounded-2xl
                    shadow-[0_0_30px_rgba(99,102,241,0.45)] ring-1 ring-indigo-400/20 hover:shadow-[0_0_55px_rgba(99,102,241,0.7)] transition-shadow duration-300 text-2xl">
                        <h1 className="font-semibold text-4xl text-white text-center pb-4">Login</h1>
                        <div>
                            <label htmlFor="email">Email:</label>
                            <input className="py-2 px-2 w-full border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            {...register("email")} type="text" placeholder="Enter Email" id="email" />
                            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                        </div>
                        <div>
                            <label htmlFor="pass">Password:</label>
                            <input className="py-2 px-2 w-full border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                            {...register("password")} type="password" placeholder="Enter password" id="pass" />
                            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                        </div>
                        <div className="flex gap-4">
                            <button
                            className=" w-full font-sm border border-black rounded-xl py-2 bg-blue-500 hover:bg-white hover:text-black"
                            type="submit">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        
        </div>
    );
}