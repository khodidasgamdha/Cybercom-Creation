import { StudentsService } from '../core/services/students.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-manage-student',
  templateUrl: './manage-student.component.html',
  styleUrls: ['./manage-student.component.css']
})
export class ManageStudentComponent implements OnInit {

  constructor( private  productssevice: StudentsService) { }

  dataTitle = "Products List";
  feaching = false;
  products =[]

  @ViewChild('id') id: ElementRef;
  @ViewChild('name') name: ElementRef;
  @ViewChild('price') price: ElementRef;

  editMode: boolean = false;
  editId: number;


  // add product in array
  onAddProduct(id ,name ,price){

    // if edit mode is true then update value else add product
    if(this.editMode) {
      this.products[this.editId] = {
        id: id.value,
        name: name.value,
        price:price.value
      }
      this.editMode = false; // false after update value
      this.id.nativeElement.value = ''; // after update empty input boxes
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }else {
      this.products.push({
        id: id.value,
        name: name.value,
        price:price.value
      })
    }
    this.onSaveProduct();
  }

  // add product to firebase
  onSaveProduct(){
    this.productssevice.saveProducts(this.products).subscribe( 
      (response) =>  console.log(response),
      (err)=>console.log(err)
    )
  }

  // fetch products from firebase
  onFetchProduct(){
    this.feaching = true;
    this.productssevice.fetchProducts().subscribe(
       (response) => {
        const data = JSON.stringify(response)
        this.products = JSON.parse(data)
        this.feaching = false;
      },
      (err)=>console.log(err) 
    )
  }

  // edit product
  onEditProduct(id) {
    this.editMode = true;
    this.editId = id;
    this.id.nativeElement.value = this.products[id].id;
    this.name.nativeElement.value = this.products[id].name;
    this.price.nativeElement.value = this.products[id].price;
  }

  // delete product
  onDeleteProduct(id){
    if(confirm("Do you want to delete this product?")){
      this.products.splice(id,1)
      this.onSaveProduct();
    }
  }

  // on initialize
  ngOnInit(): void {
    this.onFetchProduct();
  }

}
