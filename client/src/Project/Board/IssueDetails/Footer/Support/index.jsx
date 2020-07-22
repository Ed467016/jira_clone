import React from 'react';
import PropTypes from 'prop-types';

import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Form } from 'shared/components';

import { FormHeading, FormElement, Actions, ActionButton } from './Styles';

const propTypes = {
  modalClose: PropTypes.func.isRequired,
};

const Support = ({ modalClose }) => {
  const [{ isCreating }, contactSupport] = useApi.post('/support');

  return (
    <Form
      enableReinitialize
      initialValues={{
        comment: '',
      }}
      isSubmitting={isCreating}
      validations={{
        comment: [Form.is.required(), Form.is.maxLength(512), Form.is.minLength(6)],
      }}
      onSubmit={async (values, form) => {
        try {
          await contactSupport(values);
          form.resetForm();
          modalClose();
          toast.success('Comments has been sent to support.');
        } catch (error) {
          Form.handleAPIError(error, form);
        }
      }}
    >
      <FormElement>
        <FormHeading>Contact Support</FormHeading>
        <Form.Field.Textarea
          name="comment"
          type="textarea"
          label="Comments"
          style={{
            resize: 'none',
            maxHeight: '200px',
            overflow: 'auto'
          }}
        />
        <Actions>
          <ActionButton type="button" variant="empty" onClick={modalClose}>
            Cancel
          </ActionButton>
          <ActionButton type="submit" variant="primary" isWorking={isCreating}>
            Submit
          </ActionButton>
        </Actions>
      </FormElement>
    </Form>
  );
};

Support.propTypes = propTypes;

export default Support;
