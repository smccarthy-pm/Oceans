import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { FinancialAdvisorInterfaceComponent } from './ai-interface/components/financial-advisor-interface/financial-advisor-interface.component';



@NgModule({
  declarations: [
    AppComponent,
    FinancialAdvisorInterfaceComponent, // Make sure to declare the component here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
