import {LoginService} from '../login/login.service';
import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';

@Injectable()
export class PayRollGuard implements CanActivate {

  constructor(private authService: LoginService) {}

  canActivate() {
    return this.authService.isPayroll();
  }
}