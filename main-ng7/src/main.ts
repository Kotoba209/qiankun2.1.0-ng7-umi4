import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

window['__REACT_ERROR_OVERLAY_GLOBAL_HOOK__'] = {}

if (environment.production) {
  enableProdMode();
}

// 解决子应用修改热更新导致主应用报错
window['__REACT_ERROR_OVERLAY_GLOBAL_HOOK__'] = {
  iframeReady: function() {
      var overlay = document.querySelector('iframe[style*="z-index: 2147483647;"]')
      if (overlay) {
          overlay['style'].display = 'none'
      }
  }    
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
