import React from 'react';

import { ProjectAvatar } from 'shared/components';

import {
  Sidebar,
  ProjectInfo,
  ProjectTexts,
  ProjectName,
} from './Styles';

const ProjectSidebar = () => {
  return (
    <Sidebar>
      <ProjectInfo>
        <ProjectAvatar />
        <ProjectTexts>
          <ProjectName>Welcome</ProjectName>
        </ProjectTexts>
      </ProjectInfo>
    </Sidebar>
  );
};

export default ProjectSidebar;
