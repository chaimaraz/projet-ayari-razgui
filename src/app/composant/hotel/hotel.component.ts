import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ServiceProduitsService } from 'src/app/services/service-produits.service';


@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
}) 
export class HotelComponent implements OnInit {
  nom:string;
produits:Produit[]=[];
p:Produit;
message:string='';
chamb:string='';
com:string='';
// prix:number=this.produits[0].prix;
productForm:FormGroup;
// promo:number=this.produits[0].price[0].remise
a=false;
  constructor(private fb:FormBuilder,private activatedRoute:ActivatedRoute,private produitS:ServiceProduitsService,private router:Router) { }


  validChambre(){
    let  nbAdulte=this.productForm.controls.adulte.value;
    let nbEnfant=this.productForm.controls.enfant.value;
     if(nbAdulte==1 && nbEnfant==0)
     this.chamb="il s'agit d'une chambre single";
     else if(nbAdulte==2 && nbEnfant==0 || nbAdulte==0 && nbEnfant==2 || nbAdulte==1 && nbEnfant==1)
     this.chamb="il s'agit d'une chambre double";
     else if(nbAdulte==2 && nbEnfant==2 || nbAdulte==1 && nbEnfant==3)
     this.chamb="il s'agit d'une chambre quadruple";
     else if(nbAdulte==2 && nbEnfant==2 || nbAdulte==1 && nbEnfant==3 || nbAdulte==3 && nbEnfant==1 || nbAdulte==4 && nbEnfant==0)
     this.chamb="il s'agit d'une chambre quadruple";
   else if(nbAdulte==3 && nbEnfant==0|| nbAdulte==2 && nbEnfant==1 ||nbAdulte==1 && nbEnfant==2||nbAdulte==0 && nbEnfant==3)
   this.chamb="il s'agit d'une chambre triple";
   else 
   this.chamb="offre non disponible";
   ///////////////
   if (this.chamb!="offre non disponible") {
    this.a=true
    ////////////////////////
     
   }
   }

   calculerPrix(){
    let date1 =new Date(this.productForm.controls.arrive.value);
    let date2 = new Date(this.productForm.controls.depart.value);
    let time_diff = date2.getTime()- date1.getTime();
          
     let days_Diff = time_diff / (1000 * 3600 * 24);
    
     let nbj=days_Diff;
      let nbAdulte =this.productForm.controls.adulte.value;
      let nbEnfant=this.productForm.controls.enfant.value;
     
      // this.prix=this.prix-(this.prix*this.promo(date1,date2)/100);   
      this.produits[0].prix=this.produits[0].prix-(this.produits[0].prix*this.produits[0].price[0].remise /100); 
     if(nbEnfant==0)
      this.message="le prix totale est" +nbAdulte*this.produits[0].prix*nbj;
      else 
      this.message="le prix totale "+(nbAdulte*this.produits[0].prix+nbEnfant*this.produits[0].prix/2)*nbj;
      
    
    }

    ajouterCommentaire(id:number){
      let c=this.productForm.controls.comm.value;
      /*this.produitS.addCom(id,c).subscribe(
        prod=>{
          let pos= this.produits.findIndex(l => l.id ==prod.id)
          this.produits[pos]=prod;
        })*/
      alert(c);
      
     /*this.produitS.getProduit().subscribe(data => this.produits.forEach(elt =>
      this.produitS.commenter(c,id).subscribe(d=> elt.commentaire.push(c))
      ));*/
      this.produitS.getProduit().subscribe(data => this.produits.forEach(elt =>
         elt.commentaire.push(c))
        );
     

/*this.produitS.getProduit().subscribe(data => this.produits.forEach(elt => elt.commentaire.push(c) ,*/
this.com=c;
    }



  ngOnInit() {
    this.nom= this.activatedRoute.snapshot.params['hotel'];
    let i= this.activatedRoute.snapshot.params['place'];
    console.log(i);
    
    this.produitS.getProduitByPlace(i).subscribe(data => this.produits=data);
  
    console.log(this.nom);
    this.produitS.getProduit().subscribe(data => this.produits=data);
    this.produitS.getProduit().subscribe(() => this.produits=this.produits.filter(l => l.libelle== this.nom));


    this.productForm=this.fb.group({
      arrive:[''],
      depart:[''],
      adulte:[0],
      enfant:[0],
      comm:[''],
     
    })
console.log(this.productForm.value);


    



}

}
