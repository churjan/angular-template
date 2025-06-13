import { Component, OnInit } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeService } from './home.service';
import { ThemeService } from '@app/core/services/theme.service';
@Component({
  selector: 'app-home',
  imports: [SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.less',
})
export class HomeComponent implements OnInit {
  get currentTheme() {
    return this.themeService.currentTheme === 'default' ? 'light' : 'dark';
  }

  constructor(
    private hs: HomeService,
    private themeService: ThemeService,
  ) {}

  ngOnInit(): void {
    // this.fetchList();
  }

  fetchList() {
    this.hs.fetchList().subscribe((data) => {
      console.log(data);
    });
  }

  onToggleTheme() {
    this.themeService.toggleTheme();
  }
}
