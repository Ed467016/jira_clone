import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button, Form } from 'shared/components';

export const Container = styled.div`
  margin: 0 auto;
  width: 40%;
  display: flex;
  align-items: center;
  flex: 0.6;
  ${font.size(24)}
`;

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
  width: 100%;
  border: 1px grey solid;
  height: fit-content;
  border-radius: 3px;
`;

export const AppLogo = styled.img`
  width: 100px;
`;

export const FormHeading = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 30px;
`;

export const ActionButton = styled(Button)`
  margin-left: 10px;
`;
