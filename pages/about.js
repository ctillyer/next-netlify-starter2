import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function About() {
  return (
    <div className="container">
      <Head><title>about | tillyer | reyll.it</title></Head>
      <Header />
      <main>
        <h1>about</h1>
        <p>we all need a website ig</p>
      </main>
      <Footer />
    </div>
  )
}
