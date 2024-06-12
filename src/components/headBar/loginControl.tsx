import React from "react";
import ProfileButton from "./profileButton.tsx";
import LoginButton from "./loginButton";
import {DivProps} from "../../utils/typedef.ts";
import {IconBaseProps} from "react-icons";

interface State {
  isLoggedIn: boolean;
}

class LoginControl extends React.Component<DivProps, State> {
  constructor(props:DivProps) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isLoggedIn: false};
  }

  handleLoginClick() {
    // this.setState({isLoggedIn: true});
    window.location.href = "/login";
  }

  handleLogoutClick() {
    this.setState({isLoggedIn: false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const props:DivProps = {};

    let button;
    if(isLoggedIn){
      props.onClick = this.handleLogoutClick;
      button = <ProfileButton {...(props as IconBaseProps)}/>;
    }else{
      props.onClick = this.handleLoginClick;
      props.className = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
      button = <LoginButton {...props}/>;
    }
    return button;
  }
}

export default LoginControl;