import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InfoPage } from '../../../modals/info/info.page';

@Component({
  selector: 'app-ion-modal',
  templateUrl: './ion-modal.page.html',
  styleUrls: ['./ion-modal.page.scss'],
})
export class IonModalPage implements OnInit {

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  async openLazyLoaded() {
    const modal: HTMLIonModalElement = await this.modalController.create({
      component: InfoPage,
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();
    console.log( 'modal data:', data );
  }
}
