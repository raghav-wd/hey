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
    
setProjectBoard(title, platform, programmedIn, grabbed, github, description) {
    var p_title = document.getElementById("p-title");
    var p_platform = document.getElementById("p-platform");
    var p_programmedIn = document.getElementById("p-programmedIn");
    var p_grabbed = document.getElementById("p-grabbed");
    var p_github = document.getElementById("p-github");
    var p_description = document.getElementById("p-description");

    p_title.innerHTML = title;
    p_platform.innerHTML = platform;
    p_programmedIn.innerHTML = programmedIn;
    p_grabbed.innerHTML = grabbed;
    p_github.innerHTML = github;
    p_description.innerHTML = description;
}

toggle() {
    // alert(this.projectList.offsetHeight +", "+ closeBtn.offsetHeight)
    if (window.innerWidth < 600) {
        gsap.to(this.projectBoard, { x: 100, opacity: 0 })
        gsap.to(this.projectList, 0.5, { opacity: 1, y: -(this.projectBoard.offsetHeight) })
    }
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
            let grabbed = this.querySelector("#data-grabbed").innerHTML;
            let github = this.querySelector("#data-github").innerHTML;
            let description = this.querySelector("#data-description").innerHTML;

            if (window.innerWidth < 600) {
                gsap.fromTo(projectBoard, 0.5, { x: 100 }, { x: 0, opacity: 1, display: "block" })
                gsap.to(projectList, 0, { y:projectBoard.offsetHeight, opacity: 0 })
            }
            setProjectBoard(title, platform, programmedIn, grabbed, github, description);
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
                        <i className="material-icons right small hide-on-med-and-up" id="close-btn" onClick={()=>this.toggle()}>close</i>
                        <div><div className="p-head">Project: </div><h5 className="i-b" className="i-b" id="p-title">MusicPlayer</h5></div>
                        <div><div className="p-head">Development Platform: </div><div className="i-b" id="p-platform">Android Studio, Visual Studio</div></div>
                        <div><div className="p-head">Programed in: </div><div className="i-b" id="p-programmedIn">Java, PHP, MySQL, SQLite, XML</div></div>
                        {/* <div id="p-description">This app fetches the lyrics, album art and album info of track stored offline.</div> */}
                        <div><div className="p-head">Grabbed: </div><div className="i-b" id="p-grabbed">iTagv3, MediaPlayer APIs[Android], Glide, Volley, API, Caching through sqlite.</div></div>
                        <div><div className="p-head">Github: </div><div className="i-b" id="p-github"></div></div>
                        <div><div className="p-head">Description: </div><div className="i-b" id="p-description">Musicplayer app on android devices, smoothly fetches lyrics/track info/album art and saves it.</div></div>
                    </div>
                    <div id="project-list" className="col l4 s12 p-project-list">
                        <br/>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Musifire</span></div>
                            <span id="data-platform" className="hide">Android Studio, Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Java, PHP, MySQL, SQLite, XML</span>
                            <div className="divider"></div>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Musicplayer app on android devices, smoothly fetches lyrics/track info/album art and saves it.</span></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/Musifire-Software-Development-Project.git'>https://github.com/raghav-wd/Musifire-Software-Development-Project.git</a></span>
                            <span id="data-grabbed" className="hide">iTagv3, MediaPlayer APIs[Android], Glide, Volley, API, Caching through sqlite.</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Skima</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Web Languages, React.js, PHP&MySQL</span>
                            <div className="divider"></div>
                            <span id="data-grabbed" className="hide">Teamwork, E-commerce experience and Sales</span>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/Better-academia.git'>https://github.com/raghav-wd/Better-academia.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Revamped college's academic website to a more UI intensive and analytical PW. Available as an installable web app on android, ios, windows and macOS.</span></div>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">FoodDude</span></div>
                            <span id="data-platform" className="hide">Visual Studio, Materialize</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/FoodDude.git'>https://github.com/raghav-wd/FoodDude.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">A mini-startup, I invented when I came across a problem during my first year in my college hostel. As I was used to being sleeping late at night, I always had to deal with the urge of eating snacks at night but our hostel didn't have any facility of canteen at night. So I took it upon me to run an experiment to start a wholesome business. The main idea was to develop a software to manage sales of the snacks.</span></div>
                            <span id="data-grabbed" className="hide">Teamwork, E-commerce experience and Sales</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Porfolio Website</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">React Js & Three.js</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/hey.git'>https://github.com/raghav-wd/hey.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Outlook of the portAt first I decided to make the my website on Vanilla js </span></div>
                            <span id="data-grabbed" className="hide">Three.js, ES6 and Gsap</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Musify (HackSprintv2.0 - Team Creedorians)</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">React.js, Bootstrap, PHP, MySQL</span>
                            <div className="divider"></div>
                            <span id="data-grabbed" className="hide">iTagv3, MediaPlayer APIs[Android], Glide, Volley, API, Caching through sqlite.</span>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/lavanyasingh9/hacksprint_ps14_creedorians.git'>https://github.com/lavanyasingh9/hacksprint_ps14_creedorians.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Problem Statement : Web application for a music company to segregate playlists based on different moods (ex. Happy, sad, calm, energetic, etc). Two types of users: Company Representative(Admin) and Business User (End user). Company user can add, modify, classify and delete songs from the system. Business user can search and listen to songs according the mood specified. Business user can give feedback on the mood based autogenerated playlist. The system should automatically change/add new mood type of that song(s) based on feedback.</span></div>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Rose</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/Rose-The-Assistant.git'>https://github.com/raghav-wd/Rose-The-Assistant.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Your personal bot which can talk to you, tell you about things you want to know through voice interface.</span></div>
                            <span id="data-grabbed" className="hide">Creating and Integrating APIs, recognizing speech patterns in English and extracting useful info from the spoken words.</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">Wennn</span></div>
                            <span id="data-platform" className="hide">Visual Studio</span>
                            <span id="data-programmedIn" className="hide">Web Languages, PHP&MySQL, Materialize</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/Wennn.git'>https://github.com/raghav-wd/Wennn.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">Developed this too inform students about the events happening in the college.</span></div>
                            <span id="data-grabbed" className="hide">Content Management System Development on PHP, Sessions and Dynamic Sites</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">StuffLost</span></div>
                            <span id="data-platform" className="hide">Sublime</span>
                            <span id="data-programmedIn" className="hide">HTML, CSS, JS, PHP & MySQL</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/StuffLost.git'>https://github.com/raghav-wd/StuffLost.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">It happens a lot of time that we loose our stuff inside the hostel for this reason I had made an online platform where people can share lost findings and the person who had lost it could find it.</span></div>
                            <span id="data-grabbed" className="hide">File Uploading System</span>
                        </div>
                        <div className="p-project-card border left-align">
                            <div className="p-project-card-head">#<span id="data-title">VocabList</span></div>
                            <span id="data-platform" className="hide">Sublime</span>
                            <span id="data-programmedIn" className="hide">JavaScript and PHP</span>
                            <div className="divider"></div>
                            <span id="data-github" className="hide"><a target='_blank' href='https://github.com/raghav-wd/VocabList.git'>https://github.com/raghav-wd/VocabList.git</a></span>
                            <div className="p-project-card-info"><span id="data-description" className="truncate">As being learner in English and Japanese, I needed a memo to save words and phrases. This apps web helped me to do the job.</span></div>
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
