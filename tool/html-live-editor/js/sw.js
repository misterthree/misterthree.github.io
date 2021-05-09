var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/tool/html-live-editor/',
    '/tool/html-live-editor/css/cloudEdit.css',
    '/tool/html-live-editor/css/contextMenu.css',
    '/tool/html-live-editor/css/fonts/ClearSans-Light-webfont.eot',
    '/tool/html-live-editor/css/fonts/ClearSans-Light-webfont.svg',
    '/tool/html-live-editor/css/fonts/ClearSans-Light-webfont.ttf',
    '/tool/html-live-editor/css/fonts/ClearSans-Light-webfont.woff',
    '/tool/html-live-editor/js/cloudEdit.js',
    '/tool/html-live-editor/js/console.js',
    '/tool/html-live-editor/js/jqconsole.min.js',
    '/tool/html-live-editor/js/contextMenu.js',
    '/tool/html-live-editor/js/jquery.ui.position.js',
    '/tool/html-live-editor/js/ace/ace.js',
    '/tool/html-live-editor/js/ace/emmet.js',
    '/tool/html-live-editor/js/ace/ext-emmet.js',
    '/tool/html-live-editor/js/ace/mode-css.js',
    '/tool/html-live-editor/js/ace/mode-html_completions.js',
    '/tool/html-live-editor/js/ace/mode-html.js',
    '/tool/html-live-editor/js/ace/mode-javascript.js',
    '/tool/html-live-editor/js/ace/mode-less.js',
    '/tool/html-live-editor/js/ace/mode-sass.js',
    '/tool/html-live-editor/js/ace/mode-text.js',
    '/tool/html-live-editor/js/ace/worker-css.js',
    '/tool/html-live-editor/js/ace/worker-html.js',
    '/tool/html-live-editor/js/ace/worker-javascript.js',
    '/tool/html-live-editor/js/ace/theme-ambiance.js',
    '/tool/html-live-editor/js/ace/theme-chaos.js',
    '/tool/html-live-editor/js/ace/theme-chrome.js',
    '/tool/html-live-editor/js/ace/theme-clouds.js',
    '/tool/html-live-editor/js/ace/theme-clouds_midnight.js',
    '/tool/html-live-editor/js/ace/theme-cobalt.js',
    '/tool/html-live-editor/js/ace/theme-crimson_editor.js',
    '/tool/html-live-editor/js/ace/theme-dawn.js',
    '/tool/html-live-editor/js/ace/theme-dreamweaver.js',
    '/tool/html-live-editor/js/ace/theme-eclipse.js',
    '/tool/html-live-editor/js/ace/theme-github.js',
    '/tool/html-live-editor/js/ace/theme-idle_fingers.js',
    '/tool/html-live-editor/js/ace/theme-katzenmilch.js',
    '/tool/html-live-editor/js/ace/theme-kr.js',
    '/tool/html-live-editor/js/ace/theme-kuroir.js',
    '/tool/html-live-editor/js/ace/theme-merbivore.js',
    '/tool/html-live-editor/js/ace/theme-merbivore_soft.js',
    '/tool/html-live-editor/js/ace/theme-mono_industrial.js',
    '/tool/html-live-editor/js/ace/theme-monokai.js',
    '/tool/html-live-editor/js/ace/theme-pastel_on_dark.js',
    '/tool/html-live-editor/js/ace/theme-solarized_dark.js',
    '/tool/html-live-editor/js/ace/theme-solarized_light.js',
    '/tool/html-live-editor/js/ace/theme-terminal.js',
    '/tool/html-live-editor/js/ace/theme-textmate.js',
    '/tool/html-live-editor/js/ace/theme-tomorrow.js',
    '/tool/html-live-editor/js/ace/theme-tomorrow_night_blue.js',
    '/tool/html-live-editor/js/ace/theme-tomorrow_night_bright.js',
    '/tool/html-live-editor/js/ace/theme-tomorrow_night_eighties.js',
    '/tool/html-live-editor/js/ace/theme-tomorrow_night.js',
    '/tool/html-live-editor/js/ace/theme-twilight.js',
    '/tool/html-live-editor/js/ace/theme-vibrant_ink.js',
    '/tool/html-live-editor/js/ace/theme-xcode.js',
    'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js',
    'https://rawgit.com/ai/autoprefixer-rails/master/vendor/autoprefixer.js',
    'https://rawgit.com/medialize/sass.js/master/dist/sass.js',
    'https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.1/normalize.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/css/bootstrap.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.2.2/css/foundation.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/foundation/5.2.2/js/foundation/foundation.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/less.js/1.7.0/less.min.js'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});