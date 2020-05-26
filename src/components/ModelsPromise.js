import Model from './models/Model'
import LightBall from './models/LightBall'


function ModelsPromise() {
    let modelsPath = ["the_magic_room", "dancing_animation", "evangelion", "robot_playground"];
    let promises = [];
    this.models = [];

    modelsPath.forEach((src) => {
        let rawModel = new Model(`./assests/${src}/scene.gltf`);
        let promise = rawModel.load();

        promises.push(promise)
        promise.then(val => {            
            let model = {
                gltf: val,
                name: src,
                action: rawModel.action,
                clips: rawModel.clips,
                mixer: rawModel.mixer
            }

            this.models.push(model);
        })
    })
    //Callback when all the models are loaded
    Promise.all(promises).then(this.allModelsLoaded);

}

export default ModelsPromise;