var EventEmitter = require("events").EventEmitter;

var event = new EventEmitter();

event.on('some_event', function(){
	console.log('some_event 事件触发');
});

setTimeout(function(){
	event.emit('some_event');
}, 5000);


//一个事件绑定多个监听器
event.on('someEvent', function(a1, a2){
	console.log("listener1", a1, a2);
});

event.on('someEvent', function(a1, a2){
	console.log("lsitener2", a1, a2);
});

event.emit('someEvent', 'a1', 'a2');

console.log("someEvent绑定了" + EventEmitter.listenerCount(event, 'someEvent') + "个事件");
