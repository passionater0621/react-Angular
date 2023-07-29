import { Directive, Input, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { EmailValidator } from './app-email.validator';

@Directive({
  selector: '[appEmail]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements Validator {
  @Input() appEmail: string[] = [];

  validator: ValidatorFn = () => null

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.validator(control);
  }

  ngOnChanges(changes: SimpleChanges): void {
    const currentEmailChanges = changes['appEmail']


    if (currentEmailChanges) {
      this.validator = EmailValidator(currentEmailChanges.currentValue);
    }
  }
}
