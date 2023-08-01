import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-recursive-list',
  templateUrl: './recursive-list.component.html',
  styleUrls: ['./recursive-list.component.scss']
})
export class RecursiveListComponent {
  @Input() child: any;
  @Input() mainListLeftIcons: {id: number, url: string}[] = [];
}
