import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

export class Link extends navigator(LitElement) {
  static get properties() {
    return {
      href: { type: String },
    };
  }
  static get styles() {
    return css`
      a {
        margin: 5px;
      }
    `;
  }
  constructor() {
    super();
    this.href = "";
  }

  render() {
    return html`
      <a href="${this.href}" @click="${this.linkClick}">
        <slot></slot>
      </a>
    `;
  }

  linkClick(event) {
    console.log(this.href, "error 33 es la ruta");
    event.preventDefault();
    this.navigate(this.href);
  }
}

customElements.define("app-link", Link);
