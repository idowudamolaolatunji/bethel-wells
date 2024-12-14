"use client"
import React from 'react'
import { ReactTyped } from 'react-typed'

function HeroTyped() {
  return (
    <ReactTyped
      strings={[
        "Artisans",
        "Skilled Workers",
        "Something else",
      ]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  )
}

export default HeroTyped