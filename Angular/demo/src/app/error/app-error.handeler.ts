import { ErrorHandler } from '@angular/core';

export class AppErrorHandeler implements ErrorHandler {
    
    handleError(error) {
        alert('an  unexpexted error occurred !');
        console.log(error);
    }
}