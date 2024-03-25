import { NgModule } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { Button1Component } from './button1/button1.component';
import { Button2Component } from './button2/button2.component';
import { Button3Component } from './button3/button3.component';

@NgModule({
  declarations: [
    MyLibraryComponent,
    Button1Component,
    Button2Component,
    Button3Component
  ],
  imports: [
    // Add any necessary imports here
  ],
  exports: [
    MyLibraryComponent,
    Button1Component,
    Button2Component,
    Button3Component
  ]
})
export class MyLibraryModule { }
