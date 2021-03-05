import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { ClipboardService } from 'ngx-clipboard';

@Component({
  selector: 'app-encrypt-decrypt',
  templateUrl: './encrypt-decrypt.component.html',
  styleUrls: ['./encrypt-decrypt.component.css']
})
export class EncryptDecryptComponent implements OnInit {

  // encrypted decrypted data store in txt
  txt;
  pwd = "123";
  constructor(private clipboard: ClipboardService) { }

  ngOnInit(): void {
  }

  // encryption
  encrypt(data) {
    if(data){
      this.txt = CryptoJS.AES.encrypt(data.trim(), this.pwd.trim()).toString();
    }else {
      alert('Enter Text to Encrypt it.');
    }
  }

  // decryption
  decrypt(data) {
    if(data) {
      this.txt = CryptoJS.AES.decrypt(data.trim(), this.pwd.trim()).toString(CryptoJS.enc.Utf8)
    }else {
      alert('Enter Text to Decrypt it.');
    }
  }

  // copy data
  copy() {
    this.clipboard.copy(this.txt);
  }

}
