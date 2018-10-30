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

  private models: THREE.Mesh[] = [];

  createScene(elementId: string): void {
    // The first step is to get the reference of the canvas element from our HTML document
    this.canvas = <HTMLCanvasElement>document.getElementById(elementId);
    this.recalculateWindow();

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
    this.scene.add(this.camera);

    // soft white light
    this.light = new THREE.AmbientLight( 0x404040 );
    this.light.position.z = 5;
    this.scene.add(this.light);

    this.camera.position.z = 5;
    this.addModels('assets/Models/adn.json');
  }

  addCube() {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    material.wireframe = true;
    const cube = new THREE.Mesh( geometry, material );

    this.models.push(cube);
  }

  addSphere() {
    const geometry = new THREE.SphereGeometry(1, 10, 10);
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    material.wireframe = true;
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.y = 2;

    this.models.push(sphere);
  }

  addCone() {
    const geometry = new THREE.ConeGeometry(1, 1, 8);
    const material = new THREE.MeshBasicMaterial( {color: 0xee42f4} );
    material.wireframe = true;
    const cone = new THREE.Mesh(geometry, material );
    cone.position.y = -2;

    this.models.push(cone);
  }

  addShapes() {
    this.camera.position.z = 5;
    this.camera.position.y = 0;
    this.addCube();
    this.addCone();
    this.addSphere();

    this.models.forEach((model) => {
      this.scene.add(model);
    });
  }

  addAtom() {
    this.camera.position.z = 5;
    this.addModels('assets/Models/atom.json');
  }

  addModels(route: string) {
    const jsonLoader = new THREE.JSONLoader();
    jsonLoader.load(
      route,
      (geometry, materials) => {
        const object = new THREE.Mesh(geometry, materials);
        this.models.push(object);
        this.models.forEach((model) => {
          this.scene.add(model);
        });
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

    this.models.forEach((model) => {
      model.rotation.y += 0.01;
    });

    this.renderer.render(this.scene, this.camera);
  }

  recalculateWindow() {
    this.windowx = window.innerWidth / 2.1;
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
