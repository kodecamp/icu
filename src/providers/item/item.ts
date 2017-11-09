import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import "rxjs/add/operator/map";

/*
  Generated class for the ItemProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ItemProvider {
  private itemList: ItemModel[] = [];
  private startingIndex: number = 0;
  private offset: number = 20;

  constructor() {
    console.log("Hello ItemProvider Provider");
  }

  public items(): ItemModel[] {
    return this.createItems();
  }

  // TODO: TEST METHOD
  private createItems(): ItemModel[] {
    const items: ItemModel[] = [];
    console.log("starting index : " + this.startingIndex);
    for (
      let i = this.startingIndex;
      i < this.startingIndex + this.offset;
      i++
    ) {
      console.log("looping");

      items.push({
        id: 100 + i,
        title: "Title " + i,
        desc: "Desc " + i,
        price: 100 * i
      });
    }
    this.startingIndex += this.offset;
    return items;
  }
}
