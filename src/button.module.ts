import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [ButtonComponent],
  entryComponents: [ButtonComponent]
})
export class ButtonModule {
  constructor(private injector: Injector) {
    const customButton = createCustomElement(ButtonComponent, { injector });
    customElements.define('custom-button', customButton);
  }

  ngDoBootstrap() {}
}
