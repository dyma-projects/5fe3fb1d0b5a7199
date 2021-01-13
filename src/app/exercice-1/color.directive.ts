import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({ selector: "[monChangementCouleur]" })
export class ChangerCouleur {
  constructor(private el: ElementRef) {}

  @HostListener("window:keydown", ["$event"]) keyDown($event) {
    console.log($event.key);
    switch ($event.key) {
      case "ArrowLeft":
        this.changeTextColor("green");
        break;
      case "ArrowRight":
        this.changeTextColor("red");
        break;
      case "ArrowUp":
        this.changeTextColor("blue");
        break;
      case "ArrowDown":
        this.changeTextColor("brown");
        break;
      case "Enter":
        this.changeTextColor("black");
        break;
    }
  }

  private changeTextColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
