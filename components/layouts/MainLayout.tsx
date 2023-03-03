import Head from 'next/head'
import { ReactNode } from 'react'
import { Navbar } from '../Navbar'

import styles from './MainLayout.module.css'

export const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Fernando</title>
        <meta name="description" content="Home Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>{children}</main>
    </div>
  )
}
