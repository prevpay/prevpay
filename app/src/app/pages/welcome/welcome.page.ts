import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage {

  slideOpts = {
    effect: 'flip'
  };

  constructor(
    // private localstorage: LocalStorageService ,
    private router: Router
  ) { }

  goToLogin() {
    //this.localstorage.setValue('NOT_FIRST_VIEW', true);
    this.router.navigate(['/home']);
  }

}
