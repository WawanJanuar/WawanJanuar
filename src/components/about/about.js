import React from "react";
import Header from "../header/Header";
import AboutS from "./about.module.css";

const About = () => {
    return (
        <>
            <Header className={AboutS.container}/>
            <div className={AboutS.container}>
                <h1>About Me</h1>
                <hr />
                <div className={AboutS.sectionUtama}>
                    <div className={AboutS.section1}>
                        <p className={AboutS.profil} />
                    </div>
                    <div className={AboutS.section2}>
                        <ul className={AboutS.list}>
                            <li>Nama : Wawan Januar</li>
                            <li>Umur : 18 Tahun</li>
                            <li>Kuliah : Mikroskil</li>
                            <li>Jurusan: Teknologi Informasi</li>
                            <li>Jenis Kelamin : Pria</li>
                        </ul>
                        <p className={AboutS.qoute}>"Take Risk, Take Oppurtunity. Know Take Action</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;