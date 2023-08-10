require('@babel/register');

const React = require('react');
const ReactDOMServer = require('react-dom/server');

function renderTemplate(component, props, res) {
  const yandexMetricaScript = `
  <!-- Yandex.Metrika counter -->
  <script type="text/javascript" >
     (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
     m[i].l=1*new Date();
     for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
     k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
     (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
  
     ym(94588413, "init", {
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
     });
  </script>
  <noscript><div><img src="https://mc.yandex.ru/watch/94588413" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
  <!-- /Yandex.Metrika counter -->
`;
  const reactEl = React.createElement(component, props);
  const html = ReactDOMServer.renderToStaticMarkup(reactEl);
  const finalHtml = html.replace(
    '<script src="yandex"></script>',
    yandexMetricaScript
  );
  res.send(`<!DOCTYPE html>${finalHtml}`);
  res.end();
}

module.exports = renderTemplate;
