import { Component } from '@angular/core';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent {
  cards: any = [
    {
      id: '1',
      finishedIn: '4152313451205771',
      owner: 'Miguel Martinez Castro',
      expiration: '07/24',
      lastFour: '5771',
    },
    {
      id: '2',
      finishedIn: '4152313451204489',
      owner: 'Carlos Rivera Lopez',
      expiration: '07/23',
      lastFour: '4489',
    },
    {
      id: '3',
      finishedIn: '4152313451202213',
      owner: 'Martín Mendez Loeza',
      expiration: '07/21',
      lastFour: '2213',
    }
  ]
}
