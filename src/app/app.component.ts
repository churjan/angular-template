import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ThemeService } from './core/services/theme.service';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent implements OnInit {
  title = 'angular-template';

  constructor(private themeService: ThemeService) {}

  async ngOnInit(): Promise<void> {
    await this.themeService.loadTheme();
  }
}
