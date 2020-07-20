import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './Styles';

const propTypes = {
  status: PropTypes.string.isRequired,
  project: PropTypes.object.isRequired
};

const ProjectBoardList = ({ status, project }) => {
  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <List>
          <Title>
            Issues
            <IssuesCount>{project.issues.length}</IssuesCount>
          </Title>
          <Issues
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
          >
            {project.issues.map((issue, index) => (
              <Issue key={issue.id} issue={issue} index={index} />
            ))}
            {provided.placeholder}
          </Issues>
        </List>
      )}
    </Droppable>
  );
};

ProjectBoardList.propTypes = propTypes;

export default ProjectBoardList;
