import styled from 'styled-components';

import { color, font } from 'shared/utils/styles';

export const Container = styled.div`
  width: 100%;
  padding-bottom: 5px;
  color: ${color.textMedium};
  margin-top: 10px;
  ${font.medium}
  ${font.size(18)}
`;

export const Result = styled.div`
`;

export const Label = styled.label`
  ${font.medium}
  ${font.size(18)}
  line-height: 40px;
  background-color: #F4F5F7;
  padding: 5px;
  border: 1px solid #dfe1e6;
  border-radius:3px;
`;

export const ResultLabel = styled.label`
  padding: 0 3px 0 6px;
  ${font.medium}
  ${font.size(18)}
`;
