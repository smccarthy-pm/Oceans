// src/app/core/services/agents/agent.interface.ts
export interface AgentCapability {
    id: string;
    name: string;
    description: string;
    parameters: AgentParameter[];
  }
  
  export interface AgentParameter {
    name: string;
    type: 'string' | 'number' | 'boolean' | 'object';
    required: boolean;
    description: string;
  }
  
  export interface AgentResult {
    success: boolean;
    message: string;
    data?: any;
    error?: string;
  }