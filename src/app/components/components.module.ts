import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CuponComponent } from "./cupon/cupon.component";
import { CuponsFormComponent } from "./cupons-form/cupons-form.component";
import { DropdownComponent } from "./dropdown/dropdown.component";
import { ModalComponent } from "./modal/modal.component";
import { NavbarMenuComponent } from "./navbar-menu/navbar-menu.component";
import { PageTitleComponent } from "./page-title/page-title.component";
import { PaymentCardComponent } from "./payment-card/payment-card.component";
import { PaymentModalComponent } from "./payment-modal/payment-modal.component";
import { ServiceCardComponent } from "./service-card/service-card.component";
import { LibrariesModule } from "../shared/libraries.module";
import { MaterialModule } from "../shared/material.module";
import { AddCardComponent } from './dialogs/add-card/add-card.component';


@NgModule({
    declarations:[
        CuponComponent,
        CuponsFormComponent,
        DropdownComponent,
        ModalComponent,
        NavbarMenuComponent,
        PageTitleComponent,
        PaymentCardComponent,
        PaymentModalComponent,
        ServiceCardComponent,
        AddCardComponent,
    ],
    imports:[
        CommonModule,
        LibrariesModule,
        MaterialModule
    ],
    exports:[
        CuponComponent,
        CuponsFormComponent,
        DropdownComponent,
        ModalComponent,
        NavbarMenuComponent,
        PageTitleComponent,
        PaymentCardComponent,
        PaymentModalComponent,
        ServiceCardComponent,
    ]
})

export class ComponentsModule {}