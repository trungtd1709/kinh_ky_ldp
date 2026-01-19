import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  OnDestroy,
  Renderer2,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[appScrollAnimate]',
  standalone: true,
})
export class ScrollAnimateDirective implements OnInit, OnDestroy {
  @Input() animationClass: string = 'fade-in-up';
  @Input() animationDelay: string = '0ms';
  @Input() animationThreshold: number = 0.1;

  private observer: IntersectionObserver | null = null;
  private isBrowser: boolean;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) {
      // On server-side, show the element immediately
      this.renderer.addClass(this.el.nativeElement, 'animated');
      return;
    }

    // Set initial hidden state
    this.renderer.addClass(this.el.nativeElement, 'scroll-animate');
    this.renderer.setStyle(
      this.el.nativeElement,
      'transition-delay',
      this.animationDelay
    );

    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.renderer.addClass(this.el.nativeElement, 'animated');
            this.renderer.addClass(this.el.nativeElement, this.animationClass);
            // Unobserve after animation is triggered
            this.observer?.unobserve(this.el.nativeElement);
          }
        });
      },
      {
        threshold: this.animationThreshold,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
