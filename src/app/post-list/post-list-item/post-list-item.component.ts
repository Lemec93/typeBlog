import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

nbreLoveit: number = 0;
nbreDontloveit: number = 0;
nbre: number = 0;


 postTitle: string;
 postContent: string;
 postLoveIts: number;
 postCreated_at: Date; 


@Input() nameLoveit: string;
  

  constructor() { }

  ngOnInit() {

  }

getStatus() {
    return this.nameLoveit;
  }

  getloveit(a: number, b: number) {
  	this.nbreLoveit = this.posts[b].loveIts;
  	if(a === 1){
  		this.nbreLoveit = this.nbreLoveit + 1;

  	}else{
  		this.nbreLoveit = this.nbreLoveit - 1;
  	}
  	this.posts[b].loveIts = this.nbreLoveit;
  }

  getStat() {
    return this.nbreLoveit;
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
