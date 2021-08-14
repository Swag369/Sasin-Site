import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBrand } from "react-bootstrap";
import "./Navigation.css"

const Navigation = () => {
    return (
		<>
		<Container fluid>
			<div style = {{fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", justifyContent: "space-between"}}>
			<Navbar variant = "light" expand = "md" sticky = "top">
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<NavbarBrand style = {{color: "rgba(0,0,0,.7)", marginLeft: "0", width: "25vw", fontSize: "larger"}}>
					ససిన్ గుడిపాటి
				</NavbarBrand>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav variant = "tabs" defaultActiveKey="/home" className = "tabsthing" style = {{color: "#00022e", marginRight: "auto", marginLeft: "auto", display: "flex", alignItems: "center", justifyContent:"center"}}>
					<Nav.Link href="/" style = {{color: "#00022e", paddingLeft: "10 px", paddingRight: "10 px"}}>Home</Nav.Link>
					<Nav.Link href="/Experience" eventKey="link-1" style = {{color: "#00022e", paddingLeft: "10 px", paddingRight: "10 px"}}>Experience</Nav.Link>
					{/* slightly darker grey */}
					<Nav.Link href="/Gallery" eventKey="link-2" style = {{color: "#00022e", paddingLeft: "10 px", paddingRight: "10 px"}}>Gallery</Nav.Link>
					<Nav.Link href="/Music" eventKey="link-3" style = {{color: "#00022e", paddingLeft: "10 px", paddingRight: "10 px"}}>Music</Nav.Link>
				</Nav>
				<Nav fluid className = "pics">
	 				<Nav.Link href = "https://8252da1a-7090-4abf-9f3c-4bca8bccbbf4.filesusr.com/ugd/83ebc8_8090ba9d86ad48699e9273e70311bad1.pdf">
						<img src = "https://maxcdn.icons8.com/Share/icon/dotty/Business/resume1600.png" width = "30px" height = "30px" alt="Resume"/>
					</Nav.Link>
	 				<Nav.Link href = "https://www.instagram.com/sasingudipati">
	 					<img src = "https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png" width = "30px" height = "30px" alt="Insta Link"/>
	 				</Nav.Link>
	 				<Nav.Link href = "https://www.linkedin.com/in/sasingudipati/">
	 					<img src = "https://www.freepnglogos.com/uploads/linkedin-social-media-logo-7.png" width = "20" height = "20" alt="Linkedin Link"/>
	 				</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
		</div>
		</Container>
		</>
    )
}

export default Navigation;