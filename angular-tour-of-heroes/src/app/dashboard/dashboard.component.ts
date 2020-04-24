import { Component, OnInit } from '@angular/core';
import { Catus } from '../catus';
import { CatusService } from '../catus.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  catuses: Catus[] = [];

  constructor(private catusService: CatusService) { }

  ngOnInit() {
    this.getCatuses();
  }

  getCatuses(): void {
    this.catusService.getCatuses()
      .subscribe(catuses => this.catuses = catuses.slice(1, 5));
  }
}
