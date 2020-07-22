import React from 'react';

import { formatDateTime } from 'shared/utils/dateTime';

import { Container, Result, ResultLabel, Label } from './Styles';

const PricingResults = ({ cost, endDate }) => {
  return (
    <Container>
      <Result>
        <Label>Cost:</Label>
        <ResultLabel>{cost ? `Rs. ${cost}` : 'Not estimated yet.'}</ResultLabel>
      </Result>
      <Result>
        <Label>Estimated Completion Date:</Label>
        <ResultLabel>{endDate ? `${formatDateTime(endDate)}` : 'Not estimated yet.'}</ResultLabel>
      </Result>
    </Container>
  );
};

export default PricingResults;
