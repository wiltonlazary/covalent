import { Component, Input, Renderer, ElementRef, HostBinding } from '@angular/core';

@Component({
  selector: 'td[td-data-table-cell]',
  styleUrls: [ 'data-table-cell.component.scss' ],
  templateUrl: 'data-table-cell.component.html',
})
export class TdDataTableCellComponent {

  @Input('numeric') numeric: boolean = false;

  @HostBinding('class.md-numeric')
  get bindNumeric(): boolean {
    return this.numeric;
  }

  constructor(private _elementRef: ElementRef, private _renderer: Renderer) {
    this._renderer.setElementClass(this._elementRef.nativeElement, 'md-cell', true);
  }

}