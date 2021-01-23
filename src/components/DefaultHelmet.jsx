import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const DefaultHelmet = ({ title, description, siteUrl }) => (
  <Helmet defaultTitle={title}>
    <html lang='en' />
    <title>{title}</title>
    <meta name='description' content={description} />
    <base href={siteUrl} />
  </Helmet>
);
DefaultHelmet.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteUrl: PropTypes.string.isRequired,
};
 export default DefaultHelmet;