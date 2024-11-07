// src/app/core/services/agents/base-agent.ts
export abstract class BaseAgent {
    protected constructor(
      public readonly type: string,
      public readonly capabilities: AgentCapability[]
    ) {}
  
    abstract process(request: string, parameters?: any): Promise<AgentResult>;
  }