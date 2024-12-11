import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DtdcService {

 
  constructor( private http: HttpClient) { }

  specificTripDashboard(val:any){
    return this.http.post('https://apinode2.secutrak.in/dev-app-itraceit/scheduleDashboardDtdc',val);
  }
  specificTripDashboardFilter(val:any){
    return this.http.post('https://apinode2.secutrak.in/dev-app-itraceit/scheduleDashboardDtdcFilter',val);
  }
  specificTripDashboardDetails(val:any){
    return this.http.post('https://apinode2.secutrak.in/dev-app-itraceit/scheduleDashboardDtdcDetails',val);
  }
  specificTDLink(val:any){
    return this.http.post('https://apinode2.secutrak.in/dev-app-itraceit/scheduleDashboardDtdcTrackingLink',val)
  }



  /////////////////////////Summary Dashboard/////////////////////////////////////////////////////////////////////////
  dtdcSummaryFilter(data){
  
    let apiurl="https://apinode2.secutrak.in/dev-app-itraceit/dtdcSummaryFilter";
    
    return this.http.post(apiurl,data);
  }
  
  dtdcSummary(data){
    
    let apiurl="https://apinode2.secutrak.in/dev-app-itraceit/dtdcSummary";
    
    return this.http.post(apiurl,data);
  }
}
