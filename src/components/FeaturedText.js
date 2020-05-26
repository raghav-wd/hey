import React from 'react';
import FeaturedTextTimeline from './gsap/FeaturedTextTimeline'

class FeaturedText extends React.Component{
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        if (this.props.play) new FeaturedTextTimeline().play();
    }
    render() {
        const featuredTextStyling = {
            position: "absolute",
            fontSize: "32px",
            top: "50vh",
            left: "50vw",
            transform: "translate(-50%, -50%)",
            color: "white"
        }

        return (
            <React.Fragment>
                <div className="m-welcome" style={featuredTextStyling}>
                    <div className="m-text-1">Hi! I'm Raghav</div>
                    <div className="m-text-2">Nice To Meet Ya.</div>
                </div>
                <   div className="m-text-3" style={featuredTextStyling}>Our skills connect.</div>
            </React.Fragment>
        )
    }
}

export default FeaturedText;