import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { DynamicFormWebPage } from '../dynamic-form-web/dynamic-form-web';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public modalCtrl: ModalController) { }

  onClick() {
    let form = {
      title: "Tiêu đề của trang"
      , items: [
        { type: "title", name: "Tiêu đề form" }
        , {
          type: "button"
          , options: [
            { name: "CHỌN", next: "CALLBACK" },
            { name: "ĐÓNG", next: "CLOSE" }
          ]
        }]
    };

    let modal = this.modalCtrl.create(DynamicFormWebPage, {
      callback: this.callback,
      form: form
    });
    modal.present();

  }
  
  callback = (res) => {
    console.log('Goi logout: ', res.data);
    return Promise.resolve({ next: "CLOSE" });
  }

}
