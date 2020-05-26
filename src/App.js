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
    playFeaturedText: true
  }
  clcked = (tab) => {
    this.setState({ tab, playFeaturedText: false }, () => {      
      this.Scene.tabClicked(tab);
      this.PageRenderer.tabClicked(tab);
    })
  }
  render() {
    return (
    <div className="App">
      <Loader />
      <PageRenderer ref={PageRenderer => this.PageRenderer = PageRenderer} tab={this.state.tab}/>  
      <Scene ref={Scene => this.Scene = Scene}/>
      <FeaturedText play={this.state.playFeaturedText}/>
      <BottomBar clicked={this.clcked} />
    </div>
  );
  }
}

export default App;
