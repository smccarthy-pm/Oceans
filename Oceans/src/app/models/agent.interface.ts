// models/agent.interface.ts
export interface Agent {
    type: AgentType;
    capabilities: string[];
    process(request: string): Promise<AgentResponse>;
  }
  
  export interface AgentResponse {
    message: string;
    data?: any;
    status: 'success' | 'error';
  }