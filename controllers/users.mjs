export class UserController {
  constructor() {
    this.users = []
  }

  async init() {
    return this.fetchUsers()
  }

  async fetchUsers () {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    this.users = users
  }

  async desactivateUser (userId) {
    console.log("Voy a llamar a la API con el userID", userId)
    console.log(this.users.find(user => user.id === userId))
  }

  renderUsers(renderFn, options) {
    renderFn({
      ...options,
      users: this.users
    })
  }
}
