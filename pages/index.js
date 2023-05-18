import Head from 'next/head'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react';

const lyric1 = ["purify my soul", "losing all control"];
const lyric2 = ["- wash away my sins -", "- that's how it all begins -"];

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
