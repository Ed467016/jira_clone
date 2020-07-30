import React from 'react';

import { Header, BoardName } from './Styles';

const ProjectBoardHeader = ({ title }) => (
  <Header>
    <BoardName>{title}</BoardName>
  </Header>
);

export default ProjectBoardHeader;
