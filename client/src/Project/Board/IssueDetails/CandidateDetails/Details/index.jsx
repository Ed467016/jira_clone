import React from 'react';

import { Form } from 'shared/components';

import {Container} from './Styles';

const Details = () => {
  return (
    <Container>
      <Form.Field.Input
        name="fullName"
        label="Full Name"
        disabled
      />
      <Form.Field.Input
        name="mobile"
        label="Mobile Number"
        disabled
      />
      <Form.Field.Input
        name="email"
        label="Email Address"
        disabled
      />
    </Container>
  );
};

export default Details;
