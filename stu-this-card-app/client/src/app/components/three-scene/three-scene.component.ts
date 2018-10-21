import { Component, OnInit } from '@angular/core';
import { EngineService } from './engine.service';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements OnInit {
  private canEleId = 'renderCanvas';

  constructor(private engServ: EngineService) { }

  ngOnInit() {
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }
}
