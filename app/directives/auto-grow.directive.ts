import { Directive, ElementRef, HostListener, AfterContentChecked } from "@angular/core";

@Directive({
    selector: "textarea[autogrow]"
})
export class AutoGrowDirective implements AfterContentChecked {

    @HostListener("input", ["$event.target"])
    onInput(area: HTMLTextAreaElement): void {
        this._resize();
    }

    constructor(private _elementRef: ElementRef) { }

    ngAfterContentChecked(): void {
        this._resize();
    }

    private _resize(): void {
        this._elementRef.nativeElement.style.overflow = "hidden";
        this._elementRef.nativeElement.style.height = `${this._elementRef.nativeElement.scrollHeight}px`;
    }
}
