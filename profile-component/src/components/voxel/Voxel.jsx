import * as THREE from 'three'
import * as React from 'react'

import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader'
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader'

const url = process.env.PUBLIC_URL;

class VoxelTemplate extends React.Component {
    componentDidMount() {
        var templateRenderer = new THREE.WebGLRenderer();

        instanceVoxelTemplate(this.props, templateRenderer);
        this.mount.appendChild(templateRenderer.domElement);
    }
    
    render() {
        return (
            <div ref={(mount) => {this.mount = mount}}>
            </div>
        )
    }
}

function instanceTemplateScene(props, templateRenderer, templateCamera, templateScene) {
    templateRenderer.setSize(props.width, props.height);
    templateCamera.position.setZ(2);
    templateScene.background = new THREE.Color(props.color)

    var templateAmbientLight = new THREE.AmbientLight(0xFFFFFF, 1);
    templateScene.add(templateAmbientLight);

    window.addEventListener('resize', onWindowResize(templateRenderer, templateCamera, templateScene, props), false);
}

function instanceVoxelTemplate(props, templateRenderer) {
    var templateCamera = new THREE.PerspectiveCamera(75, props.width / props.height);
    var templateScene = new THREE.Scene();
    var templateControls = new OrbitControls(templateCamera, templateRenderer.domElement);

    instanceTemplateScene(props, templateRenderer, templateCamera, templateScene);

    var templateOBJLoader = new OBJLoader();
    var templateMTLLoader = new MTLLoader();
    var templateTextureLoader = new THREE.TextureLoader();

    templateMTLLoader.load(url + props.baseURL + ".mtl", mtl => {
        mtl.preload();

        var texture = templateTextureLoader.load(url + props.baseURL + ".png", texture => {
            return texture
        });

        templateOBJLoader.setMaterials(mtl);
        
        templateOBJLoader.load(url + props.baseURL + ".obj", obj => {
            console.log(url + props.baseURL + ".obj")
            if (props.rot !== undefined) {
                obj.rotateX((props.rot[0] / 180) * 3.14);
                obj.rotateY((props.rot[1] / 180) * 3.14);
                obj.rotateZ((props.rot[2] / 180) * 3.14);
            }

            if (props.trans !== undefined) {
                obj.translateX((props.trans[0]));
                obj.translateY((props.trans[1]));
                obj.translateZ((props.trans[2]));
            }
            
            obj.children[0].map = texture;
            templateScene.add(obj);
            templateAnimate(templateRenderer, templateCamera, templateScene, obj, templateControls, props); // Refactor to blob / obj.
        }); 
    });
}

function onWindowResize() {

}

function templateAnimate(templateRenderer, templateCamera, templateScene, obj, templateControls, props) {
    var tempAnimationObj = {
        main: function() {
            tempAnimationObj.update();
            tempAnimationObj.draw();
            requestAnimationFrame(tempAnimationObj.main);
        },

        update: function() {
            this.obj.rotateX(props.animRot[0]);
            this.obj.rotateY(props.animRot[1]);
            this.obj.rotateZ(props.animRot[2]);

            this.controls.update();
        },

        draw: function() {
            this.camera.aspect = (this.props.width * window.innerWidth) / (this.props.height * window.innerHeight);
            this.camera.updateProjectionMatrix();

            this.renderer.setSize(this.props.width * window.innerWidth, window.innerHeight * this.props.height);
            this.renderer.setPixelRatio(window.devicePixelRatio);
            this.renderer.render(this.scene, this.camera);
        }
    }

    tempAnimationObj.renderer = templateRenderer;
    tempAnimationObj.camera = templateCamera;
    tempAnimationObj.scene = templateScene;
    tempAnimationObj.obj = obj;
    tempAnimationObj.props = props;
    tempAnimationObj.controls = templateControls;

    tempAnimationObj.main();
}

export {VoxelTemplate}