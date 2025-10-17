import React from "react";
import Header from "./Header";
import Hero from "./Hero";

function Home(){
    return(
        <div className="h-full bg-[url('https://images.unsplash.com/photo-1687042268541-5cc60ad9d3de?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170')] bg-cover bg-center bg-fixed"
        // style={{
        //     backgroundImage: `url(${import.meta.env.BASE_URL}home.jpg)`,
        // }}
        >
            <Header />
            <Hero />
        </div>
    );
}
export default Home;