import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgForm, FormsModule } from "@angular/forms";


@IonicPage()
@Component({
  selector: "page-update",
  templateUrl: "update.html"
})
export class UpdatePage {


  private pageTitle: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("constructor : UpdatePage");

    console.log("navParam : " + this.navParams.data.item.id);
    this.pageTitle = this.navParams.data.item.title;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatePage");

  }

  close() {
    this.navCtrl.pop();
  }

  edit(form:NgForm) {
    console.dir(form.valid);
    const message: string = form.valid ? this.updateItem("id of the item") : "error occred while updating item";
    console.log(`message : `,message);
  }

  private updateItem(id:string): string {
    console.log('updating form...');
    return "Record Updated successfully.";
  }

}

