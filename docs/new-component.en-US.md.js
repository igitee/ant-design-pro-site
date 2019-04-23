webpackJsonp([63],{856:function(n,s){n.exports={content:["article",{},["p","Now we try to write a simple component as sample. Assume that you have a picture presentation UI which has fixed width, grey background, and text description like this:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/vcRltFiKfHBHFrUcsTtW.png",width:"400"}]],["h2","Create file in components"],["p","Create a folder named ",["code","ImageWrapper"]," (capitalised and same as component name) under ",["code","src/components"],", and ",["code","index.js"]," ",["code","index.less"]," inside it."],["blockquote",["p","You can split sub-component into other files and import them in ",["code","index.js"],"."],["pre",{lang:"js",highlighted:'<span class="token comment" spellcheck="true">// MainComponent.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// SubComponent1.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// SubComponent2.js</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// index.js</span>\n<span class="token keyword">import</span> MainComponent <span class="token keyword">from</span> <span class="token string">\'./MainComponent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> SubComponent1 <span class="token keyword">from</span> <span class="token string">\'./SubComponent1\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> SubComponent2 <span class="token keyword">from</span> <span class="token string">\'./SubComponent2\'</span><span class="token punctuation">;</span>\n\nMainComponent<span class="token punctuation">.</span>SubComponent1 <span class="token operator">=</span> SubComponent1<span class="token punctuation">;</span>\nMainComponent<span class="token punctuation">.</span>SubComponent2 <span class="token operator">=</span> SubComponent2<span class="token punctuation">;</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> MainComponent<span class="token punctuation">;</span>'},["code","// MainComponent.js\nexport default ({ ... }) => (...);\n\n// SubComponent1.js\nexport default ({ ... }) => (...);\n\n// SubComponent2.js\nexport default ({ ... }) => (...);\n\n// index.js\nimport MainComponent from './MainComponent';\nimport SubComponent1 from './SubComponent1';\nimport SubComponent2 from './SubComponent2';\n\nMainComponent.SubComponent1 = SubComponent1;\nMainComponent.SubComponent2 = SubComponent2;\nexport default MainComponent;"]]],["pre",{lang:null,highlighted:'The Component source code would be like<span class="token punctuation">:</span>\n\n```jsx\n<span class="token operator">/</span><span class="token operator">/</span> index<span class="token punctuation">.</span>js\nimport React from <span class="token string">\'react\'</span><span class="token comment" spellcheck="true">;</span>\nimport styles from <span class="token string">\'./index.less\'</span><span class="token comment" spellcheck="true">;    // import style in css modules way</span>\n\nexport <span class="token keyword">default</span> <span class="token punctuation">(</span>{ src<span class="token punctuation">,</span> desc<span class="token punctuation">,</span> style }<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>div style<span class="token operator">=</span>{style} className<span class="token operator">=</span>{styles<span class="token punctuation">.</span>imageWrapper}<span class="token operator">></span>\n    <span class="token operator">&lt;</span>img className<span class="token operator">=</span>{styles<span class="token punctuation">.</span>img} src<span class="token operator">=</span>{src} alt<span class="token operator">=</span>{desc} <span class="token operator">/</span><span class="token operator">></span>\n    {desc <span class="token operator">&amp;</span><span class="token operator">&amp;</span> <span class="token operator">&lt;</span>div className<span class="token operator">=</span>{styles<span class="token punctuation">.</span>desc}<span class="token operator">></span>{desc}<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>}\n  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>'},["code","The Component source code would be like:\n\n```jsx\n// index.js\nimport React from 'react';\nimport styles from './index.less';    // import style in css modules way\n\nexport default ({ src, desc, style }) => (\n  <div style={style} className={styles.imageWrapper}>\n    <img className={styles.img} src={src} alt={desc} />\n    {desc && <div className={styles.desc}>{desc}</div>}\n  </div>\n);"]],["pre",{lang:"css",highlighted:'<span class="token selector">// index<span class="token class">.less</span>\n<span class="token class">.imageWrapper</span> </span><span class="token punctuation">{</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">20</span>px <span class="token number">8</span>px<span class="token punctuation">;</span>\n  <span class="token property">background</span><span class="token punctuation">:</span> <span class="token hexcode">#f2f4f5</span><span class="token punctuation">;</span>\n  <span class="token property">width</span><span class="token punctuation">:</span> <span class="token number">400</span>px<span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">0</span> auto<span class="token punctuation">;</span>\n  <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector"><span class="token class">.img</span> </span><span class="token punctuation">{</span>\n  <span class="token property">vertical-align</span><span class="token punctuation">:</span> middle<span class="token punctuation">;</span>\n  <span class="token property">max-width</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token number">100%</span> - <span class="token number">32</span>px<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token property">margin</span><span class="token punctuation">:</span> <span class="token number">2.4</span>em <span class="token number">1</span>em<span class="token punctuation">;</span>\n  <span class="token property">box-shadow</span><span class="token punctuation">:</span> <span class="token number">0</span> <span class="token number">8</span>px <span class="token number">20</span>px <span class="token function">rgba</span><span class="token punctuation">(</span><span class="token number">143</span>, <span class="token number">168</span>, <span class="token number">191</span>, <span class="token number">0.35</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'},["code","// index.less\n.imageWrapper {\n  padding: 0 20px 8px;\n  background: #f2f4f5;\n  width: 400px;\n  margin: 0 auto;\n  text-align: center;\n}\n\n.img {\n  vertical-align: middle;\n  max-width: calc(100% - 32px);\n  margin: 2.4em 1em;\n  box-shadow: 0 8px 20px rgba(143, 168, 191, 0.35);\n}"]],["p","Then you have a component ",["code","ImageWrapper"]," you can use at anywhere in your application."],["h2","Use it"],["p","Import your component and use it like other React components."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> ImageWrapper <span class="token keyword">from</span> <span class="token string">\'@/components/ImageWrapper\'</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// @ means the relative path of source</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">(</span>\n  <span class="token operator">&lt;</span>ImageWrapper src<span class="token operator">=</span><span class="token string">"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png"</span> desc<span class="token operator">=</span><span class="token string">"sample"</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import React from 'react';\nimport ImageWrapper from '@/components/ImageWrapper'; // @ means the relative path of source\n\nexport default () => (\n  <ImageWrapper src=\"https://os.alipayobjects.com/rmsportal/mgesTPFxodmIwpi.png\" desc=\"sample\" />\n);"]]],meta:{order:5,title:"New Component",type:"Introduction",filename:"docs/new-component.en-US.md"},description:["section",["p","For some reusable UI, it is a best practice to abstract it as React components which should have these features:"],["ul",["li",["p","Independent, reusable and stable pieces."]],["li",["p","Don't contain routes info."]],["li",["p","Stateless or contain isolate state within it."]]]],toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Create-file-in-components",title:"Create file in components"},"Create file in components"]],["li",["a",{className:"bisheng-toc-h2",href:"#Use-it",title:"Use it"},"Use it"]]]}}});