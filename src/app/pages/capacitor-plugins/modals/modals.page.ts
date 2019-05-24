import { Component, OnInit } from '@angular/core';
import { ActionSheetOptions, ActionSheetResult, ActionSheetOptionStyle, Plugins } from '@capacitor/core';

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

  async showAlert() {
    const alertRet = await Modals.alert({
      title: 'Stop',
      message: 'this is an error'
    });
    console.log('alertRet', alertRet);
  }

  async showConfirm() {
    const confirmRet = await Modals.confirm({
      title: 'Confirm Title',
      message: 'Are you sure you\'d like to press the red button?',
      cancelButtonTitle: 'cancelButtonTitle',
      okButtonTitle: 'okButtonTitle',
    });
    console.log('Confirm ret', confirmRet);
  }

  async showPrompt() {
    const promptRet = await Modals.prompt({
      title: 'Hello',
      message: 'What\'s your name?',
      cancelButtonTitle: 'cancelButtonTitle',
      inputPlaceholder: 'inputPlaceholder',
      okButtonTitle: 'okButtonTitle',
    });
    console.log('Prompt ret', promptRet);
  }

  async showActions() {
    const promptRet = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload'
        },
        {
          title: 'Share'
        },
        {
          title: 'Remove',
          style: ActionSheetOptionStyle.Destructive
        }
      ]
    });
    console.log('You selected', promptRet);
  }
}
