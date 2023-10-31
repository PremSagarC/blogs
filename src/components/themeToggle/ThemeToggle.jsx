"use client"

import React, { useContext } from 'react'
import styles from './ThemeToggle.module.css'
import Image from 'next/image'
import { ThemeContext } from '@/context/ThemeContext'

const ThemeToggle = () => {

  const { theme, toggle } = useContext(ThemeContext)

  console.log(theme)
  return (
    <div className={styles.container} onClick={toggle}
      style={
        theme === "dark" ?
          { background: "#fff" }
          :
          { background: "#000" }
      }

    >
      <Image
        src="/moon.png"
        alt=""
        width={14}
        height={14}
      />
      <div className={styles.ball}
        style={
          theme === "dark" ?
            { right: "4px", background: "#0f172a" }
            :
            { left: "3px", background: "#fff", margin: "1px 1px 1px 1px" }
        }
      ></div>
      <Image
        src="/sun.png"
        alt=""
        width={14}
        height={14}
      />
    </div >
  )
}

export default ThemeToggle