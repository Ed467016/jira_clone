import React, { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import { Form } from 'shared/components';
import authService from 'shared/services/auth';
import usePromiseHandler from 'shared/hooks/promiseHandler';
import logo from '../App/assets/images/logo.png';
import { Container, FormHeading, FormElement, Actions, ActionButton, AppLogo } from './Styles';

const Authenticate = () => {
  const history = useHistory();

  const initialValues = {
    email: '',
    password: '',
  };

  const validations = {
    email: [Form.is.required(), Form.is.email()],
    password: [Form.is.required()],
  };

  const signInHandler = usePromiseHandler(authService.signIn);

  const onSubmit = async (values, form) => {
    const [res, error] = await signInHandler(values);
    
    if (res) history.push('/');
    else Form.handleAPIError(error, form);
  };

  return (
    <Container>
      <Fragment>
        <Form
          enableReinitialize
          initialValues={initialValues}
          validations={validations}
          onSubmit={onSubmit}
        >
          <FormElement>
            <FormHeading>
              <AppLogo src={logo} />
            </FormHeading>
            <Form.Field.Input name="email" label="E-mail" tip="Your email address." />
            <Form.Field.Input
              name="password"
              label="Password"
              tip="Enter the password."
              type="password"
            />
            <Actions>
              <ActionButton type="submit" variant="primary">
                Sign In
              </ActionButton>
            </Actions>
          </FormElement>
        </Form>
      </Fragment>
    </Container>
  );
};

export default Authenticate;
