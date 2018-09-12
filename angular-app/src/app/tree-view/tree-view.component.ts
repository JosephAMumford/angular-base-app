import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/primeng';

import { DataService } from '../data.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent implements OnInit {

  constructor(private dataService: DataService) { }

  files: TreeNode[];

  ngOnInit() {

    this.getData();
    console.log(this.files);
  }

  getData(): void {
    this.dataService.getData().subscribe(src => this.files = src);
  }

}
