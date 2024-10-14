import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TooltipComponent } from './tooltip/tooltip.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TooltipComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Tooltip Demo';
}
