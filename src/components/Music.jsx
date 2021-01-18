import React from 'react';
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

// import theme from '../styles/theme'

const MusicWrapper = styled.div`
  min-height: 10rem;
  position: relative;
  z-index: 10;
  padding: 2em;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PlayersWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const PlayerWrapper = styled.div`
  margin: 1em;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.5em;
  padding: 0.3em;
  color: ${theme.colors.lightOrange};
  background-color: ${theme.colors.background};
  border-radius: ${theme.borderRadius.primary};
  margin-bottom: 0.5em;
`;

const songs = [
  {
    trackId: 308596430,
    bandcampHref: 'https://equiil.bandcamp.com/track/im-falling-over',
    songTitle: 'I&#39;m Falling Over by Equiil',
  },
  {
    trackId: 23264976,
    bandcampHref: 'https://equiil.bandcamp.com/track/anti-haste',
    songTitle: 'Anti Haste by Equiil',
  },
];

const BandcampFrame = ({ trackId, href, songTitle }) => (
  <PlayerWrapper>
    <iframe
      title={songTitle}
      style={{ border: 0, width: '250px', height: '250px' }}
      src={`https://bandcamp.com/EmbeddedPlayer/track=${trackId}/size=large/bgcol=333333/linkcol=e99708/minimal=true/transparent=true/`}
      seamless
    >
      <a href={href}>{songTitle}</a>
    </iframe>
  </PlayerWrapper>
);

BandcampFrame.propTypes = {
  trackId: PropTypes.number.isRequired,
  href: PropTypes.string.isRequired,
  songTitle: PropTypes.string.isRequired,
};

const Music = () => (
  <MusicWrapper>
    <Heading>Music</Heading>
    <PlayersWrapper>
      {songs.map(song => (
        <BandcampFrame
          key={song.bandcampHref}
          trackId={song.trackId}
          href={song.bandcampHref}
          songTitle={song.songTitle}
        />
      ))}
    </PlayersWrapper>
  </MusicWrapper>
);

export default Music;
