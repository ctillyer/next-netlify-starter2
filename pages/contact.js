import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="container">
      <Head><title>contact | tillyer | reyll.it</title></Head>
      <Header />
      <main>
        <h1>contact</h1>
        <p>tillyer on Discord.</p>
        <p><a href="https://twitter.com/tillyer">@tillyer on Twitter</a></p>
      </main>
      <Footer />
    </div>
  )
}
