import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const catItems = [
  {
    image: 'style.png',
    name: 'Style',
    link: 'style',
    category: styles.style
  },
  {
    image: 'food.png',
    name: 'Food',
    link: 'food',
    category: styles.food
  },
  {
    image: 'fashion.png',
    name: 'Fashion',
    link: 'fashion',
    category: styles.fashion
  },
  {
    image: 'travel.png',
    name: 'Travel',
    link: 'travel',
    category: styles.travel
  },
  {
    image: 'culture.png',
    name: 'Culture',
    link: 'culture',
    category: styles.culture
  },
  {
    image: 'coding.png',
    name: 'Tech',
    link: 'tech',
    category: styles.tech
  },
]


const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {
          catItems.map((item) => (
            <Link
              key={item.name}
              href={`/blog?=${item.link}`} className={`${styles.category} ${item.category}`}>
              <Image src={`/${item.image}`} alt="" width={32} height={32} className={styles.image} />
              {item.name}
            </Link>
          )
          )
        }
      </div>

    </div>
  )
}

export default CategoryList