import React from "react";
import Header from "../header/Header";
import HomeS from "./home.module.css";


function Home() {
    return (
        <>
            <Header />
            <div className={HomeS.container}>
                <div className={HomeS.section1}>
                    <h1>Hai, Welcome To<br />My Website</h1>
                    <br />
                    <p>
                        <button className={HomeS.button}>View My Portofolio --</button>
                    </p>
                </div>
                <div className={HomeS.section2}>
                <p className={HomeS.img}/>
                </div>
            </div>
        </>

    )
}

export default Home;