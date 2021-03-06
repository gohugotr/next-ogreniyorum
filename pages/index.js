import Head from 'next/head'
import PostList from '../components/PostList'
import styles from '../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Öğreniyorum</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1 className={styles.title}>
        <a href='http://localhost:3000/hakkimizda'>Home!</a>
      </h1>
      {/* https://jsonplaceholder.typicode.com/posts?_limit=5 */}

      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
  const posts = await res.json();

  return {
    props: { posts },
  }
}
