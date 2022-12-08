import { LitElement, html, css } from 'lit';

export class AdminView extends LitElement {
    static styles = [
        css`
            :host {
                display: block;
            }
        `
    ];

    render() {
        return html`
        
        `;
    }
}
customElements.define('admin-view', AdminView);
