import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';
import { Form } from 'shared/components';

export const FormElement = styled(Form.Element)`
  padding: 25px 40px 35px;
`;

export const FormHeading = styled.div`
  padding-bottom: 15px;
  ${font.size(21)}
`;

export const FieldLabel = styled.label`
  display: block;
  padding-bottom: 5px;
  color: ${color.textMedium};
  margin-top: 20px;
  ${font.medium}
  ${font.size(18)}
`;

export const Divider = styled.div`
  margin-top: 22px;
  border-top: 1px solid ${color.borderLightest};
`;