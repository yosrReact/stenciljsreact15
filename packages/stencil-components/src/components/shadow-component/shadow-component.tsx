import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'shadow-component',
  styleUrl: 'shadow-component.scss',
  shadow: true,
})
export class ShadowComponent {

  @Prop() heading: string = "";

  render() {
    return (
      <Host>
        <h2>{this.heading}</h2>
        <div class="content">
          <slot></slot>
        </div>
        <slot name="footer"></slot>
      </Host>
    );
  }
}
