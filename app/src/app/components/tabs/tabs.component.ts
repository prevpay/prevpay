import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent implements OnInit {

  ngOnInit() {}

  constructor(
    // private localstorage: LocalStorageService ,
    private router: Router
  ) { }

  goToHome() {
    this.router.navigate(['/home']);
  }

  goToProducts() {
    //this.localstorage.setValue('NOT_FIRST_VIEW', true);
    this.router.navigate(['/products']);
  }

}
