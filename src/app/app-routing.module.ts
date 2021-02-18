import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './component/main-page/main-page.component';
import { PageComponent } from './page/page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'request/x54dfs456f5bf987',
        component: PageComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
