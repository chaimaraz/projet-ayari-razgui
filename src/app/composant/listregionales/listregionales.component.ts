import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { ServiceProduitsService } from 'src/app/services/service-produits.service';

@Component({
  selector: 'app-listregionales',
  templateUrl: './listregionales.component.html',
  styleUrls: ['./listregionales.component.css']
})
export class ListregionalesComponent implements OnInit {
regionales=["hammamet","djerba","mahdia","Tozeur","Bizerte","Kairouan","Kébili","zarzis","Sfax","Sousse",];
photos=["../../../assets/hotelphoto/h.jpg","../../../assets/hotelphoto/j.jfif","../../../assets/hotelphoto/m.jfif",
"../../../assets/hotelphoto/t.jfif","../../../assets/hotelphoto/b.jfif","../../../assets/hotelphoto/k.jfif",
"../../../assets/hotelphoto/ke.jfif",
"../../../assets/hotelphoto/zarzis.jfif",
"../../../assets/hotelphoto/sfax.jfif",
"../../../assets/hotelphoto/sousse.jfif",
]

  produits:Produit[]=[];
 
 
 
  afficherProduits(){
    this.regionalS.getProduit()
    .subscribe( data => this.produits = data)
    }
   
   
///////////////////////////////
  sup(p:Produit){
      this.produits.forEach((cur,index) =>{
if (p.id===cur.id) {
  this.produits.splice(index,1)
}
      })
    }
////////////////////////////


    onSupprimer(id:number){
      let conf=confirm("Etes-vous sur ?");
      if (conf) {
        this.regionalS.supprimer(id)
        .subscribe(  ()=> this.produits = this.produits.filter(l => l.id != id));
    
      }
      }


  constructor(private regionalS:ServiceProduitsService,public auth:AuthentificationService,private router:Router) { }

  ngOnInit(): void {
    
    this.afficherProduits()
    
  }

}
