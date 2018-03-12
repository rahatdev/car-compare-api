import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-like',
    styleUrls:['./like.component.scss'],
    template: `
        <span class="glyphicon glyphicon-heart"
        [class.glyphicon-active]="isLiked"
        [class.glyphicon-inactive]="!isLiked"></span>
        <p>{{}}</p>        
    `
})
export class LikeComponent {
    @Input('isLiked') isLiked: boolean;
    @Input('likes') likes: number = 0;


    constructor() { }

    click(): void {
        this.likes += this.isLiked ? 1 : -1;
        this.isLiked = !this.isLiked;
    }


}