import React from 'react'
import CollectionCard from './CollectionCard'
import styles from '../styles/PunkList.module.css'

export default function PunkList({theme, punkListData, setSelectedPunk}) {
  return (
    <div 
      className={styles.punkList} 
      style={{borderBottom: theme ? '1px solid white' : '3px solid black'}}
    >
      {punkListData.map(punk => (
        <div key={punk.token_id} onClick={() => setSelectedPunk(punk.token_id)}>
          <CollectionCard
            id={punk.token_id}
            name={punk.name}
            traits={punk.traits}
            image={punk.image_original_url}
          />
        </div>
      ))}
    </div>
  )
}
