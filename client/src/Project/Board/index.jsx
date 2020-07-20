import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Route, useRouteMatch, useHistory } from 'react-router-dom';

import { Breadcrumbs, Modal } from 'shared/components';

import Header from './Header';
import Lists from './Lists';
import IssueDetails from './IssueDetails';

const propTypes = {
  project: PropTypes.object.isRequired,
  fetchProject: PropTypes.func.isRequired,
  updateLocalProjectIssues: PropTypes.func.isRequired,
};

const ProjectBoard = ({ project, fetchProject, updateLocalProjectIssues }) => {
  const match = useRouteMatch();
  const history = useHistory();

  return (
    <Fragment>
      <Breadcrumbs items={['Projects', project.name, 'Kanban Board']} />
      <Header />
      <Lists
        project={project}
        updateLocalProjectIssues={updateLocalProjectIssues}
      />
      <Route
        path={`${match.path}/issues/:issueId`}
        render={routeProps => (
          <Modal
            isOpen
            testid="modal:issue-details"
            width={1040}
            withCloseIcon={false}
            onClose={() => history.push(match.url)}
            renderContent={modal => (
              <IssueDetails
                issueId={routeProps.match.params.issueId}
                projectUsers={project.users}
                fetchProject={fetchProject}
                updateLocalProjectIssues={updateLocalProjectIssues}
                modalClose={modal.close}
              />
            )}
          />
        )}
      />
    </Fragment>
  );
};

ProjectBoard.propTypes = propTypes;

export default ProjectBoard;
