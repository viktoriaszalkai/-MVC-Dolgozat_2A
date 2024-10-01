import { MACSKALISTA } from "../adat.js";
/* Modell: 5 pont

Adatok beolvasása és tárolása listában.
Lista lekérdezése (getter)
Lista adatainak módosítása a darabszám csökkentésekor. (setLista(id, ertek)
Kosár lista létrehozása és getter készítése a kosár listához
A adatok kosár listához adása a kosárba gombra kattintáskor (kosarba(adat)) */

export default class MacskakModel {
  #LISTA = [];
  #kosarLISTA =[];


  constructor() {
    this.#LISTA = MACSKALISTA;
    this.setLista();
  }

  setLista(id) {
    //this.#LISTA[id].darabszam--;  //EZT CSAK AZÉRT KOMMENTELTEM KI, HOGY NE SZÁLLJON EL AZ EGÉSZ
    //console.log(this.#LISTA[id]);
  }

  getList() {
    return this.#LISTA;
  }
  kosarListaLetrehoz(lista,index) {

    this.#kosarLISTA.push(lista[index]);
    //console.log(kosarLista);
  }
  getKosarLista() {
    return this.#kosarLISTA;
  }
}
