import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.css'

export default function Main({theme, selectedPunk, punkListData}) {
  const [activePunk, setActivePunk] = useState(punkListData[0])

  useEffect(() => {
    setActivePunk(punkListData.find(punk => punk.token_id == selectedPunk))
  }, [punkListData, selectedPunk])

  return (
    <main className={styles.main}>
      <section
        className={styles.mainContent} 
        style={{borderBottom: theme ? '1px solid white' : '3px solid black'}}
      >
        <section className={styles.punkHighlight}>
          <div className={styles.punkContainer}>
            {activePunk.image_original_url && (
              <img
                priority
                className={styles.selectedPunk}
                src={activePunk.image_original_url}
                height={300}
                width={300}
                alt='activePunk'
              />
            )}
          </div>
        </section>

        <section className={styles.punkDetails} style={{color: '#fff'}}>
          <div className={styles.punkHead}>
            <div className={styles.title} style={{color: theme ? 'white' : 'black'}}>
              {activePunk.name}
            </div>
            <span className={styles.itemNumber}>•#{activePunk.token_id}</span>
          </div>
        
          <div className={styles.ownerDetails}>
            <div className={styles.ownerImageContainer}>
              <Image
                priority
                src={activePunk.owner.profile_img_url}
                height={300}
                width={300}
                alt='activePunk'
              />
            </div>

            <div className={styles.ownerDetails}>
              <div className={styles.ownerNameAndHandle}>
                <div style={{color: theme ? 'white' : 'black'}}>
                  {activePunk.owner.address}
                </div>
                <div className={styles.ownerHandle}>@crypto_knight</div>
              </div>

              <div className={styles.ownerLink}>
                <Image
                  priority
                  src='/owner/instagram.png'
                  height={30}
                  width={30}
                  alt='instagram'
                />
              </div>

              <div className={styles.ownerLink}>
                <Image
                  priority
                  src='/owner/twitter.png'
                  height={30}
                  width={30}
                  alt='twitter'
                />
              </div>

              <div className={styles.ownerLink}>
                <Image
                  priority
                  src='/owner/more.png'
                  height={30}
                  width={30}
                  alt='more'
                />
              </div>         
            </div>
          </div>
        </section>
      </section>
    </main>
  )
}
