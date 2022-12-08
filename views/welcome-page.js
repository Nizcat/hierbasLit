import { LitElement, html, css } from "lit";
import { navigator } from "lit-element-router";

export class WelcomePage extends navigator(LitElement) {
  static styles = [
    css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      :host {
        display: flex;
        background-color: wheat;
        height: 100vh;
        width: 100vw;
        margin: 0;
        padding: 0;
      }
      .mainContainer {
        display: flex;
        flex-direction: row;
      }
      .hierbas {
        height: 100vh;
        width: 50vw;
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Kamomillasaunio_%28Matricaria_recutita%29.JPG/325px-Kamomillasaunio_%28Matricaria_recutita%29.JPG");
        background-size: 90%;
        color: #574c1a;
      }
      .remedios {
        height: 100vh;
        width: 50vw;
        background-image: url("https://s1.eestatic.com/2021/06/08/actualidad/587452312_187437880_1706x960.jpg");
        background-size:180%;
        color: #574c1a;
      }
      .button  {
        margin-top:7em;
        margin-left:2em;
        width:10em;
        background: radial-gradient(circle, rgba(251,217,63,1) 0%, rgba(116,52,40,1) 100%);
        border-radius:30px;
        display:flex;
        justify-content:center;
        cursor:pointer;
      }
      .buttoncham {
        margin-top:2em;
        margin-left:2em;
        width:10em;
        background: radial-gradient(circle, rgba(243,245,153,1) 54%, rgba(58,116,40,1) 100%);
        border-radius:30px;
        display:flex;
        justify-content:center;
        cursor:pointer;
      }
      .admin{
        height:4em;
        width:4em;
        background-color:white;
      }
    `,
  ];

  render() {
    return html`
     
      <div class="mainContainer" >
        <div class="hierbas">
          <div @click="${this.linkClick}" data-href="/herbs" id="divbut" class="buttoncham">
          <h1>hierbas</h1>
          </div>
        </div>
        <div class="remedios">
        <div @click="${this.linkClick2}"  class="button">
          <h1>remedios</h1>
          </div>
        </div>
      </div>
    `;
  }
  linkClick2(event) {
   this.divbutton =this.shadowRoot.getElementById("divbut");
    event.preventDefault();
    console.log(this.divbutton, "click");
    this.href = "/info";
    this.navigate(this.href);
  }
  linkClick(event) {
   
    event.preventDefault();
    this.href = "/herbs";
    
    this.navigate(this.href);
  }
}
customElements.define("welcome-page", WelcomePage);
