import { Component, OnInit } from '@angular/core';
import { Modules } from './module.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  module:Modules[];

  constructor() {



    
    this.module=[
                  {moduleName:"operatingsystemquestion",moduleId:1},
                  {moduleName:"C++",moduleId:2},
                  {moduleName:"DataStructure",moduleId:3},
                  {moduleName:"DBT",moduleId:4},
                  {moduleName:"java",moduleId:5},
                  {moduleName:".NET",moduleId:6},
                ]
   }





  ngOnInit() {
  }

}
