import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  public userQuery:string;
  public gitProfile:any;
  public gitRepo:any[];
  public errorMessage:string
  private _serverService: any;


  public searchUser(){
    this._serverService.getProfile(this.userQuery).subscribe( (data)=>{
      this.gitProfile = data;
    },(error)=>{
      this.errorMessage = error;
    })
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
