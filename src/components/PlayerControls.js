import React from "react"
import Row from "react-bootstrap/Row"
import useMusicPlayer from "../hooks/useMusicPlayer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPause, faPlay, faStepBackward, faStepForward} from "@fortawesome/free-solid-svg-icons";
import "./PlayerControls.css"
import { Container } from "react-bootstrap";

function PlayerControls() {
  const { isPlaying, currentTrackName, togglePlay, playPreviousTrack, playNextTrack } = useMusicPlayer();
  return (
    <div>
      <Container fluid>
      <Row style = {{textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <a href = "https://app.blackhole.run/#f3c20b51f41KAavBL6y7GE4EhLnPJuR2VMrBG2vrYVyD"><span style = {{color: "#999999", textDecoration: "underline"}}>Preview of my Latest Album<br></br>Download it for Free!</span></a>
      </Row>
      <Row style = {{justifyContent: "center", alignItems: "center", width: "30%", marginRight: "auto", marginLeft: "auto", marginTop: "6vh", marginBottom: "6vh"}} className = "controls">
          <button onClick={playPreviousTrack} disabled={!currentTrackName} style = {{marginLeft: "auto"}}>
            <FontAwesomeIcon icon={faStepBackward} />
          </button>
          <button onClick={togglePlay} disabled={!currentTrackName} style = {{marginLeft: "auto", marginRight: "auto"}}>
            {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
          </button>
          <button onClick={playNextTrack} disabled={!currentTrackName} style = {{marginRight: "auto"}}>
            <FontAwesomeIcon icon={faStepForward} />
          </button>
      </Row>
      </Container>
    </div>
  )
}

export default PlayerControls
