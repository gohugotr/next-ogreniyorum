import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

// // `getServerSideProps` ile sayfalar dinamik olarak oluşturulur.
// export const getServerSideProps = async (context) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//   const post = await res.json()

//   return {
//     props: {
//       post,
//     },
//   }
// }


// Tüm postları apiden çektik, statik html sayfaları üretilecek.
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')

    const posts = await res.json()

    const paths = posts.map((post) => {
      return {
        params: {
          id: post.id.toString(),
        },
      }
    })

    return {
        // paths : [
        //     { params: { ... } }
        // ],
        paths,
        fallback: false,
    }
}

// post detail kodları
export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)

    const post = await res.json();

    return {
        props:{
            post,
        }
    }
}

export default PostDetails
