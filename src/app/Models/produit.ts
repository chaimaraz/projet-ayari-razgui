import { HasPromo } from "./has-promo";


export class Produit {
    constructor(
        public id?:number,
        public libelle?:string,
        public photo?:string[],
        public prix?:number,
        public price?:HasPromo[],
        public place?:string,
        public des?:Array<string>,
        public chambres?:Array<string>,
        public ajoutChambre?:string[],
        public commentaire?:string[],
        public etoile?:number
        
        ){}
}
