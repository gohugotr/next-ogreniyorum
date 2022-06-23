import React from 'react'

const Post = ({post}) => {
  return (
    <>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </>
  )
}

export default Post