import React, { useState } from 'react';
import One from './Beats/1.mp3';
import Two from './Beats/2.mp3';
import Three from './Beats/3.mp3';
import Four from './Beats/4.mp3';
import Five from './Beats/5.mp3';
import Six from './Beats/6.mp3';
import Seven from './Beats/7.mp3';
import Eight from './Beats/8.mp3';

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
  const [state, setState] = useState({
    audioPlayer: new Audio(),
    tracks: [
      {
        name: 'Jazzhop Chill Trap Beat',
        file: One,
      },
      {
        name: 'Piano Hard Trap Beat',
        file: Two,
      },
      {
        name: 'Jazzhop Chill Trap Beat 2',
        file: Three,
      },      {
        name: 'Smooth Trap Beat',
        file: Four,
      },
      {
        name: 'Guitar Drill Beat',
        file: Five,
      },
      {
        name: 'Dark Trap Beat 1',
        file: Six,
      },      {
        name: 'Dark Trap Beat 2',
        file: Seven,
      },
      {
        name: 'Guitar Trap Beat',
        file: Eight,
      }
    ],
    currentTrackIndex: null,
    isPlaying: false,
  });
  return (
    <MusicPlayerContext.Provider value={[state, setState]}>
      {props.children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
