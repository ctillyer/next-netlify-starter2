import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Thoughts.module.css'

// Add future entries at the beginning to show the newest thoughts first.
const entries = [
  { id: 'first-thought', text: 'this is where i put my thoughts' },
]

export default function Thoughts() {
  return (
    <div className={styles.page}>
      <Head><title>thoughts | tillyer | reyll.it</title></Head>
      <Header />
      <main className={styles.main}>
        <section className={styles.journal} aria-labelledby="thoughts-heading">
          <h1 id="thoughts-heading" className={styles.heading}>thoughts</h1>
          {entries.map((entry) => (
            <article key={entry.id} className={styles.entry}>
              <p>{entry.text}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  )
}
