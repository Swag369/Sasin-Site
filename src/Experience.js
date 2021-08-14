import {Container, Row, Col} from "react-bootstrap"
import "./Experience.css"

const Experience = () => // This is good for mobile AND desktop so thats LITT now dont mess with this
{
	return(
		<div style = {{minHeight: "95vh",  color: "#999999"}}>
			<Container fluid style={{marginTop: "6%"}}>
				<h1 style = {{marginLeft: "auto", marginRight: "auto", textAlign: "center", color: "#00022e"}}>Experience</h1>
				<Row style = {{marginLeft: "auto", marginRight: "auto", justifyContent: "space-between", marginTop: "5%", width: "80%"}}>
				<Col lg = {3} style = {{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "0%"}}>
					<i style = {{alignSelf: "center"}}><span style = {{textDecoration: "underline", textDecorationColor: "#777777", textUnderlinePosition: "under"}}>2018 - Present</span></i>
					<br></br>
					<i>FREELANCE DESIGNER</i>
					<br></br>
					<p className = "experienceblurb" style = {{textAlign: "left", color: "777777", alignSelf:"flex-end", justifySelf: "flex-end"}}>Designed hundreds of pieces for various clients, varying from simple business cards to logos and animations for small start-up and personal businesses.</p>
					<br></br>
				</Col>
				<Col lg = {3} style = {{display: "flex", flexDirection: "column", alignItems: "flex-start", marginLeft: "0%"}}>
					<i style = {{alignSelf: "center"}}>June 2018 - August 2018</i>
					<br></br>
					<i style = {{width: "110%", textAlign: "left"}}>GRAPHIC DESIGN CONTRACTOR @ KADAMA LLC</i>
					<br></br>
					<p className = "experienceblurb" style = {{textAlign: "left", alignSelf:"end"}}>Developed tutorials displayed on the App Store to explain application to potential users of the application as well as marketing material for organization including video advertisements, posters and business cards.</p>

				</Col>
				<Col lg = {3} style = {{display: "flex", flexDirection: "column", alignItems: "flex-start", marginRight: "0%"}}>
					<i style = {{alignSelf: "center"}}>June 2017 - August 2017</i>
					<br></br>
					<i style = {{width: "110%"}}>MANUAL TESTER & UI/UX INTERN @ BLOOMZ INC.</i>
					<br></br>
					<p className = "experienceblurb" style = {{textAlign: "left", alignSelf:"baseline"}}>Introduced student centred BETA platform for product to increase market share. Assisted senior user experience developer with coding new user interface for upcoming release. Tested application and the programming behind it (Java & Android Studio) and provided solutions to employees.</p>
				</Col>
				</Row>
				<Row>
				</Row>
			</Container>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<Container fluid style = {{backgroundColor: "whitesmoke", width: "100vw"}}>
			<Row style = {{display: "flex", justifyContent: "center", textAlign: "center"}}>
				<h1 style={{width: "100%", color: "#00022e", paddingBottom: "10vh", paddingTop: "6%"}}>
					Major Projects
				</h1>
				<Col lg = {3} md = {12}>
					<h2 style = {{fontWeight: "lighter"}}>
						PLAN2DAY
					</h2>
					<br></br>
					<i style = {{fontSize: "larger"}}>2020</i>
					<br></br>
					<br></br>
					<p>
						I am in progress of creating a mock-up of a possible planner application for older students, essentially merging multiple programs into one polished application.
					</p>
					<br></br>
				</Col>
				<Col lg = {4} md = {12}>
					<h2 style = {{fontWeight: "lighter"}}>
						"SOMETHING" MUSIC VIDEO
					</h2>
					<br></br>
					<i style = {{fontSize: "larger"}}>2020</i>
					<br></br>
					<br></br>
					<p>
						Created an animated music video for Illini Awaaz's new song, "Something in the Way".
					</p>
					<br></br>
				</Col>
				<Col lg = {3} md = {12}>
					<h2 style = {{fontWeight: "lighter"}}>
						METROFARM
					</h2>
					<br></br>
					<i style = {{fontSize: "larger"}}>2019</i>
					<br></br>
					<br></br>
					<p>
						With the help of my partners, we created possible businesses that could help resolve problems within a certain community.
					</p>
					<br></br>
				</Col>
			</Row>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			<br></br>
			</Container>

			<br></br>
		</div>
	);
}


export default Experience;