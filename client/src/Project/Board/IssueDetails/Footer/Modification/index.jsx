import React from 'react';
import PropTypes from 'prop-types';

import useApi from 'shared/hooks/api';
import toast from 'shared/utils/toast';
import { Form } from 'shared/components';

import { FormHeading, FormElement, Actions, ActionButton } from './Styles';

const propTypes = {
  modalClose: PropTypes.func.isRequired,
};

const Modification = ({ modalClose }) => {
  const [{ isWorking }, requestModification] = useApi.post('/issue/modify');

  return (
    <Form
      enableReinitialize
      initialValues={{
        comment: '',
      }}
      isSubmitting={isWorking}
      validations={{
        comment: [Form.is.required(), Form.is.maxLength(512), Form.is.minLength(6)],
      }}
      onSubmit={async (values, form) => {try {
        await requestModification(values);
        form.resetForm();
        modalClose();
        toast.success('Request has been sent successfully.');
      } catch (error) {
        Form.handleAPIError(error, form);
      }}}
    >
      <FormElement>
        <FormHeading>Request Modification/Cancellation</FormHeading>
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
          <ActionButton type="submit" variant="primary" isWorking={isWorking}>
          Submit
          </ActionButton>
        </Actions>
      </FormElement>
    </Form>
  );
};

Modification.propTypes = propTypes;

export default Modification;
