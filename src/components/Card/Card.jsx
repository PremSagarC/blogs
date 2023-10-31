import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" fill alt="" className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.12.13</span>
                    <span>-</span>
                    <span className={styles.category}>CULTURE</span>
                </div>
                <Link href="/">
                    <h1>Lorem ipsum dolor sit amet.</h1>
                </Link>
                <p className={styles.desc}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Laborum deserunt sapiente, inventore porro ex
                    in excepturi necessitatibus quos est corporis!
                </p>
                <Link href="/" className={styles.link}>
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default Card