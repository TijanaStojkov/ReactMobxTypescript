import { observable } from "mobx";
import RootStore from "../index";

class AuthStore {
  @observable parent: RootStore;
  @observable isLogin: boolean = true;
  constructor(parent: RootStore) {
    this.parent = parent;
  }
}
export default AuthStore;
