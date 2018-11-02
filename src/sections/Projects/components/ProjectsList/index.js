// @flow

import React from 'react';

import Table from 'semantic-ui-react/dist/commonjs/collections/Table';

import { render as renderComponent } from 'register/component';

import Responsive from 'components/Responsive';

import ProjectsList from './ProjectsList';

type ProjectsListWrapperProps = {
  projects: Array<projectTreeType>;
};

function ProjectsListWrapper(props: ProjectsListWrapperProps) {
  const { projects } = props;

  return (
    <Table>
      <Responsive min="tablet">
        {matched => matched && (
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                Name
              </Table.HeaderCell>
              {renderComponent('projects.tableheader.name', props)}
              <Table.HeaderCell width={5}>
                Parent
              </Table.HeaderCell>
              {renderComponent('projects.tableheader.parent', props)}
              <Table.HeaderCell width={1}>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
        )}
      </Responsive>
      <Table.Body>
        <ProjectsList projects={projects} />
      </Table.Body>
    </Table>
  );
}

export default ProjectsListWrapper;
