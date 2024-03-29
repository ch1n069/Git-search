import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
 
  @Input() gitRepo:any[];
  public showRepo = false;


  constructor() { }


  toggleRepo(){
    this.showRepo = !this.showRepo;
  }

  ngOnInit(): void {
  }

}
