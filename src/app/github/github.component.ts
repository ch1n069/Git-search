import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public userQuerry:string;
  public gitProfile:any;
  public gitRepo:any[];


  public searchUser(){
    
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
