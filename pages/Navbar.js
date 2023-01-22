import styles1 from  "../styles/Navbar.module.css"
const Navbar=()=>{
return(
  <>
  <header className={styles1.header}>
  <nav className={styles1.nav}>
  <a href="/Components/home" className="home">Home</a>
<a href="/Components/about" className="about">About</a>
<a href="/Components/Menu" className="menu">Menu</a>
<a href="/Components/FAQ" className="faq">FAQ</a>
  </nav>
  </header>
  </>
)
}
export default Navbar;