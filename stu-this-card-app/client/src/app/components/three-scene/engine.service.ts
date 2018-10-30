import * as THREE from 'three';
import { Injectable } from '@angular/core';
import { Material, Sphere } from 'three';
import { ThreeSceneComponent } from './three-scene.component';

@Injectable({
  providedIn: 'root'
})
export class EngineService {
  private canvas: HTMLCanvasElement;
  private renderer: THREE.WebGLRenderer;
  private camera: THREE.PerspectiveCamera;
  private scene: THREE.Scene;
  private light: THREE.AmbientLight;
  private windowx: number;
  private windowy: number;

  private cube: THREE.Mesh;
  private sphere: THREE.Mesh;
  private cone: THREE.Mesh;
  private human: THREE.Mesh;
  private atom: THREE.Mesh;

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
    this.windowx = window.innerWidth / 2;
    this.windowy = window.innerHeight / 2;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      alpha: true,    // transparent background
      antialias: true // smooth edges
    });
    this.renderer.setSize(this.windowx, this.windowy);

    // create the scene
    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(
      75, this.windowx / this.windowy, 0.1, 1000
    );
    // this.camera.position.z = 150;
    // this.camera.position.y = 90;
    this.camera.position.z = 5;
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 10;
    this.scene.add(this.light);

    // this.addCube();
    // this.addSphere();
    // this.addCone();
    // this.addHuman();
    this.addAtom();
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    material.wireframe = true;
    this.cube = new THREE.Mesh( geometry, material );
    this.scene.add(this.cube);
  }

  addSphere() {
    const geometry = new THREE.SphereGeometry(1, 10, 10);
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    material.wireframe = true;
    this.sphere = new THREE.Mesh(geometry, material);
    this.sphere.position.y = 2;
    this.scene.add(this.sphere);
  }

  addCone() {
    const geometry = new THREE.ConeGeometry(1, 1, 8);
    const material = new THREE.MeshBasicMaterial( {color: 0xee42f4} );
    material.wireframe = true;
    this.cone = new THREE.Mesh(geometry, material );
    this.cone.position.y = -2;
    this.scene.add(this.cone);
  }

  addHuman() {
    const jsonLoader = new THREE.JSONLoader();
    jsonLoader.load(
      'assets/Models/HumanAnatomy.json',
      (geometry, materials) => {
        const object = new THREE.Mesh(geometry, materials);
        this.human = object;
        this.scene.add(this.human);
      });
  }

  addAtom() {
    const jsonLoader = new THREE.JSONLoader();
    jsonLoader.load(
      'assets/Models/atom.json',
      (geometry, materials) => {
        const object = new THREE.Mesh(geometry, materials);
        this.atom = object;
        this.scene.add(this.atom);
      });
  }

  animate(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.render();
    });

    window.addEventListener('resize', () => {
      this.resize();
    });
  }

  render() {
    requestAnimationFrame(() => {
      this.render();
    });

    // this.cube.rotation.x += 0.01;
    // this.cube.rotation.y += 0.01;

    // this.cone.rotation.x += 0.01;
    // this.cone.rotation.y += 0.01;

    // this.sphere.rotation.x += 0.01;
    // this.sphere.rotation.y += 0.01;

    if (this.human) {
      this.human.rotation.y += 0.01;
    }

    if (this.atom) {
      this.atom.rotation.y += 0.01;
    }

    this.renderer.render(this.scene, this.camera);
  }

  recalculateWindow() {
    this.windowx = window.innerWidth / 2;
    this.windowy = window.innerHeight / 2;
  }

  resize() {
    this.recalculateWindow();

    const width = this.windowx;
    const height = this.windowy;

    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize( width, height );
  }
}
