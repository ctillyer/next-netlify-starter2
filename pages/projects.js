import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Projects() {
  return (
    <div className="container">
      <Head><title>projects | tillyer | reyll.it</title></Head>
      <Header />
      <main>
        <h1>projects</h1>
        <p>no projects to share yet.</p>
      </main>
      <Footer />
    </div>
  )
}
