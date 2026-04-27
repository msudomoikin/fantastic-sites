export class SketchContainer {
    title: string;
    age?: number;

    constructor(title: string) {
        this.title = title;
    }

    _createDOM() {
        const html = `
            <div class="container">
                <h2 class="">${this.title}<i class="bi bi-arrow-clockwise fir__reload reload"></i></h2>
                <div class="sketch-container fir__container"></div>
            </div>`

        return html
    }
}