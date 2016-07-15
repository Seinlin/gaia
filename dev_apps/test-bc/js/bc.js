// App script goes here.

window.onload = function(){
  var msgCount = 1;
  var bMsg = document.getElementById('bMsg');

  console.log(pName + ' Start...');

  // Connection to a broadcast channel
  var bc = new BroadcastChannel("test_channel");

  // logs the event to the console
  bc.onmessage = function (ev)
  {
    console.log(pName + ' recieve Msg.' + ev);
    bMsg.innerHTML = 'Rec msg count ' + msgCount++;
  }

  function broadcastMsg(){
    console.log(pName + ' broadcastMsg.');
    bc.postMessage(pMsg);
  }

  document.getElementById('btnBC').addEventListener('click', broadcastMsg);
};
