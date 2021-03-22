import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BudgeComponent } from './budge/budge.component';
import { TextFieldComponent } from './text-field/text-field.component';

const routes: Routes = [
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'budge', component: BudgeComponent},
  {path: 'text-field', component: TextFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
