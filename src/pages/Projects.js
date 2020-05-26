import React from 'react';
import gsap from 'gsap';

class Projects extends React.Component {
constructor(props) {
    super(props)
    this.yuri = this.yuri.bind(this);
}
    
yuri() {
    alert("hi")    
}
    
setProjectBoard(title, platform, programmedIn, description, grabbed) {
    var p_title = document.getElementById("p-title");
    var p_platform = document.getElementById("p-platform");
    var p_programmedIn = document.getElementById("p-programmedIn");
    var p_description = document.getElementById("p-description");
    var p_grabbed = document.getElementById("p-grabbed");

    p_title.innerHTML = title;
    p_platform.innerHTML = platform;
    p_programmedIn.innerHTML = programmedIn;
    p_description.innerHTML = description;
    p_grabbed.innerHTML = grabbed;
}

toggle() {
    // alert(this.projectList.offsetHeight +", "+ closeBtn.offsetHeight)
    gsap.to(this.projectBoard, { x: 100, opacity: 0 })
    gsap.to(this.projectList, 0.5, { opacity: 1, y: -(this.projectBoard.offsetHeight) })
}

componentDidMount() {
    this.projectBoard = document.getElementById("project-board");
    this.projectList = document.getElementById("project-list");
    // alert(this.projectList.offsetTop)    
    let projectBoard = this.projectBoard;
    let projectList = this.projectList;
    //Setting
    let setProjectBoard = this.setProjectBoard;
    [].slice.call(document.getElementsByClassName("p-project-card")).forEach(function (projectCard) {
        projectCard.addEventListener("click", function () {

            let title = this.querySelector("#data-title").innerHTML;
            let platform = this.querySelector("#data-platform").innerHTML;
            let programmedIn = this.querySelector("#data-programmedIn").innerHTML;
            let description = this.querySelector("#data-description").innerHTML;
            let grabbed = this.querySelector("#data-grabbed").innerHTML;

            if (true) {
                gsap.fromTo(projectBoard, 0.5, { x: 100 }, { x: 0, opacity: 1, display: "block" })
                gsap.to(projectList, 0, { y:projectBoard.offsetHeight, opacity: 0 })
            }
            setProjectBoard(title, platform, programmedIn, description, grabbed);
        });
    });
}

render() {
    return (
        <div className="m-page-container">
            <div className="m-page grey-text text-lighten-4">
                <div className="m-head white-text">Projects</div>
                <div className="row">
                    <div id="project-board" className="col l8 s12 p-project-board border left-align">
                        <i class = "material-icons right small hide-on-med-and-up" id="close-btn" onClick={()=>this.toggle()}>close</i>
                        <div><div className="p-head">Project: </div><h5 className="i-b" className="i-b" id="p-title">MusicPlayer</h5></div>
                        <div><div className="p-head">Development Platform: </div><div className="i-b" id="p-platform">Android Studio</div></div>
                        <div><div className="p-head">Programed in: </div><div className="i-b" id="p-programmedIn">Java, PHP, MySQL, SQLite</div></div>
                        <div id="p-description">This app fetches the lyrics, album art and album info of track stored offline.</div>
                        <div><div className="p-head">Grabbed: </div><div className="i-b" id="p-grabbed">RecyclerView</div></div>
                    </div>
                    <div id="project-list" className="col l4 s12 p-project-list">
                        <br/>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">MusicPlayer</span></div>
                            <span id="data-platform" className="hide">Android Studio, Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Java, PHP, MySQL, SQLite, XML</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Musicplayer app on android devices, smoothly fetches lyrics/track info/album art and saves it.</span></div>
                            <span id="data-grabbed" className="hide">iTagv3, MediaPlayer APIs[Android], Glide, Volley, API, Caching through sqlite.</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">FoodDude</span></div>
                            <span id="data-platform" className="hide">Visual Studio, Materialize</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">To outrun the late night hunger prevailing in the night. I took it upon me to </span></div>
                            <span id="data-grabbed" className="hide">Teamwork, E-commerce experience and Sales</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">TheRaghavGupta.com</span></div>
                            <span id="data-platform" className="hide">Visual Studio & Three.js</span>
                            <span id="data-programmedIn" className="hide">JavaScript</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">This site too is a work of art by me.</span></div>
                            <span id="data-grabbed" className="hide">Three.js, ES6 and Gsap</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Rose</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">Your personal bot which can talk to you, tell you about things you want to know through voice interface.</span></div>
                            <span id="data-grabbed" className="hide">Creating and Integrating APIs, recognizing speech patterns in English and extracting useful info from the spoken words.</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Wennn</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL, Materialize</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">Developed this too inform students about the events happening in the college.</span></div>
                            <span id="data-grabbed" className="hide">Content Management System Development on PHP, Sessions and Dynamic Sites</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">StuffLost</span></div>
                            <span id="data-platform" className="hide">Sublime</span>
                            <span id="data-programmedIn" className="hide">HTML, CSS, JS, PHP & MySQL</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">Lots of time we just losts things. See how I created the website to find lost stuff.</span></div>
                            <span id="data-grabbed" className="hide">File Uploading System</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">VocabList</span></div>
                            <span id="data-platform" className="hide">Sublime</span>
                            <span id="data-programmedIn" className="hide">JavaScript and PHP</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description">As being learner in English and Japanese, I needed a memo to save words and phrases.</span></div>
                            <span id="data-grabbed" className="hide">Messaging System, Web App Development and Service Workers</span>
                        </div>
                    </div>
                </div>
            </div>       
        </div>
    );
  }
}

export default Projects;
