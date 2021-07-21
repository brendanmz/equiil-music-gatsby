import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import theme from '../styles/theme'

import bandcampLogo from '../assets/icons/bandcamp.svg'
import soundcloudLogo from '../assets/icons/soundcloud.svg'
import spotifyLogo from '../assets/icons/spotify.svg'
import instagramLogo from '../assets/icons/instagram.svg'
import twitterLogo from '../assets/icons/twitter.svg'
import appleLogo from '../assets/icons/apple-music.svg'

const SocialLogo = styled.img`
  z-index: 10;
  width: 2rem;
  padding: 0 0.5rem;
  filter: brightness(0) saturate(100%) invert(77%) sepia(96%) saturate(654%)
    hue-rotate(318deg) brightness(106%) contrast(101%);
  transition: all 0.23s ease-in-out 0s;

  &:hover {
    opacity: 60%;
  }
`

const SocialsList = styled.ul`
  z-index: 10;
  display: flex;
  margin: 1rem;
  &.headerSocials {
    @media (min-width: ${theme.breakpoints.mobile}px) {
      order: -1;
      margin: 1rem;
    }
  }
`

const socialLogos = [
  {
    src: soundcloudLogo,
    alt: 'Soundcloud',
    href: 'https://soundcloud.com/equiil',
  },
  // {
  //   src: facebookLogo,
  //   alt: 'Facebook',
  //   href: 'https://www.facebook.com/equiil',
  // },
  {
    src: bandcampLogo,
    alt: 'Bandcamp',
    href: 'https://equiil.bandcamp.com/',
  },
  {
    src: spotifyLogo,
    alt: 'Spotify',
    href:
      'https://open.spotify.com/artist/27Q4gHKd9MH9mvzGg5CSNk?si=_FwaDOcZTrKLZqvTYmJFHg&dl_branch=1',
  },
  {
    src: appleLogo,
    alt: 'Apple Music',
    href: 'https://music.apple.com/ca/artist/equiil/1526804762',
  },
  {
    src: instagramLogo,
    alt: 'Instagram',
    href: 'https://www.instagram.com/equiil/',
  },
  {
    src: twitterLogo,
    alt: 'Twitter',
    href: 'https://twitter.com/Equiil1',
  },
]
const Socials = ({ className }) => (
  <SocialsList className={className}>
    {socialLogos.map(logo => (
      <li key={JSON.stringify(logo)}>
        <a href={logo.href} target='_blank' rel='noopener noreferrer'>
          <SocialLogo alt={logo.alt} src={logo.src} />
        </a>
      </li>
    ))}
  </SocialsList>
)

Socials.propTypes = {
  className: PropTypes.string.isRequired,
}

export default Socials
