import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../stores";

const Auth = () => {
  const {
    rootStore: {
      AuthStore: { isLogin },
      UsersStore: { name },
    },
  } = useStore();
  return (
    <div>
      {isLogin && "radi AuthStore"}
      <p>
        <div>{name} ime je iz UsersStore</div>
      </p>
    </div>
  );
};

export default observer(Auth);
