import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialAdvisorInterfaceComponent } from './ai-interface/components/financial-advisor-interface/financial-advisor-interface.component';




@NgModule({
  declarations: [
    FinancialAdvisorInterfaceComponent, // Make sure to declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
