import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { SearchContext,SearchContext2 } from '../Context'
import { useState } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const [box,setBox] = useState([]);
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{box,setBox}}>
      <SearchContext2.Provider value={{search,setSearch}}>
      <Head>
        <title>YouTube Clone</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
<NavBar />
      </SearchContext2.Provider>
    <Component {...pageProps} />
    </SearchContext.Provider>
    )
}

export default MyApp
