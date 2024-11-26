import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'dom-component',
  styleUrl: 'dom-component.scss',
  shadow: true,
})
export class DomComponent {

  @Prop() heading: string = "";

  render() {
    return (<div class="domComponent">
      <h1>{this.heading}</h1>
      <slot name="header"></slot>
      <div class="content">
        <slot></slot>
      </div>
      <slot name="footer"></slot>
    </div>);
  }
}
