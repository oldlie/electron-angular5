import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from './core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private core: CoreService, private router: Router ) {}

  ngOnInit() {
    let navigateCommnds: any[];
    if (this.core.Login) {
      navigateCommnds = ['home'];
    } else {
      navigateCommnds = ['login'];
    }
    this.router.navigate(navigateCommnds).catch(this.errorHandle);
  }

  private errorHandle(err: any) {
    console.error('AppComponent->errorHandle()', err);
  }
}
