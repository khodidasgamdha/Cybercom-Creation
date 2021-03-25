import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BudgeComponent } from './budge/budge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { DividerComponent } from './divider/divider.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { OtherComponent } from './other/other.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { TextFieldComponent } from './text-field/text-field.component';

const routes: Routes = [
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'budge', component: BudgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'card', component: CardComponent},
  {path: 'divider', component: DividerComponent},
  {path: 'grid-list', component: GridListComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'paginator', component: PaginatorComponent},
  {path: 'progress-bar-spinner', component: ProgressBarComponent},
  {path: 'form-field', component: TextFieldComponent},
  {path: 'other', component: OtherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
