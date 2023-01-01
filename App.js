
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

             function setDate() {
             const now = new Date();

             const seconds = now.getSeconds();
             const secondsDegrees = ((seconds / 60) * 360) + 90;
             secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

           const mins = now.getMinutes();
           const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
           minsHand.style.transform = `rotate(${minsDegrees}deg)`;

         const hour = now.getHours();
         const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
          hourHand.style.transform = `rotate(${hourDegrees}deg)`;
        }

       setInterval(setDate, 1000);

         setDate();


// <!-- Code injected by live-server -->

// <![CDATA[  <-- For SVG support
if ('WebSocket' in window) {
(function () {
function refreshCSS() {
   var sheets = [].slice.call(document.getElementsByTagName("link"));
   var head = document.getElementsByTagName("head")[0];
   for (var i = 0; i < sheets.length; ++i) {
       var elem = sheets[i];
       var parent = elem.parentElement || head;
       parent.removeChild(elem);
       var rel = elem.rel;
       if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
           var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
           elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
       }
       parent.appendChild(elem);
   }
}
var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
var address = protocol + window.location.host + window.location.pathname + '/ws';
var socket = new WebSocket(address);
socket.onmessage = function (msg) {
   if (msg.data == 'reload') window.location.reload();
   else if (msg.data == 'refreshcss') refreshCSS();
};
if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
   console.log('Live reload enabled.');
   sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
}
})();
}
else {
console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
}
// ]]>