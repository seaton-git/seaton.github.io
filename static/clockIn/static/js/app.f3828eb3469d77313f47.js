webpackJsonp([1],{159:function(t,e,r){"use strict";var a=r(46),n=r(433),o=r(424),s=(r.n(o),r(430)),i=r.n(s);r(425),r(181),a.default.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:i.a}]})},160:function(t,e,r){var a=r(140)(r(179),r(431),null,null);t.exports=a.exports},179:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"app"}},180:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(91),n=r.n(a),o=r(428),s=r.n(o),i=r(427),c=r.n(i);e.default={name:"home",data:function(){return{time:(new Date).toLocaleTimeString(),btnText:"睡觉喽"}},methods:{clockIn:function(){var t=[],e=new Date,r=e.toLocaleDateString(),a="星期"+"日一二三四五六".split("")[e.getDay()],o=e.toLocaleString("chinese",{hour12:!1});o=o.substring(o.indexOf(" ")+1);var i={day:r,week:a,time:o};CGI.get_storage(CGI.storage_record_string)?(t=CGI.get_storage(CGI.storage_record_string),CGI.isClockIn()?c.a.confirm("今日已打卡，是否确认更新?").then(function(e){"confirm"===e&&t.filter(function(e,a){e.day===r&&(t[a].time=o,CGI.set_storage(CGI.storage_record_string,n()(t)),s()({message:"更新成功",position:"bottom"}),CGI.drawChart(document.querySelector("#sleepChart")))})}):(t.push(i),CGI.set_storage(CGI.storage_record_string,n()(t)),s()({message:"打卡成功",position:"bottom"}),CGI.drawChart(document.querySelector("#sleepChart")))):(t.push(i),CGI.set_storage(CGI.storage_record_string,n()(t)),s()({message:"打卡成功",position:"bottom"}),CGI.drawChart(document.querySelector("#sleepChart"))),this.btnText="更新打卡"}},created:function(){setInterval(function(){var t=(new Date).toLocaleTimeString();this.time=t}.bind(this),1e3),CGI.isClockIn()&&(this.btnText="更新打卡")},mounted:function(){CGI.drawChart(document.querySelector("#sleepChart"))},component:{Toast:s.a,MessageBox:c.a}}},181:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(91),n=r.n(a),o=r(186),s=r.n(o);r(182);window.CGI={storage_record_string:"CLOCK_IN_RECORD",isClockIn:function(){var t=new Date,e=t.toLocaleDateString();return(this.get_storage(this.storage_record_string)||[]).filter(function(t){if(t.day===e)return t}).length>0},drawChart:function(t){var e=CGI.get_storage(CGI.storage_record_string)||[],r=[],a=[];if(e.length>0)for(var n=0;n<e.length;n++){var o=(Number(e[n].time.substring(3,5))/60).toString().substring(1);r.push(e[n].day.substring(5)),a.push(Number(e[n].time.substring(0,2))+o)}var i=s.a.init(t),c={title:{text:"Punch card graph"},tooltip:{trigger:"item",formatter:function(t){var e=t.value,r=e.substring(0,2),a=60*parseFloat("0"+e.substring(2));return t.name+"</br>"+t.seriesName+" "+r+":"+a}},toolbox:{show:!0,feature:{mark:{show:!0},magicType:{show:!0,type:["line","bar"]},restore:{show:!0}}},dataZoom:{show:!0,realtime:!0,start:0,end:100},calculable:!0,xAxis:[{type:"category",boundaryGap:!1,data:r}],yAxis:[{type:"value",scale:!0,axisLabel:{formatter:"{value}"}}],series:[{name:"睡觉时间",type:"line",data:a}]};i.setOption(c)},storage_isExist:function(t){return!!localStorage.getItem(t)},set_storage:function(t,e){e||(e=""),localStorage.setItem(t,n()(e))},get_storage:function(t){try{var e=JSON.parse(localStorage.getItem(t));return JSON.parse(e)}catch(e){return console.log("12123",e),localStorage.getItem(t)}},remove_storage:function(t){t?localStorage.removeItem(t):localStorage.clear()}}},182:function(t,e,r){"use strict";var a=r(161),n=r.n(a);n.a.defaults.baseURL="",n.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded"},183:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=r(46),n=r(160),o=r.n(n),s=r(159);a.default.config.productionTip=!1,new a.default({el:"#app",router:s.a,template:"<App/>",components:{App:o.a}})},424:function(t,e){},425:function(t,e){},426:function(t,e){},430:function(t,e,r){r(426);var a=r(140)(r(180),r(432),null,null);t.exports=a.exports},431:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},staticRenderFns:[]}},432:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"-m-home"},[r("h2",{staticClass:"time"},[t._v(t._s(t.time))]),t._v(" "),r("span",{staticClass:"clock-in",on:{click:t.clockIn}},[t._v(t._s(t.btnText))]),t._v(" "),r("div",{staticClass:"chart",attrs:{id:"sleepChart"}}),t._v(" "),r("div",{staticClass:"version f-0 cor-0"},[t._v("Clock In 1.0.0")])])},staticRenderFns:[]}}},[183]);