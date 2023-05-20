import React from "react";
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { useState, useEffect } from 'react';

const lyric1 = ["switchblades. cocain.", "black fur. black coat."];
const lyric2 = ["- gbc make a hoe shake -", "- gbc in the back hoe -"];


export default function Home() {

  
  const [index, setIndex] = useState(0);


  useEffect(() => {
    const tick = () => setIndex(i => i + 1);
    const id = setInterval(tick, 4000);
    return () => clearInterval(id);
  }, []);

  const [fadeProp, setFadeProp] = useState({
    fade:'fade-in'
  })

  useEffect(() => {
    const timeout = setInterval(() => {
       if (fadeProp.fade === 'fade-in') {
          setFadeProp({
               fade: 'fade-out'
          })
       } else {
            setFadeProp({
               fade: 'fade-in'
            })
       }
    }, 2000);
    
return () => clearInterval(timeout)
}, [fadeProp])

  return (

    
    <div className="container">
      
      <Header />

      <Head>
        <title>uncage!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <main>
        <h1 className={fadeProp.fade}>{lyric1[index % lyric1.length]}</h1>

        <p className={fadeProp.fade}>
        {lyric2[index % lyric2.length]}
        </p>
      </main>

      <Footer />
    </div>
  )
}
