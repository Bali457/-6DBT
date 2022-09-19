import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
//for forms we need the above module
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';


import { StudentModule } from './student/student.module';
import { ProfileComponent } from './profile/profile.component';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';


import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { OperatingSystemQuestionsComponent } from './operating-system-questions/operating-system-questions.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AnswersComponent } from './answers/answers.component';
import { CPlusplusQuestionsComponent } from './c-plusplus-questions/c-plusplus-questions.component';
import { DotNetQuestionsComponent } from './dot-net-questions/dot-net-questions.component';
import { DataStructureQuestionsComponent } from './data-structure-questions/data-structure-questions.component';
import { CoreJavaQuestionsComponent } from './core-java-questions/core-java-questions.component';
import { AdvanceJavaQuestionsComponent } from './advance-java-questions/advance-java-questions.component';
import { MeanStackQuestionsComponent } from './mean-stack-questions/mean-stack-questions.component';
import { SoftwareEngineeringQuestionsComponent } from './software-engineering-questions/software-engineering-questions.component';

import { AdvancedWebProgrammingQuestionsComponent } from './advanced-web-programming-questions/advanced-web-programming-questions.component';
import { DatabaseTechnologyQuestionsComponent } from './database-technology-questions/database-technology-questions.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
   
    OperatingSystemQuestionsComponent,
    //OperatingSystemAnswersComponent,
    AnswersComponent,
    ProfileComponent,

    HeaderComponent,
    FooterComponent,
    CPlusplusQuestionsComponent,
    DotNetQuestionsComponent,
    DataStructureQuestionsComponent,
    CoreJavaQuestionsComponent,
    AdvanceJavaQuestionsComponent,
    MeanStackQuestionsComponent,
    SoftwareEngineeringQuestionsComponent,
  
    AdvancedWebProgrammingQuestionsComponent,
    DatabaseTechnologyQuestionsComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StudentModule,
    MatButtonModule,
    MatChipsModule,
    MatFormFieldModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
