import { observable } from "mobx";

import UsersStore from "./UsersStore";
import AuthStore from "./AuthStore";

class RootStore {
  @observable UsersStore: UsersStore;
  @observable AuthStore: AuthStore;
  @observable name: string = "Maja";

  constructor() {
    this.UsersStore = new UsersStore(this);
    this.AuthStore = new AuthStore(this);
  }
}
export default RootStore;
