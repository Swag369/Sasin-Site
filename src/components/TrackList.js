import React from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "./Tracklist.css"
import useMusicPlayer from "../hooks/useMusicPlayer";

function TrackList() {
  const songtimes = ["02:17", "02:33", "03:03", "03:15", "01:56", "01:45", "01:48", "3:30"];
  const { trackList, currentTrackName, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
    <Container fluid>
      {trackList.map((track, index) => (
        <Row style = {{paddingTop: "10px", paddingBottom: "10px", borderTop: index!==0 ? "1px solid #999999" : "1px solid white", color: track.name === currentTrackName ? "rgba(227,208,168,1)" : "#999999"}} className = "row">
          <Col lg = {3} className = "tracknum"><button className="button" onClick={() => playTrack(index)} style = {{color: track.name === currentTrackName ? "rgba(227,208,168,1)" : "#999999", borderRadius: "100%", outline: "none", marginLeft: "1vw", width: "3vh", height: "3vh", border: track.name === currentTrackName ? "1px solid rgba(227,208,168,1)" : "1px solid #999999", backgroundColor: "white", justifySelf: "flex-end"}}>{index+1}</button></Col>
          <Col lg = {6} md = {12} className = "tracktitle"><button className="button" onClick={() => playTrack(index)} style = {{justifySelf: "flex-start", outline: "none", backgroundColor: "white", border: "1px white", color: track.name === currentTrackName ? "rgba(227,208,168,1)" : "#999999"}}>{track.name}</button></Col>
          <Col lg = {3} className = "tracktime">{songtimes[index]}</Col>
        </Row>
      ))}
    </Container>
    </>
)

}//make play svbg into index circled

export default TrackList
