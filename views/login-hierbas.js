import { LitElement, html, css } from 'lit';

export class LoginHierbas extends LitElement {
    static styles = [
        css`
            :host {
                display: flex;
                width:100vw;
                height:100vh;
                background-color:violet;
                color:white;
            }
        `
    ];

    render() {
        return html`
        <div>
        <form>
            <input placeholder="datos usuario"/>
            <input placeholder="datos usuario"/>
            <input placeholder="datos usuario"/>
            <button type ="submit">Login</button>
        </form>
        </div>
        `;
    }
}
customElements.define('login-hierbas', LoginHierbas);
