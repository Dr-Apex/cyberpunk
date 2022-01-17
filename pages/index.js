import {useState, useEffect} from 'react'
import axios from 'axios'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import PunkList from '../components/PunkList'
import Main from '../components/Main'

export default function Home() {
  const [punkListData, setPunkListData] = useState([])
  const [selectedPunk, setSelectedPunk] = useState(0)
  const [theme, setTheme] = useState(true)

  useEffect(() => {
    (async () => {
      const openSeaData = await axios.get('/api/opensea')
      setPunkListData(openSeaData.data)
    })()
  }, [])

  return (
    <div className={styles.app} style={{backgroundColor: theme ? 'black' : 'grey'}}>
      <Header theme={theme} setTheme={setTheme} />
      {punkListData[0] && (
        <>
          <Main
            theme={theme}
            selectedPunk={selectedPunk}
            punkListData={punkListData} 
          />
          <PunkList 
            theme={theme}
            punkListData={punkListData} 
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  )
}
