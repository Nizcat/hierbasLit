import { LitElement, html, css } from 'lit';
import { navigator } from "lit-element-router";

export class AppHierbas extends navigator(LitElement) {
    static styles = [
        css`
            :host {
                display: block;
                width:100vw;
                height:100vh;
                background-color:green;

            }
        `
    ];

    render() {
        return html`
        <h1>aqui probando que funcione el router</h1>
        <button  @click="${this.linkClick}">info</button>
        `;
    }

    linkClick(event) {
        console.log(event.path.div);
        event.preventDefault();
        this.href = "/herbs";
        this.navigate(this.href);
      }
}
customElements.define('app-hierbas', AppHierbas);
