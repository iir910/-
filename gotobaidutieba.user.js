// ==UserScript==
// @name           百度贴吧-重定向
// @version        1.0
// @author        
// @description    重定向各类同素异形体到更科学的主域名tieba.baidu.com
// @namespace     
// @include        /tieba\.baidu(\.com)?\.cn/
// @include        /.\.tieba\.baidu\.com/
// @include        /post\.baidu(\.com)?(\.cn)?/
// @include        /jump\.bdimg\.com\/(?!safecheck\/)/
// @include        /dq.tieba.com/*
//////
// @run-at         document-start
// ==/UserScript==

location.host = 'tieba.baidu.com';
