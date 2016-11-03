import React, {PropTypes} from 'react'
import Drawer from 'material-ui/Drawer'
import {IndexLink, Link} from 'react-router'
import {ListItem} from 'material-ui/List'
import Home from 'material-ui/svg-icons/action/home'

const SlideDrawer = ({handleToggle, open, setTitle}) => (
   <Drawer
      width={300}
      docked={false}
      open={open}
      onRequestChange={e => handleToggle(e)}>
      <IndexLink to="/" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Home" leftIcon={<Home/>} onTouchTap={e => setTitle('Home')}/>
      </IndexLink>
      {/* <Link to="/projects" className='link' activeClassName="active" onTouchTap={handleToggle}>
        <ListItem primaryText="Projects" leftIcon={<Project/>} onTouchTap={e => setTitle('Projects')}/>
      </Link> */}
    </Drawer>
)

SlideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  handleToggle: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired
}

export default SlideDrawer
