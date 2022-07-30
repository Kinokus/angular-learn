import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss'],
})
export class TemplatesComponent {

  @Input()
  template?: TemplateRef<{ $implicit: number }>;


}
