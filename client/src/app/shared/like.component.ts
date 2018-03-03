export class LikeComponent {
    //private _isClicked = false;

    constructor(private _likesCount: number, private _isClicked = false) { }

    click(): void {
        this._likesCount += (this._isClicked) ? -1 : 1;
        this._isClicked = !this._isClicked;
    }

    get likes() {
        return this._likesCount;
    }

    get isClicked() {
        return this._isClicked;
    }

}