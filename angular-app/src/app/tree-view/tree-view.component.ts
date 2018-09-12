import { Component, OnInit } from '@angular/core';

import { DataService } from '../data.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor(private dataService: DataService) { }

  data: any[];

  ngOnInit() {
    this.getData();
    console.log(this.data);
  }

  getData(): void {
    this.dataService.getData().subscribe(src => this.data = src);
  }

}
