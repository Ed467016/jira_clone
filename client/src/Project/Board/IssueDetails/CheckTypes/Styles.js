import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div `
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
  margin-top: 20px;
  
  @media (max-width: 810px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CheckButton = styled(Button)`
  width: 100%;
  height: 100px;
  white-space: break-spaces;
  max-width: 100%;
  background-color: ${props => props.color};
  border: 1px solid #dfe1e6;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CheckButtonLabel = styled.label`
  color: black;
  ${font.medium}
  ${font.size(18)}
  cursor: pointer;
`;
