import{_ as t,c as e,o as n,a}from"./app.c0fc7fbe.js";const f=JSON.parse('{"title":"Configuration","description":"","frontmatter":{},"headers":[{"level":2,"title":"Configuration keys","slug":"configuration-keys"},{"level":2,"title":"ET-Config","slug":"et-config"}],"relativePath":"guide/efficient-tools/configuration.md","lastUpdated":1660815699000}'),s={name:"guide/efficient-tools/configuration.md"},o=a(`<h1 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-hidden="true">#</a></h1><p>This section will show you all configurations and how to export or restore them.</p><h2 id="configuration-keys" tabindex="-1">Configuration keys <a class="header-anchor" href="#configuration-keys" aria-hidden="true">#</a></h2><table><thead><tr><th>Attributes</th><th style="text-align:center;">Description</th></tr></thead><tbody><tr><td>APP_ID</td><td style="text-align:center;">Youdao translation service app id.</td></tr><tr><td>SECRET_KEY</td><td style="text-align:center;">Youdao translation service secret key.</td></tr><tr><td>MICROSOFT_SECRET_KEY</td><td style="text-align:center;">Microsoft translation service secret key.</td></tr><tr><td>MIRCOSOFT_LOCATION</td><td style="text-align:center;">Microsoft translation service location.</td></tr><tr><td>TRANSLATOR_SERVICE_TYPE</td><td style="text-align:center;">Translator service type.</td></tr><tr><td>FROM</td><td style="text-align:center;">Which language you wanna translate from.</td></tr><tr><td>TO</td><td style="text-align:center;">Which language you wanna translate into.</td></tr><tr><td>TINIFY_API_KEY</td><td style="text-align:center;">Tiny png developer&#39;s api key.</td></tr></tbody></table><h2 id="et-config" tabindex="-1">ET-Config <a class="header-anchor" href="#et-config" aria-hidden="true">#</a></h2><p>After updating the ET package, the configurations that configured before always gone. But now, you can backup the configurations by <code>etc -e</code> command before updating the package, and then, according to the <code>etc -i</code> command to restore them after updating.\u{1F973}\u{1F973}</p><div class="language-bash"><button class="copy"></button><span class="lang">bash</span><pre><code><span class="line"><span style="color:#A6ACCD;">Usage: etc </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">Options:</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v, --version  output the version number</span></span>
<span class="line"><span style="color:#A6ACCD;">  -i, --init     init ET configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">  -e, --export   </span><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ET configuration</span></span>
<span class="line"><span style="color:#A6ACCD;">  -h, --help     display </span><span style="color:#82AAFF;">help</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">command</span></span>
<span class="line"></span></code></pre></div>`,7),r=[o];function i(l,c,p,d,g,h){return n(),e("div",null,r)}var y=t(s,[["render",i]]);export{f as __pageData,y as default};
