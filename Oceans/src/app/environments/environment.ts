// environments/environment.ts
export const environment = {
    production: false,
    apiEndpoint: 'YOUR_API_ENDPOINT',
    aiServiceConfig: {
      modelEndpoint: 'YOUR_AI_MODEL_ENDPOINT',
      apiKey: 'YOUR_API_KEY'
    },
    integrations: {
      crm: {
        endpoint: 'CRM_API_ENDPOINT',
        apiKey: 'CRM_API_KEY'
      },
      calendar: {
        endpoint: 'CALENDAR_API_ENDPOINT',
        apiKey: 'CALENDAR_API_KEY'
      }
    }
  };