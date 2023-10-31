import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.social}>
                <Image src="/facebook.png"
                    alt="facebook"
                    width={25}
                    height={25}
                />
                <Image src="/instagram.png"
                    alt="instagram"
                    width={25}
                    height={25}
                />
                <Image src="/youtube.png"
                    alt="youtube"
                    width={25}
                    height={25}
                />
            </div>
            <div className={styles.logo}>
                Bloggs
            </div>
            <div className={styles.links}>
                <ThemeToggle  />
                <Link href="/" className={styles.link}>Home</Link>
                <Link href="/about" className={styles.link}>About</Link>
                <Link href="/contact" className={styles.link}>Contact</Link>
                <AuthLinks />
            </div>
        </div>
    )
}

export default Navbar