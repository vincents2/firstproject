import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-divider',
  templateUrl: './divider.component.html',
  styleUrls: ['./divider.component.sass']
})
export class DividerComponent {

  @Input('scope') scope = 1;
}
