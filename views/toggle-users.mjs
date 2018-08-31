export class ToggleUsersView {
  constructor () {
    this.drawButton = this.drawButton.bind(this)
    this.eventIsAttached = false
  }

  renderButton (options) {
    // Si ya estábamos escuchando el evento, no lo volvemos a
    // añadir el listener.
    if (this.eventIsAttached) {
      return
    }

    document.getElementById('mostrar-ocultar').addEventListener('click', () => {
      options.onToggle()
    })

    this.eventIsAttached = true
  }

  drawButton (options) {
    this.renderButton(options)
  }
}