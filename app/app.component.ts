import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormBuilder, Validators } from '@angular/forms';
import { Medicine } from './medicine.interface';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    public myForm: FormGroup;

    constructor(private _fb: FormBuilder) { }

    ngOnInit() {
        this.myForm = this._fb.group({
            name: ['', [Validators.required, Validators.minLength(5)]],
            dispensations: this._fb.array([
                this.initDispensation(),
            ])
        });
    }

    initDispensation() {
        return this._fb.group({
            quantity: ['', Validators.required],
            lote: ['']
        });
    }

    addDispensation() {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.push(this.initDispensation());
    }

    removeDispensation(i: number) {
        const control = <FormArray>this.myForm.controls['dispensations'];
        control.removeAt(i);
    }

    save(model: Customer) {
        // call API to save
        // ...
        console.log(model);
    }
}