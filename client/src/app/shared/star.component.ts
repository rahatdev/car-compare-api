import { Component } from "@angular/core";

@Component({
    selector: 'app-star',
    template: `
        <span class="glyphicon" 
        [class.gyphicon-star-empty]="!isFavorite" 
        [class.gyphicon-star]="isFavorite" 
        (click)="onClick()"></span>
        <input 
    `
})
export class StarComponent {
    isFavorite: boolean;

    constructor(){}

    onClick(){
        this.isFavorite = !this.isFavorite;
    }

}