import { CompanyCreateComponent } from "./components/company/company-create/company-create.component";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./views/home/home.component";
import { CompanyCrudComponent } from "./views/company-crud/company-crud.component";
import { CompanyUpdateComponent } from "./components/company/company-update/company-update.component";
import { CompanyDeleteComponent } from "./components/company/company-delete/company-delete.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "companies",
    component: CompanyCrudComponent,
  },
  {
    path: "companies/create",
    component: CompanyCreateComponent,
  },
  {
    path: "companies/update/:id",
    component: CompanyUpdateComponent,
  },
  {
    path: "companies/delete/:id",
    component: CompanyDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
