import "./Home.css"
import {Row, Col, Card, Container} from "react-bootstrap";

const Home = () =>
{
	return(
		<>
			<div style = {{color: "#999999",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", minHeight: "95vh"}}>
				<div style={{maxWidth: "90%"}}>
					<h1 style={{textTransform: "uppercase", textAlign: "center", alignSelf: "top", justifySelf: "center", marginTop: "-4vh", color: "#00022e"}}>WELCOME</h1>
					<br></br>
					<br></br>
					<p style = {{textAlign: "center", fontStyle: "oblique", alignSelf: "center"}}>
"Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid. The question I have for you at this point of our journey together is, 'What is your genius?'"</p>
					<br></br>
					<p style = {{textAlign: "center", alignSelf: "bottom"}}>- Albert Einstein</p>
				</div>
			</div>

			<div class="pin pin--vertical pin--vertical--end pin--vertical--strikethrough"></div>

			<Container fluid style = {{color: "#999999"}} className = "biocontainer">
				<Row style = {{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" , minHeight: "95vh"}}>
					<Col md = {12} lg = {6} style = {{display: "flex", justifyContent: "center", alignItems: "center"}}>
						<Card style={{maxWidth: "558px", height: "auto", width: '560px' }}>
							<Card.Img variant="top" src="https://cdn.discordapp.com/attachments/789663996370223125/793297585934303232/IMG_0475.jpg" style={{maxHeight: "50vh", objectFit: "cover", overflow: "hidden"}} />
							<Card.Body>
								<Card.Text>
								I am a student at the University of Illinois, Urbana-Champaign who is studying Electrical Engineering. I am a freelance designer, singer, producer as well as photographer
								</Card.Text>
							</Card.Body>
						</Card>
					</Col>
					<Col md = {12} lg = {6} style = {{display: "flex", justifyContent: "center", alignContent: "center", textAlign: "left"}} className = "bio">
						I honestly would call myself a jack of all trades. As an Electrical Engineering student at the University of Illinois, Urbana-Champaign, it’s hard to find free time to seriously pursue a hobby, however, throughout my time in high school, I made it a habit of pursuing such hobbies to take my mind off the stresses of school, recruiting and other stress inducers.
						<br></br>
						<br></br>
						At the age of 4 years old, I began learning the traditional and spiritual sounds of Indian Classical Music. I began my training in harmonium, an accordion like instrument, and shortly after began to train in singing. I continued to sing throughout all my years, and now am on Illini Awaaz, a premier co-ed South Asian Fusion A-Capella team. However, as I grew up, I made it a mission to learn as many instruments that I could. Now as a 20 year old, I have experience playing guitar, piano, violin, drums, harmonium and singing.
						<br></br>
						<br></br>
						As COVID-19 slowly became a threat to the health of the world, it was imperative that those who can stay at home as much as possible do so. So, as a loving government citizen, I rarely was outside and made sure that any contact I made was socially distanced. I took this time to make myself a better person. I began my journey into beat making. I purchased Logic Pro X, and with many Youtube tutorials and the help of friends, was able to take my musical creativity and make a finished product from it. Now, I am helping my A-Capella team mix songs as well as produce my own beats in my free time. On top of that, I also started learning Swift UI on Xcode. Although I am not experienced in it yet, I am working on an application.
						<br></br>
						<br></br>
						Back in high school, I began my journey into design, through a business competition called DECA. It was a great way for me to realize that I had a passion in UI/UX design, as I was creating application prototypes, simple yet powerful presentations and creative and knowledgeable business plans.
					</Col>
				</Row>
			</Container>
		</>
	);
}


export default Home;