import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FinancialAdvisorInterfaceComponent } from './components/financial-advisor-interface/financial-advisor-interface.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    // other components...
  ],
  imports: [
    CommonModule,
    FormsModule,
    FinancialAdvisorInterfaceComponent,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule,

    // other modules...
  ],
})
export class FinancialAdvisorInterfaceModule {}
