import React from "react";
import { useRegister } from "../hooks/register-hook.js";
import { Link } from "react-router-dom";
export const Register = () => {
    const {doSubmit,register,handleSubmit,errors,reset} = useRegister();
    return(
        <div className="h-screen max-h-7xl mx-auto flex justify-center items-center flex-col bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-cover bg-center">
            <div className="flex justify-center items-center bg-green-10 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-0 shadow-sm shadow-blue-500/100 ">
            <form onSubmit={handleSubmit(doSubmit)}>
                <h1 className="text-center text-2xl font-bold mt-4">REGISTRATION FORM</h1>
                <div className="flex flex-col gap-6 p-8 text-lg">
                    <div>
                        <label  className="font-medium"
                        htmlFor="name">Name: </label>
                        <input className="w-full px-2 py-2 border-2 border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register("name")} type="text" placeholder="Enter Name" id="name"/>
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
                    </div>
                    <div>
                        <label className="font-medium"
                        htmlFor="email">Email: </label>
                        <input className="w-full px-2 py-2 border-2 border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register("email")} type="text" placeholder="Enter Email" id="email"/>
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>
                    <div>
                        <label className="font-medium"
                        htmlFor="pass">Password: </label>
                        <input className="w-full px-2 py-2 border-2 border-black rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
                        {...register("password")} type="password" placeholder="Password" id="pass"/>
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}
                    </div>
                    <div className="flex gap-4 font-medium">
                        <button className="border border-black rounded-4xl py-2 px-8 bg-cyan-500 hover:bg-white hover:text-black"
                        type="submit">Submit</button>
                        <button className="border border-black rounded-4xl py-2 px-8 hover:bg-white hover:text-black"
                        onClick={() => reset()} type="button"
                        >Reset</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="flex gap-8 text-lg  text-white mt-4">
            <p>Already an user</p>
            <p >
            <Link to="/login" className="font-semibold underline decoration-2 hover:text-red-500" >Login</Link></p>
        </div>
        </div>
    );
}