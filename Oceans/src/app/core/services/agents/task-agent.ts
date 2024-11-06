// src/app/core/services/agents/task-agent.ts
@Injectable()
export class TaskAgent extends BaseAgent {
  constructor(private integration: IntegrationService) {
    super('task', [
      {
        id: 'create-task',
        name: 'Create Task',
        description: 'Creates and assigns new tasks',
        parameters: [
          {
            name: 'taskDetails',
            type: 'object',
            required: true,
            description: 'Task details including assignee'
          }
        ]
      }
    ]);
  }

  async process(request: string, parameters?: any): Promise<AgentResult> {
    try {
      const task = await this.integration.queryData({
        source: 'crm',
        query: {
          type: 'create-task',
          ...parameters
        }
      });

      return {
        success: true,
        message: 'Task created successfully',
        data: task
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to create task',
        error: error.message
      };
    }
  }
}
