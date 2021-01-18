import * as React from 'react';
import '../styles/reset.css';
import '@fontsource/comfortaa'; // Defaults to weight 400.
import styled from 'styled-components';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Music from '../components/Music';
import theme from '../styles/theme';

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2a2a;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 15l15 15H0V15zM15 0l15 15V0H15z' fill='%23ff8e3c' fill-opacity='0.41' fill-rule='evenodd'/%3E%3C/svg%3E");
`;

const PageWrapper = styled.div`
  padding-bottom: ${theme.elementSize.footer};
  width: 100%;
`;

const IndexPage = () => (
  <Wrapper className='App'>
    <PageWrapper>
      <Header />
      <Music />
    </PageWrapper>
    <Footer />
  </Wrapper>
);

export default IndexPage;
