import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div `
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-end;
  color: black;
  ${font.medium}
  ${font.size(18)}
`;

export const LinkButton = styled(Button)`
  width: 100%;
  max-width: 200px; 
  white-space: normal;
  line-height: 20px;
  padding: 25px;
`;
