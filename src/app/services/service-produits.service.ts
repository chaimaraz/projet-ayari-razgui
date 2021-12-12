import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HasPromo } from '../Models/has-promo';

import { Produit } from '../Models/produit';
const URL ="http://localhost:3000/HOTEL";
@Injectable({
  providedIn: 'root'
})
export class ServiceProduitsService {

 
  getProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(URL);
    }
    // getProduitByPlace(pc :string) {
    //   return this.produits.filter(i => i.place==pc);
    // } 
    getProduitByPlace(pc :string): Observable<Produit[]>  {
     
      return this.http.get<Produit[]>(`${URL}/?place=${pc}`);
    } 
 
       supprimer(id:number){
        return this.http.delete(URL+"/"+ id);
        }
  
    getProduitById(id: number): Observable<Produit> {
      return this.http.get<Produit>(`${URL}/${id}`);
  } 
 
  getProduitByName(name: string): Observable<Produit> {
    return this.http.get<Produit>(`${URL}/?name=${name}`);
}



  addProduit(p:Produit):Observable<Produit>{
    return this.http.post<Produit>(URL, p);
    } 
  commenter(s:string):Observable<string>{
      return this.http.post<string>(URL,s);
    }
        
    updateProduit(id:number, p:Produit):Observable<Produit>{
      return this.http.put<Produit>(URL+"/"+ id, p);
      }
     
      addCom(s:string):Observable<string>{
        return this.http.post<string>(URL , s);
        }

       /* commenter(s:string,id:number):Observable<string[]>{
          return this.http.post<string[]>(URL+"/"+id,s)
        }*/
       


  constructor(private http: HttpClient) { }
  
  
  
  /*getProduit() {
    return this.produits;
  }
  getProduitByPlace(pc :string) {
    return this.produits.filter(i => i.place==pc);
  } 

  getProduitById(id :number) {
    return this.produits.filter(i => i.id==id);
  }

  getProduitByName(nom :string) {
    return this.produits.find(i => i.libelle==nom);
}
addProduit(p:Produit){
let p1=Object.assign({},p);
this.produits.push(p1);

}
getPromo(){
  for(let i=0 ;i<this.produits.length;i++){
    for(let j=0; j<this.produits[i].price.length;j++)
   return this.produits[i].price[j]; 
  }
    
  
  return undefined;
}

/*getPromo(d1:Date, d2:Date){
for(let i=0;i< this.produits.length;i++){
 return this.produits.find(d=> d.price[i].dateDebut.getTime()==d1.getTime() && d.price[i].datefin.getTime()==d2.getTime())
 
}
return undefined;
}


getPrix():number{
for(let i=0;i<this.produits.length;i++){
return this.produits[i].prix;

}
return 0;*/



}