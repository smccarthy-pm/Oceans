// services/integration.service.ts
@Injectable({
    providedIn: 'root'
  })
  export class IntegrationService {
    private connectors: Map<string, DataConnector> = new Map();
  
    registerConnector(name: string, connector: DataConnector) {
      this.connectors.set(name, connector);
    }
  
    async getData(source: string, query: any) {
      const connector = this.connectors.get(source);
      if (!connector) throw new Error(`No connector found for ${source}`);
      return connector.fetchData(query);
    }
  }
