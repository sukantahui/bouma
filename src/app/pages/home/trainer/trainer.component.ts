import { Component, OnInit } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.scss']
})
export class TrainerComponent implements OnInit {
  videoURL = 'https://www.youtube.com/embed/-BO6bqayhi4';
  private safeURL: SafeResourceUrl;
  constructor(private _sanitizer: DomSanitizer) {
    this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videoURL);
  }

  ngOnInit(): void {
  }

}
