/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.144.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.32/mod.ts";

function App(url) {
    let pachanga;
    const thisUrl = new URL( url.children[0] );
    switch (thisUrl.pathname) {
      case "/silbo" : pachanga="Rockabilly"; break;
      case "/rock" : pachanga="En Samil"; break;
      case "/vitrasa" : pachanga="Hacia Samil"; break;
      default: pachanga="Diga qué le debo";
    }
    return ( <html> <head> <title>Qué pasa por la calle</title></head>
        <body> <h1>{pachanga}</h1> </body> </html> );
}

serve( (req) => {
    const html = renderSSR(<App>{req.url}</App>);
    return new Response(html, {  headers: {  "content-type": "text/html; charset=utf-8",  }, });
});


