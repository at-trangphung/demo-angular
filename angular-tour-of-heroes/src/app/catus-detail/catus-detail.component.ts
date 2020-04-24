import { Component, OnInit , Input} from '@angular/core';
import { Catus } from '../catus';
import { ActivatedRoute, Router } from '@angular/router';
import { CatusService } from '../catus.service';

@Component({
  selector: 'app-catus-detail',
  templateUrl: './catus-detail.component.html',
  styleUrls: ['./catus-detail.component.css']
})
export class CatusDetailComponent implements OnInit {
  catus: Catus;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private catusService: CatusService,
  ) { }

  ngOnInit(): void {
    this.getCatus();
  }

  getCatus(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log('id', id);
    this.catusService.getCatus(id)
        .subscribe(catus => this.catus = catus);
  }

  goBack(): void {
    this.router.navigate(['/catus']);
  }

}
