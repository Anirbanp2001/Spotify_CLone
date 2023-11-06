import React from 'react';
import CurrentTrack from '../currentTrack/CurrentTrack';
import PlayerControls from '../playerControls/PlayerControls';
import Volume from '../volume/Volume';
import './footer.scss'
const Footer = () => {
  return (
    <div className='footer'>
      <CurrentTrack/>
      <PlayerControls/>
      <Volume/>
    </div>
  );
}

export default Footer;
