import {useState, useEffect} from 'react'
import{Navbar, Container, Nav} from 'react-bootstrap'
import{navLinks} from "../data/index.js"
import{NavLink} from 'react-router-dom'



const NavbarComponents = () => {
  const [changecolor, setChangecolor] = useState(false);
  const changebackgroundcolor = () => {
    if (window.scrollY >= 10) {
      setChangecolor(true);
    } else {
      setChangecolor(false);
    }
  };

  useEffect(() => {
    changebackgroundcolor();

    window.addEventListener("scroll", changebackgroundcolor);
    return () => window.removeEventListener("scroll", changebackgroundcolor);
  }, []);

  return (
    <div>
    <Navbar expand="lg" className={changecolor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand as={NavLink} to="/" className="fs-3 fw-bold">LearnIOT.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto text-center gap-4">

        {navLinks.map((link) => (
            <div className='nav-link' key={link.id}>
                <NavLink to={link.path} 
                className={({ isActive, isPending }) =>isPending ? "pending" : isActive ? "active" : ""}end
                >{link.text}
                </NavLink> 
            </div>
        ))}
          </Nav>
          <div className='text-center'>
            <button className='btn btn-primary'>Join With Us</button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarComponents