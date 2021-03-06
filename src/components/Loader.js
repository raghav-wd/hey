import React from 'react';
import '../css/loader.css'

class Loader extends React.Component {
    render() {
        if(this.props.isMobile)
        return (
            <div className="loader">
            <div className="container">
                <div className="cube">
                    <div className="sides">
                        <div className="top"></div>
                        <div className="right"></div>
                        <div className="bottom"></div>
                        <div className="left"></div>
                        <div className="front"></div>
                        <div className="back"></div>
                    </div>
                </div>
            </div>
        </div>
        )
        else return <React.Fragment/>
    }
}

export default Loader;