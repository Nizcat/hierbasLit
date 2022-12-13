import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "../helpers/bring-data";
export class AdminView extends navigator(LitElement) {
  static properties = {
    herb: { type: Object },
    name: { type: String },
    description: { type: String },
    remedy: { type: String },
    remedies: { type: Object },
    ritual: { type: String },
    rituals: { type: Object },
    image: { type: String },
  };

  static styles = [
    css`
      :host {
        display: flex;
        flex-direction: column;
      }
      .card {
        display: flex;
        flex-direction: column;

        color: black;
        padding: 1em;
        border-radius: 15px;
        border: 1px solid gray;
        width: 25em;
      }
      .erase {
        width: 6em;
        height: 3em;
        background-color: black;
        color: white;
        border-radius: 25px;
        text-align: center;
        cursor: pointer;
      }
      .cardContainer {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        grid-gap: 2em;
        margin-top: 2em;
        justify-items: center;
        width: 90vw;
      }
    `,
  ];

  constructor() {
    super();
    this.herb = [{}];
    this.remedies = [];
    this.selectedData = [{}];

    this.addEventListener("ApiData", (e) => {
      this.selectedData = e.detail.data;
      this.requestUpdate();
    });
  }

  firstUpdated() {
    super.firstUpdated();
    this.selectedData;
  }

  render() {
    return html`
      <h1>admin zone</h1>
      <div>
        <input id="nombre" placeholder="NOMBRE" />
        <input id="descripcion" placeholder="DESCRIPCIÓN" />
        <input id="remedios" placeholder="REMEDIO" />
        <input id="imagen" placeholder="IMAGEN URL" />
        <button @click="${this.sendHerbs}"></button>
      </div>
      <div>
        <div class="cardContainer">
          ${this.selectedData.map(
            (element) =>
              html`
                <div id="${element.id}" class="card">
                  <h1>${element.nombre}</h1>
                  <img
                    title="chamomille"
                    @click="${(e) => this.linkClick(element)}"
                    src=${element.imagen}
                  />
                  <div @click="${this.eraseData}" class="erase">
                    <p>borrar</p>
                  </div>
                </div>
              `
          )}
        </div>
      </div>
      <bring-data></bring-data>
    `;
  }

  sendHerbs() {
    this.name = this.shadowRoot.getElementById("nombre").value;
    this.description = this.shadowRoot.getElementById("descripcion").value;
    this.remedios = this.shadowRoot.getElementById("remedios").value;
    this.image = this.shadowRoot.getElementById("imagen").value;
    this.remedies.push({ value: this.remedios });

    this.herb = {
      nombre: this.name,
      descripcion: this.description,
      imagen: this.image,
      remedios: this.remedies,
    };
    console.log(this.herb);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.herb),
    };
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/hierbas", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert("mandado");
    this.getdata();
  }
  getdata() {
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/hierbas")
      .then((response) => response.json())
      .then((data) => (this.selectedData = data));
  }
  eraseData(event) {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: null,
    };

    let url =
      "https://638f55eb4ddca317d7f57d22.mockapi.io/hierbas/" + event.path[1].id;
    console.log(event.path[1].id, "el numero", url, "la url");
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));

    alert("borrado");
  }
  linkClick( data) {
    this.dispatchEvent(
      new CustomEvent("ApiHerb", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  
    console.log(data, "es la data");
    this.href = "/desc";
    this.navigate(this.href);
  }
}
customElements.define("admin-view", AdminView);
