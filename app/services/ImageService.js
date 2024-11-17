import { AppState } from "../AppState.js"
import { api } from "./AxiosService.js"
import { Image } from "../models/Image.js"


class ImageService{

    async fetchImage() {
        const response = await api.get('api/images')
        const activeImage = new Image(response.data)
        AppState.images = activeImage
    }

}


export const imageService = new ImageService()