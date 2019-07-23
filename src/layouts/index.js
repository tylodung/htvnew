import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import 'prismjs/themes/prism-okaidia.css'
import '../css/global.css'
import '../css/screen.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Tình Yêu Ba Má" />
    <div>{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
