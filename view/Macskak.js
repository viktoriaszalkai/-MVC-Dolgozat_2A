import Macska from "./Macska.js";
export default class Macskak{
    #LISTA = [];
    #szuloELEM;

    constructor(lista, szuloElem){
        this.#LISTA = lista;
        this.#szuloELEM = szuloElem;
        console.log("view");
        this.#szuloELEM.empty();
        this.macskakKiir();
        

    }

    macskakKiir(){
        this.#LISTA.forEach((adat,index)=>{
            new Macska(adat,index,this.#szuloELEM);
        });
    }
}