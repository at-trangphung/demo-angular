import { Component, OnInit } from '@angular/core';
import { Catus } from '../catus';
import { CatusService } from '../catus.service';
import { MessageService } from '../message.service';



@Component({
  selector: 'app-catus',
  templateUrl: './catus.component.html',
  styleUrls: ['./catus.component.css']
})
export class CatusComponent implements OnInit {
  // title = 'Catus';
  catuses: Catus[];

  // selectedCatus: Catus;
  constructor(private catusService: CatusService) { }

  ngOnInit() {
    this.getCatuses();
  }
  // onSelect(catus: Catus): void {
  //   this.selectedCatus = catus;
  //   this.messageService.add(`HeroService: Selected hero id=${catus.id}`);

  // }
  getCatuses(): void {
    this.catusService.getCatuses()
        .subscribe(catuses => this.catuses = catuses);
  }
}
