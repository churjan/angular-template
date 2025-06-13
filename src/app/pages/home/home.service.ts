import { Injectable } from '@angular/core';
import { ApiService } from '@app/core/services/api.service';
@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apiService: ApiService) {}

  fetchList() {
    return this.apiService.get('posts');
  }
}
