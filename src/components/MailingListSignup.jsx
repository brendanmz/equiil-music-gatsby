import React from 'react'
import PropTypes from 'prop-types'

import MailingListWrapper from '../styles/components'

const MailingListSignup = ({ className }) => (
  <MailingListWrapper className={className}>
    <div id='mc_embed_signup'>
      <form
        action='https://equiil-music.us18.list-manage.com/subscribe/post?u=331d962b1d9c0dd5bf1c62e8f&amp;id=9e6374e41e'
        method='post'
        id='mc-embedded-subscribe-form'
        name='mc-embedded-subscribe-form'
        className='validate'
        target='_blank'
        noValidate
      >
        <div id='mc_embed_signup_scroll'>
          <input
            type='email'
            name='EMAIL'
            className='email'
            id='mce-EMAIL'
            placeholder='email address'
            required
          />

          <div style={{ position: 'absolute', left: -5000 }} aria-hidden>
            <input
              type='text'
              name='b_331d962b1d9c0dd5bf1c62e8f_9e6374e41e'
              tabIndex='-1'
            />
          </div>
          <div className='clear'>
            <input
              type='submit'
              value='Subscribe'
              name='subscribe'
              id='mc-embedded-subscribe'
              className='button'
            />
          </div>
        </div>
      </form>
    </div>
  </MailingListWrapper>
)

MailingListSignup.propTypes = {
  className: PropTypes.string.isRequired,
}

export default MailingListSignup
