import { AuthController } from './controllers/AuthController.js';
import { ImageController } from './controllers/ImageController.js';
import { QuoteController } from './controllers/Quotecontroller.js';
import { WeatherController } from './controllers/WeatherController.js';
import { TodoController } from './controllers/TodoController.js';
// import { router } from './router-config.js';
const USE_ROUTER = false

class App {

  AuthController = new AuthController()
  TodoController = new TodoController()
  ImageController = new ImageController()
  QuoteController = new QuoteController()
  WeatherController = new WeatherController()
  
  // constructor() {
  //   if(USE_ROUTER){
  //     this.router = router
  //     this.router.init(this)
  //   }
  // }
}


const app = new App()
// @ts-ignore
window.app = app
