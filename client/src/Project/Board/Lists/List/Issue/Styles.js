import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { color, font, mixin } from 'shared/utils/styles';

export const IssueLink = styled(Link)`
  display: block;
  margin-bottom: 5px;
`;

export const Issue = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-radius: 3px;
  background: #fff;
  box-shadow: 0px 1px 2px 0px rgba(9, 30, 66, 0.25);
  transition: background 0.1s;
  ${mixin.clickable}
  @media (max-width: 1100px) {
    padding: 10px 8px;
  }
  &:hover {
    background: ${color.backgroundLight};
  }
  ${props =>
    props.isBeingDragged &&
    css`
      transform: rotate(3deg);
      box-shadow: 5px 10px 30px 0px rgba(9, 30, 66, 0.15);
    `}
`;

export const Title = styled.p`
  padding-bottom: 11px;
  ${font.size(15)}
  @media (max-width: 1100px) {
    ${font.size(14.5)}
  }
`;

export const Label = styled.p`
  ${font.medium}
  color: ${color.textMedium};
  text-align: center;
  ${font.size(18)}
`;

export const Left = styled.div`
`;

export const Right = styled.div`
`;