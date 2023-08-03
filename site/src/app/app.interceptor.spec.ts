import { TestBed } from '@angular/core/testing';

import { AppInterceptor } from './app.interceptor';

describe('AppInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      AppInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: AppInterceptor = TestBed.inject(AppInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
