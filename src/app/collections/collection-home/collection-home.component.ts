import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.css']
})
export class CollectionHomeComponent implements OnInit {

  data = [
    { name: 'katrina', age: 37, job: 'Angel' },
    { name: 'Elisha', age: 38, job: 'Actress' },
    { name: 'Paris', age: 22, job: 'Singer' }
  ];

  headers = [
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
