const getTargetElement = (text) => {
  if (!text) return null;

  const selector = /^[A-Za-z0-9_-]+$/.test(text) ? `#${text}` : text;
  return document.querySelector(selector);
};

window.MaterialTooltip.prototype.init = function () {
  'use strict';

  const forElId = this.element_ && this.element_.getAttribute('for');
  this.forElement_ = getTargetElement(forElId);

  if (this.forElement_) {
    this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
    this.boundMouseLeaveHandler = this.hideTooltip_.bind(this);
    this.forElement_.addEventListener(
      'mouseenter',
      this.boundMouseEnterHandler,
      false,
    );
    this.forElement_.addEventListener(
      'click',
      this.boundMouseEnterHandler,
      false,
    );
    this.forElement_.addEventListener(
      'mouseleave',
      this.boundMouseLeaveHandler,
    );
  }
};
