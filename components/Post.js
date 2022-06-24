import Link from 'next/link'
import React from 'react'

const Post = ({post}) => {
  return (
    <>
      <Link href={`/posts/${post.id.toString()}`}>
        <a className='card'>
          <h2>{post.title}</h2>
        </a>
      </Link>
      <style jsx>
        {`
          .card {
            margin: 0.2rem;
            padding: 0.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
            max-width: 300px;
          }

          .card:hover,
          .card:focus,
          .card:active {
            color: #0070f3;
            border-color: #0070f3;
          }

          .card h2 {
            margin: 0 0 1rem 0;
            font-size: 1.5rem;
          }

          .card p {
            margin: 0;
            font-size: 1.25rem;
            line-height: 1.5;
          }
        `}
      </style>
    </>
  )
}

export default Post