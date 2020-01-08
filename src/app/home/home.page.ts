import { Component, OnInit } from '@angular/core';
import { LoadingController, Events } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements OnInit {
  constructor(
    public loadingCtrl: LoadingController,
    private router: Router,
    public events: Events
  ) {}
  items: string[];
  selected: string;
  async ngOnInit() {
    await this.presentLoading();
    this.events.subscribe('navigate:home', () => {
      this.selected = null;
      this.items = null;
      this.presentLoading();
    });
  }
  selectItem(item) {
    this.selected = item;
    this.router.navigate(['details', this.selected]);
  }
  async presentLoading() {
    const loader = await this.loadingCtrl.create({
      spinner: 'bubbles',
      message: 'Please wait...'
    });

    await loader.present();
    setTimeout(() => {
      loader.dismiss();
      this.items = ['Some item', 'Some more item ', 'and one more...'];
    }, 500);
  }
}
