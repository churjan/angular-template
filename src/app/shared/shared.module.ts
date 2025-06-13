import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { IconComponent } from './components/icon/icon.component';

@NgModule({
  imports: [IconComponent],
  exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, NgZorroAntdModule, IconComponent],
})
export class SharedModule {}
