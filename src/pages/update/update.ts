import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { NgForm } from "@angular/forms";

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-update",
  templateUrl: "update.html"
})
export class UpdatePage {
  @ViewChild("form") ngForm: any;

  private title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log("constructor : UpdatePage");

    console.log("navParam : " + this.navParams.data.item.id);
    this.title = this.navParams.data.item.title;
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad UpdatePage");
  }

  close() {
    this.navCtrl.pop();
  }

  edit() {
    console.dir(this.ngForm.nativeElement);
  }
}
