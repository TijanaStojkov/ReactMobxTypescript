import { observable } from "mobx";

import RootStore from "../index";

class UsersStore {
  @observable parent: RootStore;
  @observable name: string = "Maja";
  constructor(parent: RootStore) {
    this.parent = parent;
  }
}

export default UsersStore;
