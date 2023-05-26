import { Component, OnInit } from "@angular/core";
import { CompanySize } from "../model/company-size.model";
import { Company } from "../model/company.model";
import { CompanyService } from "../service/company.service";
import { ActivatedRoute, Router } from "@angular/router";
import { CompanySizeService } from "../service/company-size.service";

@Component({
  selector: "app-company-delete",
  templateUrl: "./company-delete.component.html",
  styleUrls: ["./company-delete.component.css"],
})
export class CompanyDeleteComponent implements OnInit {
  companySize: CompanySize = {
    id: 1,
  };
  company: Company = {
    name: "",
    size: this.companySize,
  };

  constructor(
    private companyService: CompanyService,
    private router: Router,
    private route: ActivatedRoute,
    private serviceCompanySize: CompanySizeService
  ) {}

  ngOnInit(): void {
    const id: number = Number(this.route.snapshot.paramMap.get("id"));
    this.loadData(id);
  }

  deleteCompany(): void {
    const isConfirmed = confirm(`Confirmar a exclusão: ${this.company.name}`);
    if (isConfirmed) {
      const id = Number(this.company.id);
      this.companyService.delete(id).subscribe(() => {
        this.companyService.showMessage("Operação executada com sucesso!");
        this.router.navigate(["/companies"]);
      });
    } else {
      this.companyService.showMessage("Operação cancelada!");
    }
  }

  cancel(): void {
    this.router.navigate(["/companies"]);
  }

  loadData(id: number) {
    this.companyService.readById(id).subscribe((company) => {
      this.company = company;
    });
  }
}
