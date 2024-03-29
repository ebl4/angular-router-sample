import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroesListComponent } from './heroes-list/heroes-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesDetailComponent } from './heroes-detail/heroes-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComposeMessageComponent } from './compose-message/compose-message.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormReactiveComponent } from './hero-form-reactive/hero-form-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    HeroesListComponent,
    PageNotFoundComponent,
    HeroesDetailComponent,
    ComposeMessageComponent,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormReactiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CrisisListComponent},
      {path: 'heroes', component: HeroesListComponent, data: {animation: 'heroes'}},
      {path: 'heroe/:id', component: HeroesDetailComponent, data: {animation: 'heroe'}},
      {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
      {path: '', redirectTo: '/heroes', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
