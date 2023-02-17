import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          <a href="https://forms.gle/vHX7mYBQjuo5vprU8">Join the community&nbsp;</a>
        </p>
      </div>
      <div
        className={inter.className}
        style={{ lineHeight: '2rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}
      >
        <div
          style={{
            lineHeight: '2rem',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
          }}
        >
          <code className={styles.code}>Cum thru!</code>
          <Image src="/heart.png" alt="heart" height={300} width={300} />
        </div>
        <div style={{ width: '300px' }}>
          <div>Join us in painting the future of what dating would look like.</div>
          <p>
            Click&nbsp;
            <a style={{ color: 'blue' }} href="https://forms.gle/vHX7mYBQjuo5vprU8">
              this link
            </a>
            &nbsp;to help us build an app that works for us.
          </p>
        </div>
      </div>
      <footer></footer>
    </main>
  )
}
