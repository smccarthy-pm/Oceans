// src/app/core/services/integration/integration.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { DataSource, DataQuery } from './data-source.interface';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {
  private dataSources = new BehaviorSubject<Map<string, DataSource>>(new Map());
  private activeConnections = new Map<string, any>();

  constructor(private http: HttpClient) {}

  registerDataSource(source: DataSource): void {
    const current = this.dataSources.value;
    current.set(source.id, source);
    this.dataSources.next(current);
  }

  async connect(sourceId: string): Promise<boolean> {
    const source = this.dataSources.value.get(sourceId);
    if (!source) throw new Error(`Data source ${sourceId} not found`);

    try {
      const connection = await this.createConnection(source);
      this.activeConnections.set(sourceId, connection);
      return true;
    } catch (error) {
      console.error(`Failed to connect to ${sourceId}:`, error);
      return false;
    }
  }

  async queryData(query: DataQuery): Promise<any> {
    const connection = this.activeConnections.get(query.source);
    if (!connection) {
      throw new Error(`No active connection for ${query.source}`);
    }

    try {
      return await this.executeQuery(connection, query);
    } catch (error) {
      console.error(`Query execution failed:`, error);
      throw error;
    }
  }

  private async createConnection(source: DataSource): Promise<any> {
    // Implementation would vary based on source type
    switch (source.type) {
      case 'CRM':
        return this.createCrmConnection(source);
      case 'CALENDAR':
        return this.createCalendarConnection(source);
      case 'PORTFOLIO':
        return this.createPortfolioConnection(source);
      case 'CUSTOM':
        return this.createCustomConnection(source);
      default:
        throw new Error(`Unsupported source type: ${source.type}`);
    }
  }

  private async executeQuery(connection: any, query: DataQuery): Promise<any> {
    // Implementation would vary based on connection type
    return connection.execute(query.query, query.parameters);
  }

  // Specific connection implementations
  private async createCrmConnection(source: DataSource) {
    // Implement CRM-specific connection logic
    return this.http.post('/api/crm/connect', source.connectionConfig).toPromise();
  }

  private async createCalendarConnection(source: DataSource) {
    // Implement Calendar-specific connection logic
    return this.http.post('/api/calendar/connect', source.connectionConfig).toPromise();
  }

  private async createPortfolioConnection(source: DataSource) {
    // Implement Portfolio-specific connection logic
    return this.http.post('/api/portfolio/connect', source.connectionConfig).toPromise();
  }

  private async createCustomConnection(source: DataSource) {
    // Implement custom connection logic
    return this.http.post('/api/custom/connect', source.connectionConfig).toPromise();
  }
}