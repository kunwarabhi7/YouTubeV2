import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { SearchContext,SearchContext2 } from '../Context'
import { useState } from 'react'


function MyApp({ Component, pageProps }) {
  const [box,setBox] = useState([]);
  const [search, setSearch] = useState('');
  return (
    <SearchContext.Provider value={{box,setBox}}>
      <SearchContext2.Provider value={{search,setSearch}}>

<NavBar />
      </SearchContext2.Provider>
    <Component {...pageProps} />
    </SearchContext.Provider>
    )
}

export default MyApp
