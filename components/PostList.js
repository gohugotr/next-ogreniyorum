import React from 'react'
import Post from './Post'

const PostList = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div className='grid' key={post.id}>
          <Post post={post} />
        </div>
      ))}
      <style jsx>
        {`
          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;
            max-width: 500px;
            margin-top: 3rem;
          }
        `}
      </style>
    </>
  )
}

export default PostList
