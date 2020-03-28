import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string = 'TP blog';
  constructor() {}
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      like: 24,
      createdAt: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit id risus at dignissim. Morbi in volutpat augue. Donec maximus tempus dui sit amet varius.',
      like: 10,
      createdAt: new Date()
    },
    {
      title: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut suscipit id risus at dignissim. Morbi in volutpat augue.',
      like: 0,
      createdAt: new Date()
    }
  ];
}
