import {
    animate,
    Component,
    EventEmitter,
    Output,
    state,
    style,
    transition,
    trigger } from "@angular/core";

@Component({
    selector: "search-box",
    templateUrl: "./app/components/search-box/search-box.component.html",
    styleUrls: ["./app/components/search-box/search-box.component.css"],
    animations:[
        trigger("searchinput", [
            state("void", style({
                "transform": "translateX(100%)",
                "opacity": 0
            })),
            state("hidden", style({
                "transform": "translateX(100%)",
                "opacity": 0
            })),
            state("shown", style({
                "transform": "translateX(0%)",
                "opacity": 1
            })),
            transition("hidden <=> shown", animate("600ms cubic-bezier(0.77, 0, 0.175, 1)"))
        ])
    ]
})
export class SearchBoxComponent {

    @Output() onSearch: EventEmitter<string> = new EventEmitter();

    searchInputAnimationState: string = "hidden";

    showSearchInput(): void {
        this.searchInputAnimationState = "shown";
    }
    
    hideSearchInput(e: FocusEvent): void {
        this.searchInputAnimationState = "hidden";
        setTimeout(() => ((e.target || e.srcElement) as HTMLInputElement).value = "", 650);
    }

    notifySearch(e: KeyboardEvent) {
        if ((e.keyCode || e.which) === 13) {
            this.onSearch.emit(((e.target || e.srcElement) as HTMLInputElement).value);
        }
    }
}
