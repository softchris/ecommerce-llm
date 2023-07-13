  
  class EventBus {
    static _instance
  
    static getInstance() {
      if (!this._instance) this._instance = new EventBus()
      return this._instance
    }

    constructor() {
        this.eventListeners = new Map()
    }
  
    dispatchEvent(event) {
        const eventListeners = this.eventListeners.get(event.type)
        if (eventListeners) {
            eventListeners.forEach(({ callback, once }) => {
                callback(event)
                if (once) this.removeEventListener(event.type, callback)
            })
        }
    }

    removeEventListener(eventName, callback) {
        const eventListeners = this.eventListeners.get(eventName)
        if (eventListeners) {
            this.eventListeners.set(
                eventName,
                eventListeners.filter((listener) => listener.callback !== callback)
            )
        }
    }

    emit(type, data) {
      this.dispatchEvent({type, data})
    }

    registerEventListener(eventName, callback, once = false) {
        if (!this.eventListeners.has(eventName)) {
          this.eventListeners.set(eventName, [])
        }
    
        const eventListeners = this.eventListeners.get(eventName)
        eventListeners.push({ callback, once })
      }
    
      on(eventName, callback) {
        this.registerEventListener(eventName, callback)
      }
    
  }

export default EventBus.getInstance()