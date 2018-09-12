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

  data: any[];
  files: TreeNode[];

  ngOnInit() {
    this.files = [
      {
        label: 'Folder 1',
        collapsedIcon: 'fa-folder',
        expandedIcon: 'fa-folder-open',
        children: [
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open',
            children: [
              {
                label: 'File 2',
                icon: 'fa-file-o'
              }
            ]
          },
          {
            label: 'Folder 2',
            collapsedIcon: 'fa-folder',
            expandedIcon: 'fa-folder-open'
          },
          {
            label: 'File 1',
            icon: 'fa-file-o'
          }
        ]
      }
    ];

    this.getData();
    console.log(this.data);
    //this.files = this.data;
    console.log(this.files);
  }

  getData(): void {
    this.dataService.getData().subscribe(src => this.data = src);
  }

}
