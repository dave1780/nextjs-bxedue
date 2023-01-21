import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  
  return(
    <>
    <h1>my app component </h1>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp;
