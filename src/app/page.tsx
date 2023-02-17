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
      <div className={inter.className} style={{ lineHeight: '2rem' }}>
        <div>Join us in painting the future of what dating would look like.</div>
        <p>
          Click&nbsp;
          <a style={{ color: 'blue' }} href="#">
            this link
          </a>
          &nbsp;to help us build an app that works for us.
        </p>
      </div>
      <footer></footer>
    </main>
  )
}
