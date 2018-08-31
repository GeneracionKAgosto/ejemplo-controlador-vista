export class ToggleUsersController {
  constructor() {
    this.expanded = true
  }

  toggle () {
    this.expanded = !this.expanded
  }

  isExpanded () {
    return this.expanded
  }

  renderToggleUsers(renderFn, options) {
    renderFn(options)
  }
}
