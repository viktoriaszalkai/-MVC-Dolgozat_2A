import { MACSKALISTA } from "../adat.js";
/* Modell: 5 pont

Adatok beolvasása és tárolása listában.
Lista lekérdezése (getter)
Lista adatainak módosítása a darabszám csökkentésekor. (setLista(id, ertek)
Kosár lista létrehozása és getter készítése a kosár listához
A adatok kosár listához adása a kosárba gombra kattintáskor (kosarba(adat)) */

export default class MacskakModel {
  #LISTA = [];
  #id;
  #ertek; //db

  constructor() {
    this.#LISTA = MACSKALISTA;
  }

  setLista(id, ertek) {
    for (let index = id-1; index < this.#LISTA.length; index++) {
        ertek--;
    }
  }

  getList() {
    return this.#LISTA;
  }
  kosarListaLetrehoz(){

  }
  getKosarLista(){

  }
}
