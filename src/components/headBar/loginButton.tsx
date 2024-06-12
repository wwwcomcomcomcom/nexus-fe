import {ButtonProps, DivProps} from "../../utils/typedef.ts";

export default function LoginButton(props:DivProps){
  return <button {...(props as ButtonProps)}>Login</button>
}