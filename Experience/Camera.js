import * as THREE from 'three';

import Experience from "./Experience.js";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js"

export default class Camera{
    constructor(){
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;



        this.createPerspectiveCamera();
        
        
       // this.setOrbitControls();
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(
            35, 
            this.sizes.aspect, 
            0.1, 
            1000
        );
        this.scene.add(this.perspectiveCamera);
        this.perspectiveCamera.position.set(0, 0, 12);
        

    }


   // setOrbitControls() {
    //    this.controls = new OrbitControls(this.perspectiveCamera, this.canvas);
    //    this.controls.enableDamping = true;
    //    this.controls.enableZoom = true;
    //}

    resize(){
        // Updating Perspective Camera on Resize
        this.perspectiveCamera.aspect = this.sizes.aspect;
        this.perspectiveCamera.updateProjectionMatrix();
    }
    update() {
        //this.controls.update();
        
    }

}