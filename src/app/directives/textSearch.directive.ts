import {
  Directive,
  Input,
  HostBinding,
  ElementRef,
  SecurityContext,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[app-text-search]',
})
export class TextSearchDirecrive {
  @Input('app-text-search') searchText!: string;
  @Input() customClasses = '';

  @HostBinding('innerHtml')
  content!: string | null;

  constructor(private el: ElementRef, private sanitizer: DomSanitizer) {}

  ngOnChanges() {
    const text = (this.el.nativeElement as HTMLElement).textContent;
    const regex = new RegExp(this.searchText, 'gi');
    const newText = text!.replace(regex, (match: string) => {
      return `<span class="${this.customClasses}">${match}</span>`;
    });
    const sanitized = this.sanitizer.sanitize(SecurityContext.HTML, newText);
    this.content = sanitized;
  }
}
