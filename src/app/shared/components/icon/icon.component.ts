import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  imports: [],
  templateUrl: './icon.component.html',
  styleUrl: './icon.component.less',
})
export class IconComponent {
  @Input() name: string;
  @Input() color: string = 'currentColor';
  @Input() size: string = '18px';

  get iconUrl(): string {
    return `svgs/${this.name}.svg`;
  }
}
