import { Utility } from './../../utility';
import { OnInit, Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-list-label',
    template: `
      <span tabindex="0" class="pull-left" title="{{listObjLabel}}">{{listObjLabel}}</span>
    `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListLabelComponent implements OnInit {

    @Input('list') list: any[] = [];
    @Input('value') value;
    listObjLabel: String = '';
    constructor() {
    }
    ngOnInit() {
        const obj = Utility.getObjectFromArrayByKeyAndValue(this.list, 'id', this.value);
        if(obj !== null) {
            this.listObjLabel = obj['value'];
        }
    }

}