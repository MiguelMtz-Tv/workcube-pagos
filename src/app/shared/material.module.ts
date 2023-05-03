import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { TextFieldModule } from '@angular/cdk/text-field'
import { MatInputModule } from '@angular/material/input'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {MatTabsModule} from '@angular/material/tabs'; 
import {MatMenuModule} from '@angular/material/menu';
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio'; 

@NgModule({
    imports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatMenuModule,
        MatExpansionModule,
        MatRadioModule,
        MatCardModule,
    ],
    exports:[
        MatButtonModule,
        TextFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatMenuModule,
        MatExpansionModule,
        MatRadioModule,
        MatCardModule,
    ],
    providers: [{
        provide: MAT_RADIO_DEFAULT_OPTIONS,
        useValue: { color: 'primary' },
    }]
})

export class MaterialModule { }