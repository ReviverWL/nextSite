import { createStore, combineReducers } from "redux";
import profileReduser from './profile-reduser'
import dialogsReduser from './dialogs-reduser'
import usersReduser from './users-reduser'
import sidebarReduser from './sidebar-reduser'
import authReduser from "./auth-reduser";

let redusers = combineReducers({
    profilePage: profileReduser,
    dialogsPage: dialogsReduser,
    usersPage: usersReduser,
    sidebar: sidebarReduser,
    auth: authReduser
}
)

let store = createStore(redusers)

export default store