import '../styles/globals.css'
import Navbar from './Navbar'
import Main from  './Main.js'
function MyApp({ Component, pageProps }) {
  
  return(
    <>
    <Navbar/>
    <Main/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;
