import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {

    // custom validation
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as String).indexOf(' ') >= 0)
            return { cannotContainSpace: true };
        return null;
    }

    // for unique value => Asyncronous Operation
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, rejects) => { // both are optional and return void
            setTimeout(() => {
                if (control.value === 'mosh')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }

}