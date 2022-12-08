import { LitElement, html } from 'lit';
import { outlet } from 'lit-element-router';
import './views/app-hierbas';
import './views/show-hierbas';
import './views/welcome-page';
import './views/admin-view';


export class Main extends outlet( LitElement) {
  render() {
    return html`
      <slot>
       
      </slot>
    `;
  }
}

customElements.define('app-main', Main);