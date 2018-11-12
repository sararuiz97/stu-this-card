import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EngineService } from './engine.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.state';

@Component({
  selector: 'app-three-scene',
  templateUrl: './three-scene.component.html',
  styleUrls: ['./three-scene.component.css']
})
export class ThreeSceneComponent implements OnInit, AfterViewInit {
  private canEleId = 'renderCanvas';
  model: String;

  constructor(private engServ: EngineService, private store: Store<AppState>) {
    this.store.select('collection').forEach(el => {
      this.model = el.model_3d;
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.engServ.cleanScene();
    this.engServ.setModelToRender(this.model);
    this.engServ.createScene(this.canEleId);
    this.engServ.animate();
  }
}
