import React, { PropTypes } from 'react';
import ToolbarSearch from './ToolbarSearch';
import classNames from 'classnames';

const propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

const toolbarItemPropTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  placeHolderText: PropTypes.string,
};

const toolbarTitlePropTypes = {
  title: PropTypes.string,
};

const toolbarOptionPropTypes = {
  children: PropTypes.node,
};

const Toolbar = ({ children, className, ...other }) => {
  const wrapperClasses = classNames('bx--toolbar', className);

  return (
    <div className={wrapperClasses} {...other}>
      {children}
    </div>
  );
};

const ToolbarItem = ({ children, type, placeHolderText }) => {
  const toolbarItem = type === 'search'
    ? <ToolbarSearch placeHolderText={placeHolderText} />
    : children;
  return toolbarItem;
};

const ToolbarTitle = ({ title }) => (
  <li className="bx--toolbar-menu__title">
    {title}
  </li>
);

const ToolbarOption = ({ children }) => (
  <li className="bx--toolbar-menu__option">{children}</li>
);

const ToolbarDivider = () => <hr className="bx--toolbar-menu__divider" />;

Toolbar.propTypes = propTypes;
ToolbarItem.propTypes = toolbarItemPropTypes;
ToolbarTitle.propTypes = toolbarTitlePropTypes;
ToolbarOption.propTypes = toolbarOptionPropTypes;

export { Toolbar, ToolbarItem, ToolbarTitle, ToolbarOption, ToolbarDivider };
