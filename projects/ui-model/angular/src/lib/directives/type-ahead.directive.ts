import { Directive, ElementRef, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Directive({
  selector: '[uiTypeAhead]',
  exportAs: 'uiTypeAhead',
})
export class TypeAheadDirective implements OnInit, OnDestroy {

  constructor(private element: ElementRef) {
  }
  @Output('uiTypeAheadSearch') search = new EventEmitter<any>();
  @Output('uiTypeAheadOpen') open = new EventEmitter<void>();
  @Output('uiTypeAheadClose') close = new EventEmitter<void>();
  @Input() delay = 200;
  private typing = new Subject();

  @HostListener('keyup')
  keyup(): void {
    this.typing.next(this.element.nativeElement.value);
  }

  @HostListener('focus')
  focus(): void {
    this.keyup();
    this.open.emit();
  }

  ngOnInit(): void {
    this.typing.pipe(
      debounceTime(this.delay),
    ).subscribe((term) => {
      this.open.emit();
      this.search.emit(term);
    });
  }

  ngOnDestroy(): void {
    this.close.emit();
    this.typing.complete();
  }
}
