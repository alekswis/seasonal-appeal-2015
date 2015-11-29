'use strict';

import scrollMonitor from 'scrollMonitor';
import {addWatcher, removeWatcher} from '../utils/scroll-watcher';

export default function () {
  const blackscreen = document.querySelector('.js-blackscreen');
  const blackscreenBasis = document.querySelector('.js-blackscreen-basis');

  let watcherId;

  const monitor = scrollMonitor.create(blackscreenBasis);

  monitor.enterViewport(() => {
    watcherId = addWatcher(calculateOpacity);
  });

  monitor.exitViewport(() => {
    if (watcherId) {
      removeWatcher(watcherId);
      watcherId = null;
    }
  });

  if (monitor.isAboveViewport) {
    calculateOpacity();
  }

  function calculateOpacity() {
    const ratio = (1 / window.innerHeight);
    const percent = (window.pageYOffset + monitor.height - monitor.top);
    const limited = Math.max(0, Math.min(ratio * percent, 1));

    blackscreen.style.opacity = limited.toFixed(2);
  }
}
