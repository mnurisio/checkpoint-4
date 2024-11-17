import { AppState } from "../AppState.js";
import { imageService } from "../services/ImageService.js";
import { setHTML } from "../utils/Writer.js";


export class ImageController{
    constructor(){
        this.fetchImage()
        AppState.on('images', this.drawActiveImage)
        AppState.on('account', this.drawActiveImage)

    }

    async fetchImage(){
        try {
            await imageService.fetchImage()
        } catch (error) {
            console.error(error)
        }
    }

    drawActiveImage(){
        document.body.style.backgroundImage = `url(${AppState.images.imgUrl})`
    }
    
}