const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  name: state => state.user.name,
  usernum: state => state.user.usernum,
  language: state => state.app.language,
  roles: state => state.user.roles
}
export default getters
