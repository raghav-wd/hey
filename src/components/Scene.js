import React from 'react';
import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import SceneSetup from './SceneSetup'
import Model from './models/Model'
import ModelsPromise from './ModelsPromise'
import PageLoader from './PageLoader'
import TwinLightBalls from './models/TwinLightBalls'
import Models_refactor from './threejs/Models_refactor'
import FeaturedTextTimeline from './gsap/FeaturedTextTimeline'
import gsap from 'gsap';

class Scene extends React.Component {
    constructor(props) {
        super(props)
        this.modelsPath = ["the_magic_room", "dancing_animation", "evangelion", "robot_playground"];        
    }

    tabClicked(tab) {
        this.tab = tab;

        if (this.tab != "home")
            gsap.to(".m-text-3", { opacity: 0, duration: 0.3, x: 50, delay: 0 });
        else {
            let rawModel = new Model(`./assests/the_magic_room/scene.gltf`);
            let promise = rawModel.load();

            promise.then(val => {
                this.defModel = val;
                this.scene.add(val)
                gsap.from(val.position, { opacity: 0, duration: 3, y: 70, ease: 'elastic' });
                gsap.from(val.rotation, { opacity: 0, duration: 3, y: -0.1, ease: 'elastic' });
            })
        }

        if (!this.props.isMobile) {
            switch (this.tab) {
                case "home":
                    this.modelName = this.modelsPath[0];
                    gsap.fromTo(".m-text-3", { opacity: 0, duration: 0, x: -50, delay: 0 }, { opacity: 1, duration: 0.3, x: 0, delay: 0.5 });
                    // if(textTl.isActive())
                    //     textTl.seek(textTl.endTime());
                    break;
                case "skills":
                    this.modelName = this.modelsPath[1];
                    this.twinLightBalls = new TwinLightBalls(this.scene, this.models);
                    this.models = this.twinLightBalls.getModels();
                    // PageLoader.call(this);
                    this.featuredTextTimeline.end()
                    break;
                case "projects":
                    this.modelName = this.modelsPath[2];
                    this.featuredTextTimeline.end()
                    break;
                case "get_in_touch":
                    this.modelName = this.modelsPath[3];
                    this.featuredTextTimeline.end()
                    break;
            }
            this.changeModel();
        } else {
            this.scene.remove(this.defModel)
        }
    }

    changeModel() {
        this.models.forEach(ele => {
            if (ele.name != this.modelName)
                this.scene.remove(ele.gltf);
            else {
                this.scene.add(ele.gltf);
                if(ele.action !== undefined)
                    ele.action.play();
                if (ele.name == this.modelName[1])
                    this.twinLightBalls.add()
            }
            if (this.modelName != this.modelsPath[1])
                try { this.twinLightBalls.remove(); }
                catch(err){}
        });
    }

    componentDidMount() {
        SceneSetup.call(this)
        this.renderer.setSize(this.screenDimentions.width, this.screenDimentions.height);
        this.renderer.shadowMap.enabled = true;
        this.renderer.toneMappingExposure = 3.5;
        document.body.appendChild(this.renderer.domElement);

        
        
        if (!this.props.isMobile) {
            this.featuredTextTimeline = new FeaturedTextTimeline();
            //Bringing in all the in this.models 
            this.allModelsLoaded = () => {
                let loader = document.getElementsByClassName("loader")[0].style.display = "none";
                // gsap.to(loader, {y: -100})
                Models_refactor.call(this)
                let the_magic_room = this.models.filter(m => m.name == "the_magic_room")[0].gltf;
                this.scene.add(the_magic_room)
                gsap.from(the_magic_room.position, { opacity: 0, duration: 3, y: 70, ease: 'elastic' });
                gsap.from(the_magic_room.rotation, { opacity: 0, duration: 3, y: -0.1, ease: 'elastic' });

                this.featuredTextTimeline.play();
            };
            ModelsPromise.call(this)
        }
        else {
            let rawModel = new Model(`./assests/the_magic_room/scene.gltf`);
            let promise = rawModel.load();
            
            promise.then(val => {  
                this.defModel = val;
                this.scene.add(val)
                gsap.from(val.position, { opacity: 0, duration: 3, y: 70, ease: 'elastic' });
                gsap.from(val.rotation, { opacity: 0, duration: 3, y: -0.1, ease: 'elastic' });
            })
        }
        this.animate()  
    }

    animate = () => {
        this.renderer.render(this.scene, this.camera);

        if (!this.props.isMobile) {
            let model = this.models.filter(m => m.name == this.modelName)[0]
            if (model)
                model.mixer.update(this.clock.getDelta())

            if (this.twinLightBalls)
                this.twinLightBalls.revolve();
        }
        
        // let orbitSpeed = 2 * Math.PI / 180;
        // let orbitRange = 100;

        // if(this.blueLightBall && this.redLightBall){
        //     this.blueLightBall.orbitAhead += orbitSpeed;
        //     this.blueLightBall.setPosition(Math.sin(this.blueLightBall.orbitAhead) * orbitRange, 0, Math.cos(this.blueLightBall.orbitAhead) * orbitRange);

        //     this.redLightBall.orbitAhead += orbitSpeed;
        //     this.redLightBall.setPosition(Math.sin(this.redLightBall.orbitAhead) * orbitRange, 0, Math.cos(this.redLightBall.orbitAhead) * orbitRange);
        // }

        requestAnimationFrame(this.animate)
    }

    render() {        

        return (
            <div></div>
        )
    }
}

export default Scene;
