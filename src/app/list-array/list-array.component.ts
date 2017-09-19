import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-list-array',
  templateUrl: './list-array.component.html',
  styleUrls: ['./list-array.component.css']
})
export class ListArrayComponent implements OnInit {
@Input("Array") Array: [number];
  constructor() { }

  ngOnInit() {
  }

}
