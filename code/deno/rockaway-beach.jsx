/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.144.0/http/server.ts";
import { h, renderSSR } from "https://deno.land/x/nano_jsx@v0.0.32/mod.ts";

function App(url) {
    let beat;
    const thisUrl = new URL( url.children[0] );
    switch (thisUrl.pathname) {
      case "/chewing" : beat="Out a rhythm"; break;
      case "/rock" : beat="Away beach"; break;
      case "/up" : beat="On the roof"; break;
      default: beat="Rockaway Beach";
    }
    return ( <html> <head> <title>Hey, ho, let's go</title></head>
        <body> <h1>{beat}</h1> </body> </html> );
}

serve( (req) => {
    const html = renderSSR(<App>{req.url}</App>);
    return new Response(html, {  headers: {  "content-type": "text/html; charset=utf-8",  }, });
});


