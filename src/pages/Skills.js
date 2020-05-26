import React from 'react';
import '../App.css';

class Skills extends React.Component {    
render() {
    return (
    <React.Fragment>
        <div className="m-page-container">
            <div className="m-page">
                <div className="m-skills">
                    <div className="m-head">
                        Skills
                    </div>
                    <div className="m-body">
                        Expertise in <div className="">FullStack Web Development</div>
                        <div className="">Android Development</div>
                        <br/>
                        <div className="row">
                            <div className="col l3 s6 spaceit">
                                <div className="cont">
                                    <div className="m-subhead">Code in</div>
                                    <skill>HTML & CSS</skill>
                                    <skill>Javascript</skill>
                                    <skill>Android</skill>
                                    <skill>AJAX</skill>
                                    <skill>PHP & MySQL</skill>
                                    <skill>Java</skill>
                                    <skill>C/C++</skill>
                                </div>
                            </div>
                            <div className="col l3 s6">
                                <div className="cont">
                                    <div className="m-subhead">Framework</div>
                                    <skill>Three.js</skill>
                                    <skill>Gsap</skill>
                                    <skill>Materialize</skill>
                                </div>
                                <br /><br />
                                <div className="cont">
                                    <div className="m-subhead">Languages</div>
                                    <skill>English</skill>
                                    <skill>हिन्दी</skill>
                                    <skill>日本語</skill>
                                </div>
                                <br /><br />
                            </div>
                            <div className="col l3 s6">
                                <div className="cont">
                                    <div className="m-subhead">IDE/Softwares</div>
                                    <skill>Android Studio</skill>
                                    <skill>Blender</skill>
                                    <skill>VSCode</skill>
                                    <skill>Audition</skill>
                                    <skill>PremierPro/AfterEffect</skill>
                                    <skill>PhotoShop/Illustrator</skill>
                                </div>
                            </div>
                            <div className="col l3 s6">
                                <div className="cont">
                                    <div className="m-subhead">Hobbies</div>
                                    <skill>Anime &hearts;</skill>
                                    <skill>Cycling</skill>
                                    <skill>Sketching</skill>
                                    {/* <!-- <skill>Singing</skill> --> */}
                                    <skill>Freestyle football</skill>
                                    <skill>Piano</skill>
                                    {/* <!-- <skill>Chess</skill> --> */}
                                    <skill>Likes most of the fun stuff</skill>
                                </div>
                            </div>
                            {/* <div className="col l3 s6"></div>
                            <div className="col l3 s6">
                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>        
    </React.Fragment>
  );
  }
}

export default Skills;
