import React from 'react';
import '../App.css';

class BottomBar extends React.Component{
    clickk() {
        alert("hi")
    }
    render() {
        const bottomBarStyling = {
            "position": "fixed",
            "transform": "translateX(-50%)",
            "whiteSpace": "nowrap",
            "bottom": "20px",
            "left": "50%",
            "color": "white",
            "height": "5vh",
            "zIndex": "100"
        }

        const navLinksStyling = {
            textDecoration: "none",
            padding: "12px 15px 12px 15px",
            fontSize: "18px",
            color: "#333",
            fontFamily: "fantasy",
            display: "inline-block"
        }

        return (
            <div className="r-bottombar" style={bottomBarStyling}>
                <div className="navLinks" style={navLinksStyling}  onClick={this.props.clicked.bind(this, "home")}>Home</div>
                <div className="navLinks" style={navLinksStyling}  onClick={this.props.clicked.bind(this, "skills")}>Skills</div>
                <div className="navLinks" style={navLinksStyling}  onClick={this.props.clicked.bind(this, "projects")}>Projects</div>
                <div className="navLinks" style={navLinksStyling}  onClick={this.props.clicked.bind(this, "get_in_touch")}>Get in Touch</div>
            </div>
        )
    }
}

export default BottomBar;