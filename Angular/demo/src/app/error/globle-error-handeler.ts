import { HttpResponse } from "@angular/common/http";
import { ErrorHandler, Injectable } from "@angular/core";

@Injectable(
  { 
       providedIn : 'root',
  }
)

export class globalErrorHandler  implements ErrorHandler
{

    handleError(error : any)
    {
        if(error instanceof HttpResponse)
        {
            alert('something wrong with server ');
        }
        else{
            alert(`${error.message}  shows error`);        }
    }

}