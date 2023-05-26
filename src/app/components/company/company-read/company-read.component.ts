import { CompanyService } from "./../service/company.service";
import { Component, OnInit } from "@angular/core";
import { CompanyGrid } from "../model/company-grid.model";
import { PageEvent } from "@angular/material/paginator";

@Component({
  selector: "app-company-read",
  templateUrl: "./company-read.component.html",
  styleUrls: ["./company-read.component.css"],
})
export class CompanyReadComponent implements OnInit {
  regTotal: number = 0;

  displayedColumns = ["id", "name", "sizeDescription", "action"];

  companies: CompanyGrid[] = [];

  constructor(private companyService: CompanyService) {}

  ngOnInit(): void {
    this.loadData(1);
  }

  loadData(page: number): void {
    this.companyService.readPaginated(page).subscribe((companies) => {
      this.companies = companies;
      if (companies != null && companies.length > 0)
        this.regTotal = companies[0].regTotal;
    });
  }

  pageChanged(event: PageEvent) {
    let page = event.pageIndex + 1;

    if (page <= 0) page = 1;

    this.loadData(page);
  }
}
