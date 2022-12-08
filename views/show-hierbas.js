import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";
import "../helpers/bring-data"

export default class ShowHierbas extends navigator(LitElement) {
  static styles = [
    css`
      :host {
        display: flex;
        width: 100vw;
        height: 100vh;
       
        color: white;
      }
    `,
  ];

  constructor(){
    super();
    this.addEventListener("ApiData", (e) => {
      console.log(e.detail.data, "en show data");
      this.selectedData = e.detail.data;
      this.requestUpdate();
    });
  }

  render() {
    return html`
      <div>
        <form>
          <input placeholder="datos usuario" />
          <input placeholder="datos usuario" />
          <input placeholder="datos usuario" />
          <button @click="${this.linkClick}">Login</button>
        </form>
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
