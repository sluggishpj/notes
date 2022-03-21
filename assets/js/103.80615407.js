(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{502:function(s,n,t){"use strict";t.r(n);var a=t(23),e=Object(a.a)({},(function(){var s=this,n=s.$createElement,t=s._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"常用配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用配置"}},[s._v("#")]),s._v(" 常用配置")]),s._v(" "),t("ul",[t("li",[s._v("nginx.conf 文件")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#运行用户")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#user  nobody;")]),s._v("\nworker_processes "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#全局错误日志")]),s._v("\nerror_log logs/error.log"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nerror_log logs/error.log notice"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nerror_log logs/error.log info"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#PID文件，记录当前启动的nginx的进程ID")]),s._v("\npid logs/nginx.pid"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#工作模式及连接数上限")]),s._v("\nevents "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  worker_connections "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1024")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#单个后台worker process进程的最大并发链接数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设定http服务器，利用它的反向代理功能提供负载均衡支持")]),s._v("\nhttp "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定mime类型(邮件支持类型),类型由mime.types文件定义")]),s._v("\n  include mime.types"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  default_type application/octet-stream"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设定日志")]),s._v("\n  log_format main "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$remote_addr - $remote_user [$time_local] \"$request\" '")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'$status $body_bytes_sent \"$http_referer\" '")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'"$http_user_agent" "$http_x_forwarded_for"\'')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  access_log logs/access.log main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.")]),s._v("\n  sendfile on"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#tcp_nopush     on;")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 长连接保持开启状态时间. 0 禁用")]),s._v("\n  keepalive_timeout 65s"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# gzip  on;")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以直接引用不同配置文件，方便切换。其实就是将配置项 server 单独放在1个文件里")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include myconfigs/system-a.conf;")]),s._v("\n  include myconfigs/system-b.conf"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# include myconfigs/system-c.conf;")]),s._v("\n\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# another virtual host using mix of IP-, name-, and port-based configuration")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       8000;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       somename:8080;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  somename  alias  another.alias;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# HTTPS server")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#server {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    listen       443 ssl;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    server_name  localhost;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate      cert.pem;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_certificate_key  cert.key;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_cache    shared:SSL:1m;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_session_timeout  5m;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_ciphers  HIGH:!aNULL:!MD5;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    ssl_prefer_server_ciphers  on;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    location / {")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        root   html;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#        index  index.html index.htm;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#    }")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br")])]),t("ul",[t("li",[s._v("myconfigs/system-b.conf")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("server "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#监听HTTP端口")]),s._v("\n  listen "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("9091")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义使用www.xx.com访问")]),s._v("\n  server_name localhost"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  charset utf-8"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#access_log  logs/host.access.log  main;")]),s._v("\n\n  location ~ ^/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("api"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("login"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("/ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 代理转发，将 /api/开头的请求转发到 http://proxy.xx.com/")]),s._v("\n    proxy_set_header X-USERNAME-X "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'test'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    proxy_pass http://proxy.xx.com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    rewrite "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"^/api/(.*)$"')]),s._v(" /"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("break")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 去掉前缀 api 前缀")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  location / "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# root   html; #指向webapp的目录")]),s._v("\n    root F:"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("projects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("system-b"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("build"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    index index.html index.htm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    try_files "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$uri")]),s._v("/ /index.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 针对单页面应用")]),s._v("\n    add_header Last-Modified "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$date_gmt")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置响应头")]),s._v("\n    add_header Cache-Control "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    if_modified_since off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    expires off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    etag off"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  location ~* "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("."),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("?:ico"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("css"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("js"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("gif"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("jpe?g"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("png"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v("json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("$ "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    add_header Cache-Control "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"no-cache, must-revalidate"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#error_page  404              /404.html;")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# redirect server error pages to the static page /50x.html")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n  error_page "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("500")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("502")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("503")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("504")]),s._v(" /50x.html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  location "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /50x.html "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    root html"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br")])])])}),[],!1,null,null,null);n.default=e.exports}}]);