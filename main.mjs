import { UserController } from "./controllers/users.mjs";
import { ToggleUsersController } from "./controllers/toggle-users.mjs"

import { UsersView } from "./views/users.mjs"
import { ToggleUsersView } from "./views/toggle-users.mjs";

const userController = new UserController()
const toggleUsersController = new ToggleUsersController()
const userView = new UsersView()
const toggleUsersView = new ToggleUsersView()

function onClickUser(userId) {
  userController.desactivateUser(userId)
}

const renderUserList = () => {
  userController.renderUsers(userView.drawUsers, {
    expanded: toggleUsersController.isExpanded(),
    onClickUser
  })
}

function onToggleUserList() {
  toggleUsersController.toggle()
  renderUserList()
}

const renderToggleUsers = () => {
  toggleUsersController.renderToggleUsers(toggleUsersView.drawButton, {
    onToggle: onToggleUserList
  })
}

async function main() {
  await userController.fetchUsers()
  renderUserList()
  renderToggleUsers()
}

main()
  .then(() => console.log("Done!"))
  .catch(error => {
    console.error(error)
  })