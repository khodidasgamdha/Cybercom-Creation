import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BudgeComponent } from './budge/budge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { TextFieldComponent } from './text-field/text-field.component';

const routes: Routes = [
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'budge', component: BudgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'card', component: CardComponent},
  {path: 'text-field', component: TextFieldComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
