import React from 'react'
import styles from './featured.module.css'
import Image from 'next/image'

const Featured = () => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>
        <b>Discover, Learn, Grow</b>
        <br />
        Your Gateway to Lifelong Learning and Inspiration
      </p>
      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
          <p className={styles.postDescription}>
            Fuga ipsum saepe error debitis fugiat maiores minima recusandae
            asperiores autem, itaque blanditiis harum pariatur hic distinctio.
            At modi quas inventore nesciunt?
          </p>
          <button className={styles.button}>
            Read More
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured