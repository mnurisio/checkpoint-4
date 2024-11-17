import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Todo } from './models/Todo.js'
import { Image } from './models/Image.js'
import { Quote } from './models/Quote.js'
import { Weather } from './models/Weather.js'


class ObservableAppState extends EventEmitter {

/** @type {Todo[]}} */
todos = []


/** @type {Image} */
images = null

/** @type {Quote} */
quotes = null

/** @type {Weather} */
weather = null

  user = null
  /**@type {import('./models/Account.js').Account | null} */
  account = null
}

export const AppState = createObservableProxy(new ObservableAppState())