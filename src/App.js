import React from 'react';

import Loader from './components/Loader'
import Scene from './components/Scene'
import BottomBar from './components/BottomBar'
import FeaturedText from './components/FeaturedText'
import PageRenderer from './components/PageRenderer'
import './App.css';

class App extends React.Component {
  state = {
    tab: "home",
    isMobile: true,
    playFeaturedText: false
  }
  clcked = (tab) => {
    this.setState({ tab, playFeaturedText: false }, () => {     
      // if(!this.state.isMobile)
        this.Scene.tabClicked(tab);
      this.PageRenderer.tabClicked(tab);
      this.FeaturedText.tabClicked(tab);
    })
  }
  componentDidMount() {
    document.title = "Hey! | Raghav Gupta Portfolio"
  }
  render() {
    return (
    <div className="App">
      <Loader isMobile={!this.state.isMobile}/>
      <PageRenderer ref={PageRenderer => this.PageRenderer = PageRenderer} tab={this.state.tab}/>  
      <Scene ref={Scene => this.Scene = Scene} isMobile={this.state.isMobile}/>
      <FeaturedText play={this.state.isMobile} ref={FeaturedText => this.FeaturedText = FeaturedText} tab={this.state.tab}/>
      <BottomBar clicked={this.clcked} />
    </div>
  );
  }
}

export default App;
