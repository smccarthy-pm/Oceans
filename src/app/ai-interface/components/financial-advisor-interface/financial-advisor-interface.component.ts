// financial-advisor-interface.component.ts
import { Component } from '@angular/core';

interface Message {
  type: 'system' | 'user' | 'agent';
  content: string;
  timestamp: string;
  data?: {
    accountBalance?: string;
    recentChanges?: string;
    upcomingActions?: string;
    lastReview?: string;
  };
}

@Component({
  selector: 'app-financial-advisor-interface',
  templateUrl: './financial-advisor-interface.component.html',
  styleUrls: ['./financial-advisor-interface.component.scss']
})
export class FinancialAdvisorInterfaceComponent
 {
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
