import { Injectable } from '@angular/core';
import { Catus } from './catus';
import { CATUSES } from './mock-catuses';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CatusService {

  constructor(private messageService: MessageService) { }

  getCatuses(): Observable<Catus[]> {
    this.messageService.add('CatusService: fetched catuses');
    return of(CATUSES);
  }
  getCatus(id: number): Observable<Catus> {
    // TODO: send the message _after_ fetching the catus
    this.messageService.add(`CatusService: fetched catus id=${id}`);
    return of(CATUSES.find(catus => catus.id === id));
  }

}

