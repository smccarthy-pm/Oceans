// financial-advisor-interface.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list'; // Import MatListModule for mat-list-item


interface MessageData {
  [key: string]: string | undefined; // Index signature added
  accountBalance?: string;
  recentChanges?: string;
  upcomingActions?: string;
  lastReview?: string;
}

interface Message {
  type: 'system' | 'user' | 'agent';
  content: string;
  timestamp: string;
  data?: MessageData;
}

@Component({
  standalone: true,
  selector: 'app-financial-advisor-interface',
  imports: [
    CommonModule, 
    FormsModule,  
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatListModule, // Add MatListModule to resolve mat-list-item
  ],
  templateUrl: './financial-advisor-interface.component.html',
  styleUrls: ['./financial-advisor-interface.component.scss']
})
export class FinancialAdvisorInterfaceComponent {

  messages: Message[] = [
    {
      type: 'system',
      content: "Welcome! I'm your AI assistant. I can help with client meeting preparation, reports, and task management.",
      timestamp: new Date().toISOString()
    },
    {
      type: 'user',
      content: 'Can you prepare a summary for my meeting with John Smith tomorrow?',
      timestamp: new Date().toISOString()
    },
    {
      type: 'agent',
      content: "I'll analyze John Smith's portfolio and prepare a meeting summary. Here's what I found:",
      timestamp: new Date().toISOString(),
      data: {
        accountBalance: '$1,250,000',
        recentChanges: '+2.3% MTD',
        upcomingActions: '2 required signatures',
        lastReview: '3 months ago'
      }
    }
  ];

  inputValue: string = '';

  // Helper method to get the keys of the data object
  getMessageKeys(data: MessageData): string[] {
    return Object.keys(data);
  }

  handleSendMessage() {
    if (this.inputValue.trim()) {
      this.messages.push({
        type: 'user',
        content: this.inputValue,
        timestamp: new Date().toISOString()
      });
      this.inputValue = '';
    }
  }
}
