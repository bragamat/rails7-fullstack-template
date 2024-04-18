import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="app--sidebar"
export default class extends Controller {
  static targets = ["toggleable", "appLayer", "header"]

  toggle() {

    if (this._isOpen()) return this._close()
    if (this._isClosed()) return this._open()
  }

  _isOpen() {
    return this.toggleableTarget.classList.contains('lg:-translate-x-full')
  }

  _isClosed() {
    return this.toggleableTarget.classList.contains('lg:translate-x-0')
  }

  _close() {
    this.toggleableTarget.classList.remove('lg:-translate-x-full')
    this.toggleableTarget.classList.remove('-translate-x-full')
    this.appLayerTarget.classList.add('lg:pl-64')
    this.headerTarget.classList.add('lg:pl-64')

    this.toggleableTarget.classList.add('lg:translate-x-0')
    this.toggleableTarget.classList.add('translate-x-0')
  }

  _open() {
    this.toggleableTarget.classList.remove('lg:translate-x-0')
    this.toggleableTarget.classList.remove('translate-x-0')
    this.appLayerTarget.classList.remove('lg:pl-64')
    this.headerTarget.classList.remove('lg:pl-64')

    this.toggleableTarget.classList.add('lg:-translate-x-full')
    this.toggleableTarget.classList.add('-translate-x-full')
  }
}
