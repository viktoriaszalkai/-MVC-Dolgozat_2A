import Macska from "./Macska.js";
export default class Macskak{
    #LISTA = [];
    #szuloELEM;

    constructor(lista, szuloElem){
        this.#LISTA = lista;
        this.#szuloELEM = szuloElem;
        console.log("view");
        this.macskakKiir();
       /*  this.#szuloELEM.empty(); */

    }

    macskakKiir(){
        this.#LISTA.forEach((adat,index)=>{
            new Macska(adat,index,this.#szuloELEM);
        });
    }
}