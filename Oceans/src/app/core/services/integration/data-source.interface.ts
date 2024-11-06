// src/app/core/services/integration/data-source.interface.ts
export interface DataSource {
    id: string;
    name: string;
    type: 'CRM' | 'CALENDAR' | 'PORTFOLIO' | 'CUSTOM';
    connectionConfig: Record<string, any>;
  }
  
  export interface DataQuery {
    source: string;
    query: any;
    parameters?: Record<string, any>;
  }