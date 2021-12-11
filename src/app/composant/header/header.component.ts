import { Component, OnInit, ɵɵstylePropInterpolate7 } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ServiceProduitsService } from 'src/app/services/service-produits.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
produits:Produit[]=[];
p:Produit
  constructor(private produitS:ServiceProduitsService,private router:Router,public login:AuthentificationService,private f:FormBuilder) { }
  form:FormGroup
  display=false;
  onclick(event:Element){
    event.classList.toggle('fa-times');
    event.classList.toggle('active');
    this.display=!this.display;
  }
  i:number
  prod:Produit[]
  afficherProduits(){
    this.produitS.getProduit()
    .subscribe( data => this.produits = data)
    }
  search(){
    let b=this.form.controls.search.value
// this.p=this.produits.find(n => n.libelle=b);
this.produitS.getProduit().subscribe(data => this.produits=data);
this.produitS.getProduit().subscribe(data => this.p=data.find(l => l.libelle== b));

console.log(this.p)


this.router.navigate(['/Package',this.p.place,b]);
  
}

fn(){

  let b=this.form.controls.search.value;
  this.produitS.getProduitByPlace(b).subscribe(data => this.i=data.length);

  // this.produitS.getProduitByName(b).subscribe(data =>this.p=data)
  this.produitS.getProduit().subscribe(data => this.produits=data);
this.produitS.getProduit().subscribe(data => this.p=data.find(l => l.libelle== b));
  if (this.p!=undefined) {
    this.router.navigate(['/Package',this.p.place,b]);
    
  }

  else if (this.i!=0) {
    this.router.navigate(['/Package',b]);
    
  }
  else alert("ERREUR");



}

// return false;
  
  
  // final_sarch(){
  //   alert(this.search())
  //   if (this.search() ) {
  //     this.search();
    
  //   }
  //   else if (this.search2()){
  //     this.search2()
      
  //   }
  //   else alert("Rectifier votre recherche s'il vous Plais");
  // }
  search2(){
    let a=this.form.controls.search.value;
    
    this.produitS.getProduitByPlace(a).subscribe(data => this.i=data.length);
    if (this.i!=0) {
      this.router.navigate(['/Package',a]);
      return true
    }
    else{ return false ;
    }
  

}
  toform(){
    this.router.navigate(['../Formulaire']);
  }
  logout(){
    return this.login.logout();
  }
  signIn(){
    return this.signIn();
  }
  ngOnInit(): void {
    this.afficherProduits()
    this.form=this.f.group({
      search:['']
    })

console.log(this.form.value);

  }

}
