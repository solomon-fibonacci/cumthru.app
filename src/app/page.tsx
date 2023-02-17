import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>Join the community&nbsp;</p>
        <code className={styles.code}>Cum thru!</code>
      </div>
    </main>
  )
}
