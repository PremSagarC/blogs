"use client"

import React, { useState } from 'react'
import styles from './authLinks.module.css'
import Link from 'next/link'

const AuthLinks = () => {

    const [open, setOpen] = useState(false)

    const status = "Notauthenticated"

    return (
        <div>
            {
                status === "Notauthenticated" ? (
                    <Link href='/login' className={styles.link}>Login</Link>
                ) : (
                    <div className={styles.logout}>
                        <Link href='/write' className={styles.link}>Write</Link>
                        <span className={styles.link}>Logout</span>
                    </div>
                )}

            <div className={styles.burger} onClick={() => setOpen(!open)}>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
                <div className={styles.line}></div>
            </div>
            {
                open && (
                    <div className={styles.responsiveMenu}>
                        <Link href="/" className={styles}>Home</Link>
                        <Link href="/about" className={styles}>About</Link>
                        <Link href="/contact" className={styles}>Contact</Link>
                        {
                            status === "Notauthenticated" ? (
                                <Link href='/login'>Login</Link>
                            ) : (
                                <div className={styles.logout}>
                                    <Link href='/write'>Write</Link>
                                    <span className={styles.link}>Logout</span>
                                </div>
                            )}
                    </div>
                )
            }
        </div>
    )
}

export default AuthLinks