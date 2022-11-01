// Copyright (c) 2022 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

// If using litElement base class
import { LitElement, html } from "lit-element";

// If using auroElement base class
// See instructions for importing auroElement base class https://git.io/JULq4
// import { html, css } from "lit-element";
// import AuroElement from '@alaskaairux/webcorestylesheets/dist/auroElement/auroElement';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";
import styleCssFixed from './style-fixed-css.js';

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-counter provides a way to track a .
 *
 * @attr {Boolean} fixed - Uses fixed pixel values for element shape
 * @attr {String} cssClass - Applies designated CSS class to demo element - you want to delete me!
 */
class AuroCounter extends LitElement {
  constructor() {
    super();
    this.count = 0;
  }

  // This function is to define props used within the scope of this component
  // Be sure to review  https://lit-element.polymer-project.org/guide/properties#reflected-attributes
  // to understand how to use reflected attributes with your property settings.
  static get properties() {
    return {
      // ...super.properties,
      count: {
        type: Number,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  // When using auroElement, use the following attribute and function when hiding content from screen readers.
  // aria-hidden="${this.hideAudible(this.hiddenAudible)}"

  render() {
    return html`
      <div>
        <button class="incrementbtn" @click=${this.decrement}>-</button>
        <span class="count">${this.count}</span>
        <button class="incrementbtn" @click=${this.increment}>+</button>
      </div>
    `;
  }
}

// define the name of the custom component
if (!customElements.get("auro-counter")) {
  customElements.define("auro-counter", AuroCounter);
}
