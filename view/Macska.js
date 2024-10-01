/* View:  8 pont

Az adatok megjelenítése DIV-ek, p, button h, stb elemek segítségével 
Saját adattagok létrehozása
Az egyes elemek Megfogása
Eseménykezelő hozzárendelése a gombhoz. 
Saját esemény létrehozása
 */
export default class Macska {
  #index;
  #macskaADAT;
  #szuloELEM;

  constructor(adat, index, szuloElem) {
    this.#macskaADAT = adat;
    this.#index = index;
    this.#szuloELEM = szuloElem;
    this.macskaKiir();
    this.macskaELEM = $(".card:last child");
    this.kivGOM = $(".kiv:last cild");
    this.kosGOM = $(".kos:last cild");
  }

  macskaKiir() {
    this.#szuloELEM.append(
      `<div class="card col-4 col-md-4">
        <div class="card-body">
            <h1 class="card-text">${this.#macskaADAT.id}</h1>
            <h3 class="card-title">${this.#macskaADAT.nev}</h3>
            <p class="card-text">${this.#macskaADAT.kor}</p>
            <p class="card-text">${this.#macskaADAT.nem}</p>
            <p class="card-text">${this.#macskaADAT.darabszam}</p>
            <button type="button" class="kos btn btn-dark">Kosárba</button>
            <button type="button" class="kiv btn btn-dark">Kiválaszt</button>
        </div>
        </div>`
    );
  }

  kivalasztKatt() {
    this.kivGOM.on("click", () => {
      const e = new CustomEvent("kivKatt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
  kosarKatt() {
    this.kosGOM.on("click", () => {
      const e = new CustomEvent("kosKatt", { detail: this.#index });
      window.dispatchEvent(e);
    });
  }
}
