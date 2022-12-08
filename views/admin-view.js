import { LitElement, html, css } from "lit";

export class AdminView extends LitElement {
  static properties = {
    herb: { type: Object },
    name:{type:String},
    description:{type:String},
    remedy:{type:String},
    remedies:{type:Object},
    ritual:{type:String},
    rituals:{type:Object},
    image:{type:String},
   
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
    this.herb = [{}];

  }



  render() {
    return html` <h1>admin zone</h1> 
    <input id="nombre" placeholder="NOMBRE"/>
    <input id="descripcion" placeholder="DESCRIPCIÓN"/>
   
    <input id="imagen" placeholder="IMAGEN URL"/>
    <button @click="${this.sendHerbs}"></button>
    
    `;
  }

  sendHerbs() {
 this.name = this.shadowRoot.getElementById("nombre").value;
 this.description = this.shadowRoot.getElementById("descripcion").value;



 this.image = this.shadowRoot.getElementById("imagen").value;


    this.herb = {
      nombre: this.name,
      descripcion: this.description,
      imagen: this.image,     
    };
    console.log(this.herb)
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.herb),
    };
    fetch("https://638f55eb4ddca317d7f57d22.mockapi.io/hierbas", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
    alert("Sent");
  }
}
customElements.define("admin-view", AdminView);
