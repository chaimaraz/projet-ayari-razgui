import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../Models/user';
const URL="http://localhost:3000/users"
@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  getProduit():Observable<User[]>{
    return this.http.get<User[]>(URL);
    }
// users:User[]=[{"username":"ADMIN","password":"123","roles":['ADMIN']},

// ]
users:User[];
// this.getProduit().subscribe(data => this.u);
public user_connecte:string;
public isconnecte:boolean=false;
public roles:string[];

  constructor( private router :Router,private http: HttpClient) {
   
   
   
    this.getProduit().subscribe(data =>{this.users=data;
    })

   }



  signIn(user :User){
    
    console.log(this.users)
    let valid_user =false;
    this.users.forEach( (curUser) => 
    {
      
    
      if(user.username == curUser.username && user.password == curUser.password) {
    valid_user = true;
this.user_connecte = curUser.username;
this.isconnecte = true;
this.roles = curUser.roles;
localStorage.setItem('user_connecte',this.user_connecte);
localStorage.setItem('isconnecte',String(this.isconnecte))



    }
   } )
   console.log(valid_user);
   
   return valid_user;  
  }





  isAdmin(){
    if (!this.roles) return false ;
    return (this.roles.indexOf('ADMIN') >-1);
    
  }
  logout(){
    this.isconnecte=false;
    this.user_connecte=undefined;
    this.roles=undefined;
    localStorage.removeItem('user_connecte');
    localStorage.setItem('isconnecte',String(this.isconnecte));
this.router.navigate(['/Package'])
  }
}
