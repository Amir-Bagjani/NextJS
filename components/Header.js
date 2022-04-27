import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const [theme,setTheme] = useState("light");
  const { data: session, status } = useSession()
  const loading = status === "loading"
  // console.log(status);

  useEffect(() => {
    if(window.localhost?.getItem("theme")){
      setTheme(window.localhost?.getItem("theme"))
    }else{
      setTheme("light")
    }
  }, [])

  const themeHandle = () => {
    if(theme === "light"){
      document.documentElement.setAttribute('data-theme', 'dark');
      setTheme('dark');
    }else{
      document.documentElement.removeAttribute('data-theme');
      setTheme('light');
    }
  }
  const handleSignIn = (e) => {
    e.preventDefault();
    signIn('github')
  }
  const handleSignOut = (e) => {
    e.preventDefault();
    signOut()
  }


  return (
    <>
        <header >
          <h1>
            <a href="#">NEXT AUTH</a>
          </h1>
          <button onClick={themeHandle}>Theme</button>
          <nav className={`navbar ${loading ? 'loading' : 'loaded'}`}>
            <Link href="/"><a>Home</a></Link>
            <Link href="/blog"><a>Blog</a></Link>
            {session && <Link href="/dashboard"><a>Dashboard</a></Link>}
            <Link href="/blog2"><a>Blog2</a></Link>
            {!session && !loading && <Link href="/api/auth/signin"><a onClick={e =>handleSignIn(e)}>Sign in</a></Link>}
            {session && <Link href="/api/auth/signout"><a onClick={e => handleSignOut(e)}>Log out</a></Link>}
          </nav>
        </header>
    </>
  )
}

export default Header