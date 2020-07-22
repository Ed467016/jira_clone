import React from 'react';
import PropTypes from 'prop-types';

import { Container, LinkButton } from './Styles';

const propTypes = {
  downloadUrl: PropTypes.string.isRequired,
  detailsUrl: PropTypes.string.isRequired,
};

const Links = ({ downloadUrl, detailsUrl }) => {
  return (
    <Container>
      <LinkButton variant="primary">
        <a target="_blank" rel="noopener noreferrer" href={downloadUrl} download>
          Download PDF Report
        </a>
      </LinkButton>
      <LinkButton variant="primary">
        <a target="_blank" rel="noopener noreferrer" href={detailsUrl} download>
          View Additional Details of Candidate
        </a>
      </LinkButton>
    </Container>
  );
};

Links.propTypes = propTypes;

export default Links;
