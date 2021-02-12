import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-toastr',
  templateUrl: './toastr.component.html',
  styleUrls: ['./toastr.component.css']
})
export class ToastrComponent {

  constructor(private toastr: ToastrService) { }

  showSuccess(message, title){
    this.toastr.success(message, title); // success 
    this.toastr.clear(); // clear within time
  }

  showError(message, title){
      this.toastr.error(message, title); // error
      this.toastr.remove(2); 
  }

  showInfo(message, title){
      this.toastr.info(message, title); // info
      this.toastr.show('Hello', 'Show'); // in black
  }

  showWarning(message, title){
      this.toastr.warning(message, title); // warning
      this.toastr.findDuplicate('Duplicate', 'This is Duplicate One', true, true);
  }

}
