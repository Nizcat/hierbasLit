import { LitElement, html, css } from "lit";

export class DescriptionZone extends LitElement {
  static properties = {
    herb: { herb: Object },
  };
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];
  constructor() {
    super();
    this.herb = {};
    this.addEventListener("ApiHerb", (e) => {
      console.log(e.detail.data, "en desc");
      this.herb = e.detail.data.data;
      this.requestUpdate();
    });
    console.log(this.herb, "en desc");
  }

  render() {
    return html``;
  }
}
customElements.define("description-zone", DescriptionZone);
