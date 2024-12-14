"use client";
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import img from "@/assets/logo.png"

function Header() {
  return (
    <header className='header'>
        <Link href="/" className="logo">
            <Image src={img} alt='' />
        </Link>

        <nav className='nav--list'>
            <Link href="/">Home</Link>
            <Link href="/about-us">About</Link>
            <Link href="/our-services">Services</Link>
            <Link href="candidates-center">Candidate Center</Link>
            <Link href="contact-us">Contact</Link>
        </nav>
    </header>
  )
}

export default Header