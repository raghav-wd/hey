import * as THREE from 'three';
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// Js Module
class Model{
    constructor(src) {
        this.src = src;
    }
    load() {
        let promise = new Promise((resolve, reject) => {
            console.log(this.src)
            new GLTFLoader().load(this.src, result => {
                this.model = result.scene.children[0];
                this.model.traverse(n => {
                    if (n.isMesh) {
                        n.castShadow = true;
                        n.receiveShadow = true;
                        // Increasing texture filtering quality
                        // if (n.material.map) n.material.map.anisotrophy = 160;
                    }
                });

                this._mixer = new THREE.AnimationMixer(this.model);
                // console.log(typeof this._mixer.clipAction(result.animations[0]));
                try {
                    this._clips = result.animations;
                    this._action = this._mixer.clipAction(this._clips[0]);
                } catch (err) {
                    this._clips = undefined
                    this._clips = undefined
                    console.log("Clip/Action property not found for " + this.src);
                }
                // this.model.position.y = -6.5;
                // this.model.position.x = 30;
                // this.model.rotation.z = Math.PI * 1 / 4;

                resolve(this.model)
            });
        });
        return promise;
    };
    get action() {
        return this._action;
    }
    get clips() {
        return this._clips;
    }
    get mixer() {
        return this._mixer;
    }
}

export default Model;
