import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FinancialAdvisorInterfaceComponent } from './ai-interface/components/financial-advisor-interface/financial-advisor-interface.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
     // Make sure to declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    FinancialAdvisorInterfaceComponent,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
