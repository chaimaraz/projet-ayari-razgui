import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/app/Models/produit';
import { ServiceProduitsService } from 'src/app/services/service-produits.service';

@Component({
  selector: 'app-regional',
  templateUrl: './regional.component.html',
  styleUrls: ['./regional.component.css']
})
export class RegionalComponent implements OnInit {

  produits:Produit[]=[];
  /////////////////////////////
  region:string=this.activatedRoute.snapshot.params['place'];
  ////////////////////////////
  
  constructor(private activatedRoute:ActivatedRoute,private produitS:ServiceProduitsService,private router:Router) { }

  ngOnInit() {
    let i= this.activatedRoute.snapshot.params['place'];
    this.produitS.getProduitByPlace(i).subscribe(data => this.produits=data);
    }
  }
