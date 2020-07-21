import styled from 'styled-components';

import { font } from 'shared/utils/styles';
import { Button } from 'shared/components';

export const Container = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  color: black;
  padding-top: 25px;
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
