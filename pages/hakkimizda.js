import Head from 'next/head'
import React from 'react'
import styles from '../styles/Hakkimizda.module.css'

const Hakkimizda = () => {
  return (
    <>
      <Head>
        <title>Hakkımızda</title>
        <meta name='description' content='Hakkımızda' />
        <link rel='icon' href='/vercel.svg' />
      </Head>

      <div className={styles.container}>
        <h3 className='yesil'>Hakkımızda</h3>
        <p className={styles.grid}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt, iure! Nam deserunt ipsa
          dicta fugit minus iusto fugiat, ab illum! Repudiandae architecto hic inventore molestias
          cumque aperiam minus aspernatur! Vitae. Repellendus reprehenderit numquam adipisci vel
          eligendi.
        </p>
        <p>
          Aperiam recusandae accusamus ad debitis corrupti rem exercitationem molestias amet?
          Dignissimos molestias assumenda consequuntur libero optio nostrum amet eligendi
          perferendis? Quo quas in ratione perspiciatis nemo dolor laboriosam rerum beatae. Possimus
          facere dolor at laboriosam.
        </p>
      </div>
      <style jsx>
        {`
          p {
            font-size: 1.1rem;
          }
          h3 {
            text-align: center;
            font-size: 3rem;
            letter-spacing:0.5rem;
          }
          .yesil {
            color: green;
          }
        `}
      </style>
    </>
  )
}

export default Hakkimizda
