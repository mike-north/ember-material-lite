window.MaterialTooltip.prototype.init = function() {
  'use strict';

  if (this.element_) {
    let forElId = this.element_.getAttribute('for');

    if (forElId) {
      if (/^[A-Za-z0-9\_\-]+$/.test(forElId)) {
        forElId = `#${forElId}`;
      }
      this.forElement_ = document.querySelector(forElId);
    }

    if (this.forElement_) {
      this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this);
      this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this);
      this.forElement_.addEventListener('mouseenter', this.boundMouseEnterHandler,
          false);
      this.forElement_.addEventListener('click', this.boundMouseEnterHandler,
          false);
      this.forElement_.addEventListener('mouseleave', this.boundMouseLeaveHandler);
    }
  }
};
