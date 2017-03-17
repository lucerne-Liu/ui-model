import {Component, OnInit} from '@angular/core';
import {Zoom} from 'ui-model';
import {Metadata} from '../_common/meta-data';

@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {
  zoom: Zoom = new Zoom();

  constructor() {
  }

  ngOnInit() {
  }

  static meta = new Metadata()
    .setId('zoom')
    .setTitle('Zoom')
    .setTags(['zoom'])
    .setDescription('')
    .setAuthors(['wzc']);
}