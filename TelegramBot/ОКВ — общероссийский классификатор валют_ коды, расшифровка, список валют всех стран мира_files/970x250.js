(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"970x250_atlas_P_", frames: [[384,0,125,34],[0,0,382,20],[0,22,86,43]]},
		{name:"970x250_atlas_NP_", frames: [[0,0,970,191],[0,193,970,59]]}
];


// symbols:



(lib.__bg = function() {
	this.initialize(ss["970x250_atlas_NP_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.__btn = function() {
	this.initialize(ss["970x250_atlas_P_"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.__lgl = function() {
	this.initialize(ss["970x250_atlas_P_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.__logo = function() {
	this.initialize(ss["970x250_atlas_P_"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.__plash = function() {
	this.initialize(ss["970x250_atlas_NP_"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.__logo();
	this.instance.parent = this;
	this.instance.setTransform(54,-323);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol13, new cjs.Rectangle(54,-323,86,43), null);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(93,14,245,0)","#FFFFFF","rgba(102,0,255,0)"],[0.204,0.478,0.8],0,182.5,0,-182.4).s().p("AgJchMAAAg5BIATAAMAAAA5Bg");
	this.shape.setTransform(1,182.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol12, new cjs.Rectangle(0,0,2,365), null);


(lib.Symbol10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","rgba(255,255,255,0.6)"],[0,1],-29.5,0,29.5,0).s().p("AkmR0MAAAgjnIJNAAMAAAAjng");
	this.shape.setTransform(29.5,114);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,59,228), null);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.__btn();
	this.instance.parent = this;
	this.instance.setTransform(305,-318);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol9, new cjs.Rectangle(305,-318,125,34), null);


(lib.Symbol5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.__plash();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol5, new cjs.Rectangle(0,0,970,59), null);


(lib.Symbol4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.__bg();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,970,191), null);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.__lgl();
	this.instance.parent = this;
	this.instance.setTransform(524,-353);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(524,-353,382,20), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,300,600), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape.setTransform(150,300);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,600);


(lib.Symbol_1123123_Layer_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_4
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#2F1858","#2F1858"],[0,0.8],0,182.5,0,-182.4).s().p("AgJchMAAAg5BIATAAMAAAA5Bg");
	this.shape.setTransform(1,182.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(153));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol_8_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhJBwIAAgjIgZAAIAAgYIAZAAIAAgWIgZAAIAAgjIAZAAIAAhsIBKAAQAdAAAWAHQAWAFANAQQAMAPAAAdQAAAbgMAPQgNAQgWAGQgWAHgdAAIgeAAIAAAWIBCAAIAAAYIhCAAIAAAjgAgdgEIAgAAQAOAAALgCQAMgEAGgIQAHgHAAgPQAAgPgHgIQgGgHgMgDQgLgDgOAAIggAAg");
	this.shape.setTransform(351.775,-262.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBwIAAinIgwAAIAAgdQARAAAKgCQAMgCAGgGQAIgFAFgNIAgAAIAADgg");
	this.shape_1.setTransform(331.55,-262.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgvBSQgOgGgIgLQgIgLAAgPQAAgUAOgLQANgLAZgGQAYgGAggEIAAgDQAAgTgJgIQgJgIgNABQgLAAgJAGQgJAHgBAOIgoAAQACgRAJgNQAJgNAQgHQAQgHAUAAQAUgBARAHQAQAHAJAQQAKAQAAAcIAAAKIAAAPIgBARQAAATACANIADAXIgnAAIgCgKIgBgLQgIANgOAGQgNAGgSAAQgQAAgOgGgAgFANQgPADgHAGQgGAFAAAKQAAAJAHAGQAHAGAOABQATgBAKgKQAJgKAAgSIAAgNQgYADgOADg");
	this.shape_2.setTransform(311.525,-259.9017);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgiBSQgQgGgLgNQgMgNgDgXIApAAQACANAJAIQAKAJARAAQAPAAAJgGQAJgGAAgKQAAgMgIgFQgIgFgPAAIgYAAIAAgcIAWAAQAMAAAHgFQAIgFAAgJQAAgJgIgGQgHgHgPAAQgNAAgJAIQgJAIgBAOIgqAAQAEgVALgNQALgOARgGQAQgHASAAQATAAAPAFQAQAFAJALQAJALABARQAAALgGAJQgGAJgMAFQAOAEAHAIQAIAKAAAQQAAASgKAMQgKAMgRAGQgRAGgWAAQgSAAgRgGg");
	this.shape_3.setTransform(293.775,-259.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAlBwIAAhtIhIBtIgrAAIAAimIAqAAIAABxIBJhxIAqAAIAACmgAgkhUQgNgLgBgRIAeAAQACAJAEADQAGAFAKAAQALAAAFgFQAFgDABgJIAfAAQgCARgNALQgMALgaAAQgZAAgNgLg");
	this.shape_4.setTransform(268.75,-262.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgrBLQgTgMgKgUQgKgTAAgYQAAgZALgTQAKgUATgLQATgLAYAAQAaAAASAMQATANAKAWQAJAWAAAdIh6AAQABAOAGAJQAGAKAJAEQAKAFAJAAQAKAAAJgEQAJgEAHgLIAsAAQgFANgKALQgKAMgPAIQgQAIgXAAQgaAAgTgMgAAngRQAAgOgGgIQgGgJgJgDQgIgEgKAAQgHAAgIAEQgJADgGAJQgHAIgCAOIBOAAIAAAAg");
	this.shape_5.setTransform(249.9263,-259.875);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AAiBTIAAhEIhEAAIAABEIgqAAIAAimIAqAAIAABBIBEAAIAAhBIArAAIAACmg");
	this.shape_6.setTransform(231.2,-259.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AA5BnIAAgnIhwAAIAAAnIgpAAIAAhJIAKAAQAGAAAEgDQAFgDADgKQAEgJACgPQADgRAAgZIACgyICAAAIAACEIAaAAIAABJgAgTgmIgDAdQgCAMgDAJQgDAJgGAJIBAAAIAAhiIguAAg");
	this.shape_7.setTransform(211.35,-257.95);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBmQgUgPgKgbQgKgaAAgiQAAgiAKgaQAKgaAUgPQAUgOAdAAQAeAAAUAOQAUAPAKAaQAKAaAAAiQAAAigKAaQgKAbgUAPQgUAOgeAAQgdAAgUgOgAgig9QgMAVAAAoQAAAoAMAWQAMAWAWABQAXgBAMgWQAMgWAAgoQAAgogMgVQgMgWgXAAQgWAAgMAWg");
	this.shape_8.setTransform(184.575,-262.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgtBqQgSgJgKgSQgKgRgCgUIAoAAQACAMAFAJQAGAKAJAFQAKAGANABQAMgBAJgEQAKgEAFgJQAGgHAAgLQAAgNgHgIQgIgJgMgDQgNgDgPAAIgJAAIAAghIAHAAQAYAAANgJQAOgIABgQQgBgKgFgGQgEgHgJgDQgIgEgJAAQgTAAgLALQgMALgBASIgpAAQAEgiAWgTQAXgTAlAAQATgBASAHQARAGALANQALAOABAVQgBARgIANQgJAMgNAIQAMAEAIAIQAIAIAEALQAFAKAAAMQgBAXgLAPQgMAQgUAHQgTAIgXgBQgaAAgTgKg");
	this.shape_9.setTransform(164.825,-262.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_8_Layer_2, null, null);


(lib.Symbol_6_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgFAwIAAgrIgrAAIAAgKIArAAIAAgqIALAAIAAAqIArAAIAAAKIgrAAIAAArg");
	this.shape.setTransform(673.825,-215.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgXA/QgKgEgGgJQgGgJgBgMQABgNAGgIQAGgIALgEQgJgDgFgIQgFgHgBgMQABgKAFgHQAFgHAJgEQAKgFAMAAQANAAAKAFQAKAEAFAHQAFAHAAAKQAAAMgGAHQgFAIgJADQALAEAGAIQAHAIAAANQAAAMgGAJQgGAJgLAEQgKAFgOAAQgMAAgLgFgAgYAIQgJAIgBANQABANAJAIQAJAIAPAAQAQAAAKgIQAJgIAAgNQAAgNgJgIQgKgIgQAAQgPAAgJAIgAgWgyQgIAGAAAMQAAALAIAHQAJAGANAAQAPAAAIgGQAIgHAAgLQAAgMgIgGQgIgHgPAAQgNAAgJAHg");
	this.shape_1.setTransform(662.225,-216.775);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAKBCIAAhpIgeAAIAAgHQAMAAAGgCQAGgBADgEQAEgEACgIIAIAAIAACDg");
	this.shape_2.setTransform(653.05,-216.825);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol_6_Layer_1, null, null);


(lib.Scene_1_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EhLxgThMCXjAAAMAAAAnDMiXjAAAg");
	this.shape.setTransform(485,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(220));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_8_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(258.9,-261.1,1,1,0,0,0,258.9,-261.1);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol8, new cjs.Rectangle(153.6,-284.1,210.70000000000002,44.20000000000002), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1_obj_
	this.Layer_1 = new lib.Symbol_6_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(664.9,-216.8,1,1,0,0,0,664.9,-216.8);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 0
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(649,-230,33.10000000000002,27.400000000000006), null);


(lib.Symbol_1123123_Layer_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2
	this.instance = new lib.Symbol12();
	this.instance.parent = this;
	this.instance.setTransform(1,72.5,1,1,0,0,0,1,182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regY:182.4,scaleY:1.7452,y:312.3},60,cjs.Ease.quadInOut).wait(14).to({regY:182.5,scaleY:1,y:72.5},58,cjs.Ease.quadInOut).wait(21));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Symbol_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_9
	this.instance = new lib.Symbol9();
	this.instance.parent = this;
	this.instance.setTransform(176.5,541.5,1,1,0,0,0,68.5,18.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).to({x:150.5,alpha:1},10,cjs.Ease.get(1)).to({x:156.5},5).wait(176));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Symbol_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_8
	this.instance = new lib.Symbol8();
	this.instance.parent = this;
	this.instance.setTransform(108.5,494.5,1,1,0,0,0,75.5,10.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(23).to({_off:false},0).to({x:82.5,alpha:1},10,cjs.Ease.get(1)).to({x:88.5},5).wait(182));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Symbol_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Symbol_6
	this.instance = new lib.Symbol6();
	this.instance.parent = this;
	this.instance.setTransform(277.5,391,1,1,0,0,0,13.5,9);
	this.instance.alpha = 0.5703;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_17
	this.instance = new lib.Symbol4();
	this.instance.parent = this;
	this.instance.setTransform(150,196.5,1,1,0,0,0,150,226.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:226.5},24,cjs.Ease.get(1)).wait(196));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_15
	this.instance = new lib.Symbol10();
	this.instance.parent = this;
	this.instance.setTransform(360.5,187.05,1,1,32.2224,0,0,29.5,114);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(59).to({_off:false},0).to({x:571,y:263},55,cjs.Ease.quadInOut).to({_off:true},1).wait(14).to({_off:false,x:360.5,y:187.05},0).to({x:571,y:263},55,cjs.Ease.quadInOut).to({_off:true},1).wait(35));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_11
	this.instance = new lib.Symbol13();
	this.instance.parent = this;
	this.instance.setTransform(74,541,1,1,0,0,0,38,19);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(19).to({_off:false},0).to({x:49,alpha:1},9,cjs.Ease.get(1)).to({x:54},5).wait(187));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_9
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(150,271.2,1,4.2373,0,0,0,150,64);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).to({alpha:1},20,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_8
	this.instance = new lib.Symbol3();
	this.instance.parent = this;
	this.instance.setTransform(190.5,597.5,1,1,0,0,0,144.5,32.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).to({x:154.5,alpha:1},10,cjs.Ease.get(1)).to({x:160.5},5).wait(161));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_3
	this.instance = new lib.Symbol1();
	this.instance.parent = this;
	this.instance.setTransform(485,125,3.2333,0.4167,0,0,0,150,300);
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.Symbol1(), 3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Layer_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.parent = this;
	this.instance.setTransform(485,125,3.2333,0.4167,0,0,0,150,300);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(220));

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1___plash_jpg = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// __plash_jpg
	this.instance = new lib.Symbol5();
	this.instance.parent = this;
	this.instance.setTransform(150,271.2,1,4.2373,0,0,0,150,64);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleY:1,y:255},24,cjs.Ease.get(1)).wait(196));

}).prototype = p = new cjs.MovieClip();


(lib.Symbol1123123 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_152 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(152).call(this.frame_152).wait(1));

	// Layer_3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AgJchMAAAg5BIATAAMAAAA5Bg");
	mask.setTransform(1,182.5);

	// Layer_2_obj_
	this.Layer_2 = new lib.Symbol_1123123_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(1,72.5,1,1,0,0,0,1,72.5);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 0
	this.Layer_2.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(153));

	// Layer_4_obj_
	this.Layer_4 = new lib.Symbol_1123123_Layer_4();
	this.Layer_4.name = "Layer_4";
	this.Layer_4.parent = this;
	this.Layer_4.setTransform(1,182.5,1,1,0,0,0,1,182.5);
	this.Layer_4.depth = 0;
	this.Layer_4.isAttachedToCamera = 0
	this.Layer_4.isAttachedToMask = 0
	this.Layer_4.layerDepth = 0
	this.Layer_4.layerIndex = 1
	this.Layer_4.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_4).wait(153));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2,365);


