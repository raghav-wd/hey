import React from 'react';
import FeaturedTextTimeline from './gsap/FeaturedTextTimeline'
import gsap from 'gsap'

class FeaturedText extends React.Component{
    constructor(props) {
        super(props)
        // this.featuredTextTimeline = new FeaturedTextTimeline();
    }
    state = {
        page: 'home'
    }
    tabClicked(tab) {
        if (tab != "home")
           gsap.to(".m-text-3", { opacity: 0, duration: 0.3, x: 50, delay: 0 });
        this.setState({page: tab})
        switch (tab) {
        case 'home':
            gsap.fromTo(".m-text-3", { opacity: 0, duration: 0, x: -50, delay: 0 }, { opacity: 1, duration: 0.3, x: 0, delay: 0.5 }); 
            break;
        case 'skills':
            this.featuredTextTimeline.end()
            break;
        case 'projects':
            this.featuredTextTimeline.end()
            break;
        case 'get_in_touch':
            this.featuredTextTimeline.end()
            break;
        default:
            break;
        }
    }
    componentDidMount() {
        this.featuredTextTimeline = new FeaturedTextTimeline();
        if (this.props.play) this.featuredTextTimeline.play();
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