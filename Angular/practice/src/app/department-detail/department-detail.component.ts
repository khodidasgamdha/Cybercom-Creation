import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // can't change id each time when url change
    // let id = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.departmentId = id;
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = +params.get('id');
      this.departmentId = id;
    })
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.route});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.route});
  }

  goPrevious() {
    let previousId = this.departmentId - 1;
    // this.router.navigate(['/department', previousId]);
    this.router.navigate(['../', previousId], {relativeTo: this.route});
  }

  goNext() {
    let nextId = this.departmentId + 1;
    // this.router.navigate(['/department', nextId]);
    this.router.navigate(['../', nextId], {relativeTo: this.route});
  }

  gotoDepartment() {
    let selectedId = this.departmentId ? this.departmentId : null;
    // this.router.navigate(['/department', {id:selectedId}])
    this.router.navigate(['../', {id: selectedId}], {relativeTo: this.route});
  }

  submit() {
    this.router.navigate(['/department'], {
      queryParams: { page: 1, order: 'new' }
    });
  }

}
