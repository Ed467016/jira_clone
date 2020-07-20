import React from 'react';
import PropTypes from 'prop-types';
import { FieldArray } from 'formik';
import { cloneDeep } from 'lodash';

import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Form } from 'shared/components';

import CheckTypes from './CheckTypes';
import CandidateDetails from './CandidateDetails';
import PricingResults from './PricingResults';
import config from './config.json';

import { FormHeading, FormElement, Divider, Actions, ActionButton, FieldLabel } from './Styles';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  modalClose: PropTypes.func.isRequired,
};

const ProjectIssueCreate = ({ project, fetchProject, modalClose }) => {
  const mobileRegex = /^[+]{0,1}[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/;
  const [{ data, isCreating }, createIssue] = useApi.post('/project/issue');

  return (
    <Form
      enableReinitialize
      initialValues={{
        fullName: 'asd',
        mobile: '+(123) 45-67-89-00',
        email: 'admin@gmail.com',
        checkTypes: cloneDeep(config.checkTypes),
      }}
      isSubmitting={isCreating}
      validations={{
        fullName: [Form.is.required(), Form.is.maxLength(200)],
        mobile: [Form.is.required(), Form.is.pattern(mobileRegex, '+(123) 45-67-89-00')],
        email: [Form.is.required(), Form.is.email()],
      }}
      onSubmit={async (values, form) => {
        try {
          const checkTypes = values.checkTypes.filter(q => q.checked).map(q => q.name);
          await createIssue({
            ...values,
            checkTypes,
            projectId: project.id
          });
          toast.success('Issue has been successfully created.');
          await fetchProject();
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormElement>
        <FormHeading>Create issue</FormHeading>
        <FieldLabel>Checks Requested</FieldLabel>
        <FieldArray name="checkTypes" component={CheckTypes} />
        <Divider />
        <FieldLabel>Candidate Details</FieldLabel>
        <CandidateDetails />
        <Divider />
        <FieldLabel>Results</FieldLabel>
        <PricingResults cost={data && data.cost} days={data && data.days} />
        <Actions>
          <ActionButton type="button" variant="empty" onClick={modalClose}>
            Cancel
          </ActionButton>
          <ActionButton type="submit" variant="primary" isWorking={isCreating}>
            Create Issue
          </ActionButton>
        </Actions>
      </FormElement>
    </Form>
  );
};

ProjectIssueCreate.propTypes = propTypes;

export default ProjectIssueCreate;
