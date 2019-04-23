webpackJsonp([65],{854:function(n,s){n.exports={content:["article",["p","Mocking data is a significant part of web application front end development which is the key of separating front-end and back-end. We can mock Restful API of background service to avoid development block of service side development progress."],["p","We can use ",["a",{title:null,href:"https://umijs.org/"},"umi"]," to mock data in Ant Design Pro."],["h2","Use umi"],["p","In umi, files in ",["code","mock"]," directory means mocking files, which export definitions of APIs. It supports realtime refreshment and ES6, and has friendly errors prompts. More details in ",["a",{title:null,href:"https://umijs.org/guide/mock-data.html"},"umijs.org#mock-data"],"."],["pre",{lang:"js",highlighted:'<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token comment" spellcheck="true">// literal Object and Array</span>\n  <span class="token string">\'GET /api/users\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> users<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// GET could be omitted</span>\n  <span class="token string">\'/api/users/1\'</span><span class="token punctuation">:</span> <span class="token punctuation">{</span> id<span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// implement simple API by express@4</span>\n  <span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">end</span><span class="token punctuation">(</span><span class="token string">\'OK\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward to another server</span>\n  <span class="token comment" spellcheck="true">// `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css</span>\n  <span class="token string">\'GET /assets/*\'</span><span class="token punctuation">:</span> <span class="token string">\'https://assets.online/\'</span><span class="token punctuation">,</span>\n\n  <span class="token comment" spellcheck="true">// Forward to another server with glob matcher</span>\n  <span class="token comment" spellcheck="true">// `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css</span>\n  <span class="token string">\'GET /someDir/(.*)\'</span><span class="token punctuation">:</span> <span class="token string">\'https://g.alicdn.com/tb-page/taobao-home\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","export default {\n  // literal Object and Array\n  'GET /api/users': { users: [1, 2] },\n\n  // GET could be omitted\n  '/api/users/1': { id: 1 },\n\n  // implement simple API by express@4\n  'POST /api/users/create': (req, res) => {\n    res.end('OK');\n  },\n\n  // Forward to another server\n  // `/assets/0.0.50/index.css` will be forword https://assets.online/assets/0.0.50/index.css\n  'GET /assets/*': 'https://assets.online/',\n\n  // Forward to another server with glob matcher\n  // `/someDir/0.0.50/index.css` will be forword to https://g.alicdn.com/tb-page/taobao-home/0.0.50/index.css\n  'GET /someDir/(.*)': 'https://g.alicdn.com/tb-page/taobao-home',\n};"]],["p","When you start server by ",["code","umi dev"],", the mock service will handle network requests (such as ",["code","GET /api/users"],") according to your rules defined in the ",["code","mock"]," directory. You can respond to client with literal data, or process the request with a function, or forward the request to another server."],["p","For example, there is a mapping rule like this:"],["pre",{lang:null,highlighted:'<span class="token string">\'GET /api/currentUser\'</span><span class="token punctuation">:</span> {\n  name<span class="token punctuation">:</span> <span class="token string">\'momo.zxy\'</span><span class="token punctuation">,</span>\n  avatar<span class="token punctuation">:</span> imgMap<span class="token punctuation">.</span>user<span class="token punctuation">,</span>\n  userid<span class="token punctuation">:</span> <span class="token string">\'00000001\'</span><span class="token punctuation">,</span>\n  notifyCount<span class="token punctuation">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n}<span class="token punctuation">,</span>'},["code","'GET /api/currentUser': {\n  name: 'momo.zxy',\n  avatar: imgMap.user,\n  userid: '00000001',\n  notifyCount: 12,\n},"]],["p","Now you can see the result in browser console when visits ",["code","/api/currentUser"],":"],["p","Request:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/ZdlcFoYonSGDupWnktZn.png",width:"400"}]],["p","Response:"],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/OLHIXePGHkkFoaZVQAts.png",width:"600"}]],["h3","Using Mock.js"],["p",["a",{title:null,href:"http://mockjs.com/"},"Mock.js"]," is a popular mock library that can help to generate mock data. You can use any library you like along with umi to build mocking service."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> mockjs <span class="token keyword">from</span> <span class="token string">\'mockjs\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>'},["code","import mockjs from 'mockjs';\n\nexport default {\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],\n  }),\n};"]],["h3","CORS support"],["p","Define header of ",["code","response"]," like this:"],["pre",{lang:null,highlighted:'<span class="token string">\'POST /api/users/create\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> {\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n  res<span class="token punctuation">.</span><span class="token function">setHeader</span><span class="token punctuation">(</span><span class="token string">\'Access-Control-Allow-Origin\'</span><span class="token punctuation">,</span> <span class="token string">\'*\'</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">;</span>\n  <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>\n}<span class="token punctuation">,</span>'},["code","'POST /api/users/create': (req, res) => {\n  ...\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  ...\n},"]],["h2","Divide mock data into different files"],["p","We can maintain our mock data in different files for different data models in the large application, and put them in the ",["code","mock"]," directory, then they will be imported automatically."],["p",["img",{src:"https://gw.alipayobjects.com/zos/rmsportal/wbeiDacBkchXrTafasBy.png",width:"200"}]],["h2","Delay mock API"],["p","In real world the AJAX request usually responds with a network delay which should be simulated in mocking API."],["h3","setTimeout"],["p","You can implement the API with ",["code","setTimeout"],"."],["pre",{lang:"js",highlighted:'<span class="token string">\'POST /api/forms\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n  <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">\'Ok\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">,</span>'},["code","'POST /api/forms': (req, res) => {\n  setTimeout(() => {\n    res.send('Ok');\n  }, 1000);\n},"]],["h3","Use roadhog-api-doc plugin"],["p","We provide ",["code","delay"]," function in ",["a",{title:null,href:"https://github.com/nikogu/roadhog-api-doc"},"roadhog-api-doc"]," to make this convenient."],["pre",{lang:"js",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> delay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'roadhog-api-doc\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token punctuation">{</span>\n  <span class="token string">\'GET /api/project/notice\'</span><span class="token punctuation">:</span> getNotice<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/activities\'</span><span class="token punctuation">:</span> getActivities<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/rule\'</span><span class="token punctuation">:</span> getRule<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/tags\'</span><span class="token punctuation">:</span> mockjs<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    <span class="token string">\'list|100\'</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'@city\'</span><span class="token punctuation">,</span> <span class="token string">\'value|1-100\'</span><span class="token punctuation">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token string">\'type|0-2\'</span><span class="token punctuation">:</span> <span class="token number">1</span> <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_list\'</span><span class="token punctuation">:</span> getFakeList<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/fake_chart_data\'</span><span class="token punctuation">:</span> getFakeChartData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/basic\'</span><span class="token punctuation">:</span> getProfileBasicData<span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/profile/advanced\'</span><span class="token punctuation">:</span> getProfileAdvancedData<span class="token punctuation">,</span>\n  <span class="token string">\'POST /api/register\'</span><span class="token punctuation">:</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span> status<span class="token punctuation">:</span> <span class="token string">\'ok\'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token string">\'GET /api/notices\'</span><span class="token punctuation">:</span> getNotices<span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Delay one second for all interfaces</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">delay</span><span class="token punctuation">(</span>proxy<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>'},["code","import { delay } from 'roadhog-api-doc';\n\nconst proxy = {\n  'GET /api/project/notice': getNotice,\n  'GET /api/activities': getActivities,\n  'GET /api/rule': getRule,\n  'GET /api/tags': mockjs.mock({\n    'list|100': [{ name: '@city', 'value|1-100': 50, 'type|0-2': 1 }],\n  }),\n  'GET /api/fake_list': getFakeList,\n  'GET /api/fake_chart_data': getFakeChartData,\n  'GET /api/profile/basic': getProfileBasicData,\n  'GET /api/profile/advanced': getProfileAdvancedData,\n  'POST /api/register': (req, res) => {\n    res.send({ status: 'ok' });\n  },\n  'GET /api/notices': getNotices,\n};\n\n// Delay one second for all interfaces\nexport default delay(proxy, 1000);"]],["h3","Integrate"],["p","If you need to integrate with real service after finishing front end development via mock data, just close the mock data or forward request to the real interfaces."],["pre",{lang:"bash",highlighted:'$ <span class="token function">npm</span> run start:no-mock'},["code","$ npm run start:no-mock"]]],meta:{order:13,title:"Mock Data",type:"Advanced",filename:"docs/mock-api.en-US.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#Use-umi",title:"Use umi"},"Use umi"]],["li",["a",{className:"bisheng-toc-h2",href:"#Divide-mock-data-into-different-files",title:"Divide mock data into different files"},"Divide mock data into different files"]],["li",["a",{className:"bisheng-toc-h2",href:"#Delay-mock-API",title:"Delay mock API"},"Delay mock API"]]]}}});