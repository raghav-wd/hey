function Models_refactor() {
    let modelsPath = ["the_magic_room", "dancing_animation", "evangelion", "robot_playground"];
    this.models.forEach(element => {
        switch (element.name) {
            case modelsPath[1]:
                element.gltf.position.y = -6.5;
                element.gltf.position.x = 30;
                element.gltf.rotation.z = Math.PI * 1 / 4;
                break;
            case modelsPath[2]:
                element.gltf.scale.set(1, 1, 1);
                element.gltf.position.y = 50;
                break;
            case modelsPath[3]:
                element.gltf.rotation.z = Math.PI * 1 / 4;
                element.gltf.scale.set(5, 5, 5);
                break;
            default: ;
        }
    });
}
export default Models_refactor;