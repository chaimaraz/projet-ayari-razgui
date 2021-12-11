import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/Models/user';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  client:User=new User();
error:number=0;










  onlogin(){
  this.client=this.f.value;
  // this.client.username=this.f.controls.username.value;
  // this.client.password=this.f.controls.password.value;
  let isvalidate=this.login.signIn(this.client)
  if (isvalidate) 
    this.router.navigate(['../Package']);
    else 
    this.error=1;

}


  f:FormGroup;
onsubmit(){
  // console.log(this.f.value);
  // console.log(this.client);
  console.log('bla');
  
}

validate_username(){
  return this.f.controls.username.invalid&&this.f.controls.username.touched
}

validate_password(){
  return this.f.controls.password.invalid&&this.f.controls.password.touched
}


constructor(private fm:FormBuilder,private login:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    this.f=this.fm.group({
    username:['',Validators.required],
      password:['',Validators.required],
    
    })
  }

}
