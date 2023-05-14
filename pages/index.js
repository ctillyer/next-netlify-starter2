import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>uncage!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="purify my soul" />
        <p className="description">
          - wash away my sins -
        </p>
      </main>

      <Footer />
    </div>
  )
}
