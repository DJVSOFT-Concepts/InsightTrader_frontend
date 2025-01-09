import { AfterViewInit, Component, Input } from '@angular/core'
import JsVectorMap from 'jsvectormap'
import { loadAllVectorMaps } from './vector-maps'
import { loadIndiaVectorMaps } from './in-mill-en';
import { loadCanadaVectorMaps } from './canada';
import { loadIraqVectorMaps } from './iraq';
import { loadRussiaVectorMaps } from './russia';
import { loadSpainVectorMaps } from './spain';
import { loadUSVectorMaps } from './us-aea-en';
import { loadUsIccVectorMaps } from './us-lcc-en';
import { loadUsMercVectorMaps } from './us-merc-en';
import { loadUsMillVectorMaps } from './us-mill-en';


loadIndiaVectorMaps(JsVectorMap);
loadCanadaVectorMaps(JsVectorMap)
loadIraqVectorMaps(JsVectorMap)
loadRussiaVectorMaps(JsVectorMap)
loadSpainVectorMaps(JsVectorMap)
loadUSVectorMaps(JsVectorMap)
loadUsIccVectorMaps(JsVectorMap)
loadUsMercVectorMaps(JsVectorMap)
loadUsMillVectorMaps(JsVectorMap)
loadAllVectorMaps(JsVectorMap);

@Component({
  selector: 'app-world-vector-map',
  standalone: true,
  template:
    '<div [id]="mapId" [style.width]="width" [style.height]="height"></div>',
})
export class WorldVectorMapComponent implements AfterViewInit {
  @Input() width: string = ''
  @Input() height: string = ''
  @Input() options: Record<string, unknown> = {}
  @Input() type: string = ''
  @Input() mapId: string = 'map'

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    new JsVectorMap({
      selector: '#' + this.mapId,
      map: this.type,
      ...this.options,
    })
  }
}
