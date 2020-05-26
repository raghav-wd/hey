import * as THREE from 'three';

function SceneSetup() {
    // document.body.requestFullscreen();
    //Setting up whole scene, camera, lighting, controls and render
    let controls, hemiLight;

    this.clock = new THREE.Clock();
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
    // Setting camera at 45deg
    this.camera.rotation.y = Math.PI * 1 / 4
    this.camera.position.set(160, 70, 160);
    this.renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });
    this.renderer.toneMapping = THREE.ReinhardToneMapping;

    hemiLight = new THREE.HemisphereLight(0xffeeb1, 0x212121, 1);
    this.scene.add(hemiLight);

    let spotLight = new THREE.SpotLight(0xffffff, 5);
    spotLight.power = 0.5 * 4 * Math.PI
    spotLight.position.set(200, 250, -150);
    spotLight.castShadow = true;
    //Shadow Artifacts removing
    spotLight.shadow.bias = -0.0001;
    spotLight.shadow.mapSize.width = 1024 * 1.5;
    spotLight.shadow.mapSize.height = 1024 * 1.5;
    this.scene.add(spotLight);
    // Controls
    // controls = new OrbitControls(this.camera, this.renderer.domElement);
    // controls.addEventListener('change', this.renderer);

    //Getting Fullscreen Fix
    this.screenDimentions = {
        width: Math.min(document.documentElement.clientWidth, window.innerWidth),
        height: Math.min(document.documentElement.clientHeight, window.innerHeight)
    }

    // this.scene.add(new THREE.AxesHelper(500));
}

export default SceneSetup;