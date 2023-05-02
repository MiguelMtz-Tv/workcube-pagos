import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatMenuModule} from '@angular/material/menu'; 

@NgModule({
    imports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatMenuModule,
    ],
    exports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatMenuModule,
    ]
})

export class MaterialModule { }