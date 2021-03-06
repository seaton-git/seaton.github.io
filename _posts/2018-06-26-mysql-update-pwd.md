---
layout: post
title: MySQL 修改密码、修改字符集
date:       2018-06-26
author:     Seaton
tags:
    - 工具
---

> mac 环境

## 下载安装包

[mysql-5.6.40-macos10.13-x86_64.dmg](https://cdn.mysql.com//Downloads/MySQL-5.6/mysql-5.6.40-macos10.13-x86_64.dmg)

## 安装

一路`继续`、`同意`

## 配置别名

```shell
sudo chmod +w bashrc
sudo vi /etc/bashrc
#末尾添加
#mysql
alias mysql='/usr/local/mysql/bin/mysql' 
alias mysqladmin='/usr/local/mysql/bin/mysqladmin'
```
## 修改密码
```shell
# 正常是
mysql -u root -p
```
## 忘记密码
```shell
# 停止服务
sudo /usr/local/mysql/support-files/mysql.server stop

# 进入MySQL安全模式
sudo /usr/local/mysql/bin/mysqld_safe --skip-grant-tables

# 开启一个新的终端
# 使用root登录
sudo /usr/local/mysql/bin/mysql -u root

# 修改root用户密码，重点说明，这一步执行了，会修改root用户密码，但是不一定能正常登录，
# 可以使用`select authentication_string, Password from mysql.user`查询，会
# 发现`authentication_string`字段修改了，但是`Password`字段没有。
UPDATE mysql.user SET authentication_string=PASSWORD('新密码') WHERE User='root';

# 所以，保险起见，再执行一句
UPDATE mysql.user SET Password=PASSWORD('新密码') WHERE User='root'; 
```
## 重启服务
```shell
sudo /usr/local/mysql/support-files/mysql.server restart
```
## 修改字符集

字符集需要在`my.cnf`中配置，在 `/usr/local/mysql/support-files` 文件夹下，复制`my-default.cnf`文件至`/etc/my.cnf`
```shell
cp /usr/local/mysql/support-files/my-default.cnf /etc/my.cnf
```
### 编辑`my.cnf`文件
```shell
# For advice on how to change settings please see
# http://dev.mysql.com/doc/refman/5.6/en/server-configuration-defaults.html
# *** DO NOT EDIT THIS FILE. It's a template which will be copied to the
# *** default location during install, and will be replaced if you
# *** upgrade to a newer version of MySQL.
[client]
default-character-set=utf8

[mysqld]
character-set-server=utf8

...
```
### 设置`my.cnf`文件权限
```shell
sudo chmod 644 my.cnf
```
## 重启服务

一定要重启服务，不然在`mysql`中`show variables like '%char%'`，还是`latin1`


