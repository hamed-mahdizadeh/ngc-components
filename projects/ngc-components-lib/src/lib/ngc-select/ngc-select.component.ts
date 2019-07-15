import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { SelectSettings } from '../select-settings';
import { IDataItem } from '../i-data-item';

@Component({
  selector: 'ngc-ngc-select',
  templateUrl: './ngc-select.component.html',
  styleUrls: ['./ngc-select.component.css']
})
export class NgcSelectComponent implements OnInit {

  constructor() {}
  self = this;

  @ViewChild("selectRoot", {read: false, static: false}) rootElm: ElementRef;

  _close: boolean = true;

  get close(): boolean {
    return this._close;
  }

  set close(value: boolean) {
    this._close = value;
    value && (this.pointer = -1);
  }

  selectedItem: any = null;

  key: string;

  @Input() filteredDataSource: IDataItem[] = [];

  triggerBlind(close?: boolean): void {
    this.close = close || !this.close;
  }
  textBoxClick(event: Event): void {
    event.preventDefault();
    return;
  }
  selectItem(item?: IDataItem): void {
    !item &&
    !!this.filteredDataSource &&
    !!this.filteredDataSource[this.pointer]
      ? (item = this.filteredDataSource[this.pointer])
      : '';
    switch (this.settings.type) {
      case "mono":
        this.monoSelect(item);
        break;
      case "multi":
        this.multiSelect(item);
        break;
      default:
        break;
    }
  }

  monoSelect(item: IDataItem) {
    this.close = true;
    this.selectedItem = item;
    !!this.selectedItem && (this.key = this.selectedItem.text);
  }
  multiSelect(item: IDataItem) {
    item.selected = !item.selected;
  }
  selectedItems() {
    return this.dataSource.filter(i => i.selected === true);
  }
  onSearch(key: string) {
    this.close = false;
    if (typeof this.search === "function") {
    } else {
      this.filteredDataSource = this.dataSource.filter(c =>
        c.text.includes(key)
      );
    }
  }

  @Input() selectItemChange: Function;

  private _dataSource: IDataItem[];

  pointer: number = -1;

  scroleItems(up: boolean): void {
    if (!this.filteredDataSource) return;
    this.close = false;
    !up && this.pointer < this.filteredDataSource.length
      ? ++this.pointer
      : !up
      ? (this.pointer = 0)
      : up && this.pointer > 0
      ? --this.pointer
      : "";
    let hoverElements = this.rootElm.nativeElement.querySelector(".hover");

    if (!!hoverElements) {
      let hoverElement = hoverElements as HTMLElement;
      let topPos = hoverElement.offsetTop + hoverElement.clientTop;
      let target = this.rootElm.nativeElement.getElementsByClassName(
        "select-item-container"
      )[0]
      target.scrollTop = topPos;
      up && (target.scrollTop -= 50);
    }
  }

  @Input('dataSource') set dataSource(value: IDataItem[]) {
    this._dataSource = value;

    if (!!value) {
      this.filteredDataSource = value.copyWithin(0, value.length);
    }
  }
  get dataSource(): IDataItem[] {
    return this._dataSource;
  }

  @Input() settings: SelectSettings = {
    type: "multi",
    aligne: "rtl"
  };
  @Input() search: Function;

  ngOnInit() {}

}
