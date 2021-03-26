import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { BudgeComponent } from './budge/budge.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { DividerComponent } from './divider/divider.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { OtherComponent } from './other/other.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TextFieldComponent } from './text-field/text-field.component';

const routes: Routes = [
  {path: 'autocomplete', component: AutocompleteComponent},
  {path: 'badge', component: BudgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'button-toggle', component: ButtonToggleComponent},
  {path: 'card', component: CardComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'divider', component: DividerComponent},
  {path: 'form-field', component: TextFieldComponent},
  {path: 'expansion-paginator', component: ExpansionComponent},
  {path: 'grid-list', component: GridListComponent},
  {path: 'list', component: ListComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'other', component: OtherComponent},
  {path: 'progress-bar-spinner', component: ProgressBarComponent},
  {path: 'side-nav', component: SidenavComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
