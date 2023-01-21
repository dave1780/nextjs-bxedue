import  "../styles/Navbar.css"
const Navbar=()=>{
return(
  <>
  <nav className="nav">
  <a href="/Components/home" className="home">Home</a>
<a href="/Components/about" className="about">About</a>
<a href="/Components/Menu" className="menu">Menu</a>
<a href="/Components/FAQ" className="faq">FAQ</a>
  </nav>
  </>
)
}
export default Navbar;