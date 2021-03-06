'use strict';

import blackscreen from './components/blackscreen';
import pagination from './components/pagination';
import lazyLoad from './components/lazy-load';
import parallax from './components/parallax';

(() => {
  if (!window.cutsTheMustard) {
    return;
  }

  blackscreen();
  pagination();
  parallax();
  lazyLoad();
})();
