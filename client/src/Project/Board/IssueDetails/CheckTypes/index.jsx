import React from 'react';
import { FieldArray } from 'formik';

import { Form } from 'shared/components';

import { Container, CheckButton, CheckButtonLabel } from './Styles';

const CheckTypes = ({form, replace}) => {
  const toggle = (index) => {
    const el = form.values.checkTypes[index];
    el.checked = !el.checked;
    replace(index, el);
  };

  return (
    <Form>
      <Container>
        <FieldArray
          name="checkTypes"
          render={() =>
            form.values.checkTypes.map((type, index) => (
              <CheckButton
                onClick={() => toggle(index)}
                key={index}
                color={type.checked ? type.color : 'white'}
                type="button"
              >
                <CheckButtonLabel>{type.name}</CheckButtonLabel>
              </CheckButton>
            ))
          }
        />
      </Container>
    </Form>
  );
};

export default CheckTypes;