(lib.Scene_1_Layer_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_6
	this.instance = new lib.Symbol1123123();
	this.instance.parent = this;
	this.instance.setTransform(484.95,0.9,1,2.6574,-89.9984,0,0,1.1,182.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:191.9},24,cjs.Ease.get(1)).wait(196));

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib._970x250 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.getNumChildren() - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_219 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(219).call(this.frame_219).wait(1));

	// Layer_3_obj_
	this.Layer_3 = new lib.Scene_1_Layer_3();
	this.Layer_3.name = "Layer_3";
	this.Layer_3.parent = this;
	this.Layer_3.setTransform(485,125,1,1,0,0,0,485,125);
	this.Layer_3.depth = 0;
	this.Layer_3.isAttachedToCamera = 0
	this.Layer_3.isAttachedToMask = 0
	this.Layer_3.layerDepth = 0
	this.Layer_3.layerIndex = 0
	this.Layer_3.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_3).wait(220));

	// Layer_2_obj_
	this.Layer_2 = new lib.Scene_1_Layer_2();
	this.Layer_2.name = "Layer_2";
	this.Layer_2.parent = this;
	this.Layer_2.setTransform(485,125,1,1,0,0,0,485,125);
	this.Layer_2.depth = 0;
	this.Layer_2.isAttachedToCamera = 0
	this.Layer_2.isAttachedToMask = 0
	this.Layer_2.layerDepth = 0
	this.Layer_2.layerIndex = 1
	this.Layer_2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_2).wait(220));

	// Layer_9_obj_
	this.Layer_9 = new lib.Scene_1_Layer_9();
	this.Layer_9.name = "Layer_9";
	this.Layer_9.parent = this;
	this.Layer_9.depth = 0;
	this.Layer_9.isAttachedToCamera = 0
	this.Layer_9.isAttachedToMask = 0
	this.Layer_9.layerDepth = 0
	this.Layer_9.layerIndex = 2
	this.Layer_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_9).wait(220));

	// Layer_4 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_59 = new cjs.Graphics().p("EAl6ASsIibAAIqCAAIgIAAIjeAAQhAAAAAg9IAAgkIAAgEIAAgJIAAgZIAAglIAAgdIAAgaIAAg4QAAg+BAAAIDeAAIAIAAIKCAAICbAAIBpAAQBAAAAAA+IAAA4IAAAaIAAALIAAAuIAAAiIAAAJIAAAEIAAAkQAAA9hAAAgAVJORIAAA4IAAAaIAAAdIAAAlIAAAZIAAAJIAAAEIAAAkQAAAsAuAAIDeAAIAIAAIKCAAICbAAIBpAAQAuAAAAgsIAAgkIAAgEIAAgJIAAgiIAAguIAAgLIAAgaIAAg4QAAgsguAAIhpAAIibAAIqCAAIgIAAIjeAAQguAAAAAsg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(59).to({graphics:mask_graphics_59,x:259.5095,y:119.6139}).wait(126).to({graphics:null,x:0,y:0}).wait(35));

	// Layer_15_obj_
	this.Layer_15 = new lib.Scene_1_Layer_15();
	this.Layer_15.name = "Layer_15";
	this.Layer_15.parent = this;
	this.Layer_15.depth = 0;
	this.Layer_15.isAttachedToCamera = 0
	this.Layer_15.isAttachedToMask = 0
	this.Layer_15.layerDepth = 0
	this.Layer_15.layerIndex = 3
	this.Layer_15.maskLayerName = 0

	var maskedShapeInstanceList = [this.Layer_15];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Layer_15).wait(220));

	// Layer_8_obj_
	this.Layer_8 = new lib.Scene_1_Layer_8();
	this.Layer_8.name = "Layer_8";
	this.Layer_8.parent = this;
	this.Layer_8.depth = 0;
	this.Layer_8.isAttachedToCamera = 0
	this.Layer_8.isAttachedToMask = 0
	this.Layer_8.layerDepth = 0
	this.Layer_8.layerIndex = 4
	this.Layer_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_8).wait(220));

	// Layer_11_obj_
	this.Layer_11 = new lib.Scene_1_Layer_11();
	this.Layer_11.name = "Layer_11";
	this.Layer_11.parent = this;
	this.Layer_11.depth = 0;
	this.Layer_11.isAttachedToCamera = 0
	this.Layer_11.isAttachedToMask = 0
	this.Layer_11.layerDepth = 0
	this.Layer_11.layerIndex = 5
	this.Layer_11.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_11).wait(220));

	// Symbol_8_obj_
	this.Symbol_8 = new lib.Scene_1_Symbol_8();
	this.Symbol_8.name = "Symbol_8";
	this.Symbol_8.parent = this;
	this.Symbol_8.depth = 0;
	this.Symbol_8.isAttachedToCamera = 0
	this.Symbol_8.isAttachedToMask = 0
	this.Symbol_8.layerDepth = 0
	this.Symbol_8.layerIndex = 6
	this.Symbol_8.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Symbol_8).wait(220));

	// Symbol_9_obj_
	this.Symbol_9 = new lib.Scene_1_Symbol_9();
	this.Symbol_9.name = "Symbol_9";
	this.Symbol_9.parent = this;
	this.Symbol_9.depth = 0;
	this.Symbol_9.isAttachedToCamera = 0
	this.Symbol_9.isAttachedToMask = 0
	this.Symbol_9.layerDepth = 0
	this.Symbol_9.layerIndex = 7
	this.Symbol_9.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Symbol_9).wait(220));

	// Layer_6_obj_
	this.Layer_6 = new lib.Scene_1_Layer_6();
	this.Layer_6.name = "Layer_6";
	this.Layer_6.parent = this;
	this.Layer_6.setTransform(338.8,1,1,1,0,0,0,338.8,1);
	this.Layer_6.depth = 0;
	this.Layer_6.isAttachedToCamera = 0
	this.Layer_6.isAttachedToMask = 0
	this.Layer_6.layerDepth = 0
	this.Layer_6.layerIndex = 8
	this.Layer_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_6).wait(220));

	// __plash_jpg_obj_
	this.__plash_jpg = new lib.Scene_1___plash_jpg();
	this.__plash_jpg.name = "__plash_jpg";
	this.__plash_jpg.parent = this;
	this.__plash_jpg.setTransform(485,135.6,1,1,0,0,0,485,135.6);
	this.__plash_jpg.depth = 0;
	this.__plash_jpg.isAttachedToCamera = 0
	this.__plash_jpg.isAttachedToMask = 0
	this.__plash_jpg.layerDepth = 0
	this.__plash_jpg.layerIndex = 9
	this.__plash_jpg.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.__plash_jpg).wait(220));

	// Symbol_6_obj_
	this.Symbol_6 = new lib.Scene_1_Symbol_6();
	this.Symbol_6.name = "Symbol_6";
	this.Symbol_6.parent = this;
	this.Symbol_6.setTransform(610.1,274.7,1,1,0,0,0,610.1,274.7);
	this.Symbol_6.depth = 0;
	this.Symbol_6.isAttachedToCamera = 0
	this.Symbol_6.isAttachedToMask = 0
	this.Symbol_6.layerDepth = 0
	this.Symbol_6.layerIndex = 10
	this.Symbol_6.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Symbol_6).wait(220));

	// Layer_17_obj_
	this.Layer_17 = new lib.Scene_1_Layer_17();
	this.Layer_17.name = "Layer_17";
	this.Layer_17.parent = this;
	this.Layer_17.setTransform(485,83.3,1,1,0,0,0,485,83.3);
	this.Layer_17.depth = 0;
	this.Layer_17.isAttachedToCamera = 0
	this.Layer_17.isAttachedToMask = 0
	this.Layer_17.layerDepth = 0
	this.Layer_17.layerIndex = 11
	this.Layer_17.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_17).wait(220));

	// Layer_1_obj_
	this.Layer_1 = new lib.Scene_1_Layer_1();
	this.Layer_1.name = "Layer_1";
	this.Layer_1.parent = this;
	this.Layer_1.setTransform(485,125,1,1,0,0,0,485,125);
	this.Layer_1.depth = 0;
	this.Layer_1.isAttachedToCamera = 0
	this.Layer_1.isAttachedToMask = 0
	this.Layer_1.layerDepth = 0
	this.Layer_1.layerIndex = 12
	this.Layer_1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Layer_1).wait(220));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(192.7,95,778.3,156);
// library properties:
lib.properties = {
	id: '163FBDFFC8F0CF42AAF54E767EEF8A37',
	width: 970,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"970x250_atlas_P_.png", id:"970x250_atlas_P_"},
		{src:"970x250_atlas_NP_.jpg", id:"970x250_atlas_NP_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['163FBDFFC8F0CF42AAF54E767EEF8A37'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


// Layer depth API : 

AdobeAn.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;