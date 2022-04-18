import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
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
  public errorMessage:string;


  public searchUser(){
    // spinner display 
    this.ngxSpinner.show();
    this._serverService.getProfile(this.userQuery).subscribe( (data)=>{
      this.gitProfile = data;
    },(error)=>{
      this.errorMessage = error;
    });
    this._serverService.getRepo(this.userQuery).subscribe((data)=>{
      this.gitRepo = data ;
      // spinner stop

      this.ngxSpinner.hide();
    },(error)=>{
      this.errorMessage = error;
    })
  }
  
  constructor(private _serverService: ServerService, private ngxSpinner: NgxSpinnerService) { 

  }


  ngOnInit(): void {
  }

}
