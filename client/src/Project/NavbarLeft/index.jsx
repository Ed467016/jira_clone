import React from 'react';
import PropTypes from 'prop-types';

import { Icon, AboutTooltip } from 'shared/components';

import { NavLeft, LogoLink, StyledLogo, Bottom, Item, ItemText } from './Styles';

const propTypes = {
  issueCreateModalOpen: PropTypes.func.isRequired,
};

const ProjectNavbarLeft = ({ issueCreateModalOpen }) => (
  <NavLeft>
    <LogoLink to="/">
      <StyledLogo color="#fff" />
    </LogoLink>

    <Item onClick={issueCreateModalOpen}>
      <Icon type="plus" size={27} />
      <ItemText>Create Issue</ItemText>
    </Item>

    <Bottom>
      <AboutTooltip
        placement="right"
        offset={{ top: -218 }}
        renderLink={linkProps => (
          <Item {...linkProps}>
            <Icon type="help" size={25} />
            <ItemText>About</ItemText>
          </Item>
        )}
      />
    </Bottom>
  </NavLeft>
);

ProjectNavbarLeft.propTypes = propTypes;

export default ProjectNavbarLeft;
