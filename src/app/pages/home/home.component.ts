import { Component } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent {}
