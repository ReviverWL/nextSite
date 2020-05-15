import profileReduser from './profile-reduser'
import profileReduser from './dialogs-reduser'
import profileReduser from './sidebar-reduser'

const state = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, text: '初音ミク', likes: 39 },
        { id: 2, text: 'azazazazaaza', likes: 10 },
        { id: 3, text: 'nyao', likes: 1024 },
      ],
      textflowPost: ''
    },
    dialogsPage: {
      users: [
        { id: '01', name: 'Miku', group: 'vocaloid', },
        { id: '0139', name: 'Saya' },
        { id: '010', name: 'Elli' },
        { id: '02', name: 'Rin' },
        { id: '10', name: 'AnonCos' },
      ],
      messages: [
        { id: '01', message: 'Hey' },
        { id: '02', message: 'Yo' },
        { id: '03', message: 'Owww' },
        { id: '04', message: 'Sumimasen' },
        { id: '05', message: 'Hi' },],
    },
    sidebar: {}
  },

  getState() {
    return this._state
  },

  _render() { },

  subscriber(observer) {
    render = observer
  },

  dispatch(action) {

    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReduser(this._state.dialogsPage, action)
    this._state.sidebar = sidebarReduser(this._state.sidebar, action)
    _render()
  }
}

export default state;