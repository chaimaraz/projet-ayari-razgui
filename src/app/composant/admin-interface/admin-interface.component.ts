import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ServiceProduitsService } from 'src/app/services/service-produits.service';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-interface',
  templateUrl: './admin-interface.component.html',
  styleUrls: ['./admin-interface.component.css']
})
export class AdminInterfaceComponent implements OnInit {
public currentProduit:Produit;

form:FormGroup=new FormGroup({
  id: new FormControl(),
  libelle:new FormControl(''),
  
  prix:new FormControl(),  
  place:new FormControl(''),
  image:new FormControl(''),
  photo:new FormArray([]),

})

  constructor(private activatedRouter:ActivatedRoute,private produitService:ServiceProduitsService,private f:FormBuilder,private router:Router) { }


display=false;
affichage(){
  if (this.id==undefined) {
     this.display=true
    
  }
  return this.display;
}



id:number=this.activatedRouter.snapshot.params.id;
produits:Produit[]



 /* afficherProduits(){
    this.produitService.getProduit()
    .subscribe( data => this.produits = data)
    }*/


    onAjouter(){
   
      this.produitService.addProduit(this.form.value)
      .subscribe(data => this.produits.push(data) );
      this.router.navigate(['/Package']);
      }



      generer(){
        this.form=this.f.group({
        id:[this.currentProduit.id],
        libelle:[this.currentProduit.libelle],
        prix:[this.currentProduit.prix],  
        place:[this.currentProduit.place],
        image:[this.currentProduit.photo],
          photo: this.f.array([])
        // this.f.array([])
      
      })
      // this.currentProduit.photo=this.form.controls.photo.value;
      console.log(this.currentProduit.photo)
      }







  ngOnInit(): void {
      
     this.produitService.getProduitById(this.id).subscribe
    (data => this.currentProduit=data as Produit);
   
}


public get lesimages()
{
return this.form.get('photo') as FormArray;
}



onAjouterimage()
{

  this.lesimages.push(new FormControl(''));
   this.lesimages.push(this.form.controls.image)
}


//////////////////////
onAfficherimages()
{ for(let p of this.lesimages.controls)
console.log(p.value);
}
///////////////////




/////////////////
updateproduit(id:number){
  this.produitService.updateProduit(id, this.form.value)
  .subscribe(data => this.currentProduit=data);
  this.router.navigate(['/Package']);
  }
  ////////////////////



}
