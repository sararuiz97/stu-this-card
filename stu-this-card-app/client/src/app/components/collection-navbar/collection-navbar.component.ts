import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-navbar',
  templateUrl: './collection-navbar.component.html',
  styleUrls: ['./collection-navbar.component.css']
})
export class CollectionNavbarComponent implements OnInit {

  user: Object;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
     err => {
       console.log(err);
       return false;
     });
  }


  onLogoutClick() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }

}
