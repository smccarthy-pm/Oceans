// services/ai-agent.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class AiAgentService {
    private agents = {
      calendarAgent: new Agent('calendar'),
      reportingAgent: new Agent('reporting'),
      taskAgent: new Agent('task')
    };
  
    constructor(private http: HttpClient) {}
  
    async processRequest(request: string, agentType: AgentType) {
      // Process request using appropriate agent
      return this.agents[agentType].process(request);
    }
  }