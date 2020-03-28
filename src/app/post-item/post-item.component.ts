import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() like: number;
  @Input() createdAt: string;

  constructor() {
  }

  ngOnInit(): void {
  }

  increment() {
    this.like++;
  }

  decrement() {
    this.like--;
    if (this.like < 0 ) {
      this.like = 0;
    }
  }
}
