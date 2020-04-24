import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  // itemValue = '';
  // items: Observable<any[]>;
  // constructor(public db: AngularFireDatabase) {
  //   this.items = db.list('item').valueChanges();
  // }

  // onSubmit() {
  //   this.db.list('item').push({content: this.itemValue});
  //   this.itemValue = '';
  // }
}
