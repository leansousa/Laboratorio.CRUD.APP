import { CompanyService } from "./../service/company.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Company } from "../model/company.model";
import { CompanySize } from "../model/company-size.model";
import { CompanySizeService } from "../service/company-size.service";

@Component({
  selector: "app-company-create",
  templateUrl: "./company-create.component.html",
  styleUrls: ["./company-create.component.css"],
})
export class CompanyCreateComponent {
  companySize: CompanySize = {
    id: 1,
  };
  company: Company = {
    name: "",
    size: this.companySize,
  };

  companySizeList: CompanySize[] = [];

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private serviceCompanySize: CompanySizeService
  ) {
    this.loadOptions();
  }

  createCompany(): void {
    this.companyService.create(this.company).subscribe(() => {
      this.companyService.showMessage("Operação executada com sucesso!");
      this.router.navigate(["/companies"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/companies"]);
  }

  loadOptions() {
    this.serviceCompanySize.readAll().subscribe((options) => {
      this.companySizeList = options;      
    });
  }
}
