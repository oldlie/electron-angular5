import { Injectable } from '@angular/core';

@Injectable()
export class CoreService {

  private _login = false;
  set Login(login: boolean) {
    this._login = login;
  }
  get Login() {
    return this._login;
  }

  constructor() { }

}
