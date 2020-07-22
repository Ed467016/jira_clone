import React from 'react';
import PropTypes from 'prop-types';
import { useRouteMatch } from 'react-router-dom';
import { Draggable } from 'react-beautiful-dnd';

import config from 'shared/utils/mock.data.json';

import { IssueLink, Issue, Label, Left, Right } from './Styles';

const propTypes = {
  issue: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

const checksMapping = () => {
  const res = {};
  for (const check of config.checkTypes) {
    res[check.id] = check;
  }

  return res;
}
const mappings = checksMapping();

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
          <Issue bgColor={mappings[issue.status]} isBeingDragged={snapshot.isDragging && !snapshot.isDropAnimating}>
            <Left>
              <Label>{issue.candidate.fullName}</Label>
              <Label>{issue.candidate.mobile}</Label>
              <Label>{issue.candidate.email}</Label>
            </Left>
            <Right>
              <Label>Status</Label>
              <Label>{mappings[issue.status].name}</Label>
            </Right>
          </Issue>
        </IssueLink>
      )}
    </Draggable>
  );
};

ProjectBoardListIssue.propTypes = propTypes;

export default ProjectBoardListIssue;
