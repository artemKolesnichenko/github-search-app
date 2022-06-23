import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocksComponent } from './components/blocks/blocks.component';
import { DetailsComponent } from './components/details/details.component';
import { TableComponent } from './components/table/table.component';

const routes: Routes = [
  {path: 'blocks', component: BlocksComponent},
  {path: 'table', component: TableComponent},
  {path: 'blocks/:id', component: DetailsComponent},
  {path: 'table/:id', component: DetailsComponent},
  {path: '**', redirectTo: 'blocks', pathMatch: 'full'},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
