// src/app/ai-interface/components/ai-chat/ai-chat.component.ts
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AiAgentService } from '../../services/ai-agent.service';
import { Message, AgentType } from '../../models/chat.models';

@Component({
  selector: 'app-ai-chat',
  template: `
    <div class="chat-container">
      <div class="chat-messages" #messageContainer>
        <div *ngFor="let message of messages" 
             [ngClass]="{'user-message': message.type === 'user', 
                        'agent-message': message.type === 'agent'}"
             class="message">
          <div class="message-header">
            <span class="sender">{{ message.sender }}</span>
            <span class="timestamp">{{ message.timestamp | date:'short' }}</span>
          </div>
          <div class="message-content" [innerHTML]="message.content"></div>
          <div *ngIf="message.data" class="message-data">
            <pre>{{ message.data | json }}</pre>
          </div>
        </div>
      </div>
      
      <div class="input-container">
        <textarea
          [formControl]="messageInput"
          (keydown.enter)="onEnterPress($event)"
          placeholder="Type your message here..."
          rows="3"
        ></textarea>
        <button (click)="sendMessage()" [disabled]="isProcessing">
          {{ isProcessing ? 'Processing...' : 'Send' }}
        </button>
      </div>
    </div>
  `,
  styles: [`
    .chat-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 1200px;
      margin: 0 auto;
    }

    .chat-messages {
      flex: 1;
      overflow-y: auto;
      padding: 20px;
      background: #f8f9fa;
    }

    .message {
      margin-bottom: 20px;
      padding: 15px;
      border-radius: 10px;
      max-width: 80%;
    }

    .user-message {
      background: #007bff;
      color: white;
      margin-left: auto;
    }

    .agent-message {
      background: white;
      border: 1px solid #dee2e6;
    }

    .message-header {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      font-size: 0.9em;
    }

    .input-container {
      padding: 20px;
      background: white;
      border-top: 1px solid #dee2e6;
    }

    textarea {
      width: 100%;
      padding: 10px;
      border: 1px solid #dee2e6;
      border-radius: 5px;
      resize: none;
    }

    button {
      margin-top: 10px;
      padding: 8px 16px;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }

    button:disabled {
      background: #6c757d;
    }
  `]
})
export class AiChatComponent implements OnInit {
  @ViewChild('messageContainer') private messageContainer!: ElementRef;
  
  messages: Message[] = [];
  messageInput = new FormControl('');
  isProcessing = false;

  constructor(private aiService: AiAgentService) {}

  ngOnInit() {
    this.addSystemMessage('Hello! I'm your AI assistant. How can I help you today?');
  }

  async sendMessage() {
    if (this.isProcessing || !this.messageInput.value?.trim()) return;

    const userMessage = this.messageInput.value;
    this.addUserMessage(userMessage);
    this.messageInput.reset();
    
    this.isProcessing = true;
    try {
      const response = await this.aiService.processRequest(userMessage);
      this.addAgentMessage(response.message, response.data);
    } catch (error) {
      this.addSystemMessage('Sorry, I encountered an error processing your request.');
      console.error('Error processing message:', error);
    } finally {
      this.isProcessing = false;
    }
    
    this.scrollToBottom();
  }

  private addUserMessage(content: string) {
    this.messages.push({
      type: 'user',
      sender: 'You',
      content,
      timestamp: new Date()
    });
  }

  private addAgentMessage(content: string, data?: any) {
    this.messages.push({
      type: 'agent',
      sender: 'AI Assistant',
      content,
      data,
      timestamp: new Date()
    });
  }

  private addSystemMessage(content: string) {
    this.messages.push({
      type: 'system',
      sender: 'System',
      content,
      timestamp: new Date()
    });
  }

  private scrollToBottom() {
    setTimeout(() => {
      const element = this.messageContainer.nativeElement;
      element.scrollTop = element.scrollHeight;
    });
  }

  onEnterPress(event: KeyboardEvent) {
    if (!event.shiftKey) {
      event.preventDefault();
      this.sendMessage();
    }
  }
}
