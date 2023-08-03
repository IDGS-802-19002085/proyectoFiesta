import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
//   isHandset$: Observable<boolean> = this.breakpointObserver
//   .observe([Breakpoints.Handset])
//   .pipe(map((result) => result.matches));

// constructor(private breakpointObserver: BreakpointObserver) {}

badgevisible = false;
badgevisibility() {
  this.badgevisible = true;
}
}
