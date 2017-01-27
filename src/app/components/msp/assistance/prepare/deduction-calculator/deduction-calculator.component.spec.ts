import { TestBed } from '@angular/core/testing'
import { Component, ViewChild, AfterViewInit, OnInit, ElementRef} from '@angular/core';
import { FormsModule, FormGroup, NgForm, AbstractControl } from '@angular/forms';

import {DeductionCalculatorComponent} from './deduction-calculator.component';
import MspDataService from '../../../service/msp-data.service';
import { LocalStorageService, LOCAL_STORAGE_SERVICE_CONFIG } from 'angular-2-local-storage';
import {MspCancelComponent} from "../../../common/cancel/cancel.component";
import {ModalModule} from "ng2-bootstrap";

describe('DeductionCalculatorComponent', () => {
  let localStorageServiceConfig = {
    prefix: 'ca.bc.gov.msp',
    storageType: 'localStorage'
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeductionCalculatorComponent, MspCancelComponent],
      imports: [FormsModule, ModalModule],
      providers: [MspDataService,
        LocalStorageService,{
          provide: LOCAL_STORAGE_SERVICE_CONFIG, useValue: localStorageServiceConfig
        }
      ]
    })
  });
  it ('should work', () => {
    let fixture = TestBed.createComponent(DeductionCalculatorComponent);
    expect(fixture.componentInstance instanceof DeductionCalculatorComponent).toBe(true, 'should create DeductionCalculatorComponent');
  });
})
