import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.scss']
})
export class PostsListComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() like: number;
  @Input() createdAt: string;
  @Input() posts: any;

  constructor() {}

  ngOnInit(): void {}
}
