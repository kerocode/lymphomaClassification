import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { distinctUntilChanged } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ScrollToService {
  private element$ = new Subject<string>();

  constructor() { this.element$.next(''); }
  subScrollElementFun(f: (ele: string) => void) {
    this.element$.pipe(distinctUntilChanged()).subscribe(ele => f(ele));
  }
  setNextvalue(elementName: string) {
    this.element$.next(elementName);
  }
}
