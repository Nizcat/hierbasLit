import { LitElement, html } from "lit";
import { router } from "lit-element-router";

import "./app-link";
import "./app-main";
import "./views/app-hierbas";

export class App extends router(LitElement) {
  static get properties() {
    return {
      route: { type: String },
      params: { type: Object },
      query: { type: Object },
    };
  }

  static get routes() {
    return [
      {
        name: "home",
        pattern: "",
        data: { title: "Home" },
      },
      {
        name: "info",
        pattern: "info",
      },
      {
        name: "user",
        pattern: "user/:id",
      },
      {
        name: "herbs",
        pattern: "herbs",
      },
      {
        name: "not-found",
        pattern: "*",
      },
    ];
  }

  constructor() {
    super();
    this.route = "";
    this.params = {};
    this.query = {};
  }

  router(route, params, query, data) {
    this.route = route;
    this.params = params;
    this.query = query;
    this.data = data;
    console.log(route, params, query, data, "router");
    
  }

  render() {
    return html`
      <app-link href="/">Home</app-link>
      <app-link href="/info">Info</app-link>
      <app-link href="/info?data=12345">Info?data=12345</app-link>
      <app-link href="/user/14">user/14</app-link>
      <app-link href="/herbs">hierczxbas</app-link>

      <app-main active-route=${this.route}>
        <login-hierbas route="app"></login-hierbas>
        <app-hierbas route="info">Hierbas</app-hierbas>
        <h1 route="user">User ${this.params.id}</h1>
        <login-hierbas route="herbs"></login-hierbas>
        <h1 route="not-found">Not Found</h1>
      </app-main>
    `;
  }
}

customElements.define("my-app", App);
