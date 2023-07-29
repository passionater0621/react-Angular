import { ValidatorFn } from "@angular/forms";

export function EmailValidator(domains: string[]): ValidatorFn {
    const domainStrings = domains.join('|');
    const regExp = new RegExp(`[A-Za-z0-9]*@[A-Za-z0-9]*\.(${domainStrings})$`)

    return (control) => {
        return control.value === '' || regExp.test(control.value) ? null : { EmailValidator: true }
    };
}