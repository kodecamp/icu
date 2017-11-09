import { Component } from "@angular/core";
import { IonicPage, NavController, ModalController } from "ionic-angular";
import { ItemProvider } from "../../providers/item/item";
import { UpdatePage } from "../update/update";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-list",
  templateUrl: "list.html"
})
export class ListPage {
  items: ItemModel[] = [];
  private startingIndex: number = 0;
  constructor(
    private itemProvider: ItemProvider,
    private navCtrl: NavController,
    private modelCtrl: ModalController
  ) {
    console.log("constructor : ListPage");
  }

  ionViewDidLoad() {
    this.items = this.itemProvider.items();
  }

  selectItem(item: ItemModel, index: number): void {
    console.log("index :  " + index);
    console.log("id : " + item.id);
  }

  delete(selectedItem: ItemModel): void {
    console.log("selected item index : " + selectedItem.id);

    const foundAt = this.items.findIndex(item => item.id === selectedItem.id);
    console.log("found at : ", foundAt);
    this.items.splice(foundAt, 1);
  }

  edit(selectedItem: ItemModel): void {
    // always pass all parameters
    console.log("method : edit");

    // this opens it as a seperate entity
    this.modelCtrl
      .create(
        UpdatePage,
        { item: selectedItem },
        { showBackdrop: true, enableBackdropDismiss: true }
      )
      .present();

    // This makes it a navigable page
    // this.navCtrl.push(UpdatePage);
  }

  moreItems(scroll) {
    console.log("getting more items...");

    setTimeout(() => {
      this.itemProvider.items().forEach(item => this.items.push(item));
      console.log("new items : " + this.items.length);
      scroll.complete();
    }, 500);
  }
}
