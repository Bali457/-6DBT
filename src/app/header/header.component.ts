import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user:String;
  lout:String;
  
  constructor(private router:Router) { }

  ngOnInit() {
   

   
    
  }
  
  logout(){
    
    sessionStorage.clear();
    this.user=null;
   // this.authService.setHeaderContent(null);
   // this.authService.setHeaderLogout(null);
    this.router.navigate(['/login']);
  }

}
