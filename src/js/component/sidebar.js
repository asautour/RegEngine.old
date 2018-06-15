import React from 'react';
import MenuBar from './menubar';
import PropTypes from 'prop-types';
import ComponentFilter from './component-filter';

const styles = {
  sidebar: {
    width: 256,
    height: '100%',
  },
  sidebarLink: {
    display: 'block',
    padding: '1px 0px',
    color: '#757575',
    textDecoration: 'none',
  },
  content: {
    padding: '16px',
    height: '100%',
    backgroundColor: 'white',
  },
};

const SidebarContent = (props) => {
  const style = props.style ? { ...styles.sidebar, ...props.style } : styles.sidebar;

  const filters = [];

  for (let ind = 0; ind < 10; ind++) {
    filters.push(
      <a key={ind} href="#" style={styles.sidebarLink}><ComponentFilter/></a>);
  }

  return (
    <MenuBar title="Filters" style={style}>
      <div style={styles.content}>
        {filters}
      </div>
    </MenuBar>
  );
};

SidebarContent.propTypes = {
  style: PropTypes.object,
};

export default SidebarContent;
