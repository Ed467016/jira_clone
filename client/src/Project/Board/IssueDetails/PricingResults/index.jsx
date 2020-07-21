import React from 'react';
import { Container, Result, ResultLabel, Label } from './Styles';

const PricingResults = ({ cost, days }) => {
  return (
    <Container>
      <Result>
        <Label>Cost:</Label>
        <ResultLabel>{cost ? `Rs. ${cost}` : 'Not estimated yet.'}</ResultLabel>
      </Result>
      <Result>
        <Label>Estimated Turnaround Time:</Label>
        <ResultLabel>{days ? `${days} Days` : 'Not estimated yet.'}</ResultLabel>
      </Result>
    </Container>
  );
};

export default PricingResults;
