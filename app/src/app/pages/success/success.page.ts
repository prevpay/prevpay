import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  ngOnInit() {
  }

  constructor(
    // private localstorage: LocalStorageService ,
    private router: Router
  ) { }

  goToHome() {
    //this.localstorage.setValue('NOT_FIRST_VIEW', true);
    this.router.navigate(['/home']);
  }

}
