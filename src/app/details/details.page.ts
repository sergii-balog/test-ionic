import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements OnInit {
  selected: string;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    public events: Events
  ) {}
  navigateBack() {
    this.events.publish('navigate:home');
    this.router.navigate(['/']);
  }
  ngOnInit() {
    this.selected = this.activatedRoute.snapshot.paramMap.get('selected');
  }
}
