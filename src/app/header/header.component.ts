import {Component, OnInit} from '@angular/core';
import {MegaMenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Products',
        icon: 'pi pi-fw pi-video',
        items: [
          [
            {
              label: 'Services',
              items: [
                {label: 'Fast auth'},
                {label: 'Fast feedback'},
                {label: 'Fast Docs'},
              ],
            },
          ],
        ],
      },
    ];
  }
}
