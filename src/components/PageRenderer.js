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
    let pageColors = ["#090909", "#7e57c2", "#ffa000", "#ffeb3b"];
    let setBackgroundColor = (color) => document.getElementsByTagName("body")[0].style.backgroundColor = color;
    // this.featuredTextTimeline = new FeaturedTextTimeline();
    switch (this.state.page) {
      case 'home':
        setBackgroundColor(pageColors[0]);
        return(<React.Fragment/>)
      case 'skills':
        setBackgroundColor(pageColors[1]);
        return (<Skills />)
      case 'projects':
        setBackgroundColor(pageColors[2]);
        return (<Projects />)
      case 'get_in_touch':
        setBackgroundColor(pageColors[3]);
        return (<GetInTouch/> )
      default:
        return(<React.Fragment/>)
    }
  }
}

export default PageRenderer;
