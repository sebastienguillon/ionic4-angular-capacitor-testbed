import { Component, OnInit } from '@angular/core';
import {
  ActionSheetResult,
  ActionSheetOption,
  ActionSheetOptionStyle,
  ConfirmResult,
  PromptResult,
  Plugins } from '@capacitor/core';

const { Modals } = Plugins;

@Component({
  selector: 'app-modals',
  templateUrl: './modals.page.html',
  styleUrls: ['./modals.page.scss'],
})
export class ModalsPage implements OnInit {
  // Used in template (public)
  actionSheetResult: ActionSheetResult;
  promptResult: PromptResult;
  confirmResult: ConfirmResult;

  constructor() { }

  ngOnInit() {
  }

  async showAlert() {
    await Modals.alert({
      buttonTitle: 'buttonTitle',
      message: 'this is an error',
      title: 'Stop',
    });
  }

  async showConfirm() {
    this.confirmResult = await Modals.confirm({
      cancelButtonTitle: 'cancelButtonTitle',
      okButtonTitle: 'okButtonTitle',
      message: 'This is the confirm message',
      title: 'Confirm Title',
    });
    console.log('this.confirmResult', this.confirmResult);
  }

  async showPrompt() {
    this.promptResult = null;
    this.promptResult = await Modals.prompt({
      cancelButtonTitle: 'cancelButtonTitle',
      inputPlaceholder: 'inputPlaceholder',
      message: 'What\'s your name?',
      okButtonTitle: 'okButtonTitle',
      title: 'Hello',
    });
    console.log('this.promptResult', this.promptResult);
  }

  async showActions() {
    this.actionSheetResult = null;
    this.actionSheetResult = await Modals.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Cancel (style: Cancel)',
          style: ActionSheetOptionStyle.Cancel,
        },
        {
          title: 'Upload (no style)'
        },
        {
          title: 'Share (style: Default)',
          style: ActionSheetOptionStyle.Default,
        },
        {
          title: 'Remove (style: Destructive)',
          style: ActionSheetOptionStyle.Destructive,
        }
      ]
    });
    console.log('this.actionSheetResult:', this.actionSheetResult);
  }
}
