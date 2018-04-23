import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

 postTitle: string;
 postContent: string;
 postLoveIts: number;
 postCreated_at: Date; 

  constructor() { }

  ngOnInit() {
  }

    
posts = [
	{
      title: "Mon premier post",
  	  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Mon deuxième post",
  	  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: Date()
    },
    {
      title: "Encore un post",
  	  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis",
      loveIts: 0,
      created_at: Date()
    }
];





}
