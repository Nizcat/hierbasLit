import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "../helpers/bring-data";

export default class ShowHierbas extends navigator(LitElement) {
  static styles = [
    css`
      :host {
        display: flex;

        width: 100vw;
        height: 100vh;

        color: black;
      }
      .card {
        display: flex;
        flex-direction: column;
        background-color: aqua;
        color: black;
        padding: 1em;
        border-radius: 15px;
        justify-content: calc();
        align-items: center;
      }
    `,
  ];
  firstUpdated() {
    super.firstUpdated();
    this.selectedData;
  }
  constructor() {
    super();
    this.selectedData = [{}];

    this.addEventListener("ApiData", (e) => {
      this.selectedData = e.detail.data;
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div>
        <h1>aquií muestro las hierbas</h1>
        ${this.selectedData.map(
          (element) =>
            html`
              <div class="card">
                <h1>${element.nombre}</h1>
                <p>${element.descripcion}</p>
              </div>
            `
        )}
      </div>
      <bring-data></bring-data>
    `;
  }
  linkClick(event) {
    console.log(this.href, "error 33 es la ruta");
    event.preventDefault();
    this.href = "/info";
    this.navigate(this.href);
  }
}
customElements.define("show-hierbas", ShowHierbas);
