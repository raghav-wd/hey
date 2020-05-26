import React from 'react';
import Skills from '../pages/Skills'
import Projects from '../pages/Projects'
import GetInTouch from '../pages/GetInTouch'

class PageRenderer extends React.Component {
  state = {
    page: 'home'
  }
  tabClicked(tab) {
    this.setState({page: tab})
  }
  
  render() {
    switch (this.state.page) {
      case 'skills':
        return ( <Skills/> )
      case 'projects':
        return (<Projects />)
      case 'get_in_touch':
        return (<GetInTouch/> )
      default:
        return(<React.Fragment/>)
    }
  }
}

export default PageRenderer;
