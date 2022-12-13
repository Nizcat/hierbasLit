import { LitElement, css } from "lit";

export class BringData extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  constructor() {
    super();
    this.getdata();
    
  }
  _sendData(data) {
   
    this.dispatchEvent(
      new CustomEvent("ApiData", {
        detail: { data },
        bubbles: true,
        composed: true,
      })
    );
  }

  getdata() {
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/hierbas")
      .then((response) => response.json())
      .then((data) => this._sendData(data));
  }
}
customElements.define("bring-data", BringData);
