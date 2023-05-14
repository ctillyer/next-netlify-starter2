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
        <Header title="losing all control" />
        <p className="description">
          - that's how it all begins -
        </p>
      </main>

      <Footer />
    </div>
  )
}
