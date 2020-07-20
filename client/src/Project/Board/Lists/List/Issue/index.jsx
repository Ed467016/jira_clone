import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import { IssueLink, Issue, Label, Left, Right } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const ProjectBoardListIssue = ({ issue, index }) => {
  const match = useRouteMatch();

  return (
    <Draggable draggableId={issue.id.toString()} index={index}>
      {(provided, snapshot) => (
        <IssueLink
          to={`${match.url}/issues/${issue.id}`}
          ref={provided.innerRef}
          data-testid="list-issue"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Issue isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <Left>
              <Label>{issue.candidate.fullName}</Label>
              <Label>{issue.candidate.mobile}</Label>
              <Label>{issue.candidate.email}</Label>
            </Left>
            <Right>
              <Label>Status</Label>
              <Label>{issue.status}</Label>
            </Right>
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
