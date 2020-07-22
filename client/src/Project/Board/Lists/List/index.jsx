import React from 'react';
import PropTypes from 'prop-types';
import { Droppable } from 'react-beautiful-dnd';
import Issue from './Issue';
import { List, Title, IssuesCount, Issues } from './Styles';

const propTypes = {
  status: PropTypes.string.isRequired,
  issues: PropTypes.array.isRequired
};

const ProjectBoardList = ({ status, issues }) => {
  return (
    <Droppable key={status} droppableId={status}>
      {provided => (
        <List>
          <Title>
            Issues
            <IssuesCount>{issues.length}</IssuesCount>
          </Title>
          <Issues
            {...provided.droppableProps}
            ref={provided.innerRef}
            data-testid={`board-list:${status}`}
          >
            {issues.map((issue, index) => (
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
