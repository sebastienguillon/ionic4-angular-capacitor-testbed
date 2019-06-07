import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-geolocation-settings',
  templateUrl: './geolocation-settings.page.html',
  styleUrls: ['./geolocation-settings.page.scss'],
})
export class GeolocationSettingsPage implements OnInit {
  private settingsForm: FormGroup;

  // componentProps
  @Input() enableHighAccuracy: boolean;
  @Input() maximumAge: number;
  @Input() requireAltitude: boolean;
  @Input() timeout: number;

  constructor(
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.initForm();
  }

  private initForm() {
    this.settingsForm = new FormGroup({
      enableHighAccuracy: new FormControl(this.enableHighAccuracy),
      maximumAge: new FormControl(this.maximumAge),
      requireAltitude: new FormControl(this.requireAltitude),
      timeout: new FormControl(this.timeout),
    });
  }

  saveSettings() {
    console.log('Saving...');
    console.log(this.settingsForm.value);
    if (this.settingsForm.valid) {
      this.modalController.dismiss(this.settingsForm.value);
    }
    console.log(this.settingsForm.valid);
  }

  close(data = null) {
    this.modalController.dismiss(data);
  }
}
