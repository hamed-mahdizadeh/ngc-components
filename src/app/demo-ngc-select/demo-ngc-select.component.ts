import { Component, OnInit } from '@angular/core';
import  * as jsonDataSource from '../test-data-source.json';
import {NgcSelectComponent} from 'ngc-components-lib'

@Component({
  selector: 'app-demo-ngc-select',
  templateUrl: './demo-ngc-select.component.html',
  styleUrls: ['./demo-ngc-select.component.css']
})
export class DemoNgcSelectComponent implements OnInit {

  constructor() { }

  persianSelectDataSource =  jsonDataSource.itemListPersian;
  englishSelectDataSource = jsonDataSource.itemLisEnglish;

  ngOnInit() {
  }

}
