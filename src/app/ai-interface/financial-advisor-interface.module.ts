import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancialAdvisorInterfaceComponent } from './components/financial-advisor-interface/financial-advisor-interface.component';


@NgModule({
  declarations: [
    // other components...
  ],
  imports: [
    CommonModule,
    FormsModule,
    FinancialAdvisorInterfaceComponent,
    // other modules...
  ],
})
export class FinancialAdvisorInterfaceModule {}
