import { Component, OnInit } from '@angular/core';
import { UsersDashboard } from 'src/app/model/Dashboard';
import { DashboardService } from 'src/app/services/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  userDashboard:UsersDashboard = new UsersDashboard()

  constructor(private dashboardService:DashboardService) {
    
   }

  getDataFromDashboard(){
    this.dashboardService.getUsers().subscribe(
      res=>{
        this.userDashboard = res
      }
    )
  }

  ngOnInit(): void {
    this.getDataFromDashboard()
  }

}
