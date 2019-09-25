// ==UserScript==
// @name           百度贴吧-域名重定向
// @version        1.02
// @author        
// @description    重定向各类同素异形体到更科学的主域名tieba.baidu.com （修改自用版本）
// @namespace     
// @include        /tieba\.baidu(\.com)?\.cn/
// @include        /.\.tieba\.baidu\.com/
// @include        /post\.baidu(\.com)?(\.cn)?/
// @include        /jump\.bdimg\.com\/(?!safecheck\/)/
// @include         http*://dq.tieba.com/*
//////
// @run-at         document-start
// ==/UserScript==

location.host = 'tieba.baidu.com';
