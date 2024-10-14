import { Component, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-tooltip',
  standalone: true,
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.css'],
  imports: [CommonModule],  
})
export class TooltipComponent {
  @Input() fullMessage: string = 'This is a tooltip message';
  @Input() truncatedMessage: string = 'This is a...';
  isTooltipVisible = false;
  isFullMessageVisible = false;

  onHover() {
    if (!this.isFullMessageVisible) {
      this.isTooltipVisible = true;
    }
  }

  onMouseOut() {
    if (!this.isFullMessageVisible) {
      this.isTooltipVisible = false;
    }
  }

  onClick() {
    this.isFullMessageVisible = !this.isFullMessageVisible;
    this.isTooltipVisible = false; 
  }


  closeTooltip(event: MouseEvent) {
    event.stopPropagation();  
    this.isFullMessageVisible = false;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    if (!target.closest('.tooltip-container')) {
      this.isFullMessageVisible = false;
    }
  }

  @HostListener('document:keydown.escape')
  onEscPress() {
    this.isFullMessageVisible = false;
  }
}
