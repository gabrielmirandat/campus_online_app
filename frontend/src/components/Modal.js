import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../style/Modal.css';

const modal = document.getElementById('modal');

class Modal extends Component {
  constructor(props) {
    super(props);
    // Create a div that we'll render the modal into. Because each
    // Modal component has its own element, we can render multiple
    // modal components into the modal container.
    this.el = modal;
  }

  componentDidMount() {
    // Append the element into the DOM on mount. We'll render
    // into the modal container element (see the HTML tab).
    modal.removeAttribute("hidden");
  }
  
  componentWillUnmount() {
    // Remove the element from the DOM when we unmount
    modal.addAttribute("hidden");
  }

  render() {
    // Use a portal to render the children into the element
    return ReactDOM.createPortal(
    // Any valid React child: JSX, strings, arrays, etc.
    this.props.children,
    // A DOM element
    this.el,
    );
  }
}

export default Modal;