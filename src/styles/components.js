import styled from 'styled-components/macro';
import theme from './theme';

export const MailingListWrapper = styled.div`
  z-index: 10;
  width: 85vw;
  max-width: 30rem;
  margin: 1rem;
  & > #mc_embed_signup {
    clear: left;
    font: 14px Helvetica, Arial, sans-serif;
    width: 100%;
  }
  & > #mc_embed_signup form {
    text-align: center;
  }
  & > .mc-field-group {
    display: inline-block;
  } /* positions input field horizontally */
  & > #mc_embed_signup input.email {
    font-family: 'Open Sans', 'Helvetica Neue', Arial, Helvetica, Verdana,
      sans-serif;
    font-size: 1rem;
    border: 2px solid ${theme.colors.lightOrange};
    border-radius: ${theme.borderRadius.primary};
    color: ${theme.colors.lightOrange};
    background-color: rgba(255, 255, 255, 0);
    box-sizing: border-box;
    height: 2.2rem;
    padding: 0px 0.4em;
    display: inline-block;
    vertical-align: top;
  }
  & > #mc_embed_signup label {
    display: block;
    font-size: 16px;
    padding-bottom: 10px;
    font-weight: bold;
  }
  & > #mc_embed_signup .clear {
    display: inline-block;
  } /* positions button horizontally in line with input */
  & > #mc_embed_signup .button {
    font-size: 1rem;
    border: none;
    border-radius: ${theme.borderRadius.primary};

    letter-spacing: 0.03em;
    color: #fff;
    background-color: ${theme.colors.lightOrange};
    box-sizing: border-box;
    height: 2.2rem;
    line-height: 32px;
    padding: 0 18px;
    display: inline-block;
    margin: 0 0.5rem;
    transition: all 0.23s ease-in-out 0s;
  }
  & > #mc_embed_signup .button:hover {
    background-color: ${theme.colors.darkOrange};
    cursor: pointer;
  }
  & > #mc_embed_signup div#mce-responses {
    float: left;
    top: -1.4em;
    padding: 0em 0.5em 0em 0.5em;
    overflow: hidden;
    width: 90%;
    margin: 0 5%;
    clear: both;
  }
  & > #mc_embed_signup div.response {
    margin: 1em 0;
    padding: 1em 0.5em 0.5em 0;
    font-weight: bold;
    float: left;
    top: -1.5em;
    z-index: 1;
    width: 80%;
  }
  & > #mc_embed_signup #mce-error-response {
    display: none;
  }
  & > #mc_embed_signup #mce-success-response {
    color: #529214;
    display: none;
  }
  & > #mc_embed_signup label.error {
    display: block;
    float: none;
    width: auto;
    margin-left: 1.05em;
    text-align: left;
    padding: 0.5em 0;
  }

  @media (max-width: ${theme.breakpoints.desktop}px) {
    #mc_embed_signup input.email {
      width: 100%;
      margin-bottom: 5px;
    }
    #mc_embed_signup .clear {
      display: block;
      width: 100%;
    }
    #mc_embed_signup .button {
      width: 100%;
      margin: 0;
    }
  }

  &.headerSignUpForm {
    display: none;
    text-align: right;
    @media (min-width: ${theme.breakpoints.mobile}px) {
      display: block;
    }
  }
  &.headerSignUpForm #mc_embed_signup_scroll {
    text-align: right;
  }
`;
