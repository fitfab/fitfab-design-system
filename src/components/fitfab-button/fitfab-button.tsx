import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'fitfab-button',
  styleUrl: 'fitfab-button.css',
  scoped: true
})
export class FitfabButton {
  @Prop() label: string = 'submit'
  @Prop() variant: 'primary' | 'secondary' | 'disabled' = 'primary'
  render() {
    return (
      <button class={this.variant} aria-label={this.label} role="button">
        <span>{this.label}</span>
        <svg role="img" xmlns="http://www.w3.org/2000/svg" width="32px" height="32px" viewBox="0 0 24 24" aria-labelledby="chevronRightIconTitle"  stroke-width="0.75" stroke-linecap="round" stroke-linejoin="round" fill="none" ><polyline points="10 6 16 12 10 18 10 18"/></svg>
      </button>
    );
  }

}
