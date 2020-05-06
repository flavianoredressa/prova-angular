import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CepService } from './core/services/cep.service';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		HttpClientModule,
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		FormsModule,
		MatTableModule,
		MatInputModule,
		HttpClientModule,
		NgxSpinnerModule
	],
	providers: [CepService],
	bootstrap: [AppComponent]
})
export class AppModule { }
