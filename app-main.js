import { LitElement, html } from 'lit';
import { outlet } from 'lit-element-router';

export class Main extends LitElement {
  render() {
    return html`
      <slot></slot>
    `;
  }
}

customElements.define('app-main', Main);