export class UsersView {
  constructor () {
    this.drawUsers = this.drawUsers.bind(this)
  }

  renderUser ({user, expanded}) {
    const button = document.createElement('button')
    button.addEventListener('click', () => options.onClickUser(user.id))
    button.innerText = user.name

    const li = document.createElement('li')

    li.classList.add('user-list-item')

    if (!expanded) {
      li.classList.add('user-list-item-expanded')
    }

    li.appendChild(button)

    return li
  }

  renderUsers ({users, expanded}) {
    const userElements = users.map(user => this.renderUser({
      user,
      expanded
    }))

    const ul = document.createElement('ul')

    userElements.forEach(userElement => {
      ul.appendChild(userElement)
    });
    
    return ul
  }

  drawUsers (options) {
    const usersListElements = this.renderUsers(options)
    const element = document.getElementById("users-list")

    // Limpiar datos
    while (element.firstChild) {
      element.removeChild(element.firstChild);
    }

    element.appendChild(usersListElements)
  }
}