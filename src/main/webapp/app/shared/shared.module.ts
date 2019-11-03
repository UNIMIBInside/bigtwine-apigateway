import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { ApigatewaySharedLibsModule, ApigatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';
import { HasNotAuthorityDirective } from 'app/shared/auth/has-not-authority.directive';

@NgModule({
    imports: [ApigatewaySharedLibsModule, ApigatewaySharedCommonModule],
    declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective, HasNotAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    entryComponents: [JhiLoginModalComponent],
    exports: [ApigatewaySharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective, HasNotAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ApigatewaySharedModule {
    static forRoot() {
        return {
            ngModule: ApigatewaySharedModule
        };
    }
}
