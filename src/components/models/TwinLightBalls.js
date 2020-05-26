import * as THREE from 'three';
import LightBall from './LightBall'

class TwinLightBalls{
    constructor(scene, models) {
        this.scene = scene;
        this.models = models;

        //LightBall Created
        this.blueLightBall = new LightBall(0x0000ff, 0);
        this.blueLightBall.setToScene(this.scene)

        this.redLightBall = new LightBall(0xff0000, Math.PI);
        this.redLightBall.setToScene(this.scene)

        //Create a plane that receives shadows (but does not cast them)
        var planeGeometry = new THREE.PlaneBufferGeometry(700, 700);
        var planeMaterial = new THREE.MeshStandardMaterial({
            color: 0x311b92,
            side: THREE.DoubleSide,
        })
        this.dancePlane = new THREE.Mesh(planeGeometry, planeMaterial);
        this.dancePlane.rotation.x = Math.PI * 1 / 2;
        this.dancePlane.receiveShadow = true;
        this.scene.add(this.dancePlane)
        // models.push(this.dancePlane);
        // skillsObjs.push(this.dancePlane);

        this.models.push( {name: "bluelightball", gltf: this.blueLightBall, action: null, clips: null, mixer: null} )
        this.models.push( {name: "redlightball", gltf: this.redLightBall, action: null, clips: null, mixer: null })
        // this.models.push( {name: "this.dancePlane", gltf: this.dancePlane, action: null, clips: null, mixer: null} )
    }
    add() {
        this.blueLightBall.setToScene(this.scene)
        this.redLightBall.setToScene(this.scene)
    }
    remove() {
        this.blueLightBall.removeFromScene(this.scene)
        this.redLightBall.removeFromScene(this.scene)
        this.scene.remove(this.dancePlane)
    }

    revolve() {
        let orbitSpeed = 2 * Math.PI / 180;
        let orbitRange = 100;

        this.blueLightBall.orbitAhead += orbitSpeed;
        this.blueLightBall.setPosition(Math.sin(this.blueLightBall.orbitAhead) * orbitRange, 0, Math.cos(this.blueLightBall.orbitAhead) * orbitRange);

        this.redLightBall.orbitAhead += orbitSpeed;
        this.redLightBall.setPosition(Math.sin(this.redLightBall.orbitAhead) * orbitRange, 0, Math.cos(this.redLightBall.orbitAhead) * orbitRange);
    }

    getModels() {
        return this.models;
    }
}

export default TwinLightBalls;