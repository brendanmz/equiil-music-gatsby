import React from 'react'
import styled from 'styled-components/macro'
import textLogo from '../assets/icons/text-logo.svg'
import Socials from './Socials'
import theme from '../styles/theme'
import MailingListSignup from './MailingListSignup'
import heroVideo from '../assets/videos/HeroVideo.mp4'

const HeaderWrapper = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    padding-bottom: 43%;
  }
`

const HeaderLogo = styled.img`
  width: 80vw;
  max-width: 20rem;
  padding: 0;
  z-index: 10;
  margin: 1rem;
  @media (min-width: ${theme.breakpoints.mobile}px) {
    min-width: 20rem;
  }
`

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    & > * {
      min-width: 30%;
      max-height: 10rem;
    }
  }
`

const Video = styled.video`
  width: 100%;

  @media (min-width: ${theme.breakpoints.mobile}px) {
    position: fixed;
  }
`

const Header = () => (
  <HeaderWrapper>
    <TitleWrapper>
      <HeaderLogo src={textLogo} alt='Equiil logo' />
      <Socials className='headerSocials' />
      <MailingListSignup className='headerSignUpForm' />
    </TitleWrapper>
    <Video autoPlay playsInline muted loop src={heroVideo} loading='lazy' />
  </HeaderWrapper>
)

export default Header
