import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { MorningTestCustomerModule } from './customer/customer.module';
import { MorningTestProductModule } from './product/product.module';
import { MorningTestProductOrderModule } from './product-order/product-order.module';
import { MorningTestOrderItemModule } from './order-item/order-item.module';
import { MorningTestInvoiceModule } from './invoice/invoice.module';
import { MorningTestShipmentModule } from './shipment/shipment.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        MorningTestCustomerModule,
        MorningTestProductModule,
        MorningTestProductOrderModule,
        MorningTestOrderItemModule,
        MorningTestInvoiceModule,
        MorningTestShipmentModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MorningTestEntityModule {}
