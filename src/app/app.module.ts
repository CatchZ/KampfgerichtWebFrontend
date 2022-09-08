import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//nutzen des http client
import { HttpClientModule } from '@angular/common/http';
//nutzen von Router
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LogInSiteComponent } from './log-in-site/log-in-site.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { KampfgerichtPlanSiteComponent } from './kampfgericht-plan-site/kampfgericht-plan-site.component';
import { LogInComponent } from './log-in/log-in.component';
import { KampfgerichtPlanComponent } from './kampfgericht-plan/kampfgericht-plan.component';

@NgModule({
  imports: [
    BrowserModule,
    //nutzung des http modul
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: LogInSiteComponent },
      { path: 'kampfgerichtPlan', component: KampfgerichtPlanSiteComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    LogInSiteComponent,
    TopBarComponent,
    KampfgerichtPlanSiteComponent,
    LogInComponent,
    KampfgerichtPlanComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
