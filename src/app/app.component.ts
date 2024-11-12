import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FinancialAdvisorInterfaceComponent } from './ai-interface/components/financial-advisor-interface/financial-advisor-interface.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    FinancialAdvisorInterfaceComponent  // Add the component here
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Oceans';
}
