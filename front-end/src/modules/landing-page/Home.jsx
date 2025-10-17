import React from "react";
import Header from "./Header";
import Hero from "./Hero";

function Home(){
    return(
        <div className="h-full bg-cover bg-center bg-fixed" style={{
            backgroundImage: "url('/home.jpg')"
        }}>
            <Header />
            <Hero />
        </div>
    );
}
export default Home;