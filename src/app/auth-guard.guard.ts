import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
   // inject the router service to allow navigation.
 constructor(private router: Router) { }

 canActivate(
 route: ActivatedRouteSnapshot,
 state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
   //const { role } = loggedInUser;
   const role = "admin";
   // provides the route configuration options.
   const { routeConfig } = route; 
   
   // provides the path of the route.
   const { path } = routeConfig as Route; 
   
   if (path?.includes('home') && role === 'admin') {
   // if user is administrator and is trying to access admin routes, allow access.

     return true;
   }
   
  //  if (path?.includes('dashaboard') && false) {
  //  // if user is customer and is accessing customer route, allow access.

  //    return true;
  //  }
    
   if ((path?.includes('guest') || path?.includes('home')) && (role === 'admin')) {
   // if a logged in user goes to Guest or Home, navigate to their respective dashboard.

      //  this.router.navigateByUrl(role === 'customer' ? '/customer' : '/admin');
       return false;
   }
   
   // for any other condition, navigate to the forbidden route.

   this.router.navigateByUrl('/accessdenied'); 
   return false;
 }
  
}
