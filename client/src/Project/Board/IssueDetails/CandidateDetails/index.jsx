import React from 'react';
import PropTypes from 'prop-types';

import Details from './Details';
import Links from './Links';
import {Container} from './Styles';

const propTypes = {
  url: PropTypes.string.isRequired,
  downloadUrl: PropTypes.string.isRequired
};

const CandidateDetails = ({url, downloadUrl}) => {
  return (
    <Container>
      <Details />
      <Links detailsUrl={url} downloadUrl={downloadUrl} />
    </Container>
  );
};

CandidateDetails.propTypes = propTypes;

export default CandidateDetails;
