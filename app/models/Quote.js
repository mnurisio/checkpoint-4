

export class Quote{
    constructor(data){
        this.author = data.author
        this.body = data.quote
    }

    get quoteTemplate(){
        return `
        <div class="col-8 selectable text-center quoteBody rounded rounded-pill p-3">${this.body}</div>
        <div id="author-body" class="col-2 selectable text-center authorBody rounded rounded-pill p-3 align-self-center">- ${this.author}</div>
        `
    }
}