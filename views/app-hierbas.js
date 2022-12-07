import { LitElement, html, css } from 'lit';

export class AppHierbas extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        <h1>aqui probando que funcione el router</h1>
        `;
    }
}
customElements.define('app-hierbas', AppHierbas);
