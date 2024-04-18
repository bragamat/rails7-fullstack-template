import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="app--dropdown"
export default class extends Controller {
  static targets = ["toggleable", "toggler"]

  toggle() {
    this.toggleableTarget.classList.toggle('hidden')
  }

  close(e) {
    if (e && !this.togglerTarget.contains(e.target) && !this.toggleableTarget.contains(e.target) && !this.toggleableTarget.classList.contains('hidden')) {
      this.toggleableTarget.classList.add('hidden')
    }
  }
}
