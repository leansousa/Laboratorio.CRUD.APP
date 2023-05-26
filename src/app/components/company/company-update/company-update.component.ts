import { Component, OnInit } from '@angular/core';
import { CompanySize } from '../model/company-size.model';
import { Company } from '../model/company.model';
import { CompanyService } from '../service/company.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanySizeService } from '../service/company-size.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
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
    private route: ActivatedRoute,
    private serviceCompanySize: CompanySizeService
  ) {    
    this.loadOptions();
  }

  ngOnInit(): void {
    const id:number = Number(this.route.snapshot.paramMap.get('id'));
    this.loadData(id);
  }

  updateCompany(): void {
    this.companyService.update(this.company).subscribe(() => {
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

  loadData(id:number){
    this.companyService.readById(id).subscribe((company) => {
      this.company = company
    });
  }
}
