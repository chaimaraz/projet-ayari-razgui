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
        
    updateProduit(id:number, p:Produit):Observable<Produit>{
      return this.http.put<Produit>(URL+"/"+ id, p);
      }
     
      addCom(id:number,s:string):Observable<Produit>{
        return this.http.post<Produit>(URL+"/"+id, s);
        }
        commenter(s:string,id:number):Observable<string>{
          return this.http.post<string>(URL+"/"+id,s)
        }
        





      
  constructor(private http: HttpClient) { }
   
}