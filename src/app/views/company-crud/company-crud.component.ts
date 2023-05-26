import { Component } from "@angular/core";

import { Router } from "@angular/router";

@Component({
  selector: "app-company-crud",
  templateUrl: "./company-crud.component.html",
  styleUrls: ["./company-crud.component.css"],
})
export class CompanyCrudComponent {
  constructor(private router: Router) {}

  navigateToProductCreate(): void {
    this.router.navigate(["/companies/create"]);
  }
}
