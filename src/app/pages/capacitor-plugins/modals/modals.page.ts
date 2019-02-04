import { Component, OnInit } from '@angular/core';
import { ActionSheetOptions, ActionSheetResult, Plugins } from '@capacitor/core';
const { Modals } = Plugins;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  showActionSheet() {
    const options: ActionSheetOptions = {
      message: 'With a message',
      options: [{ title: 'a'}, { title: 'b'}, { title: 'c'}],
      title: 'Entitled'
    };

    Modals.showActions(options)
    .then((val: ActionSheetResult) => {
      console.log('val:', val);
    });
  }

}
