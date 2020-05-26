import * as THREE from 'three';

class LightBall{
    constructor(color, orbitAhead) {
        this.x = 0;
        this.y = 70;
        this.z = 0;

        this.orbitAhead = orbitAhead;
        this.orbitRange = 100;
        this.orbitSpeed = 2 * Math.PI / 180;

        this.light = new THREE.PointLight(color, 500, 100);
        this.light.position.y = this.y;

        var geometry = new THREE.SphereGeometry(1, 32, 32);
        var material = new THREE.MeshBasicMaterial({
            color: color
        });
        this.ball = new THREE.Mesh(geometry, material);
        this.ball.position.y = this.y;

        this.orbitAhead = orbitAhead;
    }
    
    setToScene(scene) {
        scene.add(this.light);
        scene.add(this.ball);
    }

    removeFromScene(scene) {
        scene.remove(this.light);
        scene.remove(this.ball);
    }
    setPosition(x, y, z) {
        this.light.position.set(x, this.y, z);
        this.ball.position.set(x, this.y, z);
    }
}

export default LightBall;