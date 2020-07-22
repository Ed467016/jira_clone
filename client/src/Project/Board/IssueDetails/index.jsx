import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import { cloneDeep } from 'lodash';

import useApi from 'shared/hooks/api';
import { PageError, Form } from 'shared/components';
import config from 'shared/utils/mock.data.json';

import Loader from './Loader';
import CandidateDetails from './CandidateDetails';
import CheckTypes from './CheckTypes';
import PricingResults from './PricingResults';
import Footer from './Footer';

import { FormElement, FormHeading, FieldLabel, Divider } from './Styles';

const propTypes = {
  issueId: PropTypes.string.isRequired
};

const ProjectBoardIssueDetails = ({ issueId }) => {
  // REPLACE:: WITH issueId
  const [{ data, error }] = useApi.get(`/issues/5`);

  if (!data) return <Loader />;
  if (error) return <PageError />;

  const checkTypes = cloneDeep(config.checkTypes);
  checkTypes.find(q => q.id === data.status).checked = true;

  return (
    <Fragment>
      <Form
        enableReinitialize
        initialValues={{
          fullName: data.candidate.fullName,
          mobile: data.candidate.mobile,
          email: data.candidate.email,
          checkTypes,
        }}
      >
        <FormElement>
          <FormHeading>Issue Details</FormHeading>
          <FieldLabel>Checks Requested</FieldLabel>
          <FieldArray name="checkTypes" component={CheckTypes} />
          <Divider />
          <FieldLabel>Candidate Details</FieldLabel>
          <CandidateDetails url={data.candidate.url} downloadUrl={data.candidate.downloadUrl} />
          <Divider />
          <PricingResults cost={data.cost} endDate={data.endDate} />
          <Footer />
        </FormElement>
      </Form>
    </Fragment>
  );
};

ProjectBoardIssueDetails.propTypes = propTypes;

export default ProjectBoardIssueDetails;
