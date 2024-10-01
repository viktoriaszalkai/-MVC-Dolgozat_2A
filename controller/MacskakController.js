/* Controller: 6 pont

Modell példányosítása
Modell gettereinek hívása a listák beállításához
View példányosítása
Feliratkozás a View eseménykezelőjére
A modell megfelelő metódusának hívása a darabszám módosításához.
A modell megfelelő módosítása a termék kosárba rakásához
Modellből lekérni a módosult adatokat.  */
import MacskakModel from "../model/MacskakModel.js";
import Macskak from "../view/Macskak.js";
export default class MacskakController{
    constructor() {
        this.taroloElem = $(".tartalom");
        this.model = new MacskakModel;
        new Macskak(this.model.getList(),this.taroloElem);
        this.#esemenykezelo();
        console.log("megjelenek")
    }

    #esemenykezelo(){
        $(window).on("kivKatt",(event) =>{
            console.log(event.detail);
            this.model.setLista(event.detail);
            new Macskak(this.model.getList(),this.taroloElem);
        });
    }
}