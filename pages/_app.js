import NavBar from '../components/NavBar'
import '../styles/globals.css'
import { SearchContext } from '../Context'
import { useState } from 'react'
function MyApp({ Component, pageProps }) {
  const [box,setBox] = useState([]);
  return (
    <SearchContext.Provider value={{box,setBox}}>
<NavBar />
    <Component {...pageProps} />
    </SearchContext.Provider>
    )
}

export default MyApp
