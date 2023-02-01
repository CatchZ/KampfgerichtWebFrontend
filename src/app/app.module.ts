import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//nutzen von Router
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
//nutzen des http client
import { HttpClientModule } from '@angular/common/http';
//um reactive forms erzeugen zu können
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { LogInSiteComponent } from './log-in-site/log-in-site.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { KampfgerichtPlanSiteComponent } from './kampfgericht-plan-site/kampfgericht-plan-site.component';
import { KampfgerichtPlanComponent } from './kampfgericht-plan/kampfgericht-plan.component';
import { KgFormComponent } from './kg-form/kg-form.component';





@NgModule({
  imports: [
// login guid
  
    BrowserModule,
    //nutzung des http modul
    HttpClientModule,
    FormsModule,
    //das auf Form Module zugegriffen werden kann
    ReactiveFormsModule,
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
    KampfgerichtPlanComponent,
    KgFormComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
