import React from 'react'

const PostDetails = ({ post }) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const post = await res.json()

  return {
    props: {
      post,
    },
  }
}

export default PostDetails
