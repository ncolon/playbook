import React from "react"
import { Link, withPrefix } from "gatsby"


export default function FileLink(props) {
  const onClickHandler = function(event) {
    if (!this.to) {
      return;
    }
    event.preventDefault();
    let prefixedPath = withPrefix(this.to);
    window.open(prefixedPath);
  }

  return (
    <div>
      <Link onClick={onClickHandler.bind(props)} {...props}>{props.children}</Link>
    </div>
  )
}
