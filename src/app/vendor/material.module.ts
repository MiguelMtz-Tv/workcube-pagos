import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
    imports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,

    ],
    exports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,

    ]
})

export class MaterialModule { }