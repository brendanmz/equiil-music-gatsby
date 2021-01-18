import React from 'react'
import styled from 'styled-components/macro'
import MailingListSignup from './MailingListSignup'
import theme from '../styles/theme'
import Socials from './Socials'

const FooterWrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: ${theme.elementSize.footer};
  min-height: 10rem;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: ${theme.colors.background};
`

const Footer = () => (
  <FooterWrapper>
    <MailingListSignup />
    <Socials />
  </FooterWrapper>
)

export default Footer
