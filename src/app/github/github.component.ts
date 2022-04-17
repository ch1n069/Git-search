import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css'],
  providers: [ServerService,HttpClient]


})
export class GithubComponent implements OnInit {

  public userQuery:string;
  public gitProfile:any;
  public gitRepo:any[];
  public errorMessage:string


  public searchUser(){
    this._serverService.getProfile(this.userQuery).subscribe( (data)=>{
      this.gitProfile = data;
    },(error)=>{
      this.errorMessage = error;
    })
  }
  
  constructor(private _serverService: ServerService) { 

  }
  ngOnInit(): void {
  }

}
