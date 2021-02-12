import { Component } from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
import { timer } from 'rxjs';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-img-compress',
  templateUrl: './img-compress.component.html',
  styleUrls: ['./img-compress.component.css']
})
export class ImgCompressComponent {

  constructor(private imageCompress: NgxImageCompressService) {}
  
  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;
 
  compressFile() {
  
    // fetch image from local machine
    this.imageCompress.uploadFile().then(({image, orientation}) => {
    
      // store img to local variable to show-up in html document
      this.imgResultBeforeCompress = image;
      Swal.fire(`Image Size in bytes Before Compress was: ${this.imageCompress.byteCount(image)}`);
      
      // compress image
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;
          setTimeout(() => {
            Swal.fire(`Image Size in bytes After Compress was: ${this.imageCompress.byteCount(result)}`);
          }, 3000);
        }
      );
      
    });
    
  }

}
