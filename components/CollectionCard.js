import React from 'react'
import Image from 'next/image'
import styles from '../styles/CollectionCard.module.css'

export default function CollectionCard({id, name, traits, image}) {
  return (
    <div className={styles.collectionCard}>
      {image && (
        <img
          src={image}
          height={300}
          width={300}
          alt='punkImage'
        />
      )}
      <div className={styles.details}>
        <div className={styles.name}>
          {name} 
          <div className={styles.id}>•#{id}</div>
        </div>
        <div className={styles.priceContainer}>
          <Image
            priority
            src="/weth.png"
            height={23}
            width={15}
            alt='weth'
          />
          <div className='price'>{traits[0]?.value}</div>
        </div>
      </div>
    </div>
  )
}
