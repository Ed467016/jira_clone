import styled from 'styled-components';

import { color, font, mixin } from 'shared/utils/styles';

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 5px;
  min-height: 400px;
  width: 100%;
  border-radius: 3px;
  background: ${color.backgroundLightest};
`;

export const Title = styled.div`
  padding: 13px 10px 17px;
  text-transform: uppercase;
  color: ${color.textMedium};
  ${font.size(12.5)};
  ${mixin.truncateText}
`;

export const IssuesCount = styled.span`
  display: inline-block;
  margin-left: 3px;
  text-transform: lowercase;
  ${font.size(13)};
`;

export const Issues = styled.div`
  height: 100%;
  padding: 0 5px;
`;
