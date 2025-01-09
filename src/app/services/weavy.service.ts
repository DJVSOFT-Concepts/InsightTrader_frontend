import { Injectable, OnDestroy } from "@angular/core";
import { Weavy } from "@weavy/uikit-web";

@Injectable({
  providedIn: "root",
})
export class WeavyService implements OnDestroy {
  weavy = new Weavy();

  constructor() {
    this.weavy.url = new URL("https://15b5bc418b1c4422862a0f1a66e40827.weavy.io");
    this.weavy.tokenFactory = async (refresh) => "wyu_OrAr3uXvWJhmui5oh4nKPdtPb2G0ml2lOjef";
  }

  ngOnDestroy(): void {
    this.weavy.destroy();
  }
}