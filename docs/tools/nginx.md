---
title: Nginx
---

## 常用配置

- nginx.conf 文件

```sh
#运行用户
#user  nobody;
worker_processes 1;

#全局错误日志
error_log logs/error.log;
error_log logs/error.log notice;
error_log logs/error.log info;

#PID文件，记录当前启动的nginx的进程ID
pid logs/nginx.pid;

#工作模式及连接数上限
events {
  worker_connections 1024; #单个后台worker process进程的最大并发链接数
}

# 设定http服务器，利用它的反向代理功能提供负载均衡支持
http {
  #设定mime类型(邮件支持类型),类型由mime.types文件定义
  include mime.types;
  default_type application/octet-stream;

  #设定日志
  log_format main '$remote_addr - $remote_user [$time_local] "$request" '
  '$status $body_bytes_sent "$http_referer" '
  '"$http_user_agent" "$http_x_forwarded_for"';

  access_log logs/access.log main;

  #sendfile 指令指定 nginx 是否调用 sendfile 函数（zero copy 方式）来输出文件，对于普通应用，
  #必须设为 on,如果用来进行下载等应用磁盘IO重负载应用，可设置为 off，以平衡磁盘与网络I/O处理速度，降低系统的uptime.
  sendfile on;
  #tcp_nopush     on;

  # 长连接保持开启状态时间. 0 禁用
  keepalive_timeout 65s;

  # gzip  on;

  # 可以直接引用不同配置文件，方便切换。其实就是将配置项 server 单独放在1个文件里
  # include myconfigs/system-a.conf;
  include myconfigs/system-b.conf;
  # include myconfigs/system-c.conf;


  # another virtual host using mix of IP-, name-, and port-based configuration
  #
  #server {
  #    listen       8000;
  #    listen       somename:8080;
  #    server_name  somename  alias  another.alias;
  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}
  # HTTPS server
  #
  #server {
  #    listen       443 ssl;
  #    server_name  localhost;
  #    ssl_certificate      cert.pem;
  #    ssl_certificate_key  cert.key;
  #    ssl_session_cache    shared:SSL:1m;
  #    ssl_session_timeout  5m;
  #    ssl_ciphers  HIGH:!aNULL:!MD5;
  #    ssl_prefer_server_ciphers  on;
  #    location / {
  #        root   html;
  #        index  index.html index.htm;
  #    }
  #}
}
```

- myconfigs/system-b.conf

```sh
server {
  #监听HTTP端口
  listen 9091;
  #定义使用www.xx.com访问
  server_name localhost;

  charset utf-8;

  #access_log  logs/host.access.log  main;

  location ~ ^/(api|login)/ {
    # 代理转发，将 /api/开头的请求转发到 http://proxy.xx.com/
    proxy_set_header X-USERNAME-X 'test';
    proxy_pass http://proxy.xx.com;
    rewrite "^/api/(.*)$" /$1 break; # 去掉前缀 api 前缀
  }

  location / {
    # root   html; #指向webapp的目录
    root F:\\projects\\system-b\\build;
    index index.html index.htm;
    try_files $uri $uri/ /index.html; # 针对单页面应用
    add_header Last-Modified $date_gmt; # 设置响应头
    add_header Cache-Control 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0';
    if_modified_since off;
    expires off;
    etag off;
  }

  location ~* \.(?:ico|css|js|gif|jpe?g|png|json)$ {
    add_header Cache-Control "no-cache, must-revalidate";
  }

  #error_page  404              /404.html;
  # redirect server error pages to the static page /50x.html
  #
  error_page 500 502 503 504 /50x.html;
  location = /50x.html {
    root html;
  }
}
```

## 常用命令

### 查找 nginx 配置
- 查看 nginx 二进制位置

```sh
ps -ef | grep nginx
```

- 查看 nginx 对应的 nginx.conf 配置文件

```sh
nginx -t
```

> 在 nginx 二进制文件下的目录运行，或者自己补全路径

### nginx 运行相关命令

```sh
# 向主进程发送信号，重新加载配置文件，热重启
nginx -s reload

# 重启 Nginx
nginx -s reopen

# 快速关闭
nginx -s stop

# 等待工作进程处理完成后关闭
nginx -s quit

# 查看当前 Nginx 最终的配置
nginx -T

# 检查配置是否有问题，如果已经在配置目录，则不需要-c
nginx -t -c <配置路径>
```

> https://juejin.cn/post/6844904144235413512
