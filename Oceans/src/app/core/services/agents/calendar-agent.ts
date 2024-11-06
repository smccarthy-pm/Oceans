// src/app/core/services/agents/calendar-agent.ts
@Injectable()
export class CalendarAgent extends BaseAgent {
  constructor(private integration: IntegrationService) {
    super('calendar', [
      {
        id: 'review-meetings',
        name: 'Review Upcoming Meetings',
        description: 'Reviews calendar for upcoming client meetings',
        parameters: [
          {
            name: 'dateRange',
            type: 'object',
            required: true,
            description: 'Start and end date for meeting review'
          }
        ]
      }
    ]);
  }

  async process(request: string, parameters?: any): Promise<AgentResult> {
    try {
      const meetings = await this.integration.queryData({
        source: 'calendar',
        query: {
          type: 'upcoming-meetings',
          ...parameters
        }
      });

      return {
        success: true,
        message: 'Retrieved upcoming meetings',
        data: meetings
      };
    } catch (error) {
      return {
        success: false,
        message: 'Failed to retrieve meetings',
        error: error.message
      };
    }
  }
}