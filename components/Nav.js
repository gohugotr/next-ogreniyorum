import React from 'react'
import Link from 'next/link'

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href='/'>
            <a className=''>Home</a>
          </Link>
        </li>
        <li>
          <Link href='hakkimizda'>
            <a className=''>Hakkımızda</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        nav {
          display: flex;
          justify-content: flex-start;
          align-center: center;
          height: 50px;
          background: #181818;
          color: #fff;
        }
        nav ul {
          display: flex;
          justify-content: center;
          align-center: center;
          list-style: none;
          pointer: cursor;
        }
        nav ul li a {
          margin: 5px 15px;
        }
        nav ul li a:hover {
          color: #08f26e;
        }
        @media (max-width: 600px) {
          nav {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>
    </nav>
  )
}

export default Nav
