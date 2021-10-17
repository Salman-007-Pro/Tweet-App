export default class NavigationHelper {
  static dispatcher;

  static setter(cb) {
    this.dispatcher = cb;
  }
  static logout() {
    this.dispatcher();
  }
}
