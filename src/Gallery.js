//https://www.npmjs.com/package/react-photo-album?activeTab=readme
//thats the linnk i got algorithm from

import PictureMasonry from "react-photo-gallery"
import Container from "react-bootstrap/Container"


const photos = [
	{
		src: 'https://littlecloudcuriosity.files.wordpress.com/2015/07/himouto-umaru-chan-episode-1-27.jpg',
		width: 963,
		height: 541
	},
	{
		src: 'https://i.ytimg.com/vi/pkHn0_ola6Q/maxresdefault.jpg',
		width: 963,
		height: 541
	},
	{
		src: "https://littlecloudcuriosity.files.wordpress.com/2015/08/himouto-umaru-chan-episode-5-24.jpg",
		width: 963,
		height: 541
	},
	{
		src: "https://littlecloudcuriosity.files.wordpress.com/2015/09/himouto-umaru-chan-episode-11-33.jpg",
		width: 963,
		height: 541
	},
	{
		src: "https://i.ytimg.com/vi/bFCyDSeLWZ4/maxresdefault.jpg",
		width: 963,
		height: 541
	},
	{
		src: "https://i.ytimg.com/vi/kNLYEZ9md2U/maxresdefault.jpg",
		width: 963,
		height: 541
	}
];

const Gallery = () => {
	return(
		<div style = {{minHeight: "95vh", padding: "0"}}>
			<h1 style = {{marginTop: "10vh", display: "flex", justifyContent: "center", marginBottom: "10vh", color: "#00022e"}}>Gallery</h1>
			<Container fluid style = {{maxWidth: "90vw", background: "whitesmoke", marginBottom: "7vh", paddingLeft: "0px", paddingRight: "0px"}}>
				<PictureMasonry photos={photos} />
			</Container>
		</div>
	);
}
export default Gallery;
