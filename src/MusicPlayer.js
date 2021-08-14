import React from 'react';
import TrackList from "./components/TrackList";
import PlayerControls from "./components/PlayerControls";
import { MusicPlayerProvider } from "./MusicPlayerContext";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import { Col } from 'react-bootstrap';
import "./MusicPlayer.css"

const MusicPlayer = () => {
  return (
      <div style = {{minHeight: "95vh", marginRight: "auto", marginLeft: "auto", color: "#999999"}} className = "fullpage">
        <Container fluid className = "MusicPlayer">
          <Row>
              <Col lg = {6} md = {12} style = {{width: "80%", marginLeft: "auto", marginRight: "auto"}}>
                <div className="page" style = {{display: "flex", justifyItems: "center", alignItems: "center", color: "#999999"}}>
                  <Container fluid>
                    <Row>
                      <MusicPlayerProvider style = {{display: "flex", alignItems: "center", justifyItems: "center"}}>
                        <div className="container">
                          <PlayerControls />
                          <br></br>
                          <br></br>
                          <TrackList />
                        </div>
                      </MusicPlayerProvider>
                    </Row>
                  </Container>
                </div>
              </Col>
              <Col lg = {6} md = {12} style = {{display: "flex", flexDirection: "column", alignContent: "center", alignItems: "center", justifyContent: "flex-start", width: "90%"}} className = "soundcloud">
                <p style = {{marginBottom: "5vh"}}>Check out some of my other work here</p>
                  <iframe width="70%" title = "1" height={200} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1081291978&color=%236fc3b4&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false" />
                  <br></br>
                  <iframe width="70%" title = "2" height={200} scrolling="no" frameBorder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1086027682&color=%236fc3b4&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false" />
                  <br></br>
                  <iframe width="70%" title = "3" height={200} scrolling="no" frameBorder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1036006147&color=%236fc3b4&auto_play=false&hide_related=false&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=false" />
              </Col>
          </Row>
        </Container>
      </div>
  );
}

export default MusicPlayer;