import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class DashboardGuard{
  constructor(private router:Router) {
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {

    let token = sessionStorage.getItem('token')
    if(!token){
      this.router.navigate(['/login'])
      return false
    }
    else{
      return true
    }

    return true;
  }
  
}
