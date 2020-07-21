import React, { Fragment } from 'react';
import { Form } from 'shared/components';

const CandidateDetails = () => {
  return (
    <Fragment>
      <Form.Field.Input
        name="fullName"
        label="Full Name"
        tip="Candidates full name."
        placeholder="John Johnson"
      />
      <Form.Field.Input
        disabled
        name="mobile"
        label="Mobile Number"
        tip="Candidates mobile number."
        placeholder="+(123) 45-67-89-00"
      />
      <Form.Field.Input
        name="email"
        label="Email Address"
        tip="Candidates email address."
        placeholder="john@example.com"
      />
    </Fragment>
  );
};

export default CandidateDetails;
