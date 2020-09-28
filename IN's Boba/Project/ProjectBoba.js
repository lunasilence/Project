(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"ProjectBoba_atlas_", frames: [[3404,1067,640,960],[3122,2543,890,120],[2006,1505,360,576],[1504,1999,500,749],[0,1505,1000,723],[4004,0,37,37],[2520,2469,600,335],[4043,0,37,37],[2402,0,1600,1065],[3404,2029,512,512],[2402,1067,1000,1400],[0,2230,744,497],[2006,2469,512,512],[0,0,2400,1503],[1002,1505,920,492],[1002,1999,500,750]]}
];


// symbols:



(lib._272cb407fc2a28aa22a19b65b40bab24 = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.bobaiconpng = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.brownsugar = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.bubbletapioka = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.facebook = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.greenboba = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.instagram = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Jakarta = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mute = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.photo1531966662811c6501e46eda6 = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.shutterstock_1240497277_2 = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.speaker = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Taiwan = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.ThaiBubbleDrink = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.tumblr_mhawo7zfEk1rcjq6vo1_500 = function() {
	this.spriteSheet = ss["ProjectBoba_atlas_"];
	this.gotoAndStop(15);
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


(lib.an_Video = function(options) {
	this._element = new $.an.Video(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,400,300);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.Tween20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.instagram();
	this.instance.parent = this;
	this.instance.setTransform(7.9,-34.1,1.846,1.846);

	this.instance_1 = new lib.facebook();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.1,-34.1,1.846,1.846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-34.1,152.3,68.3);


(lib.Tween19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.instagram();
	this.instance.parent = this;
	this.instance.setTransform(7.9,-34.1,1.846,1.846);

	this.instance_1 = new lib.facebook();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-76.1,-34.1,1.846,1.846);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-34.1,152.3,68.3);


(lib.Tween8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubbletapioka();
	this.instance.parent = this;
	this.instance.setTransform(-192.5,-139.2,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.5,-139.2,385.1,278.5);


(lib.Tween5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape.setTransform(127.9,12.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_1.setTransform(111,12.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AghAiQgOgOAAgUQAAgTAOgOQAOgOATAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgTAAgOgOg");
	this.shape_2.setTransform(94.1,12.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwDNQgogWAAghQAAgcAdgUQAcgUAwgFIAAgCQgtgEgUgNQgVgOAAgaQAAgUASgMQARgMAtgLIAAgBQgqgMgUgVQgUgVAAggQAAgsAjgcQAjgdA2AAIAcABIAIABICAAAIAAAsIg/gFIgBABQAhAcAAAjQAAAnghAZQghAag0gBQgqAAgSAHQgSAGAAANQAAAJANAHQANAFAuAFQBBAGAdAMQAeALAPAVQAPAVAAAWQAAAxgtAfQgtAghJAAQg+AAgngVgAhKBgQgSAKAAARQAAAcArARQAqARA3AAQAbAAASgLQASgLAAgSQAAgcgogPQgogQg3gBQgfAAgTALgAg9h/QAAAkAPAWQAPAVAZAAQAaAAAOgUQAPgWAAgnQAAgkgPgVQgOgUgXAAQg6AAAABPg");
	this.shape_3.setTransform(70.4,13.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AARB/IAAgLQAWgEAJgKQAIgJAAgVIAAhkQAAgcgMgPQgMgPgVgBQglABgXAqIAAByQAAAWAHAJQAIAJAVAGIAAALIiVAAIAAgLQAWgFAJgJQAIgKAAgSIAAiIQAAgVgJgJQgKgKgZgEIAAgLIBrgKIALAAIAAA9IABAAQAjg9A5AAQAkAAAZAZQAYAYABApIAABqQAAAXAIAKQAIAJAWAFIAAALg");
	this.shape_4.setTransform(35.9,3.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhKDLIAAgLQAYgFAJgIQAIgKAAgXIAAiDQAAgVgJgJQgJgJgbgGIAAgLIBqgKIALAAIAADKQAAAlAoAEIAAALgAgaiCQgNgMAAgSQAAgRANgNQAMgNARAAQARAAANANQAMAMAAASQAAASgMAMQgNANgRAAQgRAAgMgNg");
	this.shape_5.setTransform(8.3,-4.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMDLQhMABgogiQgpgiAAg7QAAg4AkgkQAlgkA5AAQAxAAAmAaIAAhxQAAgZgOgKQgNgLgggBIAAgKIB5gIIAMAAIAAFUQgBAeAJAKQAIAKAgAFIAAALgAhFgEQgSAbgBAyQAAA2AaAfQAbAfAnAAQAYAAAKgNQAKgMAAggIAAh+QgcgngoAAQgfAAgSAdg");
	this.shape_6.setTransform(-19.2,-4.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAqB9QgOgJgJgSIgGAFQggAdgsAAQgfABgVgUQgWgSAAgbQAAgbAWgRQAVgSBDgRQAggJAOgEQAAgjgOgPQgOgPgfAAQgyAAgYApIgKAAQAKgoAdgWQAdgVAqgBQAwAAAeAZQAdAYAAArIAABzQAAAhAPAAQAQAAADgYIALAAQgCAYgQAMQgPAMgbAAQgWAAgOgHgAgsAXQgQAPAAAXQAAAUAJAMQAKAMAPAAQAUABAZgZIAAhdQgwAUgPAPg");
	this.shape_7.setTransform(-53.3,3.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhtBeQgrgmAAg4QAAgiATghQAUgfAigQQAigRAtgBQBFAAAqAmQAqAnAAA3QAAA4gqAmQgqAmhFAAQhDAAgqgmgAg1hTQgSAeAAA5QAAAzAUAdQATAfAgAAQAiAAATgfQASgeAAg2QAAg2gSgeQgTgegiAAQgiAAgTAfg");
	this.shape_8.setTransform(-85.8,3.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiVC+IAAgLQAdgHAJgLQAJgLAAggIAAjzQAAgZgJgKQgKgLgcgHIAAgLICyAAIAAALQgdAIgJAKQgJAJAAAXIAAEAQAAAXANAJQALAJAjgBQAkAAAUgPQAUgRAWgsIALAAIgLBig");
	this.shape_9.setTransform(-119.2,-2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-138.5,-39.2,277.1,78.5);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAWCsQgJgCgMgIQgKgHgKgPQgLgPgGgaIgBgCIgBgJIAAgLIACgjIADgqIgOABQgJABgEgEQgFgEgBgHIgBgDIAAgEQAAgIAEgHQAEgGAHAAIAKgBIAOgBIACgdIABgZIgBgPIgBgMIgEgIQgCgDgCgBIgBAAIgBgBIAAgEIgBgEQABgLAGgHQAFgFAJgDQAHgCAHAAQAOAAAIADQAJAEAEAGQAEAGABAIIABADIAAAEIgCAhIgGAzIAIAAIAJgBQAIAAAFAFQAFAGACAIIABAEIAAAFQAAAKgDAIQgDAGgFABIgDgDQgBgCgCgCQgBgCgFAAQgJAAgGALQgGAMgDASQgDATAAAWIABAdQACAPADANQADAQAGAKQAGAKAIABIABABIABABQAAACgDADQgDADgHAAIgOgCg");
	this.shape.setTransform(-461.5,-235.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABDCJQgLgFgKgNQgJgMgFgXIgBgGIgCgHQgHATgIAQQgKAQgLAJQgLAJgQAAQgTAAgNgIQgPgIgIgOQgJgOgDgSIgFgaIgBgbQAAgZAEgZIAGgwIAIgoIAHgZIABgCIACgBQARAAAJADQAKADAFAIQAFAHADANIABAFIAAAFIgCAcIgEAjIgDAmIgCAmIABARIABAPQACAJAFAFQADAFAGAAQAIgBAHgMQAHgNAGgVQAHgVAFgZIAMgwIAJguQAEgVAFgNQADgMAEgBQAXABAMAJQANAJADAOIABABIAAACIAAABIgFAXIgHArIgGA0IgCA0IAAAZIADAVQADAKADAGQAEAGAGABIAAAAIAAAAIAAABIgIAEQgFABgGAAIgCABQgJAAgJgFg");
	this.shape_1.setTransform(-480.3,-232.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgpCEQgOgKgKgQQgJgRgGgVIgDgZQgCgMAAgNQAAgcAGgcQAGgcAMgYQANgXAQgNQASgOAUgBQAUABAOAKQAPAKAKASQAKASAFAXQADAMACANIABAbQAAAbgGAbQgGAbgMAWQgLAVgSANQgRANgXABQgTgBgPgJgAABhkQgEAKgEASQgFASgDAVQgDAWgBAVIgCAsIABAbQAAAMACAJQACAIADAEQADAEADAAQAGAAADgLQAGgLAFgTQAEgSAEgXQAEgXACgWQACgYAAgUIgBgWQgBgKgCgIQgBgIgEgFQgDgFgEAAQgGAAgGALg");
	this.shape_2.setTransform(-502.5,-232.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAHDTQgIgGgHgLQgGgLgDgOIAAgBIAAAAIABAAIAAAAIABAAQABACAHADQAFACAIAAQAMAAAHgKQAJgJAFgRQAFgQACgUQACgUAAgVQAAgWgCgTQgCgUgDgOQgEgOgDgHQgEgIgFAAQgLAAgKAOQgJANgJAVQgIAWgGAaQgFAZgDAZQgDAYAAASIAAALIABAIIABAEQACAMAFAHQAFAHAFABIACABIABABIAAABQgBADgDACQgCACgGAAQgFAAgJgCQgLgCgLgIQgLgHgKgPQgLgPgGgaIgBgDIAAgHIAAgKIABgkIAFgvIAEgzIAFg0QACgZAAgVIgBgWIgDgSIgEgLQgDgEgDgBIgCgBIgBgCIAAgCIAAgCQAAgKAFgGQAFgGAIgEIAQgFIAMgCQAPABAJADQAIADADAGQAEAGACAIIABADIAAADIgDAeIgEAuIgHA5IgHA+QAHgWAHgTQAIgTAJgLQAHgLALgBQAXABARAMQARANAMAWQAMAVAGAaQADAPACAPQABAQAAAPQABAagFAYQgEAYgKATQgJATgNALQgOALgTAAQgPAAgKgHg");
	this.shape_3.setTransform(-524.1,-238.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABpDJQgOgEgLgMQgMgMgFgYIgCgMIgBgRQAAgTACgZIAGg1QgNgDgNAAIgDAAIgEAAQgLAkgMAgQgMAhgPAZQgQAagSAPQgTAPgWAAQgRAAgNgGQgNgHgIgKQgJgKgDgNIgBgFIAAgGQAAgGACgGIAFgMIABgBIABAAIADAAIACACQACAEAHADQAGAEALAAQAZAAAUgOQAUgNAQgYQAQgXAOgdQgQAIgKAKQgJALgBALIAAACIAAACIgDABIAAAAQgLgCgIgJQgHgKgDgMIgBgGIgBgHQAAgGACgGQACgGADgFQAIgJAQgFQAPgFAVAAIAJABIALABIAUg4IASg0QAIgZAIgTQAJgTAIgLQAJgMAJAAQATABAKAEQAKAFADAFIADAFIgDAPIgFAnIgHA5IgGBCQgCAiAAAhQAAAbACAYQACAYAEAUQAEAPAFALQAFAMAHAHIABABIAAAAIAAACIgBABIgKACIgOABQgMAAgNgFgABQiGIgSA7IgTBFQAOAEANAFIAKhDIAJg+IAJgxQgJAPgJAag");
	this.shape_4.setTransform(-553.4,-238.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-569.5,-276.5,117.4,74.9);


(lib.title = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC66").s().p("AhJE0QgOgDgRgLQgRgMgPgXQgPgYgKgnQgCgKgBgPIgBgjQAAgiADgqQACgqAEgtIAJhaIAIhUIAIhBIAFgnIADgEQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAWABARAHQAQAHALAKQAKAKADALIAAABIgDAaIgHA6QAOgkAPgeQAPgeAOgRQAPgSAOAAQAhAAAYAQQAZAQAPAaQAQAcAIAiQAEARACATQACASAAAUQAAApgJAoQgJAngRAhQgRAggZATQgZAUgfAAQgXAAgQgMQgQgMgKgSQgLgTgGgVIAAgBIABAAIAAABIABAAQADAGAKAGQAKAGASABQARAAAOgPQANgOAKgXQAKgYAHgdQAGgeAEgfQADgfAAgbQAAgTgCgQQgBgQgDgMQgDgLgDgHQgEgGgGAAQgQAAgRAVQgQAVgOAjQgPAjgMAuQgNAtgJAxQgJAwgFAxQgGAwAAAqQAAAXACATQACAUAEAQQAEAVAJALQAIANANAAIABABIAAACQAAADgEAEQgEAFgKAAQgHAAgPgDg");
	this.shape.setTransform(219.5,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC66").s().p("Ag9DEQgWgPgOgYQgOgZgIgfQgEgSgBgTQgCgSAAgUQAAgqAJgpQAIgqATgjQARgiAZgUQAagVAfAAQAdAAAVAPQAWAPAPAbQAPAbAIAiQAFASACATQACAUAAAUQAAApgJAoQgJAngRAhQgSAggaATQgaAUgiAAQgdAAgVgOgAACiVQgHAPgHAaQgFAagFAgQgFAhgDAgQgCAiAAAfQAAAWABASQABASAEANQACAMAEAGQAFAGAEAAQAIAAAHgRQAHgQAIgcQAGgbAGgiQAFgiAEghQADgjAAgfIgBggQgBgPgDgMQgDgMgFgHQgFgHgGAAQgKAAgHAQg");
	this.shape_1.setTransform(186.1,9.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCC66").s().p("AhxEyQgRgJgPgTQgPgUgJggIgBgKIAAgNQgBgYAEgjIAIhOIAKhVIAIhWQAEgpAAghIgBgdQgBgOgCgKQgDgJgDgGQgDgGgFgCIgEgDIgCgDIAAgEQAAgOAJgJQAIgKALgFQAMgGALgDQALgCAGAAQANgBANADQANADAJAJQAKAIADARIABAEIAAAGQAAARgDAhQgEAhgGAtIgNBfIgNBmQAMggAQgdQAPgfASgYQASgZAUgOQAWgPAXAAQAiAAATASQATASAGAfQADANABAQQABAOAAAQQAAAigDAkIgIBHQgEAiABAbIAAATIACAQQADAMAGAHQAFAIAKABIACABIABABIAAABIgBABIgNAKQgIAFgNAFQgNAEgRAAQgaAAgPgPQgOgPgFgZIgEgaIgBgcQABgkADgmIAJhGQAFghAAgVIAAgJIgCgHQAAgFgDgDQgDgDgDAAQgLABgOAQQgOAOgOAbQgOAbgPAhQgNAhgLAjQgLAjgGAgQgGAggBAZIABANIABALIAAACQAAAFgIAAQgKAAgQgKg");
	this.shape_2.setTransform(153.3,0);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFCC66").s().p("AglEgQgggPgXgWQgYgYgPgbQgPgbgGgaIgDgNIgBgNQAAgWAKgNQAJgNAUAAQAWAAASAMQASANAIARIABACIAAAAIAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgDACQgKADgFAKQgFALAAAPIABAKIABAJQAEAQAKAPQAKAOARAKQASAKAXAAQANAAAMgGQAMgGAHgMQAHgMAAgSIAAgJIgCgKQgGgYgRgdQgRgcgUgfIgtg9QgWgfgRgdQgQgdgGgYQgEgQgCgPQgCgPAAgOQAAgqAQgdQARgcAdgPQAdgPAoAAQApABAcAPQAdAPAQAYQARAYAGAbIADASIABAQQAAAUgFAQQgGAQgKAKQgKAKgPAAQgLAAgMgEQgMgEgJgHQgJgHgFgKIAAgBIAAgBIABgCIACgDQARgCAJgQQAJgPAAgVIgBgJQAAgFgBgFQgDgOgIgMQgIgLgNgIQgNgGgSAAQgeAAgOAUQgPAUAAAhIACAXQABAMADANQAFAUARAbQARAbAXAfIAwA9QAXAfASAdQASAeAGAYIAEAWIABAVQAAAegLAVQgKAWgSANQgSANgWAHQgVAGgVAAQgmgBgfgOg");
	this.shape_3.setTransform(116.5,1.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFCC66").s().p("ACDDQQgOgDgQgKQgSgKgPgXQgPgXgKgnIgCgNIgBgNQgKAkgOAeQgNAfgPATQgRAUgTAAQgeAAgYgPQgWgPgPgbQgPgagIgiQgEgRgBgTQgCgTgBgTQABgpAIgpQAKgoARgiQARghAagTQAagUAiAAQAdgBAZARQAcARARApIAOgtIAJgZIACgDIAEgBQAfABAOAMQAPAMAEARIAAABIgDAVIgIAtIgJA8QgFAhgDAhQgEAjABAfQgBASACAPQABAQADANQAEASAJALQAHALANACIABAAIABABIAAABQAAAEgDAEQgEAEgKAAIgCAAQgIAAgMgCgAgUiUQgPARgLAbQgKAcgIAhQgGAhgEAhQgEAiABAeIABAfIADAZQADAKADAFQAEAGAEAAQAJAAAMgQQAMgQAMgaQANgZAJgeQANgeAJgbIARgxIAJgdIAGgZQgGgNgGgNQgIgNgJgIQgKgIgLgBQgRABgPAQg");
	this.shape_4.setTransform(47.2,9.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFCC66").s().p("AALE5QgOgJgKgRQgIgQgFgVIAAAAIAAgBIABAAIAAAAIABAAQADAEAJAEQAIADANAAQARAAAMgOQAMgPAHgYQAIgZADgdQAEgeAAgfQAAghgEgcQgDgegEgWQgFgUgGgKQgGgMgGgBQgRABgQAUQgOAVgMAfQgLAhgJAmQgJAmgEAjQgFAlAAAaIAAAQIACANIACAGQADASAHAJQAHALAIACIADACIABABIAAACQgBADgFADQgDADgJAAQgIABgOgDQgOgEgRgLQgRgKgPgXQgQgWgIgnIgBgDIgCgMIAAgOQAAgWADggIAFhGIAIhMIAHhNQACglAAggIgBggQgBgQgCgKQgDgKgEgHQgEgGgFgCIgCgBIgCgEIgBgDIAAgCQABgOAHgKQAIgJALgFQAMgGALgCQAMgCAHgBQAXABAMAEQAMAGAGAJQAGAJADALIAAAEIAAAGIgDAsIgIBEIgJBVIgKBcQAKghALgcQALgcANgRQAMgRAPgBQAiABAaAUQAaATARAfQASAhAJAmQAFAWADAXQACAWAAAYQAAAngHAiQgHAkgOAcQgNAcgVAQQgUARgbAAQgWAAgPgKg");
	this.shape_5.setTransform(10.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFCC66").s().p("Ag+DEQgVgPgPgYQgOgZgGgfQgFgSgCgTQgBgSAAgUQgBgqAKgpQAJgqASgjQARgiAZgUQAZgVAgAAQAdAAAWAPQAVAPAQAbQAOAbAIAiQAEASACATQACAUAAAUQABApgKAoQgIAngSAhQgRAggaATQgaAUghAAQgeAAgWgOgAACiVQgHAPgGAaQgHAagEAgQgFAhgCAgQgDAiAAAfQAAAWACASQABASACANQADAMAFAGQADAGAGAAQAHAAAHgRQAIgQAGgcQAIgbAFgiQAFgiAEghQADgjAAgfIgBggQgCgPgDgMQgCgMgFgHQgEgHgIAAQgJAAgHAQg");
	this.shape_6.setTransform(-22,9.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFCC66").s().p("AguE8QgXgIgQgKQgPgKgHgKQgIgKgBgFIgBgNQAAgNAEgFQAFgGAGgCIALgCIAEABIACADQACAHAGALQAGAMAMAIQANAKAVAAQAjAAAagOQAbgOAQgXQARgXAHgbQAIgbAAgYIgBgSIgDgQQgFgUgJgMQgKgMgOAAQgXAAgUANQgVAOgLAYQgOAWAAAeIABATQAFASAIAOQAHAPAMALIABAAIAAABIAAABIAAABIgBAAIgNAEQgKABgNAAQgTAAgUgGQgUgGgRgTQgRgSgJgiIgCgOIAAgPQAAgdAIgkQAHgkAMglIAXhGIAWg4IAMgeIACgCIACAAIABAAQAWABANAEQANAFAGAGIAIAKIAAACIAAADIgLAgQgIAagIAlQgKAmgGAqQAfgZAcghQAcgjASgmQASgoAAgnQAAgPgDgOQgEgQgHgOQgIgNgNgJQgMgKgSAAQgqAAgiAOQghAOgYAXQgYAXgMAbQgMAbAAAbIAAAMIACAMQADANAHAMQAHAMAKAKIACABIABACIAAABIAAACIgBABQgDADgGACQgGACgJABQgNAAgOgFQgOgFgMgLQgLgKgEgSIAAAAQgDgPAAgQQAAgoATgmQATglAhgeQAigfAtgTQAsgRAzgBQAuABAgAOQAgAOAUAYQAUAaAHAhQADAPAAAPQAAAhgNAiQgOAigYAhQgXAggeAZQAfAEAWANQAXAOANAUQAOATAGAZIACAPIABARQAAAhgNAiQgNAggZAbQgaAcgkAQQglARgvAAQggAAgYgIg");
	this.shape_7.setTransform(-58.9,2.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFCC66").s().p("AgyDEQgagOgPgWQgOgVgFgWQgDgOAAgMQAAgMACgJQAEgJAFgEIABAAIABAAIADABIACADQADAMAGAPQAGAOAJAOQAJAOALAIQAMAKAOAAQAQAAAHgIQAFgIAAgOIgBgMIgCgOQgFgYgMgfIgWg9QgMgfgHggIgFgYQgCgMAAgLQAAgWAJgRQAIgRAUgJQAUgKAhAAQAaABASAJQATAJALAQQAKAOAEAPIABAHIAAAFQAAAKgDAGQgDAHgHADIgBAAIgBAAQgDAAgCgBQgDgCAAgDIgCgGQgBgHgEgJQgEgIgHgFQgHgFgKAAQgUAAgIAJQgIAKAAARIABANIADAPQAGAbAMAgIAZBAQAMAiAIAeIAEAXIACAVQAAAVgIAPQgHAPgRAIQgSAJgdAAQgmAAgagOg");
	this.shape_8.setTransform(-127.8,10);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFCC66").s().p("AgLBGIgDAAIgCgCIgBgBIAAgBIABAAIAIgQQAFgLABgLIAAgDIgBgDQgBgFgDgEQgCgDgFgDIgBgBQgKgFgGgIQgHgKgDgKIgBgFIAAgEIAAgEIABgDQACgMAJgGQAIgIAMAAIABAAQASABAOAMQAOAMAEARIABAEIAAAFQABALgDANQgCAPgFAPQgGAOgKAKQgKAKgPAAIgDAAg");
	this.shape_9.setTransform(-145.7,-22.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFCC66").s().p("ACnEmQgPgJgLgNQgKgMgGgNQgHgMgCgJQgDgNgBgPQgCgPAAgRQABgrAGgxQAHgyAIgwIAPhcQAGgsAAgeIAAgOIgCgLIgDgKQgCgEgDgDIgHgDIgFgCQgPAAgPAXQgOAYgPAnQgOAngOAyIgbBjIgaBkQgOAwgMAmQgKAlgLAVQgLAVgNABQgmgBgTgGQgTgIgHgHQgHgJgBgDIAAgDIAJgbIAPg2IAShKIARhTQAIgqAFgpQAFgpABgjIgCgbQgBgMgCgLQgFgTgJgMQgKgLgOAAQgUAAgMAKQgMAKgGARQgFARAAATIABASIADARQAFAXALAUQALATAPAOIACADIABACIAAACQAAALgIAIQgIAJgNAFQgOAFgPAAQgQAAgQgGQgOgGgNgRQgNgPgGgaQgDgJAAgKIgBgTQAAghAOgdQANgcAWgUQAXgUAZgLQAagLAYABQAdAAAUAQQAWAQAOAdQAPAdAIAmQAGAZADAdQADAbACAeQANg2ARg0QASgyAWgqQAWgpAbgYQAagYAhgBQAiAAATAUQASATAIAhQAEARACATQABASAAAVQAAAtgGAyIgJBhQgFAvAAApQAAAPABAOQABAOADAMQAFAVAKALQAKANASABIACABIABABIABAEIAAADQAAARgLAQQgLAPgTAJQgSALgYAAQgTAAgOgJg");
	this.shape_10.setTransform(-181.7,1.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFCC66").s().p("AAwEsQgUgHgRgRQgQgRgIghIAAgEIgCgMIAAgOQAAgdAGgoQAFgpAIguIAQhcIAPhWQAFgoAAgbIAAgOIgCgLQgBgHgDgEQgEgEgFAAQgKAAgNAJQgMAJgNARQgMAQgJAUQgIAVAAAYIAAALIADAMQACAMAHAHQAHAIAIAAIAEgBIAEgBIAAgBIABAAIABAAIABACIAAAAIAAADIAAAEQAAASgOAKQgNAKgTAAQgOAAgNgGQgNgGgLgMQgKgLgEgTIgDgQIgBgPQAAggAOgcQANgcAXgXQAWgXAagQQAagRAZgIQAagJAVgBQAbABAOALQAPALAEAVQACAHABAKIAAATQAAAigHAwIgMBrQgHA7AABFQAAAvAEAyQAFAzAMA2IAAABIABABQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgOADIgUACQgSAAgUgGg");
	this.shape_11.setTransform(-225.4,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.title, new cjs.Rectangle(-240.7,-54.6,481.4,109.4), null);


(lib.taiwanbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Taiwan();
	this.instance.parent = this;
	this.instance.setTransform(-193.3,-123.9,0.161,0.165);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.14,scaleY:0.14,x:-163,y:-104},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-193.3,-123.9,386.7,247.8);


(lib.runningboy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApvMgIAA4/ITfAAIAAY/g");
	mask.setTransform(-405.6,-4);

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.parent = this;
	this.instance.setTransform(-445,-60);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({x:-546},0).wait(5).to({x:-667},0).wait(5).to({x:-787},0).wait(5).to({x:-893},0).wait(5).to({x:-1002},0).wait(5).to({x:-1127},0).wait(5).to({x:-1238},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-445,-60,101.8,120);


(lib.playBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.speaker();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.muteBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mute();
	this.instance.parent = this;
	this.instance.setTransform(-60,-60,0.234,0.234);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-60,-60,120,120);


(lib.menutitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhpEoQgugPgfgdQgfgdgRgrQgRgrAAg7IAAlvQAAgFADgEQADgEAIgCQAHgCALgCQAMgBASAAQASAAAMABQAMACAHACQAHACADAEQADAEAAAFIAAFlQAAAkAJAbQAIAaARARQARARAXAJQAXAJAcAAQAdAAAXgJQAXgJAQgRQAQgRAJgZQAIgZAAggIAAlsQAAgFADgEQADgEAHgCQAHgCAMgCQAMgBARAAQASAAAMABQALACAHACQAHACADAEQADAEAAAFIAAFqQAAA4gRAsQgQAsggAfQggAegvAQQguAQg8AAQg6AAgtgOg");
	this.shape.setTransform(96.9,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjdEwQgLgBgGgDQgGgCgDgEQgCgEAAgFIAAogQAAgWANgLQANgLASAAIBCAAQASAAAMADQANADAKAHQAJAHAIANQAJAMAJASIB1DeIAUAnIAUAnIASAmIARAlIABAAIgChEIgBhDIAAkdQAAgEADgEQADgEAGgDQAHgCAKgBQALgCARAAQAQAAALACQALABAGACQAFADADAEQACAEAAAEIAAIhQAAAKgEAJQgDAIgHAGQgGAGgJACQgIADgJAAIg1AAQgQAAgMgEQgMgDgKgIQgKgJgKgPQgJgPgMgXIiWkbIgag2QgOgegLgbIgBAAIADBDIABBFIAAE8QAAAFgCAEQgDAEgGACQgHADgLABQgKACgRAAQgRAAgKgCg");
	this.shape_1.setTransform(34,2.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiOEvQgQAAgKgJQgLgJAAgVIAAoPQAAgVALgJQAKgJAQAAIEuAAQAEAAADACQAEACACAGQACAGACAJIABAXIgBAXQgCAJgCAFQgCAGgEADQgDACgEAAIjYAAIAACUIC2AAQAFAAADADQAEADACAFQACAFACAKIABAWIgBAVIgEAPQgCAFgEACQgDADgFAAIi2AAIAACrIDaAAQAEAAAEADQADACACAFQADAGABAJIABAXIgBAXQgBAJgDAFQgCAGgDADQgEACgEAAg");
	this.shape_2.setTransform(-19.9,2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AELEvQgLgBgHgDQgGgCgDgEQgDgDAAgFIAAntIgBAAIiwHsQgCAHgEAEQgFADgGADQgIACgLABIgaABIgbgBQgMgCgGgCQgIgDgFgEQgEgDgBgGIipnsIgBAAIAAHtQAAAFgDADQgDAEgHACQgHADgLABQgLACgSAAQgQAAgMgCQgLgBgGgDQgHgCgDgEQgCgDAAgFIAAocQAAgXAMgNQANgNAVAAIBRAAQAVAAAQAEQAPADAMAJQALAIAHANQAIANAFAUICCFoIACAAICIlnQAHgUAHgNQAHgOAKgIQAJgJANgDQAOgEARAAIBTAAQANAAAJADQAIAEAHAGQAGAGADAKQACAJAAALIAAIcQABAFgDADQgCAEgHACQgHADgLABQgMACgRAAQgRAAgLgCg");
	this.shape_3.setTransform(-86.4,2.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCFOQgwgCglgUQgmgUgcgmQgbglgPg5IhfljQgCgEACgEQACgFAGgEQAHgEAKgEQAMgFARgFQASgEALgCQAMgCAHABQAHAAAFADQADADACAEIBcFZQAKAjAPAYQAPAXAVAMQAUANAZACQAYACAcgHQAcgIAUgOQATgPALgUQALgVACgaQACgbgIgfIhflfQgBgFACgEQABgFAHgEQAGgEALgEQAMgFARgEQARgFALgBQAMgCAHAAQAHABAEADQAEADABAEIBeFfQAPA1gFAvQgEAvgXAlQgXAmgpAcQgpAbg7AQQgyAOgsAAIgIgBg");
	this.shape_4.setTransform(92.1,-24.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AiYFgQgHgBgEgCQgDgDgBgFIiNoOQgGgVAKgOQAJgOATgFIA/gRQASgFAMABQANgBALAFQALAEALAKQAMAJANAPICrC4IAeAiIAcAfIAcAgIAaAgIABAAIgUhCIgShBIhKkSQgBgFACgEQABgEAGgFQAGgEAKgEIAagIIAagGQALgCAHABQAGABADADQADADACAFICNIOQACAKgBAJQgCAJgEAHQgFAHgHAFQgJAFgIACIgzAOQgQAEgMAAQgMAAgMgGQgMgGgNgLQgNgMgRgUIjajqQgUgVgUgZQgVgZgSgXIgBAAQALAgAJAgIATBBIBSEzQABAFgBAEQgCAEgEAEQgGAFgKAEQgLAEgQAEQgQAEgKACIgLABIgGgBg");
	this.shape_5.setTransform(33.5,-6.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhXFKQgMgGgGgUIiJn+QgFgUAIgMQAHgLAPgEIEkhPQAEgBAEACQADABAFAFQADAFAEAJQADAIAEAOIAFAWQABAJgBAGQgBAGgCADQgDAEgEABIjQA4IAmCPICwgwQAEgBAEACQAEACAEAEQAEAFAEAIIAGAVIAFAWQABAJgBAGQgBAGgDADQgDACgEABIiwAwIAtClIDSg5QAEgBAEACQAEABAEAFQAEAFADAJQADAIAEAOIAFAWQABAJgBAGQgBAGgCADQgDAEgEABIkmBPQgGABgFAAQgIAAgIgDg");
	this.shape_6.setTransform(-18.4,7.4);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Aj+F4QgHAAgEgDQgDgDgCgEIiLoJQgHgXAJgQQAJgPAUgGIBOgVQAVgFAQgBQAQAAANAFQANAEAKAMQALAKALASIDbE6IACAAIAml/QABgUADgPQADgPAIgLQAHgKAMgHQALgHARgFIBQgVQANgDAKABQAJAAAIAFQAGAEAGAIQAFAJADALICMIJQABAEgBAFQgCAEgFAEQgHAEgKAEIgcAJIgbAGQgLACgHgBQgHgBgEgCQgDgEgCgEIh/ncIgBABIgrIIQAAAHgDAFQgDAFgGAEQgHAEgKAEIgbAHIgaAHIgTAAQgHAAgFgDQgGgDgCgEIkjmvIgBAAICAHbQABAFgBAFQgCAEgGAEIgQAIIgcAJIgbAGIgMABIgGgBg");
	this.shape_7.setTransform(-82.4,25);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhpFAQg3gOgogaQgpgZgWglQgXgkgFguQgFguAPg5IBgljQABgEAEgDQAEgDAHAAQAIgBALACIAdAGQASAFALAEQALAEAGAFQAGAEACAEQACAFgBAEIhdFZQgJAjABAcQACAcAMAVQAMAVAUAOQAUAOAcAIQAcAHAYgCQAXgDAUgMQAUgNAPgVQAPgXAIgfIBelfQACgFAEgCQADgEAIAAQAHAAAMACQAMABARAFQARAEALAFQALAEAGAEQAGAEACAFQACAEgCAEIheFfQgOA1gcAnQgbAmgmAVQgnAVgxAEIgRAAQgrAAgwgNg");
	this.shape_8.setTransform(95.2,25.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AB2FaIgygNQgQgFgLgGQgLgGgHgLQgIgLgFgQQgFgRgFgaIhIk4QgGgcgGggIgIg9IgBAAIgPBBQgIAhgJAiIhSEyQgBAFgDACQgEADgHABIgSAAIgagGIgbgIQgKgFgFgEQgFgEgBgEQgBgEABgFICNoOQAGgVAPgHQAPgHASAEIBAARQARAFALAHQALAFAIAKQAHAJAEAPQAFANAEAUIA4D1IAKArIAJAqIAHAqIAIApIAAAAIAQhDIAQhCIBKkRQABgFAEgDQAEgDAHgBQAHgBAKACQALABARAFQAPAEAKAEQAKAEAFAEQAFAEABAEQACAFgCAEIiNIOQgCAKgGAHQgGAHgHAEQgIAEgJAAIgDAAQgIAAgHgCg");
	this.shape_9.setTransform(32.3,11.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("ABOFNIklhPQgPgEgHgLQgJgMAGgUICJn+QAFgTANgGQAMgHAPAEIEjBPQAEABADADQADADAAAHIAAAPIgFAWIgHAWIgHANQgEAFgEACQgEABgEgBIjQg4IgmCPICwAwQAEABADADQADADAAAHQABAFgBAJQgBAIgEANQgDANgEAJQgDAIgEAFQgDAEgEABQgEACgEgBIiwgwIgtClIDSA5QAEABADAEQADADAAAGQABAGgBAJIgFAWIgHAWIgHANQgDAFgFACIgFAAIgDAAg");
	this.shape_10.setTransform(-19.8,-2.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("ADsF4IgbgGIgbgJQgLgEgGgEQgFgEgCgEQgCgFACgEIB/ncIgBAAIkoGtQgDAGgFADQgGADgHAAQgIAAgLgBIgagIIgagHQgLgEgGgFQgHgEgDgFQgDgFAAgFIgkoHIgBAAIiAHbQgBAFgDADQgEADgHAAQgIABgLgCIgbgGQgRgEgKgEQgLgFgGgEQgGgEgBgEQgCgFACgEICLoJQAHgXAPgJQAQgJAUAFIBOAVQAVAGAOAHQANAIAJALQAJALAEAPQAEAOAAAUIAhF+IACABIDgk4QAKgRAMgLQAKgMALgGQAMgFANAAQAOAAARAEIBQAWQAMADAIAGQAIAFAEAIQAEAHABAKQAAAKgDALIiMIJQgBAEgDAEQgEACgHABIgFAAIgOgBg");
	this.shape_11.setTransform(-84.3,-19.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},9).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-130.4,-60.6,260.9,121.2);


(lib.menupicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.tumblr_mhawo7zfEk1rcjq6vo1_500();
	this.instance.parent = this;
	this.instance.setTransform(-90,-126.5,0.36,0.337);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-126.5,180,253);


(lib.menubtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABCCJQgKgFgJgNQgKgMgGgXIgBgGIgBgHQgGATgKAQQgIAQgLAJQgMAJgPAAQgUAAgOgIQgNgIgJgOQgIgOgFgSIgDgaIgBgbQAAgZACgZIAIgwIAIgoIAGgZIABgCIADgBQAQAAAKADQAJADAFAIQAFAHACANIABAFIAAAFIgBAcIgEAjIgEAmIgBAmIAAARIACAPQADAJADAFQAEAFAFAAQAJgBAIgMQAGgNAGgVQAHgVAGgZIAKgwIAKguQAFgVAEgNQAEgMAEgBQAWABAMAJQANAJAEAOIABABIAAACIgBABIgGAXIgGArIgGA0IgDA0IABAZIAEAVQACAKADAGQAFAGAFABIABAAIAAAAIAAABIgIAEQgGABgHAAIgBABQgJAAgKgFg");
	this.shape.setTransform(45.2,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5CLQgJgDgJgHQgJgIgIgLQgIgMgEgQIgCgQIgBgTQAAgTACgXQACgWAEgWIAGgrIAGgjIAEgUIACgDIADgBQAVAAALAHQAMAHAEARIAAACIgCATIgDAiIgEAsQAHgXAJgXQAJgXALgTQAKgTANgMQANgLAPAAQAUAAAKALQALALAEATIADASIABAVQAAAYgDAYIgEAwQgDAXAAATIAAAOIACALQACAJAEAFQAFAFAHABIABAAIAAABIAAABIgGAGQgEAEgIAEQgIADgNAAQgRAAgJgLQgKgKgEgRIgCgRIgBgTQAAgYADgZIAGgvIADgkIAAgHIgBgFIgCgFQgBAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAAAQgJABgKAOQgKAOgIAXQgJAXgIAaQgHAbgEAaQgFAaAAAVIABALIABAKIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgFAAQgGAAgIgDg");
	this.shape_1.setTransform(21.5,6.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgZCBQgUgMgNgVQgMgUgGgaIgEgYIgBgYQAAgaAFgaQAGgZAKgVQALgUAOgNQAPgLASAAQAVgBAPAHQAOAHAJALQAJAMADAPIABAHIABAHQAAAQgHATQgGARgMAQQgMAPgRALQgQALgVADQAAALACAIIADASQAEAUAJAMQAIAMAPAAQALAAAKgIQAJgIAHgLQAHgNAEgNQAEgMAAgKIAAgDIAAgDIAAAAIAAgBIABAAQACABACADIADAHIABAHIAAAJQAAAMgDAPQgDAOgHANQgHAMgMAIQgLAIgQAAQgbAAgVgMgAALhjQgJALgGARQgHASgEAWQgEAVgBAWQASgGAKgJQALgLAHgOQAHgNADgPQACgOAAgMIAAgKIgBgIIgDgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgLAAgJAKg");
	this.shape_2.setTransform(0.1,6.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACtDDQgLgKgHgMQgHgNgDgNIgCgOIgBgOQAAgTAEgVIAGgmQADgRAAgNIgBgLIgCgEIgDgEIgEgCIgEgBQgIAAgIAIQgIAIgHANQgIANgGARQgFAQgEAOQgDAQAAAMIAAAGIABAFIAAACIAAACQAAAGgEAHQgEAGgHAEQgHADgJABQgQgBgJgHQgIgHgEgLQgFgKgBgIIgBgFIgCgLIgBgNQABgYAFgdQAGgcAHgdIANg3QAFgaABgSIgBgGIAAgGIgDgGIgDgEIgEgCIgFgBQgKAAgJAQQgKARgJAaQgKAcgKAhIgSBFIgTBDQgJAhgIAZQgGAXgHANQgIANgIAAQgZgBgNgEQgNgFgFgFQgFgGAAgCIAAgCIAFgPIAJgkIAMgxIAMg4QAFgdAEgbQADgcAAgXIgBgUIgCgQQgDgOgHgHQgGgIgLAAQgMAAgIAGQgJAHgDALQgEALAAANIABAMIACANQADAPAHANQAHANALAJIABACIABACIAAABQAAAIgGAFQgFAGgJACQgJAEgKAAQgLAAgKgEQgLgEgIgKQgIgMgFgRIgCgNIAAgMQAAgXAJgTQAJgTAPgNQAPgOARgHQARgHAQgBQAUABAOAMQAPAKAKAUQAKAUAFAaQAFASACATQACAUABAVQAJglAMgkQAMgjAPgcQAPgdARgQQATgSAWAAQAVAAALAMQAMALAFAVIADATIABAUQgBAbgDAeIgJA9QAJgTALgQQALgQAMgKQAMgJAOgBQAVABALAKQALAKAEATIADARIABASIgDAvQgCAYAAAXIABARIACAQQADAPAJAJQAJAJARABIABABIABABIAAACQAAAJgGAIQgHAIgLAGQgMAFgPABQgQAAgLgJg");
	this.shape_3.setTransform(-32.3,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.2,-37.4,118.6,74.9);


(lib.mediatitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhmDcQgpgPgbgeQgbgdgNgsQgNgrAAg3QAAg0AOgsQAOgtAdgfQAdggArgRQAqgSA5AAQA4AAAqAPQApAQAbAdQAaAeAOArQANArAAA4QAAA0gOAsQgOAtgdAfQgdAggrARQgrASg4AAQg4AAgqgQgAgsiEQgUAKgMASQgNATgGAaQgHAaAAAhQAAAeAGAaQAEAaAMATQAMAUATALQAUAJAdABQAZAAAVgKQATgKAMgSQAOgSAFgaQAHgaAAgiQgBgdgEgaQgGgbgLgSQgMgUgTgLQgUgKgdgBQgaAAgTAKg");
	this.shape.setTransform(90,10.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhODeQgqgOgcgdQgcgcgOgsQgPgrAAg8QAAg2APgtQAPgtAcgeQAbggAogQQAogRAwAAQA1AAAlAPQAlAQAYAcQAYAbALAlQALAmAAAsIAAATQAAAVgJAJQgKALgRAAIj9AAQgBAbAIAWQAGAWAOAPQANAPAWAIQAWAHAdAAQAfAAAYgDQAXgFARgFIAcgKQAMgFAGAAQAFAAACACQADACADAEIACAMIABATIgBASIgBAMIgDAJIgEAGQgEAEgOAFQgNAGgWAGQgUAFgbAEQgcAEgfAAQg3AAgpgOgAggiPQgSAJgLAOQgKAOgGAUQgHATAAAWICvAAQACgxgWgdQgVgdgtAAQgVABgQAIg");
	this.shape_1.setTransform(39.9,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhzE4QgigSgUgfQgVgggKgqQgJgqAAguQAAg4AMgtQAMgrAXggQAXgfAigRQAigRAtAAQAiAAAcAPQAdAOAcAbIAAjiQAAgFADgDQACgEAHgDQAHgCALgBQALgCASAAQARAAALACQAMABAGACQAHADADAEQACADAAAFIAAJmQAAAFgCAEQgCAEgGACQgGACgJABIgYABIgYgBQgKgBgFgCQgGgCgDgEQgCgEAAgFIAAgvQghAkgjATQgkATgqAAQgwAAgggTgAgqgcQgRALgKATQgKATgFAXQgFAYAAAZQAAAaAEAZQAEAZAKATQAKAUAQALQAPAMAZAAQALAAAMgDQALgEAMgIQAMgIANgNIAbgfIAAiMQgZgegXgRQgYgRgYAAQgXAAgQAMg");
	this.shape_2.setTransform(-11.1,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgcE/QgKgCgIgCQgGgCgDgEQgDgDAAgFIAAmgQAAgFADgDQADgEAGgCQAIgDAKgCQAMgBAQAAQASAAAKABQAMACAHADQAGACAEAEQACADAAAFIAAGgQAAAFgCADQgEAEgGACQgHACgMACIgcABIgcgBgAg1jQQgOgNAAgjQAAgjAOgOQAPgOAmAAQAoAAAOAOQAOANAAAiQAAAkgPANQgOAOgnAAQgnAAgOgNg");
	this.shape_3.setTransform(-47.4,1.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgaEyIgXgBQgKgBgFgCIgKgFQgEgDgCgDIgEgLIi1oYQgGgRgBgKQgBgKAGgFQAGgFAOgBQAOgBAZAAIAiABQAMABAHACQAGACADAFIAFAMICSHTIABAAICRnRQACgIACgEQADgGAHgCQAHgDANgBIAigBQAWAAAMABQAMACAEAFQAFAFgCAKQgCAKgFARIi1IZQgDAIgDAFQgEAFgJACQgIADgPABIglAAIgfAAg");
	this.shape_4.setTransform(-87.6,2.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhNDoQglgPgfghQgeghgYgyQgXgwgGguQgHgtAMgpQAMgpAfgiQAfgiA0gZQAzgZAsgEQArgEAlAPQAlAPAeAhQAfAhAYAyQAXAwAHAuQAGAtgMApQgMApgfAiQggAjg0AZQgyAYgsAEIgRABQghAAgegMgAg8iAQgYAMgNARQgOARgDAWQgEAWAGAbQAGAZAOAeQAOAcAQAVQAPAVATAMQATANAVABQAXABAagNQAYgLANgRQAOgSADgWQAEgWgGgZQgGgagOgeQgOgcgPgVQgQgVgTgNQgTgMgVgBIgEAAQgVAAgYALg");
	this.shape_5.setTransform(85.6,-29.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhJDlQgmgNgegiQggghgZg1QgZgygGguQgGguALgoQAMgoAcghQAcgfAtgWQAvgXApgCQAngCAiAOQAhAOAaAdQAbAdATAoIAIARQAJATgDAOQgFANgPAIIjkBtQALAYAQARQAPARATAIQASAHAXgCQAXgCAbgNQAcgOATgOQATgOAOgMIAVgVQAIgKAGgDQAEgCAEABQADAAADADIAIAKIAJARIAHAQIAEAMIACAJIgCAIQgCAEgJALQgKALgRAPQgRANgWAQQgXAPgcANQgyAYgsAGQgMABgNAAQgdAAgbgJgAhNiIQgUAKgLAPQgMAPgDASQgEARADAUQADAUAJAVICdhNQgUgtgegQQgPgIgQAAQgTAAgWAKg");
	this.shape_6.setTransform(42.1,-8.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgnFjQgmgCgggTQgggTgbgiQgbgigUgqQgYgygIgtQgJgtAHgnQAHglAYgeQAXgeAogTQAggQAgABQAgAAAlANIhijMQgCgEABgFQAAgEAGgFQAFgGAJgGIAZgNQAQgIAKgEQALgDAHgBQAHAAAEACQAEACADAEIEJIpQADAFgBAEQAAAEgFAFQgEAEgIAFIgVALIgWAKQgJAEgGAAQgHAAgDgCQgEgCgDgFIgUgpQgOAtgXAhQgYAggnATQgnATghAAIgIgBgAhagKQgVAJgKARQgKARgBAWQgBAWAHAXQAFAYALAWQAMAYAOAUQAPAVARAOQAQAMAUAEQATAEAWgKQALgGAJgIQAIgIAIgNQAHgMAGgRQAFgRAGgYIg8h9QgkgRgcgFIgQgBQgTAAgQAIg");
	this.shape_7.setTransform(-2.6,3.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABSEtQgEgCgCgEIi0l3QgCgEABgFQACgEAFgFQAFgGAJgGIAZgNQAQgIAKgDQAMgEAHgBQAHgBAEADQADABACAFIC1F2QACAFgBAEQgBAEgFAGQgFAFgKAGIgZANQgQAIgKADQgLAEgHABIgDABQgFAAgEgCgAiLimQgTgGgOgfQgQggAIgSQAGgTAkgRQAkgRASAGQASAGAPAfQAPAggHASQgHATgjARQgbANgRAAQgFAAgFgCg");
	this.shape_8.setTransform(-42.1,21.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ACUFXQgFgBgDgCIgJgHImKmWQgNgNgFgIQgFgIADgHQADgHAMgHQAMgIAXgKIAfgOQALgFAHAAQAHgBAEADIAKAIIFPFlIAAgBIhHngQgCgJAAgFQABgGAFgGQAFgFALgGQAKgHAUgJQAUgKALgEQAMgDAHADQAFACAEAKIAEAbIBGIyQACAJgBAGQgCAFgGAHQgHAGgMAHIgjAQIgcAOIgWAJQgIADgGABIgIABIgDgBg");
	this.shape_9.setTransform(-86.4,36);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhSDdQg0gTgigcQgigcgQglQgQglACgtQACgsASg0QASgzAcgkQAcgmAlgUQAmgUAugDQAtgCA2ATQA2ATAhAcQAiAcARAkQAPAlgCAuQgCArgSA1QgSAygcAlQgbAmgmAUQglAVgvACIgJAAQgpAAgygRgAABiLQgUADgSANQgSANgPAXQgPAWgLAfQgKAdgEAaQgEAaAFAWQAFAWAPAQQAPAQAbAKQAZAJAWgCQAVgDASgNQASgNAOgWQAOgXALggQALgdAEgZQAEgagFgWQgEgWgPgRQgPgRgcgJQgSgHgRAAIgMABg");
	this.shape_10.setTransform(81.6,39.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAqDyQgWgCgagFQgbgGgdgKQg1gSgigbQgkgcgRgkQgRgkACguQABgsATg4QASg0AdglQAdgmAkgVQAlgUArgCQApgDAvARQAxARAfAbQAeAbANAiQAOAhgCAoQgCAngOAoIgGASQgIAUgMAHQgNAGgQgFIjvhTQgJAYgBAXQgBAXAIATQAIASASAPQASAPAdAKQAcAKAYAEIApAEIAeAAQAMgBAHACQAEACABADQADACAAAEQABAFgCAIIgGASIgGARIgGALIgFAHIgHAFQgEACgPABIgNAAIgXgBgAANibQgSACgOAKQgQAKgMARQgLAQgJAUICmA7QARgvgKghQgLgjgqgOQgQgGgOAAIgKABg");
	this.shape_11.setTransform(34.5,23.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAsE+IgXgIIgVgIQgJgEgEgFQgGgEAAgDQgCgFACgFIAPgsQgqAXgnAGQgoAGgpgOQgtgQgZgcQgZgdgJgkQgKgkAFgrQAFgrAPgrQATg0AagmQAagnAggWQAggWAmgEQAlgFAqAPQAhALAWAYQAXAWARAkIBLjWQABgEAEgDQAEgDAHABQAHgBALACQALADAQAFQARAGAKAFQAKAFAFAFQAGAEABAFQACAEgCAFIjLJDQgCAFgDADQgEACgFAAIgDAAIgNgBgAg2hYQgUAFgPAPQgRAPgMAVQgMAUgJAWQgIAZgFAZQgEAZADAWQACAVAMAQQALARAXAIQALAEAMABQAMAAAPgEQANgDAQgIQARgIATgNIAuiDQgOgmgQgXQgRgYgWgIQgNgEgMAAQgIAAgIACg");
	this.shape_12.setTransform(-8.3,1.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhNE1IgcgJIgagKQgKgFgGgFQgGgEgBgEQgCgEACgFICJmJQACgEAEgCQAEgDAHAAQAGAAALACIAcAIQAQAGAKAFQAKAFAGAFQAGAEABAFQABAEgBAEIiJGJQgCAFgDACQgEACgHAAQgHAAgLgCgABAi5QglgOgJgRQgJgRAMggQALghASgIQATgJAlANQAlANAJASQAJARgMAgQgLAigSAHQgHADgLAAQgPAAgXgHg");
	this.shape_13.setTransform(-45.1,-14.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ah/FTQgJAAgOgEIgkgMIgegLIgVgIIgNgIQgFgEgDgEQgDgEgBgEIAAgLIAHo2QABgSACgKQACgJAHgDQAHgDAOAEQAOADAXAJIAgALQALAFAGAFQAFAEABAGQABAFgBAHIgPHpIABABIEhmHQAFgHAEgDQAEgEAIAAQAHgBAMADIAhALQAVAHALAFQAKAGADAHQACAFgFAKQgEAIgLAOIlcG/QgFAHgFADQgFADgHAAIgCAAg");
	this.shape_14.setTransform(-74.4,-29.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118,-60.6,236,121.2);


(lib.mediabtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABYCMQgJgCgMgHQgLgHgKgPQgKgQgGgaIgCgIIgBgJQgHAYgJAUQgJAVgKANQgLANgNAAQgUAAgQgKQgPgKgLgSQgJgSgGgXIgEgYQgBgNAAgNQAAgbAHgbQAFgbAMgXQAMgWARgNQASgOAWAAQAUAAARALQASAMAMAbIAJgeIAGgRIACgCIACgBQAVABAKAIQAKAIADAMIAAAAIgDAOIgFAfIgHAoIgEAtQgDAXAAAVIABAWIADATQADANAGAHQAFAHAIACIABAAIABABIAAAAQAAADgDACQgDADgGAAIgCABIgNgCgAgNhjQgKALgHASQgIATgEAWQgFAWgDAWQgCAXAAAUIABAVIACARQACAHACADQACAEADAAQAHAAAIgLQAHgLAJgRIAPglIAOgmIALghIAHgUIADgQQgDgJgFgJQgFgIgGgGQgGgGgIAAQgMAAgJAMg");
	this.shape.setTransform(51.4,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAACzQgFgBgHgFQgHgFgIgLQgGgMgFgUIAAgBIgCgLIgBgOQABgQACgUIAEgpIAEgmQACgSAAgOIAAgJIgBgHQgBgEgCgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQAAAAgBAAIgBgBIgBgBIAAgDIAAgCQAAgNALgFQALgGAQABQAMAAAIAGQAKAFADANIAAACIAAADIgCAcIgFArIgEAxQgDAaAAAXIABAYQABAMADAJQABAKAEAGQAFAHAGAAIABABIAAABIgIAFIgLAGQgGADgGAAIgLgBgAgQh9QgLgJgDgOIgCgHQABgLAGgGQAIgHALAAQAMAAALAJQAMAJADANIABAEIAAAEQAAALgHAGQgGAHgMAAQgNAAgLgJg");
	this.shape_1.setTransform(33.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABZDSQgJgCgMgIQgLgHgKgPQgLgPgGgaIAAgDIgBgHIAAgIIAAgLIAAgNQgFAUgGAUQgHAVgIAQQgHARgJAJQgKAKgKABQgVAAgQgLQgPgKgKgSQgKgRgFgXIgEgYQgCgNAAgNQAAgcAHgcQAGgaALgWQAMgXARgNQASgNAWAAQATgBAPAKQARAKANAXIADgsIABgnIAAgXIgDgSIgEgLQgCgEgEgBIgCgBIgBgDIAAgCIAAgCQAAgJAFgGQAFgGAIgEQAIgEAHgBIANgCQAPABAIADQAJADAEAGQAEAGABAIIABADIAAADIgDAjIgGA4IgIBDIgGBGQgDAkAAAeIABAhQACAPACAMQADALAEAGQAEAHAGACIABABIACABIAAACIgEAEQgDACgFAAIgCAAQgFAAgIgCgAgPggQgJALgIASQgHASgFAWQgFAWgCAXQgDAXAAAUIABAVIADARIADALQADADADABQAGgBAHgKQAHgKAIgRQAIgRAGgUIAOgoIAMgkIAIgbIADgKIABABIAAAAIgBgBIgIgQQgFgHgGgFQgGgFgHAAQgLAAgKALg");
	this.shape_2.setTransform(15.7,-0.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgZCBQgUgMgNgVQgMgUgGgaIgEgYIgBgYQAAgaAFgaQAGgZAKgVQALgUAOgNQAPgLASAAQAVgBAPAHQAOAHAJALQAJAMADAPIABAHIABAHQAAAQgHATQgGARgMAQQgMAPgRALQgQALgVADQAAALACAIIADASQAEAUAJAMQAIAMAPAAQALAAAKgIQAJgIAHgLQAHgNAEgNQAEgMAAgKIAAgDIAAgDIAAAAIAAgBIABAAQACABACADIADAHIABAHIAAAJQAAAMgDAPQgDAOgHANQgHAMgMAIQgLAIgQAAQgbAAgVgMgAALhjQgJALgGARQgHASgEAWQgEAVgBAWQASgGAKgJQALgLAHgOQAHgNADgPQACgOAAgMIAAgKIgBgIIgDgHQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAQgLAAgJAKg");
	this.shape_3.setTransform(-6.2,6.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACtDDQgLgKgHgMQgHgNgDgNIgCgOIgBgOQAAgTAEgVIAGgmQADgRAAgNIgBgLIgCgEIgDgEIgEgCIgEgBQgIAAgIAIQgIAIgHANQgIANgGARQgFAQgEAOQgDAQAAAMIAAAGIABAFIAAACIAAACQAAAGgEAHQgEAGgHAEQgHADgJABQgQgBgJgHQgIgHgEgLQgFgKgBgIIgBgFIgCgLIgBgNQABgYAFgdQAGgcAHgdIANg3QAFgaABgSIgBgGIAAgGIgDgGIgDgEIgEgCIgFgBQgKAAgJAQQgKARgJAaQgKAcgKAhIgSBFIgTBDQgJAhgIAZQgGAXgHANQgIANgIAAQgZgBgNgEQgNgFgFgFQgFgGAAgCIAAgCIAFgPIAJgkIAMgxIAMg4QAFgdAEgbQADgcAAgXIgBgUIgCgQQgDgOgHgHQgGgIgLAAQgMAAgIAGQgJAHgDALQgEALAAANIABAMIACANQADAPAHANQAHANALAJIABACIABACIAAABQAAAIgGAFQgFAGgJACQgJAEgKAAQgLAAgKgEQgLgEgIgKQgIgMgFgRIgCgNIAAgMQAAgXAJgTQAJgTAPgNQAPgOARgHQARgHAQgBQAUABAOAMQAPAKAKAUQAKAUAFAaQAFASACATQACAUABAVQAJglAMgkQAMgjAPgcQAPgdARgQQATgSAWAAQAVAAALAMQAMALAFAVIADATIABAUQgBAbgDAeIgJA9QAJgTALgQQALgQAMgKQAMgJAOgBQAVABALAKQALAKAEATIADARIABASIgDAvQgCAYAAAXIABARIACAQQADAPAJAJQAJAJARABIABABIABABIAAACQAAAJgGAIQgHAIgLAGQgMAFgPABQgQAAgLgJg");
	this.shape_4.setTransform(-38.6,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-65.5,-37.4,131.1,74.9);


(lib.locationtitle = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABxDnQgMgCgHgCQgGgCgDgEQgDgDAAgFIAAjtQAAgfgEgSQgFgRgIgMQgJgMgNgHQgNgHgSAAQgWAAgXAQQgXAQgZAgIAAEVQAAAFgCADQgDAEgHACQgHACgLACIgdABIgcgBQgLgCgHgCQgHgCgDgEQgDgDAAgFIAAmhQAAgEADgEQACgEAGgCQAGgDAKAAQAJgCAPAAQAPAAAKACQAKAAAFADQAFACADAEQACAEAAAEIAAAwQAjglAkgTQAjgTAmAAQArAAAeAOQAdAOASAZQASAXAIAhQAIAhAAAtIAAEBQAAAFgDADQgDAEgGACQgHACgLACIgdABIgcgBg");
	this.shape.setTransform(144.2,9.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhlDcQgpgPgcgeQgbgdgNgsQgNgrAAg3QAAg0AOgsQAOgtAdgfQAcggAsgRQArgSA4AAQA4AAAqAPQApAQAbAdQAbAeANArQANArAAA4QAAA0gOAsQgOAtgdAfQgdAggqARQgrASg5AAQg4AAgpgQgAgsiEQgUAKgMASQgNATgGAaQgHAaAAAhQAAAeAFAaQAGAaALATQAMAUATALQAUAJAdABQAaAAATgKQAUgKANgSQANgSAGgaQAFgaABgiQAAgdgFgaQgGgbgLgSQgMgUgTgLQgTgKgegBQgaAAgTAKg");
	this.shape_1.setTransform(92.5,10.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgcE/QgKgCgIgCQgGgCgDgEQgDgDAAgFIAAmgQAAgFADgDQADgEAGgCQAIgDAKgCQAMgBAQAAQARAAAMABQALACAHADQAHACADAEQACADAAAFIAAGgQAAAFgCADQgDAEgHACQgHACgLACIgdABIgcgBgAg1jQQgOgNAAgjQAAgjAPgOQAOgOAnAAQAnAAAOAOQAOANAAAiQAAAkgPANQgOAOgnAAQgnAAgOgNg");
	this.shape_2.setTransform(54.9,1.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgDEVQgagJgRgSQgRgTgIgcQgIgcAAgmIAAjWIgyAAQgJAAgEgKQgFgMAAgZIABgXQABgKADgFQACgGAEgCQADgCAFAAIAxAAIAAheQAAgEADgEQADgEAHgCQAGgDAMgBQALgBARAAQARAAALABQALABAHADQAHACACAEQADAEAAAEIAABeIBbAAQAFAAAEACQADACACAGQACAFACAKIABAXQAAAZgFAMQgFAKgIAAIhcAAIAADEQAAAiALARQALARAbAAQAKAAAHgBIAOgEIAKgEQADgCAEAAQADAAACACQADACABAFIADANIABAWQAAAUgDALQgCALgFAFQgEAEgIAEQgIADgLADIgYAEQgNABgNAAQgjAAgZgJg");
	this.shape_3.setTransform(25.7,5.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhjDjQgcgIgUgSQgUgRgMgZQgLgaAAghQAAgkAPgcQAOgbAcgQQAcgSAqgIQAqgJA3AAIApAAIAAgZQAAgUgEgOQgEgPgJgKQgJgKgPgFQgPgEgWAAQgdAAgXAGQgYAHgSAIIgeAPQgLAGgIAAQgFAAgEgEQgFgDgCgGQgDgGgBgJIgBgUQAAgOACgIQACgJAHgGQAHgIAQgIQAQgIAXgHQAVgHAbgEQAZgFAbAAQAyAAAiAKQAjAKAXATQAWAUAKAgQALAfAAArIAAEYQAAAHgFAEQgEADgLACQgKACgTAAQgWAAgJgCQgKgCgEgDQgDgEAAgHIAAghQgbAcghAPQggAQgoAAQghAAgcgJgAgSAkQgUAEgNAIQgMAJgGAMQgGAMAAAPQAAAaARAPQAQAPAeABQAYgBAVgNQAUgMAWgZIAAhHIgtAAQgcABgUAEg");
	this.shape_4.setTransform(-15.1,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag4DcQgmgPgZgcQgZgfgNgpQgNgrAAg2QAAg+AQgtQAPguAdgeQAcgeAmgPQAngOAsAAQATgBATAEQARADAQAGQAQAFAMAIQANAHAFAFIAHAJIAEAJIABANIABAVQAAAbgFALQgFALgHgBQgIAAgJgGIgVgOQgMgJgRgGQgRgHgXAAQgtAAgZAkQgYAjAABEQAAAhAGAaQAGAaAMARQAMASARAIQASAJAYAAQAYAAASgHQASgIANgIIAWgQQAJgIAGAAQAEAAADACQADADABAGIADAQIABAaIgBAUIgCAOIgCAJIgIAJQgGAFgNAIQgOAHgRAHQgRAGgVAEQgUADgWAAQgvABglgQg");
	this.shape_5.setTransform(-57.3,10.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AhlDcQgqgPgbgeQgbgdgNgsQgNgrAAg3QAAg0APgsQAOgtAcgfQAcggArgRQAsgSA4AAQA4AAApAPQApAQAcAdQAaAeAOArQANArAAA4QAAA0gOAsQgOAtgdAfQgcAggrARQgsASg5AAQg3AAgpgQgAgsiEQgUAKgNASQgMATgHAaQgGAaAAAhQAAAeAFAaQAGAaALATQALAUAUALQAUAJAdABQAaAAATgKQAUgKANgSQAMgSAHgaQAFgaAAgiQABgdgFgaQgFgbgMgSQgMgUgTgLQgTgKgegBQgZAAgUAKg");
	this.shape_6.setTransform(-103.5,10.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AiBExQgQAAgKgJQgLgKAAgUIAAomQAAgFAEgDQACgEAHgCQAIgDAMgBQALgCASAAQATAAALACQAMABAHADQAHACADAEQADADAAAFIAAHnIC+AAQAFAAADADQAEACACAGQACAGACAKIABAXIgBAYIgEAQQgCAGgEADQgDADgFAAg");
	this.shape_7.setTransform(-146.7,2.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ah6D/QgHAAgEgCQgEgEgBgEIhsmTQgBgFABgDQABgEAGgEQAFgEAJgDQAJgEAOgEQAPgEAJgBQAKgCAGABQAGABADADQADACABAFIANAvQAYguAegbQAdgbAmgKQAogLAgAGQAgAGAYASQAXATAQAdQARAdALAsIBDD5QABAEgCAFQgBAEgGADIgQAJIgcAIIgcAHQgLABgHgBQgHAAgEgCQgEgDgBgFIg+jlQgIgegIgPQgJgQgLgJQgLgLgPgCQgOgEgRAFQgWAGgSAWQgSAVgQAlIBIELQABAFgBAFQgCADgGAEIgRAJIgbAIIgcAHIgNAAIgFAAg");
	this.shape_8.setTransform(142,-26.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgoDvQgsgEgjgVQghgWgYgmQgYgmgOg2QgOgzACguQACguAUgmQATgmAlgcQAmgcA3gPQA3gOAqAEQAsAEAiAVQAhAWAYAmQAYAmAOA2QAOA0gCAtQgCAugUAmQgTAnglAbQglAcg4APQgpALgiAAIgVgBgAgjiJQgZAHgRAPQgQAOgIAVQgHAVAAAbQABAbAJAfQAIAeAMAYQALAXAQAQQAQAPAWAGQAVAFAcgIQAagHAQgOQARgOAHgWQAIgUgBgbQgBgbgJgfQgIgegLgXQgMgYgQgQQgQgPgWgGQgJgCgJAAQgOAAgRAEg");
	this.shape_9.setTransform(92,-14);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAlE7QgHAAgEgCQgEgEgBgEIhrmSQgBgFACgDQACgEAGgFQAFgEALgEQALgFAQgEQARgFALgBQAKgCAIABQAHABAEADQADACABAEIBsGSQABAFgBAFQgCADgGAEIgRAJIgbAIIgcAHIgNAAIgFAAgAhpi8QgRgJgJghQgJgiALgRQAKgSAmgKQAmgKARAKQARAJAJAhQAJAigKARQgLARgmAKQgUAFgPAAQgMAAgIgEg");
	this.shape_10.setTransform(53.3,-13.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AA3ESQgbgCgVgOQgUgNgPgZQgPgagKglIg3jOIgxANQgIADgIgJQgHgKgHgZQgDgNgBgJQgCgKABgFQABgGADgEQACgDAFgBIAwgNIgYhaQgCgFACgEQACgEAGgEQAFgFALgEQALgEAQgEQARgFALgBQAMgCAHAAQAHABADADQAEADABAEIAYBbIBXgYQAFgBAEABQAEACADAFQAEAEAEAJIAHAVQAGAZgBANQgCALgIACIhZAYIAzC9QAJAhAPAOQAPANAagHQAKgCAGgEIAMgHIAJgGIAGgEIAGABQADABACAEIAGAMQAEAIADANQAFATABAMQAAALgDAGQgDAFgGAFQgIAGgKAFQgKAGgMAEQgMAFgMADQgcAIgYAAIgKAAg");
	this.shape_11.setTransform(27.4,-2.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("Ag1DzQgdgBgYgLQgZgMgRgVQgSgWgJggQgJgjAHgeQAHgeAXgYQAWgYAngTQAmgTA1gOIAogLIgHgYQgFgTgHgNQgIgOgLgHQgLgHgQgBQgQAAgVAGQgdAHgVAMQgUANgQAMIgZAWQgJAJgIACQgFACgEgCQgFgCgEgGQgEgFgEgIIgGgTQgEgOAAgJQAAgJAFgIQAEgIAOgMQANgMAUgNQAUgMAYgLQAYgLAbgHQAvgNAkAAQAjAAAbAOQAbANASAcQASAbALAqIBJEPQACAGgEAFQgDAFgJAEIgdAJIgeAHQgKAAgEgCQgFgCgCgHIgJggQgRAhgcAYQgcAXgnALQgcAIgaAAIgGgBgAAVAUQgbAIgSAJQgTAJgKAMQgKALgCANQgDANAEAPQAHAaAUAKQATAKAcgHQAYgHARgSQARgRAPgdIgThFg");
	this.shape_12.setTransform(-10.2,14.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNDsQgogFgggWQghgWgWglQgYglgOg1QgRg8AEgwQADgwATgkQAUglAhgYQAigYAsgLQASgFASgCQASgCARACQAQABAOAEQANADAHAEIAKAHIAFAIIAFANIAGATQAHAagBAMQgCALgIACQgHACgKgEIgZgIQgOgFgRgCQgTgCgVAGQgtAMgOApQgOAoARBBQAJAhANAXQAMAYAQANQAPAOAUAEQATAEAXgHQAYgGAQgMQAOgLALgMIARgVQAHgKAFgCQAFgBADACQADABAEAGIAGAPIAHAZIAFATIACAOIAAAKQgBADgEAHQgEAHgLALQgLALgQAKQgPAKgSAKQgTAIgVAGQgiAJgfAAIgUgBg");
	this.shape_13.setTransform(-51,24);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgoDvQgsgEgjgVQghgWgYgmQgYgmgOg2QgOgzACguQACguAUgmQATgmAlgcQAmgcA3gPQA3gOAqAEQAsAEAiAVQAhAWAYAmQAYAmAOA2QAOA0gCAtQgCAugUAmQgTAnglAbQglAcg4APQgpALgiAAIgVgBgAgjiJQgZAHgRAPQgQAOgIAVQgHAVAAAbQABAbAJAfQAIAeAMAYQALAXAQAQQAQAPAWAGQAVAFAcgIQAagHAQgOQARgOAHgWQAIgUgBgbQgBgbgJgfQgIgegLgXQgMgYgQgQQgQgPgWgGQgJgCgJAAQgOAAgRAEg");
	this.shape_14.setTransform(-97.3,36.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhIErQgMgGgGgUIiOoTQgCgFACgEQACgFAGgEQAHgEALgEQALgFARgEQASgFALgCQAMgCAHABQAIAAAEADQAEADABAFIB9HWIC4gyQAFgBAFACQADABAEAGQAEAFAEAJQADAIAEAOQAEAOABAKQABAJgBAHQAAAGgCAEQgEAEgEABIkMBIQgGABgFAAQgIAAgIgDg");
	this.shape_15.setTransform(-141.1,42.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("ACEEBIgcgFIgcgHQgLgEgGgEQgGgDgCgEQgCgEABgFIAwjoQAHgegBgSQgBgSgGgOQgFgOgMgJQgMgJgRgEQgWgEgaALQgZALgfAaIg4EPQgBAFgEADQgDADgHAAQgHABgMAAIgcgFIgcgHQgKgEgGgEQgGgDgDgEQgBgEAAgFIBVmYQABgFADgDQADgDAHgBIAQAAQAJABAPADQAOADAJADQAKADAFADQAFAEABAEQACAEgBAEIgKAwQAqgeAmgLQAmgLAnAIQApAIAaAUQAaAUANAbQANAbABAiQABAhgJAsIg1D8QAAAFgEADQgDADgHAAIgKABIgJAAg");
	this.shape_16.setTransform(137.9,39.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag0DmQg2gMgmgXQglgYgVgiQgVgjgDgtQgFgsAMg1QAKg1AYgoQAWgpAjgZQAigZAugIQAtgJA4AMQA3AMAlAXQAmAXAUAiQAUAjAEAsQAFAugMA1QgLA1gWAoQgXAogiAaQgjAZguAIQgSAEgVAAQgcAAgigHgAgQiKQgVAFgRAQQgQAPgLAZQgMAXgGAhQgHAdAAAbQAAAaAHAWQAHAVASAOQARAPAcAFQAaAGAVgGQAVgFAQgQQAQgPALgYQAMgZAGggQAHgdAAgaQABgbgIgVQgHgVgRgPQgRgPgdgGQgNgCgLAAQgLAAgLADg");
	this.shape_17.setTransform(88.5,28.9);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AglE9IgcgFIgcgHQgLgDgGgEQgGgEgCgEQgCgEABgEIBVmYQABgEADgDQAEgDAHgBQAHgBALAAQAKABARAEQARADALAEQALAEAGAEQAGAEACAEQACAEgBAEIhUGYQAAAEgEADQgDADgHABIgMABIgHgBgAAmjAQgmgIgKgQQgMgQAHghQAHgjARgKQAQgLAnAIQAnAIALAQQALAQgHAiQgIAjgQAKQgKAGgRAAQgMAAgRgEg");
	this.shape_18.setTransform(53.7,12.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgBEkIgagEQgjgHgXgOQgYgOgMgVQgNgWgCgdQgCgdAIgmIArjRIgxgKQgJgCgCgLQgCgMAFgaQADgNADgJQADgJADgEQAEgFAEgCQAEgBAEABIAxAKIAThcQABgEADgDQADgEAIAAQAHgCALACQAMABAPADIAcAHQALADAGAFQAGADACAFQACAEgBAEIgTBcIBZASQAFABADADQADADABAGQABAGgBAJIgEAXQgFAZgHAKQgGAKgJgCIhZgTIgnDAQgHAhAHATQAHATAaAGQAJACAIAAIAOgBIAKgCIAIAAQACAAADADQABABABAGIAAANQgBAJgDANQgEAUgEAKQgFAKgFAEQgFADgJACIgUACIgXgBg");
	this.shape_19.setTransform(26.7,10.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("ABfDyQgVgEgJgEQgJgEgDgEQgEgFACgGIAGghQgeAXgiAIQgkAIgogIQgggHgagNQgZgPgQgVQgRgVgGgbQgGgbAHghQAHgkAUgWQATgYAggLQAfgMArAAQArABA2ALIAoAJIAFgZQAEgTgBgQQgBgPgHgLQgHgMgOgIQgOgHgWgFQgcgGgYACQgYACgTADIggAJQgNAEgIgCQgFgBgDgEQgDgEgBgGQgCgHABgJIACgTQADgPAEgHQAEgIAIgFQAIgGARgEQASgFAXgDQAYgCAZABQAaABAbAGQAwAKAhAQQAgAQASAZQASAXADAiQAEAggJArIg5ESQgBAGgFADQgGADgKAAQgKgBgTgEgAg5AbQgOAFgIALQgIAKgEAQQgFAZAOASQANATAdAGQAYAFAWgIQAXgJAagTIAPhGIgtgJQgbgGgUAAIgEAAQgTAAgMAGg");
	this.shape_20.setTransform(-17.1,8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AAKDqQgUgBgVgEQgvgKghgWQgigWgTgiQgSgigEgsQgFgsALg0QANg9AZgqQAZgqAhgXQAigYAogGQAogGAtAJQASAEASAGQAQAHAPAJQAOAIALAKQAKAJAEAGIAGALIABAJIgBAPIgDATQgGAagHAKQgHAKgHgCQgIgBgHgIIgSgTQgKgKgQgKQgPgKgXgFQgtgJgdAeQggAdgNBDQgHAhAAAaQABAbAJATQAIATAPANQAQALAXAFQAYAFATgDQASgEAOgGIAagLQAKgFAGABQAEABACACQACADABAHQAAAHgBAJIgEAZIgFAUIgEANIgFAJIgKAHQgGAEgPAFQgPAFgSACQgPACgRAAIgHAAg");
	this.shape_21.setTransform(-56.9,-0.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag0DmQg2gMgmgXQglgYgVgiQgVgjgDgtQgFgsAMg1QAKg1AYgoQAWgpAjgZQAigZAugIQAtgJA4AMQA3AMAlAXQAmAXAUAiQAUAjAEAsQAFAugMA1QgLA1gWAoQgXAogiAaQgjAZguAIQgSAEgVAAQgcAAgigHgAgQiKQgVAFgRAQQgQAPgLAZQgMAXgGAhQgHAdAAAbQAAAaAHAWQAHAVASAOQARAPAcAFQAaAGAVgGQAVgFAQgQQAQgPALgYQAMgZAGggQAHgdAAgaQABgbgIgVQgHgVgRgPQgRgPgdgGQgNgCgLAAQgLAAgLADg");
	this.shape_22.setTransform(-103.4,-10.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("ACGFHIkPg5QgPgDgIgLQgJgLAEgUIBwobQABgEAEgDQAEgEAHAAQAHgBANABIAcAFQASADALAEQALAEAGAEQAHADACAFQACAEAAAEIhjHdIC6AnQAFABADADQACADACAHIAAAQQgBAJgDAOIgGAXIgGAPQgEAFgEACQgDACgDAAIgDAAg");
	this.shape_23.setTransform(-149.2,-27.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},9).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-171.9,-60.6,344,121.2);


(lib.locationpicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib._272cb407fc2a28aa22a19b65b40bab24();
	this.instance.parent = this;
	this.instance.setTransform(-90,-126.5,0.281,0.264);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-126.5,180,253);


(lib.locationbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag5CLQgJgDgJgHQgJgIgIgLQgIgMgEgQIgCgQIgBgTQAAgTACgXQACgWAEgWIAGgrIAGgjIAEgUIACgDIADgBQAVAAALAHQAMAHAEARIAAACIgCATIgDAiIgEAsQAHgXAJgXQAJgXALgTQAKgTANgMQANgLAPAAQAUAAAKALQALALAEATIADASIABAVQAAAYgDAYIgEAwQgDAXAAATIAAAOIACALQACAJAEAFQAFAFAHABIABAAIAAABIAAABIgGAGQgEAEgIAEQgIADgNAAQgRAAgJgLQgKgKgEgRIgCgRIgBgTQAAgYADgZIAGgvIADgkIAAgHIgBgFIgCgFQgBAAAAgBQgBAAAAAAQAAAAgBgBQgBAAAAAAQgJABgKAOQgKAOgIAXQgJAXgIAaQgHAbgEAaQgFAaAAAVIABALIABAKIAAABQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAABIgFAAQgGAAgIgDg");
	this.shape.setTransform(65.1,6.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpCEQgPgKgJgQQgJgRgGgVIgDgZQgCgMAAgNQAAgcAGgcQAHgcALgYQAMgXARgNQARgOAVgBQAUABAOAKQAPAKAKASQAKASAFAXQADAMACANIABAbQAAAbgGAbQgGAbgMAWQgLAVgSANQgSANgWABQgTgBgPgJgAABhkQgEAKgEASQgEASgDAVQgEAWgBAVIgCAsIABAbQAAAMACAJQACAIADAEQADAEADAAQAFAAAFgLQAFgLAFgTQAEgSAEgXQAEgXACgWQACgYAAgUIgBgWQgBgKgCgIQgBgIgDgFQgEgFgEAAQgHAAgFALg");
	this.shape_1.setTransform(43,6.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AABCzQgGgBgIgFQgHgFgGgLQgHgMgFgUIAAgBIgCgLIgBgOQAAgQADgUIAEgpIAEgmQACgSAAgOIAAgJIgBgHQgBgEgCgCQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAIgBgBIgBgBIAAgDIAAgCQAAgNALgFQALgGAQABQAMAAAIAGQAJAFAEANIAAACIAAADIgCAcIgFArIgFAxQgCAaAAAXIABAYQABAMADAJQACAKADAGQAFAHAGAAIABABIAAABIgIAFIgLAGQgGADgGAAIgKgBgAgQh9QgLgJgEgOIgBgHQABgLAGgGQAIgHALAAQANAAALAJQALAJADANIABAEIAAAEQAAALgHAGQgGAHgMAAQgNAAgLgJg");
	this.shape_2.setTransform(28.3,2.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAWCsQgJgDgMgGQgKgIgKgPQgLgPgGgaIgBgCIgBgJIAAgLIACgjIADgpIgOAAQgJAAgEgDQgFgFgBgGIgBgDIAAgEQAAgIAEgGQAEgHAHAAIAKgBIAOgBIACgdIABgZIgBgPIgBgMIgEgIQgCgDgCAAIgBgBIgBgBIAAgEIgBgEQABgMAGgFQAFgHAJgCQAHgCAHAAQAOAAAIAEQAJADAEAGQAEAGABAIIABADIAAAEIgCAhIgGA0IAIgBIAJgBQAIAAAFAFQAFAGACAIIABAEIAAAGQAAAJgDAIQgDAGgFABIgDgDQgBgCgCgCQgBgDgFAAQgJABgGAMQgGALgDASQgDATAAAWIABAeQACAOADANQADARAGAKQAGAKAIAAIABABIABABQAAACgDADQgDADgHAAIgOgCg");
	this.shape_3.setTransform(15.7,3.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ABYCMQgJgCgLgHQgLgHgLgPQgKgQgGgaIgDgIIAAgJQgIAYgIAUQgKAVgJANQgLANgMAAQgWAAgPgKQgPgKgKgSQgKgSgGgXIgDgYQgCgNAAgNQAAgbAGgbQAHgbALgXQAMgWARgNQASgOAWAAQATAAASALQASAMAMAbIAJgeIAGgRIABgCIADgBQAVABAKAIQAKAIACAMIAAAAIgCAOIgFAfIgGAoIgGAtQgCAXAAAVIABAWIADATQADANAFAHQAGAHAIACIABAAIABABIAAAAQAAADgDACQgCADgHAAIgCABIgNgCgAgNhjQgKALgHASQgHATgFAWQgFAWgCAWQgDAXAAAUIABAVIADARQABAHACADQADAEADAAQAGAAAIgLQAIgLAIgRIAPglIAOgmIAMghIAGgUIADgQQgDgJgFgJQgFgIgGgGQgGgGgIAAQgLAAgKAMg");
	this.shape_4.setTransform(-3.2,6.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgYCAQgVgNgOgWQgNgWgHgbIgEgXIgBgYQAAgbAGgYQAFgZAMgTQALgUAQgLQAQgLAVAAQAVAAAQAJQAQAJAJAOQAJAOADAQIACAKIABAIQAAANgFAHQgEAGgHAAQgGgBgDgEQgDgFgCgJQgCgJgBgLIgEgUQgCgJgDgGQgDgFgHAAQgMAAgJALQgHALgGATQgHATgDAWQgDAXgBAWQABAOABAOQABANADAMQAFAVAJANQAJANAOAAQAMAAAJgIQAKgIAHgLQAHgMAEgNQADgNABgJIAAgEIgBgDIABgBQADABABADQADADABAEIABAHIAAAJQAAAMgDAOQgDAOgIANQgGANgMAIQgLAIgQAAQgcAAgWgNg");
	this.shape_5.setTransform(-25.2,6.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpCEQgPgKgJgQQgJgRgGgVIgDgZQgCgMAAgNQAAgcAGgcQAHgcALgYQAMgXARgNQARgOAVgBQAUABAOAKQAPAKAKASQAKASAFAXQADAMACANIABAbQAAAbgGAbQgGAbgMAWQgLAVgSANQgSANgWABQgTgBgPgJgAABhkQgEAKgEASQgEASgDAVQgEAWgCAVIgBAsIABAbQAAAMACAJQACAIADAEQADAEADAAQAFAAAFgLQAFgLAFgTQAEgSAEgXQAEgXACgWQACgYAAgUIgBgWQgBgKgCgIQgBgIgDgFQgEgFgEAAQgHAAgFALg");
	this.shape_6.setTransform(-44.7,6.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApDPQgXgGgWgIIgpgOQgRgHgHAAQgJAAgEAEQgEADgBAEIgCAHIAAABIgBABQgKgCgIgIQgHgIgDgMIgBgEIAAgFQAAgJAFgHQAEgHALgDIAFgBIAFAAIADAAIADAAQgLgJgJgLQgJgLgDgNIgDgPIAAgSQAAgYAEgaIAJg2IAJgzQADgXABgRIgBgIIgBgHQgBgFgDgEQgCgDgFgBIgCgBIgBgCIAAgEQAAgJAFgGQAGgGAHgEIAPgFIAMgCQAJAAAIACQAIACAHAGQAGAGADALIAAADIAAADQAAAMgEAWIgJA0QgGAdgEAhQgEAgAAAfQAAAPABAOQACAPADANQAFAZANASQANASAUAJIAaAHQAMADAJAAQAMAAAHgFQAGgFABgMIgBgFIgBgFIAAgBIABgBIACAAQAGABAHAEQAIAFAGAIQAHAIACAKQACAJAAAGQAAAQgKAGQgKAHgQAAQgTgBgYgGg");
	this.shape_7.setTransform(-63.9,2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,-37.4,158.2,74.9);


(lib.jakartabtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.Jakarta();
	this.instance.parent = this;
	this.instance.setTransform(-192.9,-128.4,0.241,0.241);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:0.2,scaleY:0.2,x:-160,y:-106},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-192.9,-128.4,386,256.9);


(lib.instagram_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.instagram();
	this.instance.parent = this;
	this.instance.setTransform(-34.1,-34.1,1.846,1.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-34.1,68.3,68.3);


(lib.INs = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.text = new cjs.Text("IN's Boba", "bold 47px 'Calibri'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 59;
	this.text.parent = this;
	this.text.setTransform(0,-28.6);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-94,-30.6,188,61.4);


(lib.icon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bobaiconpng();
	this.instance.parent = this;
	this.instance.setTransform(-55.1,-88.2,0.306,0.306);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(11).to({rotation:30,x:-3.6,y:-103.9},0).wait(12).to({rotation:-15,x:-76,y:-70.8},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-55.1,-88.2,110.3,176.5);


(lib.facebook_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.facebook();
	this.instance.parent = this;
	this.instance.setTransform(-34.1,-34.1,1.846,1.846);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-34.1,-34.1,68.3,68.3);


(lib.enter = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgmBsQgVgGgNgOQgOgOgHgWQgGgVAAgdQAAgaAGgWQAIgWAOgPQANgPATgJQAUgHAXgBQAaAAASAIQASAHAMAOQALANAGATQAFASABAVIAAAKQgBAKgEAEQgFAGgIAAIh8AAQAAANADAKQAEALAHAHQAGAIALAEQAKADAOAAQAPAAAMgBIAUgFIANgFQAGgCADAAIAEABIADADIABAGIAAAJIAAAJIgBAFIgBAFIgDADIgIAFIgRAFIgXAFQgOABgPAAQgbABgUgIgAgPhGQgJAFgFAHQgGAGgDAKQgCAKgBALIBWAAQAAgZgKgOQgKgOgWABQgLAAgHADg");
	this.shape.setTransform(152.8,5.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag5BqQgPgGgIgNQgJgMgEgPQgEgQAAgXIAAh8IABgFIAFgDIAJgBIAOAAIAOAAIAJABIAFADQAAABAAAAQAAABABAAQAAABAAAAQAAABAAABIAAByQAAAQACAIQACAJAFAGQAEAGAGAEQAHADAJAAQAJAAAMgIQALgIAMgPIAAiHQAAgBAAgBQAAAAAAgBQABAAAAgBQAAAAABgBIAEgDIAJgBIAOAAIAOAAIAIABIAFADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIAADLIAAAFIgFACIgHACIgMABIgMgBIgIgCIgDgCQgBgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgXQgRASgRAJQgRAJgSAAQgWABgOgIg");
	this.shape_1.setTransform(128.4,5.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA3BxIgJgCIgFgCIgBgFIAAhzQAAgQgCgIQgCgIgEgHQgFgFgGgEQgHgDgIAAQgKgBgMAJQgLAHgMAQIAACHIgBAFIgFACIgJACIgOABIgOgBIgJgCQgDgBgBgBQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjLIABgFIAEgDIAIgBIAMAAIAMAAIAIABIADADQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIAAAXQAQgSASgKQARgIATgBQAVABAOAGQAOAHAJAMQAJAMAEAPQAEAQAAAWIAAB+QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABIgEACIgJACIgOABIgOgBg");
	this.shape_2.setTransform(103.4,4.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgNCcIgJgCQgDgBgBgBQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjLQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCADgBIAJgCIANAAIAOAAIAJACQADABACACIABAEIAADLIgBAFIgFACIgJACIgOABIgNgBgAgZhlQgHgHAAgRQAAgRAHgHQAHgGASAAQAUAAAGAGQAHAGAAARQAAARgHAIQgHAGgTAAQgTAAgGgGg");
	this.shape_3.setTransform(84.9,0.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgBCIQgNgEgIgKQgIgJgEgNQgEgPAAgSIAAhoIgZAAQgEAAgCgGQgCgFAAgNIAAgKIACgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAAAgBQABAAABAAQAAAAABAAIAYAAIAAguIABgDQACgCADgBQADgCAGgBIAOAAIANAAIAJADQADABABACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAAuIAsAAIAEACIADADIACAIIAAAKQAAANgCAFQgCAGgFAAIgsAAIAABfQAAARAFAIQAFAJAOgBIAIAAIAHgCIAEgBIAEgCIADACIACADIABAGIAAALIgBAPQgBAFgCACIgGAFIgKACIgLACIgNABQgRAAgMgEg");
	this.shape_4.setTransform(70.6,2.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AA3BxIgJgCIgFgCIgBgFIAAhzQAAgQgCgIQgCgIgEgHQgFgFgGgEQgHgDgIAAQgKgBgMAJQgLAHgMAQIAACHIgBAFIgFACIgJACIgOABIgOgBIgJgCQgDgBgBgBQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjLIABgFIAEgDIAIgBIAMAAIAMAAIAIABIADADQABABAAAAQAAABAAAAQABABAAAAQAAABAAABIAAAXQAQgSASgKQARgIATgBQAVABAOAGQAOAHAJAMQAJAMAEAPQAEAQAAAWIAAB+QAAABAAAAQAAABgBAAQAAABAAAAQAAABgBABIgEACIgJACIgOABIgOgBg");
	this.shape_5.setTransform(50.8,4.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgxBrQgUgHgOgOQgNgPgGgVQgHgVAAgbQAAgaAHgVQAHgVAOgQQAOgQAVgIQAVgJAbAAQAcAAAUAIQAUAHAOAPQANAOAGAWQAHAUAAAcQAAAZgHAVQgHAWgOAPQgOARgVAIQgVAIgcAAQgbABgUgJgAgVhAQgKAFgGAIQgGAKgDANQgDAMAAAQQAAAOACANQADANAFAKQAGAJAKAFQAJAFAOAAQANAAAJgFQAKgEAGgJQAGgJADgNQADgNAAgQQAAgOgCgNQgDgMgFgKQgGgKgJgFQgKgFgPAAQgLAAgKAFg");
	this.shape_6.setTransform(25.5,5.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AggCQQgYgKgRgSQgSgTgIgcQgKgcAAglQAAglAKgeQALgdASgTQARgVAagKQAZgLAeAAQAMAAAMADQALACAKADQAJADAJAFQAHAEADAEIAFAEIACAGIABAIIAAAKIAAAMIgCAHIgDAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABAAAAQgEAAgGgFIgNgJQgJgEgLgFQgMgEgQAAQgRABgNAHQgOAHgKANQgKAOgFATQgEATAAAWQAAAbAFATQAFATAKAMQAKANAOAGQAOAGARAAQAQAAALgEQANgEAIgEIANgJQAGgDADAAIAEABIACAEIABAHIABAOIgBAJIAAAIIgCAEIgEAFIgKAHIgSAHQgKAEgNADQgOACgQAAQgdABgZgKg");
	this.shape_7.setTransform(0.8,1.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgxBrQgUgHgOgOQgNgPgGgVQgHgVAAgbQAAgaAHgVQAHgVAOgQQAOgQAVgIQAVgJAbAAQAcAAAUAIQAUAHAOAPQANAOAGAWQAHAUAAAcQAAAZgHAVQgHAWgOAPQgOARgVAIQgVAIgcAAQgbABgUgJgAgVhAQgKAFgGAIQgGAKgDANQgDAMAAAQQAAAOACANQADANAFAKQAGAJAKAFQAJAFAOAAQANAAAJgFQAKgEAGgJQAGgJADgNQADgNAAgQQAAgOgCgNQgDgMgFgKQgGgKgJgFQgKgFgPAAQgLAAgKAFg");
	this.shape_8.setTransform(-35.3,5.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBCIQgNgEgIgKQgIgJgEgNQgEgPAAgSIAAhoIgZAAQgEAAgCgGQgCgFAAgNIAAgKIACgIQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAABAAIAYAAIAAguIABgDQACgCADgBQADgCAGgBIAOAAIANAAIAJADQADABABACQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAIAAAuIAsAAIAEACIADADIACAIIAAAKQAAANgCAFQgCAGgFAAIgsAAIAABfQAAARAFAIQAFAJAOgBIAIAAIAHgCIAEgBIAEgCIADACIACADIABAGIAAALIgBAPQgBAFgCACIgGAFIgKACIgLACIgNABQgRAAgMgEg");
	this.shape_9.setTransform(-56,2.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AAyCgIgKgCQgEgBgCgBIgDgGIhEhrIAABsIgBAFIgEACIgJACIgOABIgOgBIgJgCQgDgBgCgBQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAktQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQACgDADgBIAJgCIAOAAIAOAAIAJACQADABABADIABADIAACzIA8hQIAFgFIAFgEIAKgBIAPAAIAOAAIAJABIAFADQAAABABAAQAAABAAAAQAAABAAAAQAAABAAABIgBAHIgGAJIg7BCIBFBrIAEAJIABAGIgBAEIgFACIgJACIgOABIgQgBg");
	this.shape_10.setTransform(-84.6,0.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgbBsQgSgHgNgPQgMgOgGgVQgHgUAAgbQAAgeAIgWQAIgXANgOQAOgPATgHQATgHAVAAIASABIARAFIAOAGQAGADACADIAEAEIACAFIAAAHIABAJQAAAOgDAFQgCAFgEAAQgEAAgEgDIgKgHIgOgHQgJgDgLAAQgWAAgMARQgMARAAAhQAAAQADANQADANAGAIQAGAJAIAEQAJAEAMAAQALAAAJgDIAPgIIALgIQAEgEADAAIAEABQAAABAAAAQABAAAAABQAAAAAAABQABABAAABIABAHIABANIgBAKIgBAHIgBAEIgEAFQgCACgHAEQgHAEgIADQgJADgKABQgKACgKAAQgXAAgSgHg");
	this.shape_11.setTransform(-106.6,5.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgNCcIgJgCQgDgBgBgBQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAjLQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQABgCADgBIAJgCIANAAIAOAAIAJACQADABACACIABAEIAADLIgBAFIgFACIgJACIgOABIgNgBgAgZhlQgHgHAAgRQAAgRAHgHQAHgGASAAQAUAAAGAGQAHAGAAARQAAARgHAIQgHAGgTAAQgTAAgGgGg");
	this.shape_12.setTransform(-122.4,0.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgNCgIgJgCQgDgBgBgBQgBgBAAgBQAAAAAAgBQgBAAAAgBQAAAAAAgBIAAktQAAAAAAgBQAAAAABgBQAAAAAAgBQAAAAABAAQABgDADgBIAJgCIANAAIAOAAIAJACQADABACADIABADIAAEtIgBAFIgFACIgJACIgOABIgNgBg");
	this.shape_13.setTransform(-134,0.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgfCQQgZgKgSgSQgQgTgKgcQgJgcAAglQAAglAKgeQAKgdASgTQATgVAZgKQAagLAdAAQAMAAALADQAMACAKADQAKADAHAFQAIAEAEAEIADAEIACAGIABAIIABAKIgBAMIgBAHIgDAFQAAAAgBABQAAAAgBAAQAAAAgBAAQAAABgBAAQgDAAgGgFIgNgJQgIgEgMgFQgMgEgPAAQgTABgMAHQgOAHgJANQgLAOgEATQgFATgBAWQAAAbAGATQAFATAKAMQAKANANAGQAOAGASAAQAQAAAMgEQAMgEAIgEIAOgJQAFgDADAAIADABIADAEIABAHIABAOIgBAJIgBAIIgCAEIgDAFIgKAHIgRAHQgLAEgOADQgNACgPAAQgeABgYgKg");
	this.shape_14.setTransform(-151.8,1.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-166.7,-30.6,333.4,61.4);


(lib.Buy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAgBCIgHgBIgDgDIgCgDIgUhJIAAgBIgBABIgSBJIgBAEIgEACIgHABIgLABIgLgBIgHgBIgDgDIgBgDIghhtIgCgHIAAgDIABgDIADgCIAFgBIAJAAIAIAAIAGABIADACIAAAEIAZBYIAAACIABgCIAWhYIABgEIADgCIAFgBIAHAAIAIABIAGABIACABIABADIAZBZIAAACIAAgCIAXhYIACgEIADgCIAEgBIAJAAIAIAAIAFABQAAABABAAQAAAAABAAQAAAAAAABQAAAAAAAAIABADIAAADIgBAHIghBtIgCAEIgDACIgHABIgKABIgLgBg");
	this.shape.setTransform(40.2,3.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgdBAQgMgEgIgJQgIgIgEgNQgDgNAAgQQAAgOAEgNQAEgNAIgJQAJgKAMgFQANgFAPAAQARAAAMAFQAMAEAIAJQAIAIADANQAEANAAAQQAAAOgEANQgEANgIAJQgJAKgMAFQgNAFgQAAQgQAAgMgFgAgMgmQgGADgEAGQgDAFgCAIQgCAHAAAJQAAAJACAIQABAHADAGQAEAFAFADQAGADAIAAQAHAAAGgCQAGgDAEgGQADgFACgHQACgIAAgKIgBgPQgCgIgDgGQgEgFgFgDQgGgDgJAAQgGAAgGACg");
	this.shape_1.setTransform(22.3,3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhABZIgFgBIgCgCIgBgDIAAieQAAgGAEgDQAEgEAFAAIATAAIAJABIAGADIAGAGIAFAJIAhBAIAGALIAGALIAFAMIAFAKIAAgUIAAgTIAAhSIAAgDIADgCIAFgBIAIAAIAIAAIAFABIACACIABADIAACeIgBAFIgDAEQgBABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAIgGABIgPAAIgIgBQgEgBgDgDQgDgCgCgFIgGgLIgrhSIgIgPIgHgRIgBAAIABAUIAAAUIAABbIAAADIgDACIgFABIgIAAIgIAAg");
	this.shape_2.setTransform(5.5,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgYBaIgEgBQgBgBAAAAQgBAAAAAAQAAgBAAAAQAAAAAAgBIABgEIAQgpIgDgCIgCgEIgqhvIgCgHQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQACgCAEAAIAKgBIAKAAIAFABIADADIACAFIAbBRIABAAIAahTQAAgBABAAQAAgBAAgBQAAAAABgBQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQABAAAAAAIALgBIAKABQAEAAACACQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIgBAGIgoB2IgPArQgBAEgGABQgEACgLAAIgJgBg");
	this.shape_3.setTransform(-16.7,5.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgiBAQgIgFgFgHQgGgHgCgJQgCgKAAgNIAAhKIABgDIACgBIAGgBIAIgBIAIABIAGABIACABIABADIAABEIABAPQACAEACAEQADAEAEACQADACAGAAQAFAAAHgFQAGgFAIgJIAAhQIABgDIADgBIAFgBIAIgBIAIABIAGABIACABIABADIAAB5IgBACIgCACIgEABIgHABIgIgBIgEgBIgDgCIAAgCIAAgOQgKAKgLAGQgJAFgLAAQgNAAgJgDg");
	this.shape_4.setTransform(-30.9,3.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag0BZQgFAAgDgDQgDgDAAgGIAAiZQAAgGADgDQADgDAFAAIAsAAQAPAAAMADQAKADAJAFQAHAGAEAJQAFAIAAALQAAAHgDAFQgBAHgDAEQgDAEgFAEIgKAGQAHABAGAEQAHACAFAGQAFAFACAHQADAHAAAKQAAAJgCAIQgDAHgFAGQgFAGgGAEQgGAEgIADQgIADgIACIgTABgAgcA9IAaAAQAGAAAGgCQAFgBAEgDQADgEACgEQADgFAAgFQAAgHgDgEQgCgFgDgDQgFgDgFgDQgHgBgIgBIgWAAgAgcgPIAUAAQAIAAADgBQAFgCADgEQADgDACgEIACgJQAAgFgCgFQgCgEgDgCQgEgEgFgBQgDgBgJgBIgSAAg");
	this.shape_5.setTransform(-45.7,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#00CC00").s().p("ApJCkIAAlHISTAAIAAFHg");
	this.shape_6.setTransform(-0.5,0.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59.1,-19,118.3,38.2);


(lib.brownsugar_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brownsugar();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.523,0.523);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.brownsugar_1, new cjs.Rectangle(0,0,261.4,391.6), null);


(lib.backbtnpink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AANBNIAAgGIAFgBIABgDIgBgDIgCgEIgHgKIgMgRIgFgGIgDgCIgFgBIgGAAIAAAaIABANQABADADACQACACAFABIAAAGIgqAAIAAgGQAFgBACgBIADgEIACgGIAAgJIAAhZIAAgOIgBgHQAAgBgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBIgDgCIgIgCIAAgGIAagBIAGAAIAABdIAEAAIAGgBIAFgDIAJgIIAHgHIAEgGIAAgEQAAgDgBgCQgDgCgEgBIAAgFIAuAAIAAAFQgFABgFAEIgMAJIgYAWIAeApQAGAHAEADQAFADAFABIAAAGg");
	this.shape.setTransform(11,-0.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgcAoQgLgOAAgZQAAgPAGgNQAGgLALgIQALgGANAAIAQABIAPADIAAAXIgNAAQgCgIgDgDQgDgEgEgCQgDgBgFAAQgHAAgGAEQgFAFgEAKQgDAKAAAOIABAQQABAHADAGQADAFAGADQAFADAHAAQAHAAAGgCQAHgEAHgHIAGAHIgKAJQgEAEgFACIgJADIgLABQgTAAgKgNg");
	this.shape_1.setTransform(0.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AggAyQgHgDgDgGQgDgFgBgIQAAgQAQgIQAPgIAegBIAAgIQAAgLgBgGQgCgHgFgDQgFgCgGAAQgJgBgFAFQgFAEgDAKIgOAAIAAgPIASgIIANgDIANgCQALAAAGADQAHAEADAGQADAIAAAOIAAAkIAAAMIABAGIABAEIAEADIAGACIAAAFIgdAAIAAgPIgBgBQgJAKgIAEQgIAEgJAAQgJAAgFgDgAgQAIQgLAGAAALQAAAGACAEQADADAEACIAJABQAHAAAFgDQAGgEAEgFQACgGAAgGIAAgOQgUAAgLAFg");
	this.shape_2.setTransform(-10.1,1.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag1BJIAAgFQAGgCADgCQACgCABgEIAAgMIAAhcIAAgKIgCgGIgDgDIgHgCIAAgFIA6AAQARAAAKADQAKAEAFAHQAFAHAAALQAAAKgDAHQgEAHgGAEQgFAFgKADIAAABQAPAEAIAJQAHAJAAANQAAAPgGAJQgHAJgMAEQgLAEgRAAgAgVA/IASABQANAAAIgEQAIgDADgHQAEgHAAgLQAAgKgEgHQgEgHgIgDQgIgDgNAAIgRAAgAgVg+IAAA3IATAAQAQAAAIgHQAJgIAAgPQAAgIgDgFQgCgFgEgDQgEgCgGgCIgMgBIgLAAIgKABg");
	this.shape_3.setTransform(-22.3,-0.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("Ak7ifIJ3AAIAAE/Ip3AAg");
	this.shape_4.setTransform(-5.3,0);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#993399").s().p("Ak6CfIAAk9IJ2AAIAAE9g");
	this.shape_5.setTransform(-5.3,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.8,-16.9,74.8,33.9);


(lib.abouttext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgOARQgEgEAAgMQAAgMAEgEQAEgFAKAAQALAAAEAEQAEAEAAAMQAAANgEAEQgEAEgLAAQgKAAgEgEg");
	this.shape.setTransform(308.3,128.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_1.setTransform(294.3,122.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgEIgNgOIAAAVIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIALADAQQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgMgEgHQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_2.setTransform(276.8,118.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_3.setTransform(256.8,122.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgEIgNgOIAAAVIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIALADAQQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgMgEgHQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_4.setTransform(237.9,118.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgnBXIgFgBIgCgBIAAgCIAAiiIAAgDIACgCIAFAAIAGAAIAHAAIAEAAIACACIABADIAAAXIAMgQIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADABIABACIABACIAAAEIAAAHIAAAGIAAAEIgCADIgCAAIgDAAIgFgCIgGgBIgHgBIgJABIgJAHIgJALIgMARIAABqIgBACIgBABIgFABIgHABIgIgBg");
	this.shape_5.setTransform(213.9,122);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgJgDgNQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAIAEAHQAFAFAGAEQAHAEAIgBQALABALgJQALgHAMgQIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAACIgDACIgEABIgGABIgHgBIgEgBIgCgCIgBgCIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_6.setTransform(196.7,122.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_7.setTransform(177.3,122.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgdB3IgEgCIgCgDIABgEIAWg5IgDgCIgCgEIg6iaIgBgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQACgCADAAIAJAAIAIAAIAFABIACACIACAEIAuCBIAAAAIAtiCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAJAAIAIAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAGIg6CgIgVA8QgBADgEACQgEABgKAAIgHAAg");
	this.shape_8.setTransform(150.8,125.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_9.setTransform(132.7,122.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgYCYIgGgCIgDgCIgBgCIgBgEIAAgEIAAgFIABgEIACgCIACgBIAEABIAHAAQAGAAAFgCQAEgBACgEQACgFABgGQACgHAAgNIAAioIAAgDIADgCIAEgBIAIAAIAHAAIAFABIACACIABADIAACoQAAATgDALQgDALgGAHQgFAIgJAEQgIAEgNAAIgKgBgAADh4QgDgEAAgKQAAgKADgEQAEgEALAAQAKAAAEAEQAEADAAALQAAAKgEAEQgEAEgLAAQgKAAgEgEg");
	this.shape_10.setTransform(116.9,122);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAwBXIgFgBIgCgBIgBgCIAAhfQAAgNgCgJQgCgJgEgGQgFgGgGgDQgHgDgIAAQgLAAgKAHQgMAIgMAQIAABxIgBACIgCABIgFABIgHABIgHgBIgFgBIgCgBIgBgCIAAiiIABgDIACgCIAEAAIAGAAIAHAAIAEAAIADACIAAADIAAAVQAOgPAOgHQANgHANAAQAQAAAMAFQAKAGAIAJQAGAJAEAMQACANAAASIAABiIgBACIgCABIgFABIgGABIgIgBg");
	this.shape_11.setTransform(104.4,122);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_12.setTransform(85.4,122.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_13.setTransform(57.7,118.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AAwBXIgEgBIgDgBIAAgCIAAhfQAAgNgDgJQgCgJgEgGQgFgGgGgDQgGgDgJAAQgLAAgLAHQgLAIgMAQIAABxIgBACIgCABIgEABIgIABIgIgBIgEgBIgCgBIgBgCIAAiiIAAgDIADgCIAEAAIAHAAIAHAAIADAAIACACIABADIAAAVQAOgPANgHQAOgHANAAQAQAAAMAFQAKAGAIAJQAGAJAEAMQACANAAASIAABiIAAACIgDABIgFABIgHABIgHgBg");
	this.shape_14.setTransform(38.9,122);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_15.setTransform(19.7,122.1);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AAwBXIgFgBIgCgBIAAgCIAAhfQAAgNgDgJQgCgJgEgGQgFgGgGgDQgGgDgJAAQgLAAgLAHQgLAIgMAQIAABxIgBACIgCABIgEABIgIABIgIgBIgEgBIgCgBIgBgCIAAiiIAAgDIADgCIAEAAIAHAAIAHAAIADAAIACACIABADIAAAVQAOgPANgHQAOgHANAAQAQAAAMAFQAKAGAIAJQAGAJAEAMQACANAAASIAABiIAAACIgDABIgFABIgHABIgHgBg");
	this.shape_16.setTransform(-6.6,122);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_17.setTransform(-26.1,122.1);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgDgEAAgKQAAgLADgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_18.setTransform(-40.1,118.7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCAAgDIgBgJIAAgGIABgDIABgCIACgBQACAAAEACIAKAGIAOAFQAHACALAAQAGAAAGgBQAGgCAFgDQAEgDADgFQACgFAAgHQABgHgEgEIgJgJIgOgGIgNgGIgQgHQgHgDgFgFQgHgGgDgIQgDgHgBgLQAAgKAFgJQADgIAIgHQAHgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgHAAgGABQgFACgFADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQADAHABALQAAAMgFAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgJAAgHgBg");
	this.shape_19.setTransform(-51.6,122.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgCgDIgBgJIABgGIABgDIACgCIACgBQABAAAEACIAKAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAFgDACgFQACgFABgHQgBgHgDgEIgKgJIgMgGIgPgGIgOgHQgIgDgGgFQgFgGgEgIQgEgHABgLQAAgKADgJQAEgIAHgHQAIgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgEADQgEADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAPAHQAIACAGAGQAGAFAEAIQACAHAAALQAAAMgEAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_20.setTransform(-66,122.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_21.setTransform(-82.6,122.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AhCB4IgFgBIgCgCIgBgDIAAjiIABgCIACgCIAEgBIAGAAIAHAAIAEABIACACIABACIAAAWIAOgNQAHgGAHgDQAHgEAHgCQAGgBAIgBQASABANAGQAMAHAIAMQAIAMADAPQAEAQAAASQAAAWgFAPQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgBIgMgFQgGgDgGgFIgMgLIAABRIgBADIgCACIgEABIgIAAIgHAAgAgHhdIgLAGIgMAKIgOAPIAABAQAMAPAMAHQALAJALgBQALABAIgGQAIgFAFgKQAFgJADgKQACgLAAgMQAAgMgCgLQgCgMgEgJQgFgJgIgFQgIgGgLAAQgFAAgGABg");
	this.shape_22.setTransform(-100.1,125.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgnBXIgEgBIgDgBIgBgCIAAiiIABgDIADgCIADAAIAHAAIAHAAIAEAAIACACIAAADIAAAXIANgQIAKgJQAGgEAEgBIALgBIAGAAIAGABIAFACIAEABIACACIABACIAAAEIAAAHIAAAGIgBAEIgBADIgDAAIgEAAIgEgCIgGgBIgHgBIgJABIgJAHIgJALIgLARIAABqIgBACIgDABIgEABIgIABIgHgBg");
	this.shape_23.setTransform(-124.1,122);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgJgDgNQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAIAEAHQAFAFAGAEQAHAEAIgBQALABALgJQALgHAMgQIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAACIgDACIgEABIgGABIgHgBIgEgBIgCgCIgBgCIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_24.setTransform(-141.3,122.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_25.setTransform(-160.7,122.1);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_26.setTransform(-183.1,118.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_27.setTransform(-196.6,122.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_28.setTransform(-215,122.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgRB+IgFgBIgCgBIgBgCIAAiOIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgRQAAgQADgMQADgNAGgIQAHgHAJgEQAKgEAOAAIALABIAKADIAEACIACADIABAFIAAAFIAAAGIgBADIgBABIgCABIgDgBIgEgCIgHgBIgIgBQgIAAgEACQgFACgCAFQgDAFgCAHIgBARIAAASIAkAAIACABIADACIABAEIAAAFQAAAHgBADQgCADgDAAIgkAAIAACOIgBACIgCABIgEABIgHABIgHgBg");
	this.shape_29.setTransform(-229.3,118.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_30.setTransform(-248,118.1);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_31.setTransform(-256.5,118.1);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgGAAgAgNhXQgEgEgBgKQABgLAEgEQADgDAKAAQALAAADADQAEAEABAKQgBALgEADQgDAEgLAAQgKAAgDgDg");
	this.shape_32.setTransform(-265,118.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_33.setTransform(-282.5,122.1);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgJgDgNQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAIAEAHQAFAFAGAEQAHAEAIgBQALABALgJQALgHAMgQIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAACIgDACIgEABIgGABIgHgBIgEgBIgCgCIgBgCIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_34.setTransform(-313.8,122.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_35.setTransform(-333.2,122.1);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgdB3IgFgCIgBgDIAAgEIAXg5IgDgCIgCgEIg6iaIgCgGQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABgCAEAAIAIAAIAJAAIAFABIADACIABAEIAtCBIABAAIAtiCQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAJAAIAIAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQABABAAAAIgBAGIg7CgIgUA8QgBADgFACQgFABgIAAIgIAAg");
	this.shape_36.setTransform(-351.4,125.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_37.setTransform(-377.3,122.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AhCB4IgFgBIgCgCIgBgDIAAjiIABgCIACgCIAEgBIAGAAIAHAAIAEABIACACIABACIAAAWIAOgNQAHgGAHgDQAHgEAHgCQAGgBAIgBQASABANAGQAMAHAIAMQAIAMADAPQAEAQAAASQAAAWgFAPQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgBIgMgFQgGgDgGgFIgMgLIAABRIgBADIgCACIgEABIgIAAIgHAAgAgHhdIgLAGIgMAKIgOAPIAABAQAMAPAMAHQALAJALgBQALABAIgGQAIgFAFgKQAFgJADgKQACgLAAgMQAAgMgCgLQgCgMgEgJQgFgJgIgFQgIgGgLAAQgFAAgGABg");
	this.shape_38.setTransform(-395.7,125.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_39.setTransform(-415.6,122.1);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQABgOgDgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgKAAgLAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAALAGQALAFAHAJQAHAJADANQADALAAASIAABjIgBACIgCACIgEABIgHAAIgIAAg");
	this.shape_40.setTransform(-435,118.1);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_41.setTransform(-462.4,122.1);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_42.setTransform(-484.8,122.1);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AgZAuIgDgBIAAgCIAAgCIAYgxIAAgXIABgIQABgCACgCIAFgCIAIgBIAHABIAGACQACACABACIABAIIgBALIgCAIIgDAJIgFAHIgYAlIgCACIgDACIgEABIgFABIgGgBg");
	this.shape_43.setTransform(467.2,84.1);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_44.setTransform(454.3,74.9);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AgRB/IgFgBIgDgCIAAgDIAAiNIgXAAQgDAAgBgDQgCgDAAgGIABgGIABgEIABgCIADgBIAXAAIAAgQQAAgSADgLQADgNAGgIQAHgIAJgDQAKgEAOAAIALACIAKACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBACIgCAAIgDAAIgEgCIgHgDIgJAAQgGAAgFACQgFACgCAFQgDAFgCAHIgBASIAAARIAkAAIADABIACACIABAEIAAAGQAAAGgBADQgCADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_45.setTransform(440,70.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgHAAgAgNhXQgFgEAAgKQAAgLAFgEQADgDAKAAQALAAAEADQADAEAAAKQAAALgDADQgEAEgLAAQgKAAgDgDg");
	this.shape_46.setTransform(429.6,71.5);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_47.setTransform(421.1,70.9);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgRB/IgFgBIgCgCIgBgDIAAiNIgXAAQgDAAgBgDQgCgDAAgGIABgGIABgEIACgCIACgBIAXAAIAAgQQAAgSADgLQADgNAGgIQAHgIAJgDQAKgEAOAAIAMACIAJACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBACIgCAAIgDAAIgFgCIgGgDIgIAAQgIAAgEACQgFACgCAFQgEAFgBAHIgBASIAAARIAkAAIACABIADACIABAEIAAAGQAAAGgBADQgCADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_48.setTransform(403.3,70.9);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_49.setTransform(392.9,70.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_50.setTransform(379.4,74.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQAAgOgDgJQgCgHgEgHQgFgGgGgDQgGgDgJAAQgLAAgLAIQgLAIgMAOIAAByIgBACIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAIAAIAEABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIAAACIgDACIgFABIgHAAIgHAAg");
	this.shape_51.setTransform(360.6,70.9);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCgBgDIAAgJIAAgGIABgDIABgCIACgBQADAAADACIAKAGIAOAFQAHACALAAQAGAAAGgBQAHgCAEgDQAEgDADgFQACgFAAgHQAAgHgDgEIgKgJIgMgGIgOgGIgQgHQgHgDgFgFQgHgGgDgIQgEgHAAgLQAAgKAFgJQADgIAHgHQAIgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgLgEQgHgCgIAAQgHAAgGABQgGACgEADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQAEAHAAALQAAAMgFAKQgFAKgIAHQgIAGgMAEQgMADgNAAQgJAAgHgBg");
	this.shape_52.setTransform(343.6,74.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AglB1QgNgDgJgGQgJgGgEgIQgEgIAAgJIACgMQABgGADgFIAHgJIAKgKQgIgEgEgGQgFgIAAgIQAAgKAFgIQAEgJAHgHQgGgHgDgHQgDgJAAgMQAAgOAEgLQAFgLAJgHQAIgJAMgDQALgFAOABIANABIAMABIAxAAQADABACADQABADAAAGQAAAGgBADQgCACgDABIgXAAQAGAGADAIQACAIAAAIQAAAOgFALQgEALgIAIQgJAHgLAEQgMAEgNAAQgKAAgJgDQgJgCgFgEQgDADgCAFQgCAEAAAEQAAAGAFAFQAGAEALAAIAoABQANABAKADQAKADAIAGQAHAFAEAIQAEAIAAALQAAALgFAKQgEAKgKAIQgKAHgOAFQgPAFgUAAQgTAAgPgEgAglA0IgGAHIgDAIIgBAHQAAAMAMAFQAMAHAVAAQANgBAKgCQAIgCAGgFQAFgEADgGQACgFAAgGQABgLgJgFQgJgHgOAAIgqgBIgJAJgAgThdQgGACgEAFQgEAFgDAHQgCAHAAAGQAAARAKAJQAJAJAQAAQAIAAAGgCQAGgEAFgFQAEgEACgHQADgGAAgIQgBgQgIgJQgKgKgPAAQgJAAgHAEg");
	this.shape_53.setTransform(319.3,78);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AAwBYIgEgBIgDgCIgBgDIAAhdQAAgPgCgIQgCgJgEgGQgFgGgGgDQgHgDgIgBQgLAAgLAIQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgDIAAihIAAgCIADgCIAEgBIAHAAIAGAAIAFABIABACIABACIAAAWQAOgQANgHQAOgHANAAQAQAAALAGQAMAFAGAJQAHAJADANQADAMAAARIAABiIAAADIgDACIgEABIgIAAIgHAAg");
	this.shape_54.setTransform(301,74.8);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_55.setTransform(281.5,74.9);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgGAAg");
	this.shape_56.setTransform(267.5,70.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_57.setTransform(250.7,70.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_58.setTransform(237,74.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgWBTQgNgFgKgLQgJgMgEgQQgFgQAAgVQAAgXAGgRQAFgSALgLQAKgLAOgFQAOgFAOAAQAIAAAIABIANAEIALAFIAHAGIADADIABADIABAEIAAAFQAAAHgBADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgDgDIgJgHIgOgGQgHgDgLAAQgUAAgLAQQgMARAAAeQAAAQADAMQADAMAGAIQAFAIAJAEQAHADALAAQAKAAAIgDIANgHIAKgHQAEgDACAAIADAAIABADIABAEIAAAGIAAAGIgBAEIgBACIgCAEIgIAFIgMAGIgPAFQgJABgIAAQgRAAgNgGg");
	this.shape_59.setTransform(221.1,74.9);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgGAAgAgNhXQgEgEgBgKQABgLAEgEQADgDAKAAQALAAADADQAEAEABAKQgBALgEADQgDAEgLAAQgKAAgDgDg");
	this.shape_60.setTransform(208.8,71.5);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AhCB4IgFgBIgCgCIgBgCIAAjiIABgDIACgCIAEgBIAGAAIAHAAIAEABIACACIABADIAAAVIAOgNQAHgGAHgDQAHgEAHgCQAGgCAIABQASAAANAGQAMAHAIAMQAIAMADAQQAEAQAAARQAAAVgFARQgEAQgJANQgJALgNAHQgNAGgRAAQgHAAgGgCIgMgEQgGgDgGgFIgMgLIAABSIgBACIgCACIgEABIgIABIgHgBgAgHhcIgLAFIgMAKIgOAOIAABAQAMAPAMAJQALAHALABQALgBAIgFQAIgGAFgIQAFgJADgLQACgLAAgLQAAgNgCgMQgCgLgEgJQgFgJgIgGQgIgFgLAAQgFAAgGACg");
	this.shape_61.setTransform(195.4,78);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgdB3IgEgCIgCgDIAAgEIAXg5IgDgCIgCgEIg6iaIgBgGQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQACgCADAAIAIAAIAJAAIAFABIACACIACAEIAuCBIAAAAIAtiCQAAgBABgBQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAJAAIAIAAQABAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABABAAIgBAGIg7CgIgVA8QgBADgEACQgEABgJAAIgIAAg");
	this.shape_62.setTransform(176.8,78.1);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AACBrQgJgEgFgHQgGgGgCgLQgDgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIACgCIACgBIAXAAIAAgnIABgCIACgCIAFgBIAGgBIAIABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQAAARAGAJQAFAIANAAIAGAAIAHgCIAEgCIADgBIACABIABABIABAEIAAAFIgBAJIgCAEIgEADIgGACIgIABIgJABQgMAAgJgDg");
	this.shape_63.setTransform(161.9,72.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_64.setTransform(138.4,74.9);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQgBgOgCgJQgCgHgEgHQgEgGgHgDQgGgDgJAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQALAFAHAJQAGAJAEANQACALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_65.setTransform(119.6,70.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AACBrQgJgEgGgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIAAACIAAAnIAqAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgqAAIAABZQABARAFAJQAEAIANAAIAIAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_66.setTransform(103.4,72.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_67.setTransform(79.9,74.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AAABXIgIgBIgFgBIgFgCIgCgDIg2iZIgBgEIgBgCIAAgCIABgCIACgCIAFgBIAGAAIAJAAIAFABIACACIABADIAtCFIABACIABgCIAtiFIACgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAAACIgBACIAAACIgBACIg3CZIgCAEIgEACIgGABIgJAAg");
	this.shape_68.setTransform(62.4,74.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_69.setTransform(44.6,74.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQABgOgDgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgKAAgLAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAHAJQAHAJADANQADALAAASIAABjIgBACIgCACIgEABIgHAAIgIAAg");
	this.shape_70.setTransform(26.7,70.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AABBrQgHgEgGgHQgGgGgCgLQgDgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIAAgFIACgEIACgCIACgBIAXAAIAAgnIABgCIACgCIAEgBIAHgBIAIABIAEABIACACIABACIAAAnIApAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAHAAIAHgCIAEgCIADgBIACABIABABIABAEIAAAFIgBAJIgBAEIgFADIgGACIgIABIgJABQgNAAgJgDg");
	this.shape_71.setTransform(2.1,72.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_72.setTransform(-13.6,74.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AAwBYIgEgBIgDgCIgBgDIAAhdQAAgPgCgIQgCgJgEgGQgEgGgHgDQgGgDgJgBQgKAAgMAIQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgHAAIgFgBIgCgCIgBgDIAAihIAAgCIADgCIAEgBIAHAAIAGAAIAFABIABACIABACIAAAWQAOgQANgHQAOgHANAAQAQAAALAGQAMAFAGAJQAHAJADANQADAMAAARIAABiIAAADIgDACIgEABIgIAAIgHAAg");
	this.shape_73.setTransform(-33,74.8);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCAAgDIgBgJIAAgGIABgDIABgCIACgBQACAAAEACIAKAGIAOAFQAHACALAAQAGAAAGgBQAGgCAFgDQAEgDADgFQACgFAAgHQABgHgEgEIgJgJIgOgGIgNgGIgQgHQgHgDgFgFQgHgGgDgIQgDgHgBgLQAAgKAFgJQADgIAIgHQAHgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgHAAgGABQgFACgFADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQADAHABALQAAAMgFAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgJAAgHgBg");
	this.shape_74.setTransform(-58.3,74.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_75.setTransform(-74.8,74.9);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_76.setTransform(-93.7,74.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_77.setTransform(-113.6,71.1);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_78.setTransform(-140.6,74.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgGIgNgMIAAATIgBADIgCACIgEABIgHAAIgGAAIgEgBIgCgCIgBgDIAAjwIABgDIACgBIAFgBIAHAAIAIAAIAEABIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEAQAAASQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRAAQgHABgGgCgAgHgXQgGACgFAEIgMAJQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgMgEgIQgFgIgIgGQgIgFgLgBQgFABgGABg");
	this.shape_79.setTransform(-158.1,71.1);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_80.setTransform(-178,74.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgGIgNgMIAAATIgBADIgCACIgEABIgHAAIgGAAIgEgBIgCgCIgBgDIAAjwIABgDIACgBIAFgBIAHAAIAIAAIAEABIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEAQAAASQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRAAQgHABgGgCgAgHgXQgGACgFAEIgMAJQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgMgEgIQgFgIgIgGQgIgFgLgBQgFABgGABg");
	this.shape_81.setTransform(-197,71.1);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgnBYIgEgBIgDgCIgBgDIAAihIABgCIADgCIADgBIAHAAIAHAAIAEABIACACIAAACIAAAYIANgRIAKgJQAGgEAEgBIALgBIAGAAIAFABIAGACIAEACIACABIABACIAAAEIAAAGIAAAHIgBAFIgBACIgDABIgDgBIgFgBIgGgDIgHAAIgJACIgJAFIgJALIgLARIAABqIgCADIgCACIgEABIgHAAIgIAAg");
	this.shape_82.setTransform(-220.9,74.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AgmBTQgLgGgHgJQgHgKgDgMQgDgMAAgSIAAhhIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAABdQAAAPACAIQACAJAEAFQAFAHAGADQAHADAIABQALgBALgHQALgJAMgPIAAhwIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAAChIAAADIgDABIgEABIgGAAIgHAAIgEgBIgCgBIgBgDIAAgWQgOAQgNAHQgOAHgNAAQgQAAgLgFg");
	this.shape_83.setTransform(-238.2,75);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_84.setTransform(-257.6,74.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_85.setTransform(-284.9,74.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_86.setTransform(-298.3,70.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgEgEAAgKQAAgLAEgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_87.setTransform(-306.8,71.5);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQABgOgDgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgKAAgLAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAALAGQALAFAHAJQAHAJADANQADALAAASIAABjIgBACIgCACIgEABIgHAAIgIAAg");
	this.shape_88.setTransform(-320.7,70.9);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AA7B2IgGgBIgEgDIgCgEIgwiwIAAAAIgtCwIgCAEIgDADIgHABIgJAAIgKAAIgHgBIgDgDIgDgEIg9jXIgCgHQAAAAABAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAJgBIAJABIAFABQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAAAIABADIA1DDIAyjCIACgDIACgCIAFgBIAIgBIAIABIAFABIACACIABADIA2DCIA0jCIABgDIACgCIAFgBIAJgBIAJABQAAAAABAAQABAAAAAAQABABAAAAQABAAAAABQAAAAABAAQAAAAAAABQAAAAAAABQABAAAAABIgCAHIg9DWIgDAEIgDADIgHABIgJAAIgKAAg");
	this.shape_89.setTransform(-346.9,71.8);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgOARQgEgEAAgNQAAgLAEgFQAEgEAKAAQALAAAEAEQAEAFAAALQAAAMgEAFQgEAEgLAAQgKAAgEgEg");
	this.shape_90.setTransform(-376.4,81.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_91.setTransform(-390.3,74.9);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgnBYIgEgBIgDgCIgBgDIAAihIABgCIADgCIADgBIAHAAIAHAAIAEABIACACIAAACIAAAYIANgRIAKgJQAGgEAEgBIALgBIAGAAIAGABIAFACIAEACIACABIABACIAAAEIAAAGIAAAHIgBAFIgBACIgDABIgEgBIgEgBIgGgDIgHAAQgFAAgEACIgJAFIgJALIgLARIAABqIgBADIgDACIgEABIgIAAIgHAAg");
	this.shape_92.setTransform(-404.9,74.8);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_93.setTransform(-422.1,74.9);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AACBrQgJgEgFgHQgGgGgDgLQgCgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIACgCIACgBIAXAAIAAgnIABgCIACgCIAFgBIAGgBIAIABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQAAARAGAJQAFAIANAAIAGAAIAGgCIAFgCIADgBIACABIABABIABAEIAAAFIgBAJIgCAEIgEADIgGACIgIABIgJABQgMAAgJgDg");
	this.shape_94.setTransform(-438.4,72.8);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCgBgDIAAgJIAAgGIABgDIABgCIACgBQADAAADACIAKAGIAOAFQAHACALAAQAGAAAGgBQAHgCAEgDQAEgDADgFQACgFAAgHQAAgHgDgEIgKgJIgMgGIgOgGIgQgHQgHgDgFgFQgHgGgDgIQgEgHAAgLQAAgKAFgJQADgIAHgHQAIgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgLgEQgHgCgIAAQgHAAgGABQgGACgEADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQAEAHAAALQAAAMgFAKQgFAKgIAHQgIAGgMAEQgMADgNAAQgJAAgHgBg");
	this.shape_95.setTransform(-451.5,74.9);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AglAMQgDAAgCgCQgBgDAAgHQAAgGABgDQACgCADAAIBLAAIACAAIACACIACAEIAAAFQAAAHgCADQgBACgDAAg");
	this.shape_96.setTransform(-464.4,74.3);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAwBYIgEgBIgDgCIgBgDIAAhdQAAgPgCgIQgCgJgEgGQgFgGgGgDQgHgDgIgBQgLAAgLAIQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgDIAAihIAAgCIADgCIAEgBIAHAAIAGAAIAFABIABACIABACIAAAWQAOgQANgHQAOgHANAAQAQAAALAGQAMAFAGAJQAHAJADANQADAMAAARIAABiIAAADIgDACIgEABIgIAAIgHAAg");
	this.shape_97.setTransform(-479.7,74.8);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgGAAgAgNhXQgFgEAAgKQAAgLAFgEQADgDAKAAQALAAADADQAEAEAAAKQAAALgEADQgDAEgLAAQgKAAgDgDg");
	this.shape_98.setTransform(-493.7,71.5);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_99.setTransform(476.1,27.7);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_100.setTransform(458.6,23.9);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_101.setTransform(438.7,27.7);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_102.setTransform(419.7,23.9);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQAAgOgCgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_103.setTransform(391.5,23.7);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgCgDIgBgJIABgGIABgDIACgCIACgBQABAAAEACIAKAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAFgDACgFQACgFABgHQgBgHgDgEIgKgJIgMgGIgPgGIgOgHQgIgDgGgFQgFgGgEgIQgEgHABgLQAAgKADgJQAEgIAHgHQAIgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIABACIAAADIAAAFIAAAGIAAADIgCADIgCAAIgFgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgEADQgEADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAPAHQAIACAGAGQAGAFAEAIQACAHABALQgBAMgEAKQgEAKgJAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_104.setTransform(374.5,27.7);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_105.setTransform(358.1,27.7);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgnBXIgFgBIgBgBIgBgCIAAiiIAAgDIACgCIAFgBIAGAAIAHAAIAEABIACACIABADIAAAXIAMgPIAKgKQAFgDAGgCIAKgBIAFAAIAGABIAHABIADACIABADIABABIAAAEIAAAHIAAAGIAAAEIgCADIgCAAIgDAAIgFgCIgGgBIgHgBIgJABIgJAHIgJAKIgMASIAABqIgBACIgBABIgFABIgHABIgIgBg");
	this.shape_106.setTransform(343.5,27.6);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgRB+IgFgBIgCgBIgBgCIAAiOIgXAAQgDAAgBgDQgCgDAAgGIABgGIABgEIACgCIACgBIAXAAIAAgRQAAgQADgNQADgMAGgIQAHgHAJgEQAKgEAOAAIAMABIAJADIAEACIACADIABAFIAAAFIAAAGIgBADIgBABIgCABIgDgBIgFgCIgGgBIgIgBQgIAAgEACQgFACgCAFQgEAFgBAHIgBARIAAASIAkAAIACABIADACIABAEIAAAGQAAAGgBADQgCADgDAAIgkAAIAACOIgBACIgCABIgEABIgHABIgHgBg");
	this.shape_107.setTransform(330.9,23.7);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_108.setTransform(307.1,27.7);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AArB+IgFgBIgEgCIgCgCIhEhaIAABaIgBACIgCACIgEABIgIAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAIAAIAEABIACACIABACIAACSIA9hCIADgDIAEgCIAFgBIAHAAIAIAAIAFABIADABIAAADIgBAEIgEAFIg6A6IBCBWIADAFIABAEIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_109.setTransform(290.6,23.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_110.setTransform(271.8,27.7);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("ABiBXIgEgBIgDgBIAAgCIAAhiQAAgKgCgJQgCgIgEgHQgEgGgGgDQgGgEgJABQgKAAgKAIQgLAIgMAPIAABxIgBACIgCABIgFABIgHABIgGgBIgFgBIgCgBIgBgCIAAhiQAAgKgCgJQgCgIgEgHQgEgGgGgDQgGgEgIABQgLAAgKAIQgLAIgMAPIAABxIgBACIgCABIgEABIgIABIgHgBIgFgBIgCgBIgBgCIAAiiIABgDIACgCIAEgBIAHAAIAHAAIAEABIACACIAAADIAAAVQAOgPANgHQANgHANAAQAKAAAIACQAIADAGAEQAHAEADAGQAEAFADAIQAIgJAIgGQAHgGAHgEQAGgEAHgCIANgBQAPAAALAFQALAGAGAJQAHAJADAMQADANAAANIAABnIgBACIgCABIgFABIgHABIgIgBg");
	this.shape_111.setTransform(248.7,27.6);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_112.setTransform(215.8,27.7);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AACBrQgIgEgHgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIABgFIAAgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAFgBIAHgBIAHABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQABARAFAJQAEAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_113.setTransform(199.6,25.6);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_114.setTransform(175.1,23.9);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAwBXIgFgBIgCgBIgBgCIAAhfQABgNgDgJQgCgIgEgHQgFgGgGgDQgHgEgIABQgKAAgLAIQgMAIgMAPIAABxIgBACIgCABIgFABIgHABIgHgBIgFgBIgCgBIgBgCIAAiiIABgDIACgCIAEgBIAGAAIAHAAIAFABIACACIAAADIAAAVQAOgPAOgHQANgHANAAQAQAAALAFQALAGAIAJQAGAJADAMQADANAAASIAABiIgBACIgCABIgEABIgHABIgIgBg");
	this.shape_115.setTransform(156.3,27.6);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_116.setTransform(137.1,27.7);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AgnBXIgEgBIgDgBIgBgCIAAiiIABgDIADgCIADgBIAHAAIAHAAIAEABIACACIAAADIAAAXIANgPIAKgKQAGgDAEgCIALgBIAGAAIAGABIAFABIAEACIACADIABABIAAAEIAAAHIAAAGIgBAEIgBADIgDAAIgEAAIgEgCIgGgBIgHgBIgJABIgJAHIgJAKIgLASIAABqIgBACIgDABIgEABIgHABIgIgBg");
	this.shape_117.setTransform(123.4,27.6);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_118.setTransform(106.7,23.9);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_119.setTransform(78.8,27.7);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_120.setTransform(61.2,27.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AACBrQgIgEgHgHQgFgGgDgLQgCgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgnIABgCIACgCIAFgBIAHgBIAHABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQAAARAGAJQAEAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIgBAJIgCAEIgEADIgGACIgJABIgIABQgNAAgIgDg");
	this.shape_121.setTransform(45.6,25.6);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_122.setTransform(22.1,27.7);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_123.setTransform(8.7,23.7);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_124.setTransform(-4.8,23.9);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_125.setTransform(-24.2,23.9);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgmBTQgLgGgHgJQgHgJgDgNQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAIAEAHQAFAFAGAEQAHAEAIgBQALAAALgIQALgIAMgPIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAADIgDABIgEABIgGABIgHgBIgEgBIgCgBIgBgDIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgFg");
	this.shape_126.setTransform(-44.1,27.8);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_127.setTransform(-63,23.9);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AABBrQgHgEgGgHQgGgGgCgLQgDgKgBgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIADgCIACgBIAWAAIAAgnIACgCIACgCIAEgBIAHgBIAIABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAGAIAMAAIAHAAIAHgCIAEgCIADgBIACABIABABIABAEIAAAFIgBAJIgBAEIgFADIgGACIgIABIgJABQgNAAgJgDg");
	this.shape_128.setTransform(-88,25.6);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgBgCgBgDIgBgJIAAgGIABgDIABgCIACgBQADAAAEACIAJAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAEgDADgFQADgFgBgHQABgHgEgEIgJgJIgOgGIgNgGIgQgHQgHgDgFgFQgHgGgDgIQgDgHgBgLQAAgKAFgJQADgIAIgHQAHgHALgEQALgDAOAAIANABIALACIAJAEIAGADIADADIAAACIABADIABAFIgBAGIgBADIgCADIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgHAAgGABQgGACgEADQgDADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIAMAHIAQAGIAPAHQAHACAGAGQAGAFADAIQADAHAAALQABAMgFAKQgEAKgJAHQgJAGgLAEQgMADgNAAQgJAAgHgBg");
	this.shape_129.setTransform(-101.2,27.7);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("AgnBXIgFgBIgBgBIgBgCIAAiiIAAgDIACgCIAFgBIAGAAIAHAAIAEABIACACIABADIAAAXIAMgPIAKgKQAFgDAGgCIAKgBIAFAAIAGABIAHABIADACIABADIABABIAAAEIAAAHIAAAGIAAAEIgCADIgCAAIgEAAIgEgCIgGgBIgHgBIgJABIgJAHIgJAKIgMASIAABqIgBACIgBABIgFABIgIABIgHgBg");
	this.shape_130.setTransform(-113.8,27.6);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgGAAgAgNhXQgEgEgBgKQABgLAEgEQADgDAKAAQALAAADADQAEAEABAKQgBALgEADQgDAEgLAAQgKAAgDgDg");
	this.shape_131.setTransform(-125.5,24.3);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgSB+IgEgBIgDgBIAAgCIAAiOIgXAAQgDAAgCgDQgBgDAAgGIAAgGIABgEIACgCIADgBIAXAAIAAgRQAAgQADgNQADgMAHgIQAGgHAJgEQAKgEANAAIAMABIAKADIAEACIACADIABAFIAAAFIAAAGIgBADIgBABIgCABIgDgBIgEgCIgHgBIgJgBQgGAAgFACQgFACgDAFQgDAFgBAHIgBARIAAASIAkAAIADABIABACIACAEIAAAGQAAAGgCADQgBADgDAAIgkAAIAACOIgBACIgCABIgEABIgHABIgIgBg");
	this.shape_132.setTransform(-134.9,23.7);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCgBgDIgBgJIABgGIABgDIABgCIADgBQACAAADACIAKAGIAOAFQAHACALAAQAGAAAGgBQAGgCAFgDQAEgDADgFQADgFAAgHQAAgHgEgEIgKgJIgMgGIgPgGIgPgHQgHgDgFgFQgGgGgEgIQgEgHAAgLQABgKAEgJQADgIAHgHQAIgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgCADIgDAAIgEgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgFADQgDADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAQAHQAHACAGAGQAFAFAEAIQAEAHAAALQgBAMgEAKQgFAKgIAHQgIAGgMAEQgMADgNAAQgJAAgHgBg");
	this.shape_133.setTransform(-156.7,27.7);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AgEAvIgEgBIgCgCIAAgCIgFhTIABgCIADgCIAFgBIAGgBIAHABIAFABIADACIABACIgEBTIgBACIgCACIgDABIgGABIgEgBg");
	this.shape_134.setTransform(-168,15.8);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_135.setTransform(-182.2,23.9);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_136.setTransform(-195.7,23.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AgnBXIgEgBIgCgBIgBgCIAAiiIAAgDIADgCIADgBIAHAAIAHAAIAEABIACACIABADIAAAXIAMgPIAKgKQAFgDAFgCIALgBIAFAAIAHABIAFABIAEACIABADIABABIAAAEIAAAHIAAAGIAAAEIgBADIgDAAIgEAAIgEgCIgGgBIgHgBIgJABIgJAHIgJAKIgLASIAABqIgBACIgCABIgFABIgIABIgHgBg");
	this.shape_137.setTransform(-205.3,27.6);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_138.setTransform(-222.6,27.7);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_139.setTransform(-245.6,27.7);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_140.setTransform(-276.4,27.7);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQAAgOgCgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJADANQADALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_141.setTransform(-295.2,23.7);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAGAIAMAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_142.setTransform(-311.4,25.6);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_143.setTransform(-334.9,27.7);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("ABiBXIgEgBIgDgBIAAgCIAAhiQAAgKgCgJQgCgIgEgHQgEgGgGgDQgGgEgJABQgKAAgKAIQgLAIgMAPIAABxIgBACIgCABIgFABIgHABIgGgBIgFgBIgCgBIgBgCIAAhiQAAgKgCgJQgCgIgEgHQgEgGgGgDQgGgEgIABQgLAAgKAIQgLAIgMAPIAABxIgBACIgCABIgEABIgIABIgHgBIgFgBIgCgBIgBgCIAAiiIABgDIACgCIAEgBIAHAAIAHAAIAEABIACACIAAADIAAAVQAOgPANgHQANgHANAAQAKAAAIACQAIADAGAEQAHAEADAGQAEAFADAIQAIgJAIgGQAHgGAHgEQAGgEAHgCIANgBQAPAAALAFQALAGAGAJQAHAJADAMQADANAAANIAABnIgBACIgCABIgFABIgHABIgIgBg");
	this.shape_144.setTransform(-358.8,27.6);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_145.setTransform(-383,27.7);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AgWBTQgOgFgIgLQgKgMgFgQQgEgQAAgVQAAgXAFgRQAHgSAKgLQAKgLAOgFQAOgFAOAAQAJAAAHABIANAEIALAFIAHAGIADADIACADIAAAEIABAFQAAAHgCADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgCAAgEgDIgJgHIgNgGQgHgDgLAAQgUAAgMAQQgLARAAAeQAAAQADAMQADAMAFAIQAHAIAIAEQAHADALAAQAKAAAIgDIAOgHIAJgHQAEgDACAAIADAAIABADIABAEIAAAGIAAAGIAAAEIgCACIgDAEIgIAFIgMAGIgPAFQgHABgJAAQgQAAgOgGg");
	this.shape_146.setTransform(-398.9,27.7);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_147.setTransform(-416.2,27.7);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgCgAgHgXQgGABgFAEIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgLgEgIQgFgKgIgFQgIgGgLABQgFAAgGABg");
	this.shape_148.setTransform(-434.6,23.9);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_149.setTransform(-462.4,27.7);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQAAAAgBgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_150.setTransform(-484.8,27.7);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#FFFFFF").s().p("AgZAuIgDAAIAAgDIAAgCIAYgwIAAgYIABgIQABgDACgBIAFgCIAIgBIAHABIAGACQACABABADIABAIIgBAKIgCAJIgDAIIgFAIIgYAlIgCACIgDACIgEABIgFABIgGgBg");
	this.shape_151.setTransform(455.3,-10.3);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCAAgDIgBgJIAAgGIABgDIABgCIACgBQACAAAEACIAKAGIAOAFQAHACALAAQAGAAAGgBQAGgCAFgDQAEgDADgFQACgFAAgHQABgHgEgEIgJgJIgOgGIgNgGIgQgHQgHgDgFgFQgHgGgDgIQgDgHgBgLQAAgKAFgJQADgIAIgHQAHgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgHAAgGABQgFACgFADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQADAHABALQAAAMgFAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgJAAgHgBg");
	this.shape_152.setTransform(444.3,-19.5);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#FFFFFF").s().p("AgnBYIgFgBIgCgCIAAgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAYIAMgRIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADACIABABIABACIAAAEIAAAGIAAAHIAAAFIgCACIgCAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgMAQIAABqIgBADIgBACIgFABIgHAAIgIAAg");
	this.shape_153.setTransform(431.7,-19.6);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_154.setTransform(414.5,-19.5);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#FFFFFF").s().p("AAABXIgIgBIgFgBIgFgCIgCgDIg3iZIAAgEIgBgCIAAgCIABgCIACgCIAFgBIAGAAIAJAAIAFABIACACIABADIAtCFIABACIABgCIAtiFIACgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAAACIgBACIAAACIgBACIg3CZIgCAEIgEACIgGABIgJAAg");
	this.shape_155.setTransform(396.4,-19.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_156.setTransform(378.6,-19.5);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgGAAg");
	this.shape_157.setTransform(366.1,-23.5);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#FFFFFF").s().p("AgSB/IgEgBIgDgCIAAgDIAAiNIgXAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIADgCIACgBIAXAAIAAgQQAAgRADgMQADgNAHgIQAGgIAJgDQAKgEANAAIANACIAJACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBABIgCABIgDgBIgFgBIgGgCIgJgBQgGAAgFACQgFACgDAFQgDAEgBAIIgBASIAAARIAkAAIACABIACACIACAEIAAAFQAAAHgCADQgBADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgIAAg");
	this.shape_158.setTransform(356.7,-23.5);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_159.setTransform(332.8,-19.5);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgFIgNgOIAAAUIgBADIgCACIgEABIgHAAIgGAAIgEgBIgCgCIgBgDIAAjwIABgDIACgBIAFgBIAHAAIAIAAIAEABIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEARAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRAAQgHABgGgCgAgHgXQgGACgFADIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgMgEgIQgFgIgIgGQgIgFgLgBQgFABgGABg");
	this.shape_160.setTransform(315.3,-23.3);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_161.setTransform(295.3,-19.5);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgFIgNgOIAAAUIgBADIgCACIgEABIgHAAIgGAAIgEgBIgCgCIgBgDIAAjwIABgDIACgBIAFgBIAHAAIAIAAIAEABIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEARAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRAAQgHABgGgCgAgHgXQgGACgFADIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgMgEgIQgFgIgIgGQgIgFgLgBQgFABgGABg");
	this.shape_162.setTransform(276.4,-23.3);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#FFFFFF").s().p("AACBrQgIgEgHgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIABgFIAAgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAFgBIAHgBIAHABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQABARAFAJQAEAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_163.setTransform(251.3,-21.6);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#FFFFFF").s().p("AAwBYIgEgBIgDgCIgBgDIAAhdQAAgPgCgIQgCgIgEgHQgFgGgGgDQgHgDgIgBQgLABgLAHQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgDIAAihIAAgDIADgBIAEgBIAHAAIAGAAIAFABIABABIABADIAAAWQAOgQANgHQAOgHANAAQAQAAALAFQAMAGAGAJQAHAJADAMQADANAAARIAABiIAAADIgDACIgEABIgIAAIgHAAg");
	this.shape_164.setTransform(235.8,-19.6);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_165.setTransform(216.8,-19.5);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#FFFFFF").s().p("AgnBYIgFgBIgBgCIgBgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAYIAMgRIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADACIABABIABACIAAAEIAAAGIAAAHIAAAFIgCACIgCAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgMAQIAABqIgBADIgBACIgFABIgHAAIgIAAg");
	this.shape_166.setTransform(202.2,-19.6);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_167.setTransform(185.5,-19.5);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#FFFFFF").s().p("AgSB/IgEgBIgDgCIAAgDIAAiNIgXAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAXAAIAAgQQAAgRADgMQADgNAHgIQAGgIAJgDQAKgEANAAIAMACIAKACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBABIgCABIgDgBIgFgBIgGgCIgJgBQgGAAgFACQgFACgDAFQgDAEgBAIIgBASIAAARIAkAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgIAAg");
	this.shape_168.setTransform(171.2,-23.5);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#FFFFFF").s().p("AgRB/IgFgBIgCgCIgBgDIAAiNIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIACgCIACgBIAXAAIAAgQQAAgRADgMQADgNAGgIQAHgIAJgDQAKgEAOAAIAMACIAJACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBABIgCABIgDgBIgFgBIgGgCIgIgBQgIAAgEACQgFACgCAFQgEAEgBAIIgBASIAAARIAkAAIACABIADACIABAEIAAAFQAAAHgBADQgCADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_169.setTransform(159.9,-23.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgEgEAAgKQAAgLAEgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_170.setTransform(149.5,-22.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_171.setTransform(135,-23.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_172.setTransform(108.2,-19.5);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAFgBIAHgBIAHABIADABIADACIAAACIAAAnIAqAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgqAAIAABZQABARAEAJQAFAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_173.setTransform(92.6,-21.6);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_174.setTransform(77.3,-19.5);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_175.setTransform(59.7,-19.5);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#FFFFFF").s().p("AgnBYIgFgBIgBgCIgBgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAYIAMgRIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADACIABABIABACIAAAEIAAAGIAAAHIAAAFIgCACIgCAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgMAQIAABqIgBADIgBACIgFABIgHAAIgIAAg");
	this.shape_176.setTransform(45.2,-19.6);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#FFFFFF").s().p("AgWBTQgOgFgJgLQgIgMgFgQQgFgQAAgVQAAgXAGgRQAFgSALgLQAKgLAOgFQANgFAQAAQAHAAAIABIANAEIALAFIAHAGIADADIABADIABAEIAAAFQAAAHgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgEgDIgJgHIgMgGQgIgDgKAAQgVAAgMAQQgLARAAAeQAAAQADAMQADAMAFAIQAGAIAJAEQAHADALAAQALAAAHgDIANgHIAKgHQAEgDACAAIACAAIACADIABAEIAAAGIAAAGIgBAEIgBACIgDAEIgIAFIgLAGIgQAFQgHABgJAAQgRAAgNgGg");
	this.shape_177.setTransform(30.1,-19.5);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_178.setTransform(3.9,-19.5);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#FFFFFF").s().p("AABBrQgHgEgGgHQgGgGgCgLQgDgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIAAgFIACgEIACgCIACgBIAXAAIAAgnIABgCIACgCIAEgBIAHgBIAIABIAEABIACACIABACIAAAnIApAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAHAAIAHgCIAEgCIADgBIACABIABABIABAEIAAAFIgBAJIgBAEIgFADIgGACIgIABIgJABQgNAAgJgDg");
	this.shape_179.setTransform(-12.3,-21.6);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_180.setTransform(-35.8,-19.5);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#FFFFFF").s().p("AgnBYIgEgBIgDgCIgBgDIAAihIABgDIADgBIADgBIAHAAIAHAAIAEABIACABIAAADIAAAYIANgRIAKgJQAGgEAEgBIALgBIAGAAIAFABIAGACIAEACIACABIABACIAAAEIAAAGIAAAHIgBAFIgBACIgDAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgLAQIAABqIgCADIgCACIgEABIgHAAIgIAAg");
	this.shape_181.setTransform(-50.4,-19.6);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgKgDgMQgDgMAAgSIAAhhIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAABdQAAAPACAIQACAJAEAFQAFAHAGADQAHADAIABQALAAALgJQALgIAMgPIAAhwIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAAChIAAACIgDACIgEABIgGAAIgHAAIgEgBIgCgCIgBgCIAAgWQgOAQgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_182.setTransform(-67.6,-19.4);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_183.setTransform(-81.5,-23.5);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgDgEAAgKQAAgLADgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_184.setTransform(-90,-22.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_185.setTransform(-103.7,-19.5);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#FFFFFF").s().p("AgRB/IgFgBIgDgCIAAgDIAAiNIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgQQAAgRADgMQADgNAGgIQAHgIAJgDQAKgEAOAAIALACIAKACIAEACIACADIABAEIAAAGIAAAFIgBAEIgBABIgCABIgDgBIgEgBIgHgCIgJgBQgGAAgFACQgFACgCAFQgDAEgCAIIgBASIAAARIAkAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgkAAIAACNIgBADIgCACIgEABIgHAAIgHAAg");
	this.shape_186.setTransform(-117.1,-23.5);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_187.setTransform(-141.8,-23.3);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#FFFFFF").s().p("AAwBYIgEgBIgDgCIgBgDIAAhdQAAgPgCgIQgCgIgEgHQgFgGgGgDQgHgDgIgBQgLABgLAHQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgDIAAihIAAgDIADgBIAEgBIAHAAIAGAAIAFABIABABIABADIAAAWQAOgQANgHQAOgHANAAQAQAAALAFQAMAGAGAJQAHAJADAMQADANAAARIAABiIAAADIgDACIgEABIgIAAIgHAAg");
	this.shape_188.setTransform(-160.7,-19.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_189.setTransform(-179.8,-19.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgCgDIgBgJIABgGIABgDIACgCIACgBQABAAAEACIAKAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAFgDACgFQACgFABgHQgBgHgDgEIgKgJIgMgGIgPgGIgOgHQgIgDgGgFQgFgGgEgIQgEgHABgLQAAgKADgJQAEgIAHgHQAIgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgEADQgEADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAPAHQAIACAGAGQAGAFAEAIQACAHAAALQAAAMgEAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_190.setTransform(-203.7,-19.5);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_191.setTransform(-215.2,-23.5);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_192.setTransform(-228.8,-19.5);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgHAAgAgNhXQgFgEAAgKQAAgLAFgEQADgDAKAAQALAAAEADQADAEAAAKQAAALgDADQgEAEgLAAQgKAAgDgDg");
	this.shape_193.setTransform(-241.4,-22.9);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#FFFFFF").s().p("AgnBYIgFgBIgBgCIgBgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAYIAMgRIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADACIABABIABACIAAAEIAAAGIAAAHIAAAFIgCACIgCAAIgEAAIgEgBIgGgCIgHgBIgJACIgJAFIgJAMIgMAQIAABqIgBADIgBACIgFABIgIAAIgHAAg");
	this.shape_194.setTransform(-251,-19.6);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#FFFFFF").s().p("AACBrQgJgEgGgHQgFgGgDgLQgCgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgnIABgCIACgCIAFgBIAGgBIAIABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQAAARAGAJQAEAIAOAAIAGAAIAGgCIAFgCIADgBIACABIABABIABAEIAAAFIgBAJIgCAEIgEADIgGACIgJABIgIABQgNAAgIgDg");
	this.shape_195.setTransform(-265,-21.6);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgCgDIgBgJIABgGIABgDIACgCIACgBQABAAAEACIAKAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAFgDACgFQACgFABgHQgBgHgDgEIgKgJIgMgGIgPgGIgOgHQgIgDgGgFQgFgGgEgIQgEgHABgLQAAgKADgJQAEgIAHgHQAIgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgEADQgEADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAPAHQAIACAGAGQAFAFAFAIQACAHAAALQAAAMgEAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_196.setTransform(-286.5,-19.5);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgBgCgBgDIgBgJIAAgGIABgDIABgCIACgBQADAAAEACIAJAGIANAFQAJACAJAAQAHAAAGgBQAGgCAFgDQAEgDADgFQADgFgBgHQABgHgEgEIgJgJIgOgGIgNgGIgQgHQgHgDgFgFQgHgGgDgIQgDgHgBgLQAAgKAFgJQADgIAIgHQAHgHALgEQALgDAOAAIANABIALACIAJAEIAGADIADADIAAACIABADIABAFIgBAGIgBADIgCADIgCAAIgEgCIgIgEIgMgEQgGgCgIAAQgHAAgGABQgGACgEADQgDADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIAMAHIAQAGIAPAHQAHACAGAGQAGAFADAIQADAHAAALQABAMgFAKQgEAKgJAHQgJAGgLAEQgMADgNAAQgJAAgHgBg");
	this.shape_197.setTransform(-301,-19.5);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_198.setTransform(-317.4,-19.5);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#FFFFFF").s().p("AgGB+IgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAADxIgBACIgCACIgFABIgHAAIgGAAg");
	this.shape_199.setTransform(-330.8,-23.5);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_200.setTransform(-341.6,-21.6);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#FFFFFF").s().p("AAwBYIgFgBIgCgCIAAgDIAAhdQAAgPgDgIQgCgIgEgHQgFgGgGgDQgGgDgJgBQgKABgMAHQgLAJgMAPIAABwIgBADIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgDIAAihIAAgDIADgBIAEgBIAHAAIAHAAIADABIACABIABADIAAAWQAOgQANgHQAOgHANAAQAQAAAMAFQAKAGAIAJQAGAJAEAMQACANAAARIAABiIAAADIgDACIgFABIgHAAIgHAAg");
	this.shape_201.setTransform(-357.1,-19.6);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgKgDgMQgDgMAAgSIAAhhIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAABdQAAAPACAIQACAJAEAFQAFAHAGADQAHADAIABQALAAALgJQALgIAMgPIAAhwIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAAChIAAACIgDACIgEABIgGAAIgHAAIgEgBIgCgCIgBgCIAAgWQgOAQgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_202.setTransform(-376.6,-19.4);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_203.setTransform(-396,-19.5);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#FFFFFF").s().p("AgWBTQgNgFgKgLQgJgMgEgQQgFgQAAgVQAAgXAGgRQAFgSALgLQAKgLAOgFQAOgFAOAAQAIAAAIABIANAEIALAFIAHAGIADADIABADIABAEIAAAFQAAAHgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgDgDIgJgHIgOgGQgHgDgLAAQgUAAgLAQQgMARAAAeQAAAQADAMQADAMAGAIQAFAIAJAEQAHADALAAQAKAAAIgDIANgHIAKgHQAEgDACAAIACAAIACADIABAEIAAAGIAAAGIgBAEIgBACIgCAEIgIAFIgMAGIgPAFQgJABgIAAQgRAAgNgGg");
	this.shape_204.setTransform(-413.4,-19.5);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#FFFFFF").s().p("AArB+IgFgBIgEgCIgCgCIhEhaIAABaIgBACIgCACIgEABIgIAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAIAAIAEABIACACIABACIAACSIA9hCIADgDIAEgCIAFgBIAHAAIAIAAIAFABIADABIAAADIgBAEIgEAFIg6A6IBCBWIADAFIABAEIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_205.setTransform(-437.2,-23.5);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_206.setTransform(-456.3,-19.5);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_207.setTransform(-475.8,-19.5);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#FFFFFF").s().p("AACBrQgIgEgHgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIABgFIAAgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAFgBIAHgBIAHABIADABIADACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQABARAFAJQAEAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgJgDg");
	this.shape_208.setTransform(-492.1,-21.6);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#FFFFFF").s().p("AABBrQgHgEgGgHQgGgGgCgLQgDgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIAAgFIACgEIACgCIACgBIAXAAIAAgnIABgCIACgCIAEgBIAHgBIAIABIAEABIACACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAHAAIAHgCIAEgCIADgBIACABIABABIABAEIAAAFIgBAJIgBAEIgFADIgGACIgIABIgJABQgNAAgJgDg");
	this.shape_209.setTransform(426,-68.8);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgGAAgAgNhXQgEgEgBgKQABgLAEgEQADgDAKAAQALAAADADQAEAEABAKQgBALgEADQgDAEgLAAQgKAAgDgDg");
	this.shape_210.setTransform(415.8,-70.1);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQgBgOgCgJQgCgHgEgHQgEgGgHgDQgGgDgJAAQgKAAgMAIQgLAIgMAOIAAByIgBACIgCACIgFABIgHAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIgBACIgCACIgFABIgHAAIgHAAg");
	this.shape_211.setTransform(393.6,-70.7);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#FFFFFF").s().p("AgkB1QgPgDgIgGQgJgGgEgIQgEgIAAgKIABgLQACgGADgEIAIgKIAKgJQgJgFgFgGQgEgIAAgHQAAgKAEgJQAGgJAGgHQgGgHgDgIQgDgIAAgMQAAgOAFgLQAEgLAIgIQAJgHALgEQAMgFAOAAIANACIALACIAyAAQADgBABAEQACACAAAHQAAAGgCADQgCACgCAAIgYAAQAHAHACAIQADAIAAAJQAAAOgEALQgFAKgJAIQgIAHgMAEQgLAEgNAAQgKAAgJgDQgJgCgFgEQgDADgCAEQgCAFAAAEQAAAGAFAEQAGAFAKAAIAqABQAMABAKADQAKADAHAFQAIAGAEAIQAEAIAAALQAAALgEAKQgFAKgKAIQgJAHgQAFQgPAFgTgBQgUABgNgEgAglA0IgGAHIgDAHIgBAIQAAALANAGQALAGAVABQANAAAKgDQAJgDAFgEQAFgEADgGQACgFABgHQAAgKgJgGQgJgGgPAAIgogBIgKAJgAgSheQgHADgFAFQgDAGgCAGQgDAGAAAHQAAARAJAJQAKAJAQAAQAHAAAHgCQAGgEAFgEQAEgGADgGQABgHAAgGQABgRgKgJQgJgKgQAAQgIAAgGADg");
	this.shape_212.setTransform(375.1,-63.6);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#FFFFFF").s().p("AgmBTQgLgGgHgJQgHgKgDgMQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAJAEAFQAFAGAGAEQAHADAIAAQALAAALgHQALgIAMgQIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAADIgDABIgEABIgGAAIgHAAIgEgBIgCgBIgBgDIAAgWQgOAQgNAHQgOAHgNAAQgQAAgLgFg");
	this.shape_213.setTransform(356.7,-66.6);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_214.setTransform(337.3,-66.7);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQAAgOgDgJQgCgHgEgHQgFgGgGgDQgGgDgJAAQgLAAgLAIQgLAIgMAOIAAByIgBACIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAIAAIAEABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIAAACIgDACIgFABIgHAAIgHAAg");
	this.shape_215.setTransform(317.9,-70.7);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#FFFFFF").s().p("AACBrQgIgEgHgHQgFgGgDgLQgCgKAAgOIAAheIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgnIAAgCIADgCIAFgBIAHgBIAHABIAEABIACACIAAACIAAAnIAqAAIADABIABACIACAEIAAAFQAAAHgCADQgBADgDAAIgqAAIAABZQAAARAGAJQAEAIAOAAIAHAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIgBAJIgCAEIgEADIgHACIgIABIgIABQgNAAgIgDg");
	this.shape_216.setTransform(301.6,-68.8);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_217.setTransform(291.5,-70.7);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#FFFFFF").s().p("ABMB2IgFgBIgCgCIgCgCIgUg5IhgAAIgTA4IgCACIgCACIgFABIgIABIgJgBIgEgBQgBAAAAgBQAAAAAAgBQgBAAAAgBQAAAAAAAAIACgHIBOjZIACgCQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABgBIAFgBIAJAAIAJAAIAGABQAAABABAAQAAAAABAAQAAABABAAQAAAAAAABIACADIBPDYIACAHQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQgBABgEAAIgJABIgJAAgAgpAfIBQAAIgohzg");
	this.shape_218.setTransform(276.5,-69.8);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#FFFFFF").s().p("AgOARQgEgEAAgMQAAgNAEgDQAEgFAKAAQALAAAEAEQAEAFAAALQAAANgEAEQgEAEgLAAQgKAAgEgEg");
	this.shape_219.setTransform(252.8,-60.1);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgCgDIgBgJIABgGIABgDIACgCIACgBQABAAAEACIAKAGIAOAFQAIACAKAAQAGAAAGgBQAGgCAFgDQAFgDACgFQACgFABgHQgBgHgDgEIgKgJIgMgGIgPgGIgOgHQgIgDgGgFQgFgGgEgIQgEgHABgLQAAgKADgJQAEgIAHgHQAIgHALgEQALgDAOAAIANABIALACIAKAEIAGADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgLgEQgHgCgJAAQgGAAgGABQgFACgEADQgEADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAPAHQAIACAGAGQAGAFAEAIQACAHAAALQAAAMgEAKQgEAKgJAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_220.setTransform(240.9,-66.7);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_221.setTransform(224.4,-66.7);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_222.setTransform(208.8,-68.8);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgBgDIgCgJIABgGIABgDIACgCIABgBQACAAAFACIAJAGIANAFQAIACAKAAQAHAAAGgBQAHgCAEgDQAFgDACgFQACgFAAgHQAAgHgDgEIgJgJIgOgGIgOgGIgOgHQgIgDgGgFQgFgGgEgIQgDgHAAgLQAAgKADgJQAEgIAIgHQAHgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgMgEQgGgCgJAAQgGAAgGABQgGACgDADQgEADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIANAHIAPAGIAOAHQAIACAGAGQAGAFAEAIQACAHAAALQABAMgFAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_223.setTransform(195.6,-66.7);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_224.setTransform(179,-66.7);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_225.setTransform(164.2,-68.8);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAABgBAAIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_226.setTransform(140.6,-66.7);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRABQgHgBgGgBgAgHgXQgGACgFAEIgMAJQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgLgEgJQgFgJgIgFQgIgGgLABQgFgBgGACg");
	this.shape_227.setTransform(123.1,-70.5);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_228.setTransform(103.1,-66.7);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#FFFFFF").s().p("AgIB+QgHgBgGgEQgHgEgGgFIgNgMIAAAUIgBACIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgCIAAjxIABgCIACgCIAFgCIAHAAIAIAAIAEACIACACIABACIAABiQAHgIAHgFQAHgFAGgDQAHgDAGgCIANgBQASAAANAHQAMAHAIAMQAIAMADAPQAEAQAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAGgRABQgHgBgGgBgAgHgXQgGACgFAEIgMAJQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgGQAIgFAFgJQAFgJACgLQACgLAAgMQAAgMgCgMQgCgLgEgJQgFgJgIgFQgIgGgLABQgFgBgGACg");
	this.shape_229.setTransform(84.2,-70.5);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQAAgOgDgJQgCgHgEgHQgFgGgGgDQgGgDgJAAQgLAAgLAIQgLAIgMAOIAAByIgBACIgCACIgEABIgIAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAIAAIAEABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIAAACIgDACIgFABIgHAAIgHAAg");
	this.shape_230.setTransform(56,-70.7);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCgBgDIAAgJIAAgGIABgDIABgCIACgBQADAAADACIAKAGIAOAFQAHACALAAQAGAAAGgBQAHgCAEgDQAEgDADgFQACgFAAgHQAAgHgDgEIgKgJIgMgGIgOgGIgQgHQgHgDgFgFQgHgGgDgIQgEgHAAgLQAAgKAFgJQADgIAHgHQAIgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgDADIgCAAIgEgCIgIgEIgLgEQgHgCgIAAQgHAAgGABQgGACgEADQgDADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIAMAHIAPAGIAQAHQAHACAGAGQAFAFAEAIQAEAHAAALQAAAMgFAKQgFAKgIAHQgIAGgMAEQgMADgNAAQgJAAgHgBg");
	this.shape_231.setTransform(39,-66.7);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_232.setTransform(22.5,-66.7);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#FFFFFF").s().p("AgnBXIgEgBIgCgBIgBgCIAAiiIAAgCIADgDIADgBIAHAAIAHAAIAEABIACADIABACIAAAXIAMgPIAKgKQAFgDAFgCIALgBIAFAAIAHABIAFABIAEACIABADIABABIAAAEIAAAGIAAAHIAAAEIgBADIgDABIgEgBIgEgCIgGgCIgHAAIgJABIgJAHIgJAKIgLARIAABrIgBACIgCABIgFABIgIABIgHgBg");
	this.shape_233.setTransform(8,-66.8);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#FFFFFF").s().p("AgSB+IgEgBIgDgBIAAgCIAAiOIgXAAQgDAAgCgDQgBgDAAgGIAAgGIABgEIADgCIACgBIAXAAIAAgRQAAgRADgMQADgMAHgIQAGgIAJgDQAKgEANAAIANABIAJADIAEACIACADIABAFIAAAFIAAAFIgBAEIgBACIgCAAIgDAAIgFgDIgGgCIgJAAQgGAAgFACQgFACgDAFQgDAEgBAIIgBARIAAASIAkAAIACABIACACIACAEIAAAGQAAAGgCADQgBADgDAAIgkAAIAACOIgBACIgCABIgEABIgHABIgIgBg");
	this.shape_234.setTransform(-4.7,-70.7);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_235.setTransform(-32.4,-66.7);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_236.setTransform(-55.4,-66.7);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQgBgOgCgJQgCgHgEgHQgEgGgHgDQgHgDgIAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_237.setTransform(-74.8,-70.7);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_238.setTransform(-102.1,-66.7);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#FFFFFF").s().p("AgWBTQgOgFgJgLQgIgMgFgQQgFgQAAgVQAAgXAGgRQAFgSALgLQAKgLAOgFQANgFAQAAQAHAAAIABIANAEIALAFIAHAGIADADIABADIABAEIAAAFQAAAHgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgEgDIgJgHIgMgGQgIgDgKAAQgVAAgMAQQgLARAAAeQAAAQADAMQADAMAFAIQAGAIAJAEQAHADALAAQALAAAHgDIANgHIAKgHQAEgDACAAIACAAIACADIABAEIAAAGIAAAGIgBAEIgBACIgDAEIgIAFIgLAGIgQAFQgHABgJAAQgRAAgNgGg");
	this.shape_239.setTransform(-118.9,-66.7);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#FFFFFF").s().p("AAwBXIgEgBIgDgBIgBgCIAAhfQABgOgDgIQgCgIgEgHQgFgGgGgDQgGgEgJABQgKgBgLAJQgMAHgMAQIAABxIgBACIgCABIgFABIgHABIgHgBIgFgBIgCgBIgBgCIAAiiIAAgCIADgDIAEgBIAGAAIAHAAIAFABIACADIAAACIAAAVQAOgPANgHQAOgHANAAQAQAAALAGQAMAFAGAJQAHAJADANQADAMAAASIAABiIgBACIgCABIgEABIgHABIgIgBg");
	this.shape_240.setTransform(-136.6,-66.8);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_241.setTransform(-155.6,-66.7);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgGAAgAgOhXQgDgEAAgKQAAgLADgEQAEgDAKAAQALAAADADQAFAEAAAKQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_242.setTransform(-169,-70.1);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#FFFFFF").s().p("AgnBXIgEgBIgDgBIgBgCIAAiiIABgCIADgDIADgBIAHAAIAHAAIAEABIACADIAAACIAAAXIANgPIAKgKQAGgDAEgCIALgBIAGAAIAFABIAGABIAEACIACADIABABIAAAEIAAAGIAAAHIgBAEIgBADIgDABIgDgBIgFgCIgGgCIgHAAIgJABIgJAHIgJAKIgLARIAABrIgCACIgCABIgEABIgHABIgIgBg");
	this.shape_243.setTransform(-178.6,-66.8);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_244.setTransform(-195.4,-66.7);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#FFFFFF").s().p("AhCB4IgFgBIgCgCIgBgCIAAjjIABgCIACgCIAEgBIAGAAIAHAAIAEABIACACIABACIAAAWIAOgNQAHgGAHgDQAHgEAHgCQAGgCAIAAQASAAANAHQAMAHAIAMQAIAMADAPQAEARAAARQAAAVgFAQQgEASgJAMQgJALgNAHQgNAGgRAAQgHAAgGgCIgMgEQgGgDgGgFIgMgLIAABSIgBACIgCACIgEABIgIAAIgHAAgAgHhdIgLAGIgMAKIgOAPIAAA/QAMAPAMAJQALAHALAAQALABAIgGQAIgFAFgKQAFgIADgLQACgLAAgMQAAgMgCgLQgCgMgEgJQgFgJgIgFQgIgGgLAAQgFAAgGABg");
	this.shape_245.setTransform(-213.7,-63.6);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#FFFFFF").s().p("AAvBXIgFgBIgCgCIgCgCIgmhBIgnBBIgCACIgCACIgGABIgIAAIgIgBIgFgBQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAAAAAgBIABgEIAzhPIgwhMIgCgEQAAgBABAAQAAAAAAgBQAAAAAAAAQABgBAAAAQABgBAFgBIAJAAIAIAAIAFABIADACIACACIAkA8IAlg8IABgCIADgCIAEgBIAIAAIAJAAIAEACQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABIgCAEIgwBMIAzBPIACAEQAAABgBAAQAAAAAAABQAAAAgBAAQAAABAAAAIgGABIgJABIgJAAg");
	this.shape_246.setTransform(-232,-66.7);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_247.setTransform(-249.2,-66.7);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_248.setTransform(-276.9,-70.5);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#FFFFFF").s().p("AgHB+IgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAADxIgBACIgCACIgEABIgIAAIgHAAg");
	this.shape_249.setTransform(-290.4,-70.7);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#FFFFFF").s().p("AgmBTQgLgGgHgJQgHgKgDgMQgDgNAAgRIAAhiIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABeQAAAOACAJQACAJAEAFQAFAGAGAEQAHADAIAAQALAAALgHQALgIAMgQIAAhxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAACiIAAADIgDABIgEABIgGAAIgHAAIgEgBIgCgBIgBgDIAAgWQgOAQgNAHQgOAHgNAAQgQAAgLgFg");
	this.shape_250.setTransform(-304.4,-66.6);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_251.setTransform(-323.8,-66.7);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#FFFFFF").s().p("AgWBTQgNgFgJgLQgJgMgGgQQgEgQAAgVQAAgXAFgRQAHgSAKgLQAKgLAOgFQANgFAPAAQAJAAAHABIANAEIALAFIAHAGIADADIACADIAAAEIAAAFQAAAHgBADQgBABAAAAQgBABAAAAQgBAAAAABQgBAAgBAAQgCAAgDgDIgJgHIgOgGQgHgDgLAAQgUAAgLAQQgMARAAAeQAAAQADAMQADAMAGAIQAFAIAJAEQAHADALAAQALAAAHgDIAOgHIAJgHQAEgDACAAIADAAIABADIABAEIAAAGIAAAGIgBAEIgBACIgCAEIgIAFIgNAGIgOAFQgJABgIAAQgQAAgOgGg");
	this.shape_252.setTransform(-341.1,-66.7);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_253.setTransform(-366.8,-66.7);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#FFFFFF").s().p("AAwBXIgEgBIgDgBIAAgCIAAhfQAAgOgDgIQgCgIgEgHQgFgGgGgDQgHgEgIABQgLgBgLAJQgLAHgMAQIAABxIgBACIgCABIgEABIgIABIgIgBIgEgBIgCgBIgBgCIAAiiIAAgCIADgDIAEgBIAHAAIAHAAIADABIACADIABACIAAAVQAOgPANgHQAOgHANAAQAQAAALAGQAMAFAGAJQAHAJAEANQACAMAAASIAABiIAAACIgDABIgFABIgHABIgHgBg");
	this.shape_254.setTransform(-385.6,-66.8);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_255.setTransform(-405.1,-66.7);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#FFFFFF").s().p("AgdB3IgEgCIgCgDIABgEIAWg5IgDgCIgCgEIg6iaIgCgGQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQACgCADAAIAJAAIAIAAIAFABIADACIABAEIAuCBIAAAAIAtiCQAAgBABgBQAAAAAAgBQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABAAIAJAAIAJAAQAAAAABAAQABAAAAABQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIgBAGIg6CgIgVA8QAAADgFACQgEABgKAAIgHAAg");
	this.shape_256.setTransform(-423.2,-63.5);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#FFFFFF").s().p("AgnBXIgFgBIgBgBIgBgCIAAiiIAAgCIACgDIAEgBIAHAAIAHAAIAEABIACADIABACIAAAXIAMgPIAKgKQAFgDAFgCIALgBIAFAAIAHABIAGABIADACIABADIABABIAAAEIAAAGIAAAHIAAAEIgCADIgCABIgEgBIgEgCIgGgCIgHAAIgJABIgJAHIgJAKIgMARIAABrIAAACIgCABIgFABIgIABIgHgBg");
	this.shape_257.setTransform(-437,-66.8);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_258.setTransform(-453.7,-66.7);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#FFFFFF").s().p("AAABXIgIgBIgFgBIgFgCIgCgDIg3iZIAAgEIgBgCIAAgCIABgCIACgCIAFgBIAGAAIAJAAIAFABIACACIABADIAtCFIABACIABgCIAtiFIACgDIACgCIAFgBIAHAAIAHAAIAFABIACACIAAACIAAACIAAACIAAACIgBACIg3CZIgCAEIgEACIgGABIgJAAg");
	this.shape_259.setTransform(-471.2,-66.7);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_260.setTransform(-488.8,-66.7);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_261.setTransform(426,-113.9);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#FFFFFF").s().p("AgVBYIgPgEIgKgEIgHgEQgCgCgBgDIgBgJIABgGIABgDIABgCIADgBQACAAADACIAKAGIAOAFQAHACALAAQAGAAAGgBQAHgCAEgDQAEgDADgFQADgFAAgHQAAgHgEgEIgKgJIgMgGIgPgGIgPgHQgHgDgFgFQgGgGgEgIQgEgHAAgLQABgKAEgJQADgIAHgHQAIgHALgEQALgDAOAAIANABIAMACIAJAEIAFADIADADIABACIAAADIABAFIgBAGIAAADIgCADIgDAAIgEgCIgIgEIgLgEQgHgCgIAAQgHAAgGABQgFACgFADQgDADgCAFQgCAEAAAFQAAAHAEAFQADAFAGADIANAHIAOAGIAQAHQAHACAGAGQAFAFAEAIQAEAHAAALQgBAMgEAKQgFAKgIAHQgIAGgMAEQgMADgNAAQgJAAgHgBg");
	this.shape_262.setTransform(409,-113.9);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_263.setTransform(384.2,-113.9);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#FFFFFF").s().p("AgnBXIgFAAIgCgCIAAgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAXIAMgQIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADABIABACIABACIAAAEIAAAHIAAAGIAAAFIgCACIgCAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgMARIAABpIgBADIgBACIgFAAIgHABIgIgBg");
	this.shape_264.setTransform(369.6,-114);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_265.setTransform(352.4,-113.9);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_266.setTransform(336.1,-116);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#FFFFFF").s().p("AgWBYIgNgEIgLgEIgGgEQgCgCgBgDIgCgJIABgGIABgDIACgCIABgBQACAAAFACIAJAGIANAFQAIACAKAAQAHAAAGgBQAHgCAEgDQAFgDACgFQACgFAAgHQAAgHgDgEIgJgJIgOgGIgOgGIgOgHQgIgDgGgFQgFgGgEgIQgDgHAAgLQAAgKADgJQAEgIAIgHQAHgHALgEQALgDAOAAIANABIALACIAJAEIAHADIACADIAAACIABADIAAAFIAAAGIgBADIgBADIgCAAIgFgCIgIgEIgMgEQgGgCgJAAQgGAAgGABQgGACgDADQgEADgCAFQgCAEAAAFQAAAHAEAFQAEAFAFADIANAHIAPAGIAOAHQAIACAGAGQAGAFAEAIQACAHAAALQABAMgFAKQgFAKgIAHQgJAGgLAEQgMADgNAAQgIAAgJgBg");
	this.shape_267.setTransform(323,-113.9);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#FFFFFF").s().p("AAwBXIgEAAIgDgCIgBgDIAAhdQAAgOgCgJQgCgIgEgHQgEgGgHgDQgGgEgJAAQgKABgLAHQgMAJgMAPIAABwIgBADIgCACIgEAAIgIABIgHgBIgFAAIgCgCIgBgDIAAihIAAgDIADgBIAEgBIAHAAIAGAAIAFABIABABIABADIAAAWQAOgQANgHQAOgHANAAQAQAAALAFQAMAGAGAJQAHAJADAMQADANAAARIAABiIAAADIgDACIgEAAIgIABIgHgBg");
	this.shape_268.setTransform(297.8,-114);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_269.setTransform(274.8,-113.9);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_270.setTransform(251.8,-113.9);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#FFFFFF").s().p("AgnBXIgFAAIgCgCIAAgDIAAihIAAgDIACgBIAFgBIAGAAIAHAAIAEABIACABIABADIAAAXIAMgQIAKgJQAFgEAGgBIAKgBIAFAAIAGABIAHACIADABIABACIABACIAAAEIAAAHIAAAGIAAAFIgCACIgCAAIgDAAIgFgBIgGgCIgHgBIgJACIgJAFIgJAMIgMARIAABpIgBADIgBACIgFAAIgHABIgIgBg");
	this.shape_271.setTransform(228.3,-114);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgKgDgMQgDgMAAgSIAAhhIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAABdQAAAPACAIQACAIAEAHQAFAGAGADQAHADAIAAQALABALgJQALgHAMgQIAAhwIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAAChIAAACIgDACIgEABIgGABIgHgBIgEgBIgCgCIgBgCIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_272.setTransform(211.1,-113.8);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_273.setTransform(191.7,-113.9);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#FFFFFF").s().p("AAwBXIgFAAIgCgCIgBgDIAAhdQABgOgDgJQgCgIgEgHQgFgGgGgDQgHgEgIAAQgKABgLAHQgMAJgMAPIAABwIgBADIgCACIgFAAIgHABIgHgBIgFAAIgCgCIgBgDIAAihIABgDIACgBIAEgBIAGAAIAHAAIAFABIACABIAAADIAAAWQAOgQAOgHQANgHANAAQAQAAALAFQALAGAHAJQAHAJADAMQADANAAARIAABiIgBADIgCACIgEAAIgHABIgIgBg");
	this.shape_274.setTransform(163.9,-114);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgEgEABgKQgBgLAEgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_275.setTransform(149.9,-117.3);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_276.setTransform(127.9,-113.9);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgFIgNgOIAAAUIgBADIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgDIAAjwIABgDIACgBIAFgCIAHAAIAIAAIAEACIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEARAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRgBQgHAAgGgBgAgHgXQgGACgFADIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgMgEgHQgFgJgIgGQgIgGgLAAQgFAAgGACg");
	this.shape_277.setTransform(110.4,-117.7);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_278.setTransform(90.5,-113.9);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#FFFFFF").s().p("AgIB+QgHgCgGgDQgHgDgGgFIgNgOIAAAUIgBADIgCACIgEAAIgHABIgGgBIgEAAIgCgCIgBgDIAAjwIABgDIACgBIAFgCIAHAAIAIAAIAEACIACABIABADIAABhQAHgHAHgFQAHgFAGgDQAHgEAGgBIANgBQASAAANAHQAMAHAIAMQAIAMADAOQAEARAAARQAAAVgFARQgEARgJAMQgJAMgNAGQgNAHgRgBQgHAAgGgBgAgHgXQgGACgFADIgMAKQgHAGgHAIIAABBQAMAPAMAIQALAIALAAQAMAAAIgFQAIgGAFgJQAFgJACgLQACgLAAgLQAAgNgCgMQgCgMgEgHQgFgJgIgGQgIgGgLAAQgFAAgGACg");
	this.shape_279.setTransform(71.5,-117.7);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#FFFFFF").s().p("AglB1QgOgDgIgGQgJgGgEgIQgEgIAAgJIABgMQACgFADgGIAIgJIAKgKQgJgEgFgHQgEgGAAgJQAAgJAEgJQAGgJAGgGQgFgIgEgHQgDgJAAgMQAAgOAFgLQAEgLAIgHQAJgJALgDQAMgEAOgBIANABIALACIAyAAQADAAABAEQACACAAAHQAAAGgCADQgCACgCAAIgXAAQAGAHADAIQACAIAAAIQAAAOgEALQgFALgJAIQgIAHgMAEQgLAEgNAAQgKAAgJgCQgJgDgFgEQgDADgCAFQgCAEAAAEQAAAGAFAEQAGAEAKABIAqACQAMAAAKADQAKADAHAFQAIAGAEAIQAEAIAAALQAAALgFAKQgEAKgKAIQgJAHgQAFQgPAEgTABQgUgBgOgDgAglAzIgGAIIgDAIIgBAHQAAALANAHQALAFAVAAQANABAKgDQAJgDAFgEQAFgEADgGQADgGAAgFQAAgLgJgGQgJgFgPgBIgpgBIgJAIgAgThdQgGACgFAFQgDAGgCAGQgDAGAAAIQAAAQAJAJQAJAJARAAQAHAAAHgDQAGgCAFgGQAEgEADgHQABgGAAgIQABgQgKgJQgJgKgQABQgJAAgGADg");
	this.shape_280.setTransform(44.2,-110.8);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#FFFFFF").s().p("AAwBXIgFAAIgCgCIAAgDIAAhdQgBgOgCgJQgCgIgEgHQgEgGgHgDQgGgEgJAAQgKABgMAHQgLAJgMAPIAABwIgBADIgCACIgFAAIgHABIgIgBIgEAAIgCgCIgBgDIAAihIABgDIACgBIAEgBIAHAAIAHAAIADABIACABIABADIAAAWQAOgQAOgHQANgHANAAQAQAAAMAFQAKAGAIAJQAGAJAEAMQACANAAARIAABiIgBADIgCACIgFAAIgHABIgHgBg");
	this.shape_281.setTransform(25.9,-114);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#FFFFFF").s().p("AgGB4IgFgBIgCgCIgBgCIAAiiIABgCIACgCIAFgBIAGAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgGAAgAgOhXQgDgEAAgKQAAgLADgEQAEgDAKAAQALAAADADQAFAEAAAKQAAALgFADQgDAEgLAAQgKAAgEgDg");
	this.shape_282.setTransform(11.9,-117.3);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#FFFFFF").s().p("AArB+IgFgBIgEgCIgCgCIhEhaIAABaIgBACIgCACIgEABIgIAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAIAAIAEABIACACIABACIAACSIA9hCIADgDIAEgCIAFgBIAHAAIAIAAIAFABIADABIAAADIgBAEIgEAFIg6A6IBCBWIADAFIABAEIgBACIgCACIgFABIgIAAIgIAAg");
	this.shape_283.setTransform(0.3,-117.9);

	this.shape_284 = new cjs.Shape();
	this.shape_284.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_284.setTransform(-18.5,-113.9);

	this.shape_285 = new cjs.Shape();
	this.shape_285.graphics.f("#FFFFFF").s().p("ABiBXIgEAAIgDgCIAAgDIAAhiQAAgJgCgJQgCgIgEgHQgEgGgGgDQgGgEgJAAQgKABgKAHQgLAJgMAPIAABwIgBADIgCACIgFAAIgHABIgGgBIgFAAIgCgCIgBgDIAAhiQAAgJgCgJQgCgIgEgHQgEgGgGgDQgGgEgIAAQgLABgKAHQgLAJgMAPIAABwIgBADIgCACIgEAAIgIABIgHgBIgFAAIgCgCIgBgDIAAihIABgDIACgBIAEgBIAHAAIAHAAIAEABIACABIAAADIAAAWQAOgQANgHQANgHANAAQAKAAAIACQAIACAGAFQAHAEADAGQAEAGADAHQAIgJAIgGQAHgGAHgEQAGgEAHgBIANgCQAPAAALAFQALAGAGAJQAHAJADAMQADANAAANIAABmIgBADIgCACIgFAAIgHABIgIgBg");
	this.shape_285.setTransform(-41.6,-114);

	this.shape_286 = new cjs.Shape();
	this.shape_286.graphics.f("#FFFFFF").s().p("AgRB+IgFAAIgDgCIAAgDIAAiNIgXAAQgDAAgBgDQgCgDAAgHIABgFIABgEIABgCIADgBIAXAAIAAgRQAAgQADgMQADgNAGgIQAHgIAJgDQAKgEAOAAIALABIAKADIAEACIACADIABAEIAAAGIAAAGIgBADIgBABIgCABIgDgBIgEgBIgHgCIgJgBQgGAAgFACQgFACgCAFQgDAEgCAIIgBASIAAARIAkAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgkAAIAACNIgBADIgCACIgEAAIgHABIgHgBg");
	this.shape_286.setTransform(-69.9,-117.9);

	this.shape_287 = new cjs.Shape();
	this.shape_287.graphics.f("#FFFFFF").s().p("AgkBTQgPgGgKgLQgKgMgFgQQgEgQAAgVQAAgSAFgRQAFgRAKgMQALgMAPgHQAQgGATAAQAUAAAPAFQAPAGAKAMQAKALAFAQQAFARAAAUQAAATgFARQgFAQgLANQgKAMgQAGQgPAHgUAAQgUAAgPgGgAgWg7QgJAFgGAJQgHAIgDAMQgDALAAAOQAAANADAMQACALAGAJQAGAJAJAFQAKAFAOAAQANAAAJgFQAKgEAGgJQAGgIADgMQADgMAAgOQAAgMgCgMQgDgMgFgIQgGgJgKgFQgJgGgPAAQgMAAgKAFg");
	this.shape_287.setTransform(-85.8,-113.9);

	this.shape_288 = new cjs.Shape();
	this.shape_288.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_288.setTransform(-113.3,-113.9);

	this.shape_289 = new cjs.Shape();
	this.shape_289.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_289.setTransform(-130.8,-113.9);

	this.shape_290 = new cjs.Shape();
	this.shape_290.graphics.f("#FFFFFF").s().p("AgmB4QgNgHgIgLQgIgMgDgQQgEgQAAgSQAAgVAFgRQAEgQAJgMQAJgMANgGQANgGARAAQANAAAMAGQAMAGAMAMIAAheIAAgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABQABAAAAABQABAAAAAAQAAAAAAABQABAAAAAAIABADIAADvIgBADIgCACIgEAAIgGABIgHgBIgEAAIgCgCIgBgDIAAgVQgNAOgNAHQgOAIgQAAQgSAAgMgHgAgVgTQgIAFgEAJQgFAIgDALQgCALAAAMQAAAMACAMQACALAEAKQAFAJAIAFQAIAGALAAIALgCIALgFQAGgEAGgGQAHgGAHgJIAAhBQgMgOgMgIQgLgIgLAAQgMAAgIAGg");
	this.shape_290.setTransform(-150.2,-117.7);

	this.shape_291 = new cjs.Shape();
	this.shape_291.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAHAAIAFABIACACIABACIAACiIgBACIgCACIgFABIgHAAIgHAAgAgNhXQgFgEAAgKQAAgLAFgEQADgDAKAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgKAAgDgDg");
	this.shape_291.setTransform(-163.6,-117.3);

	this.shape_292 = new cjs.Shape();
	this.shape_292.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_292.setTransform(-185.5,-113.9);

	this.shape_293 = new cjs.Shape();
	this.shape_293.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIgBgCIAAhfQAAgOgCgJQgCgHgEgHQgFgGgGgDQgHgDgIAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgHAAIgFgBIgCgCIgBgCIAAjxIABgCIACgCIAFgBIAHAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJADANQADALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_293.setTransform(-204.3,-117.9);

	this.shape_294 = new cjs.Shape();
	this.shape_294.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgCgLQgEgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIABACIAAAnIApAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgpAAIAABZQAAARAEAJQAFAIANAAIAIAAIAGgCIAEgCIADgBIACABIABABIABAEIAAAFIAAAJIgCAEIgFADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_294.setTransform(-220.5,-116);

	this.shape_295 = new cjs.Shape();
	this.shape_295.graphics.f("#FFFFFF").s().p("AAwB+IgFgBIgCgCIAAgCIAAhfQgBgOgCgJQgCgHgEgHQgEgGgHgDQgHgDgIAAQgLAAgKAIQgMAIgMAOIAAByIgBACIgCACIgFABIgHAAIgIAAIgEgBIgCgCIgBgCIAAjxIABgCIACgCIAEgBIAIAAIAHAAIAFABIACACIABACIAABiQANgOANgGQANgHAMAAQAQAAAMAGQAKAFAIAJQAGAJAEANQACALAAASIAABjIgBACIgCACIgFABIgGAAIgIAAg");
	this.shape_295.setTransform(-244.4,-117.9);

	this.shape_296 = new cjs.Shape();
	this.shape_296.graphics.f("#FFFFFF").s().p("AABBrQgIgEgGgHQgFgGgDgLQgDgKAAgOIAAheIgWAAQgDAAgCgDQgBgDAAgHIAAgFIABgEIACgCIADgBIAWAAIAAgnIABgCIADgCIAEgBIAIgBIAHABIADABIADACIAAACIAAAnIAqAAIADABIACACIABAEIAAAFQAAAHgBADQgCADgDAAIgqAAIAABZQABARAEAJQAFAIANAAIAIAAIAFgCIAFgCIADgBIACABIABABIABAEIAAAFIAAAJIgDAEIgEADIgHACIgIABIgIABQgMAAgKgDg");
	this.shape_296.setTransform(-260.7,-116);

	this.shape_297 = new cjs.Shape();
	this.shape_297.graphics.f("#FFFFFF").s().p("AgHB4IgEgBIgCgCIgBgCIAAiiIABgCIACgCIAEgBIAHAAIAIAAIAEABIACACIABACIAACiIgBACIgCACIgEABIgIAAIgHAAgAgOhXQgEgEAAgKQAAgLAEgEQAFgDAJAAQAKAAAFADQADAEAAAKQAAALgDADQgFAEgKAAQgJAAgFgDg");
	this.shape_297.setTransform(-270.8,-117.3);

	this.shape_298 = new cjs.Shape();
	this.shape_298.graphics.f("#FFFFFF").s().p("AA2BXIgKgBIgGgBQAAAAgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBIgCgDIghh1IAAgBIgBABIgfB1IgCAEIgDACIgGABIgKAAIgJgBIgFgBQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBIgCgDIgviZIgBgFIgBgDIABgCIADgCIAEgBIAHAAIAIAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIACADIAnCFIAAABIABgBIAjiFIACgDQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIAFgBIAGAAIAHAAIAEABIADACIABACIAnCGIAAABIAAgBIAniFIABgDQAAAAABAAQAAgBAAAAQAAAAABAAQAAgBABAAIAEgBIAIAAIAHAAIAEABIACACIABACIgBADIgBAFIgwCZIgBAEIgEACIgFABIgJAAg");
	this.shape_298.setTransform(-288.3,-113.9);

	this.shape_299 = new cjs.Shape();
	this.shape_299.graphics.f("#FFFFFF").s().p("AhCB4IgFgBIgCgCIgBgDIAAjhIABgDIACgCIAEgBIAGAAIAHAAIAEABIACACIABADIAAAVIAOgNQAHgFAHgEQAHgEAHgCQAGgBAIgBQASABANAGQAMAHAIAMQAIAMADAQQAEAQAAARQAAAWgFAQQgEAQgJAMQgJAMgNAGQgNAHgRAAQgHAAgGgBIgMgFQgGgDgGgFIgMgLIAABRIgBADIgCACIgEABIgIABIgHgBgAgHhdIgLAGIgMAKIgOAOIAABBQAMAPAMAHQALAJALgBQALAAAIgFQAIgGAFgIQAFgKADgKQACgLAAgMQAAgMgCgMQgCgLgEgJQgFgJgIgGQgIgFgLAAQgFAAgGABg");
	this.shape_299.setTransform(-319.1,-110.8);

	this.shape_300 = new cjs.Shape();
	this.shape_300.graphics.f("#FFFFFF").s().p("AgmBSQgLgFgHgJQgHgKgDgMQgDgMAAgSIAAhhIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAABdQAAAPACAIQACAIAEAHQAFAGAGADQAHADAIAAQALABALgJQALgHAMgQIAAhwIABgDIACgCIAFgBIAHAAIAHAAIAFABIACACIABADIAAChIAAACIgDACIgEABIgGABIgHgBIgEgBIgCgCIgBgCIAAgVQgOAPgNAHQgOAHgNAAQgQAAgLgGg");
	this.shape_300.setTransform(-339,-113.8);

	this.shape_301 = new cjs.Shape();
	this.shape_301.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_301.setTransform(-366.3,-113.9);

	this.shape_302 = new cjs.Shape();
	this.shape_302.graphics.f("#FFFFFF").s().p("ABiBXIgEAAIgDgCIAAgDIAAhiQAAgJgCgJQgCgIgEgHQgEgGgGgDQgGgEgJAAQgKABgKAHQgLAJgMAPIAABwIgBADIgCACIgFAAIgHABIgGgBIgFAAIgCgCIgBgDIAAhiQAAgJgCgJQgCgIgEgHQgEgGgGgDQgGgEgIAAQgLABgKAHQgLAJgMAPIAABwIgBADIgCACIgEAAIgIABIgHgBIgFAAIgCgCIgBgDIAAihIABgDIACgBIAEgBIAHAAIAHAAIAEABIACABIAAADIAAAWQAOgQANgHQANgHANAAQAKAAAIACQAIACAGAFQAHAEADAGQAEAGADAHQAIgJAIgGQAHgGAHgEQAGgEAHgBIANgCQAPAAALAFQALAGAGAJQAHAJADAMQADANAAANIAABmIgBADIgCACIgFAAIgHABIgIgBg");
	this.shape_302.setTransform(-390.2,-114);

	this.shape_303 = new cjs.Shape();
	this.shape_303.graphics.f("#FFFFFF").s().p("AggBWQgLgEgHgGQgHgGgEgJQgFgKAAgLQAAgOAGgKQAGgKAKgGQALgHAPgDQAPgDASAAIAWAAIAAgNQAAgJgCgIQgCgHgEgFQgFgEgHgDQgHgCgKAAQgKAAgJACQgJADgGADIgLAGQgFADgCAAIgCgBIgCgCIgBgEIgBgFIABgHQABgDACgCIAIgGIAOgFQAIgDAJgCQAJgBAJAAQARAAANADQAMAEAHAIQAIAIADALQAEAMAAAPIAABsQAAABAAAAQAAABgBAAQAAABAAAAQAAAAgBABIgEABIgHABIgHgBIgFgBIgBgEIAAgQQgKAMgNAGQgOAGgNAAQgNAAgKgDgAgJAJQgJACgGAEQgFAEgDAGQgDAGAAAHQAAANAIAHQAIAIAOAAQALAAAKgGQAKgGALgMIAAgjIgZAAQgMAAgJACg");
	this.shape_303.setTransform(-414.4,-113.9);

	this.shape_304 = new cjs.Shape();
	this.shape_304.graphics.f("#FFFFFF").s().p("AgWBTQgOgFgJgLQgIgMgFgQQgFgQAAgVQAAgXAGgRQAFgSALgLQAKgLAOgFQANgFAQAAQAHAAAIABIANAEIALAFIAHAGIADADIABADIABAEIAAAFQAAAHgCADQAAABAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQgDAAgEgDIgJgHIgMgGQgIgDgKAAQgVAAgMAQQgLARAAAeQAAAQADAMQADAMAFAIQAGAIAJAEQAHADALAAQALAAAHgDIANgHIAKgHQAEgDACAAIACAAIACADIABAEIAAAGIAAAGIgBAEIgBACIgDAEIgIAFIgLAGIgQAFQgIABgIAAQgQAAgOgGg");
	this.shape_304.setTransform(-430.3,-113.9);

	this.shape_305 = new cjs.Shape();
	this.shape_305.graphics.f("#FFFFFF").s().p("AgcBUQgPgGgKgLQgKgLgGgRQgFgQAAgWQAAgUAFgRQAGgRAKgLQAKgMAPgGQAOgGARAAQATAAAOAGQANAGAJAKQAJALAEAOQAEAOAAAPIAAAGQAAAGgEADQgDADgFAAIhqAAQAAANADALQACALAHAIQAGAIAKAEQAKAEAOAAQAMAAAJgCIAQgEIAKgEIAHgCIACAAIACACIAAAEIABAFIAAAEIgBADIgBADIgBACIgGADIgNAFIgSAEQgKABgMAAQgTAAgPgFgAgRg9QgIAEgGAHQgGAHgDAJQgDAJAAAKIBYAAQAAgXgLgOQgLgNgVAAQgLAAgIAEg");
	this.shape_305.setTransform(-455.9,-113.9);

	this.shape_306 = new cjs.Shape();
	this.shape_306.graphics.f("#FFFFFF").s().p("AA8B1IgHAAIgEgCIgCgFIgvivIgBAAIgtCvIgCAFIgEACIgGAAIgJABIgKgBIgGAAIgFgCIgBgFIg+jXIgBgHQAAAAAAAAQAAgBAAAAQAAgBAAAAQABgBAAAAIAFgBIAJgBIAJABIAFAAQABABAAAAQAAAAABAAQAAAAAAABQAAAAAAAAIACAEIA0DCIAyjCIABgDIADgDIAFAAIAIgBIAIABIAEAAIAEADIABADIA2DCIAzjCIACgDIACgDIAEAAIAJgBIAIABQABAAABAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQAAAAAAABIAAAGIg/DXIgCAFIgEACIgGAAIgJABIgJgBg");
	this.shape_306.setTransform(-481.5,-117);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_306},{t:this.shape_305},{t:this.shape_304},{t:this.shape_303},{t:this.shape_302},{t:this.shape_301},{t:this.shape_300},{t:this.shape_299},{t:this.shape_298},{t:this.shape_297},{t:this.shape_296},{t:this.shape_295},{t:this.shape_294},{t:this.shape_293},{t:this.shape_292},{t:this.shape_291},{t:this.shape_290},{t:this.shape_289},{t:this.shape_288},{t:this.shape_287},{t:this.shape_286},{t:this.shape_285},{t:this.shape_284},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.abouttext, new cjs.Rectangle(-500,-142.6,1000,285.2), null);


(lib.aboutpicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.photo1531966662811c6501e46eda6();
	this.instance.parent = this;
	this.instance.setTransform(-90.4,-126.5,0.181,0.181);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.4,-126.5,180.8,253.2);


(lib.aboutext = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgCDqQgWgHgOgQQgOgQgHgXQgHgZAAggIAAi0IgqAAQgIAAgEgJQgEgJAAgWQAAgMACgHQAAgIACgFQACgEADgCQADgCAEAAIAqAAIAAhPQAAgEACgDQACgDAGgCQAGgCAKgBIAYgBIAXABQAKABAFACQAGACACADQACADAAAEIAABPIBNAAQAEAAADACQADACACAEIADANIABATQAAAWgEAJQgEAJgIAAIhNAAIAAClQAAAdAJAPQAKAOAXAAIAOgBIAMgDIAIgEIAGgBIAFABQACABABAFIACALIABASQAAARgCAKQgCAJgEAEQgEAEgGADIgQAFIgVADIgWABQgdABgVgIg");
	this.shape.setTransform(111.9,14.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhjC3QgZgLgPgUQgPgWgHgaQgGgcAAgoIAAjWQAAgEACgEQACgCAGgCQAFgDAKgBIAYgBIAYABQAKABAGADQAFACADACQACAEAAAEIAADFQAAAcADAPQAEAOAIALQAHALALAFQALAGAPAAQASAAAUgOQATgOAVgaIAAjpQAAgEADgEQACgCAGgCQAFgDAKgBIAYgBIAYABQAJABAGADQAFACADACQACAEAAAEIAAFfQAAAEgCADQgCADgFACQgFACgIABIgUABIgVgBQgIgBgFgCQgFgCgCgDQgCgDAAgEIAAgoQgdAfgeAQQgeAPggABQgkAAgZgNg");
	this.shape_1.setTransform(76.7,18.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhVC6QgjgNgXgZQgXgZgLgkQgLglAAgvQAAgrAMgmQAMglAYgbQAYgbAkgOQAlgPAvAAQAwAAAjANQAiANAYAZQAWAZALAkQALAkAAAwQAAArgMAmQgMAlgYAbQgYAbgkAOQglAPgwAAQgvAAgigNgAglhvQgQAIgLAQQgLAQgFAVQgGAXAAAbQAAAaAFAVQAEAXAKAPQAKARAQAJQARAIAYAAQAWABAQgJQARgHAKgQQAMgPAEgWQAFgXABgcQgBgZgEgVQgEgWgJgRQgKgQgQgJQgSgJgYAAQgWAAgQAIg");
	this.shape_2.setTransform(33.3,18.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgHEVQgPgEgOgHQgOgIgOgLQgOgMgOgQIAAAmQAAAFgBADQgDADgFACQgFACgIAAIgVABIgUgBQgIAAgEgCQgGgCgBgDQgCgDAAgFIAAoHQAAgEACgDQACgDAGgCIAPgEIAYgBIAZABIAOAEQAHACABADQADADAAAEIAADDQANgNAOgKQANgJAOgGQANgGAOgDQAOgDAPAAQAoAAAbAQQAcAPAQAbQASAaAHAjQAJAjAAAnQgBAvgKAmQgKAlgTAbQgUAagcAPQgcAOglAAQgRAAgPgDgAgOgdQgKADgKAGQgKAHgLALQgKAJgMAQIAAB1QAVAbATAOQAUAOAUAAQATAAANgKQAOgKAJgPQAIgQAEgUQAEgVABgUQAAgWgEgVQgEgVgIgQQgIgQgNgJQgOgKgTAAQgJAAgKADg");
	this.shape_3.setTransform(-9.2,10.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("ACbECIgSgDQgFgCgDgDQgCgDgCgFIgihnIi/AAIghBkQgBAGgDAEQgDADgFADQgGACgKAAIgcABQgSAAgKgBQgLgBgEgFQgEgEACgJQABgIAEgOICenFQADgHADgEQADgEAHgCQAHgCAMgBIAhAAIAkAAQAOABAHACQAIACAEAEQADAFACAHICeHFQAFAOABAJQABAIgEAEQgEAEgLABIgfABIgfAAgAhNA7ICQAAIhIjYIAAAAg");
	this.shape_4.setTransform(-56.5,11.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAkDVQgUgIgQgTQgPgTgOgdIhLijIgmARQgHAEgIgHQgHgHgJgUQgFgKgCgIQgDgHAAgFQAAgFACgDQABgEAEgBIAmgSIghhHQgCgEABgEQABgDAEgFQAEgEAJgFIAVgLQANgGAKgDQAJgDAGAAQAGgBADACQAEACABADIAhBIIBFggQADgCAEABQAEAAADAEIAIAJIAJASQAJAUABAKQAAAKgHADIhFAgIBECWQANAaAOAJQAOAKAVgKQAIgDAFgEIAJgIIAGgGQACgDADgBQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQADAAADAEIAGAJIAJAQQAHAQACAJQACAKgCAFQgBAEgFAGIgNALIgQAMIgUAKQgbANgXACIgJABQgSAAgPgHg");
	this.shape_5.setTransform(107.2,-24.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgMDhQgbgBgWgMQgXgMgRgWQgSgWgRglIhajDQgCgDABgEQABgEAFgEIAMgJQAIgFANgGQANgGAKgDIAPgEQAGAAADACQADABACAEIBTC0QAMAZAKAMQAJALALAHQALAGAMABQAMAAAOgGQARgIAMgVQALgUAJghIhhjUQgCgEABgDQABgEAEgFIAMgIIAVgLIAWgKQAKgDAGAAQAFgBAEACQADACABADICUFAQACADAAAEQgBAEgEADQgEAEgGAEIgTAKIgTAIQgIACgFAAQgFABgDgCQgDgCgCgEIgRglQgNApgVAbQgVAcgdANQggAPgaAAIgCAAg");
	this.shape_6.setTransform(75.4,-6.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhEDDQgfgNgZgdQgagcgTgqQgTgpgFgnQgEgmAKgiQALgjAbgdQAbgcAsgUQArgUAkgDQAlgDAfANQAfANAZAdQAaAcATArQATApAFAnQAEAmgKAiQgLAigbAdQgaAdgtAUQgqAUglACIgLABQgfAAgagLgAgxhsQgUAJgMAPQgLAOgDATQgEASAFAWQAEAVAMAaQALAXANATQANASAQAKQAPALASABQATABAWgKQAVgJALgOQAMgPADgSQAEgTgFgWQgFgVgMgaQgKgYgNgRQgNgTgQgKQgQgLgRgBIgFgBQgRAAgUAKg");
	this.shape_7.setTransform(36,13.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgXEHQgDgDgBgDIjanYQgCgDABgEQABgEAEgEQAEgFAIgFQAIgFAOgGIAWgJQAJgDAHAAQAGgBADACQAEACABAEIBSCxQAGgSAIgPQAJgOAKgLQAJgLAMgIQAMgJANgGQAkgRAfADQAfADAbARQAbAQAWAdQAWAdAQAkQAUAqAGAmQAGAmgGAgQgGAhgUAYQgUAZggAPQgRAIgPADQgQADgPgBQgRgBgQgEQgSgFgTgJIAQAjQABAEAAAEQgBADgEAEQgDAEgIAEIgSAJIgRAIQgIADgFAAQgGAAgDgBgAAPhSQgJAEgGAGQgIAHgGAKQgGALgFAOQgGAOgEASIAwBrQAeAPAYAFQAXAFATgJQASgIAHgPQAIgOACgTQACgSgFgTQgFgVgJgRQgJgUgMgSQgMgSgOgLQgOgLgQgDIgKgBQgMAAgNAGg");
	this.shape_8.setTransform(-8.4,28.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("Ai1EiQgGgDgCgIQgDgIgBgPIgvndQgBgHACgFQABgFAGgFQAFgFAKgGIAegOIAigPQANgFAIgBQAHgCAFADQAFADAFAGIFNFYQAKALAFAHQAEAHgCAGQgCAGgKAFIgbAOIgcANIgRAEQgHABgDgCIgHgGIhLhPIitBRIAMBoIABALQgBAEgEAFQgFAEgJAFIgZAMQgQAIgKADQgFACgFAAIgFgBgAh6AzICDg8IicinIAAAAg");
	this.shape_9.setTransform(-40.6,48.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag0DwQgHgBgJgDIgTgJIgTgLQgZgQgNgSQgPgTgDgVQgDgUAIgYQAHgXARgbIBkiWIgjgYQgGgEACgKQABgKAMgSIAMgPQAFgHAEgCQAFgDADAAQAEAAADACIAiAYIArhCQACgDAEgCQAEgBAGABQAGABAIAFIAVAMIAUAPQAHAGADAFQAEAEAAAFQAAADgCADIgrBCIBAArQADACACADQABADgBAFQgBAFgDAIIgLAQQgMASgIAGQgIAFgGgEIhBgrIhaCKQgQAYgBARQAAARATANIANAHIALAEIAJABIAGACIACAEIAAAHIgEAKIgJAQQgKAOgGAHQgHAHgGABIgEAAIgIgBg");
	this.shape_10.setTransform(96.1,63.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AALD1QgGgBgGgEIgSgKIgRgNQgGgFgDgFQgDgEAAgDQAAgEACgDIAXgiQgqAKgigDQgigEgbgSQgegUgOgYQgPgXgBgaQgBgZAJgaQAKgZAWgiIB3i0QADgDADgCQADgBAGABQAGACAJAFIAUAMIATAOQAHAGAEAFQADAFABAEQAAADgCADIhtCnQgPAWgGAOQgFAOABANQAAANAHALQAGALAMAIQAQALAYgBQAXgBAggLICBjCQADgDADgBQAEgCAFABIAPAHIAVAMIATAOQAHAGAEAFQADAFABAEQAAADgCADIjDEmIgFAEIgFABIgDAAg");
	this.shape_11.setTransform(64.8,46.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgiDGQgmgIgogbQgogagWgeQgVgegGghQgFghALgkQAKglAagnQAZglAfgYQAfgZAigJQAjgJAmAIQAmAIAoAbQAoAaAWAeQAWAdAFAiQAFAhgKAjQgMAlgaAnQgYAmgfAZQgeAYgjAJQgTAFgUAAQgQAAgSgEgAgFhtQgRAHgRAQQgRAPgPAXQgOAWgJAVQgIAUgBATQgBASAJARQAJARAVANQASANASACQATADAQgIQASgHAQgPQAQgPAQgYQAOgWAJgUQAIgUABgTQABgTgJgQQgIgRgVgOQgTgMgSgCIgKgBQgNAAgMAFg");
	this.shape_12.setTransform(26.8,22.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBEoQgggDgegUQgOgKgMgLQgLgLgHgPQgIgNgEgRQgGgRgDgWIgVAgQgCAEgDABQgEABgFgBIgNgFIgRgKIgRgMIgJgKQgDgEAAgEQAAgDACgEIEemxQACgDAEgBQAEgCAGACQAGABAIAEIAVANQANAIAGAGQAIAGADAGQAEAEAAAEQAAAEgCADIhrCjQASgEARAAQAQgBAPACQAPADANAFQANAGANAJQAhAVAOAcQAPAbgBAgQAAAfgNAiQgNAigVAhQgaAngeAaQgdAZgfAMQgXAIgXAAIgPgBgAAZgHQgPADgSAGIhABhQACAiAJAXQAIAWARAMQARAKAQAAQAQgBARgIQAPgJAPgOQAOgPALgRQANgTAJgTQAIgTACgTQACgSgFgPQgGgQgRgLQgIgEgKgDQgJgDgMAAQgMAAgPADg");
	this.shape_13.setTransform(-11.1,-9.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ABtEfIgagQIgZgSIgOgLQgDgFgBgEIACgJIAchpIifhqIhTBCQgEAEgEABQgFACgGgBIgPgHIgXgOIgXgRQgIgHgBgGQgBgGAGgGQAFgGAMgJIF9kjQAGgEAFgCQAFgBAHABQAHACAKAHIAbARIAfAVQAMAIAFAGQAFAHAAAFQABAFgDAIIh2HQQgEAPgDAIQgEAHgGABIgCAAQgFAAgJgEgAgagoIB4BPIA7jcIAAgBg");
	this.shape_14.setTransform(-51.5,-27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},9).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-41.7,211.9,102.9);


(lib.aboutboba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.bubbletapioka();
	this.instance.parent = this;
	this.instance.setTransform(-192.5,-139.2,0.385,0.385);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.aboutboba, new cjs.Rectangle(-192.5,-139.2,385.1,278.5), null);


(lib.___Camera___ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();


(lib.mediapicbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.brownsugar_1();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0,0.689,0.646,0,0,0,130.8,195.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90,-126.5,180,253);


(lib.Tween16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mediapicbtn();
	this.instance.parent = this;
	this.instance.setTransform(498.4,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.locationpicbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(178.7,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.menupicbtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-188.3,0);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.aboutpicbtn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-497.9,0);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.3,-126.5,1176.8,253.2);


(lib.Tween15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.instance = new lib.mediapicbtn();
	this.instance.parent = this;
	this.instance.setTransform(498.4,0.1);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.locationpicbtn();
	this.instance_1.parent = this;
	this.instance_1.setTransform(178.7,0);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.menupicbtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-188.3,0);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.aboutpicbtn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-497.9,0);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-588.3,-126.5,1176.8,253.2);


// stage content:
(lib.ProjectBoba = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_47 = function() {
		this.stop();
		
		function continues(){
			this.gotoAndPlay(71)
		}
		
		this.enterbtn.addEventListener("click",continues.bind(this))
	}
	this.frame_118 = function() {
		this.playBtn.visible = false;
		
		createjs.Sound.registerSound("Audio/CaptainMarvel.mp3","music");
		
		this.isPlaying=null;
		
		
		
		function playMusic(){
			if(this.isPlaying==null){
				this.sound = createjs.Sound.play("music");
			}
			else{
				this.sound.paused=false;
			}
			this.isPlaying=true;
			this.playBtn.visible=true;
			this.muteBtn.visible=false;
		}
		
		this.muteBtn.addEventListener("click",playMusic.bind(this));
		
		
		
		function muteMusic(){
			this.sound.paused=true;
			this.isPlaying=false;
			//createjs.Sound.stop(); kalo mau stop
			this.playBtn.visible=false;
			this.muteBtn.visible=true;
		}
		
		this.playBtn.addEventListener("click",muteMusic.bind(this));
		this.stop()
		
		function fb(){
			window.open("https://www.facebook.com/")
		}
		
		this.facebook.addEventListener("click",fb.bind(this))
		
		function ig(){
			window.open("https://www.instagram.com/")
		}
		
		this.instagram.addEventListener("click",ig.bind(this))
		this.stop();
		
		function menufun(){
			this.gotoAndPlay(143);
		}
		
		this.menubtn.addEventListener("click",menufun.bind(this))
		this.menupic.addEventListener("click",menufun.bind(this))
		
		function locationfun(){
			this.gotoAndPlay(311);
		}
		
		this.locationbtn.addEventListener("click",locationfun.bind(this))
		this.locationpic.addEventListener("click",locationfun.bind(this))
		
		function aboutfun(){
			this.gotoAndPlay(420);
		}
		
		this.aboutbtn.addEventListener("click",aboutfun.bind(this))
		this.aboutpic.addEventListener("click",aboutfun.bind(this))
		
		function mediafun(){
			this.gotoAndPlay(505);
		}
		
		this.mediabtn.addEventListener("click",mediafun.bind(this))
		this.mediapic.addEventListener("click",mediafun.bind(this))
	}
	this.frame_263 = function() {
		this.stop();
		function buy(){
			window.open("https://www.inbobashop.com/")
		}
		
		this.buy1.addEventListener("click",buy.bind(this))
		this.buy2.addEventListener("click",buy.bind(this))
		this.buy3.addEventListener("click",buy.bind(this))
		
		
		
		function backjkt(){
			this.gotoAndPlay(71)
		}
		
		this.backmenu.addEventListener("click",backjkt.bind(this))
	}
	this.frame_359 = function() {
		this.stop();
		
		function goJakarta(){
			this.gotoAndPlay(360)
		}
		
		this.jakartabtn.addEventListener("click",goJakarta.bind(this))
		
		function goTaiwan(){
			this.gotoAndPlay(385)
		}
		
		this.taiwanbtn.addEventListener("click",goTaiwan.bind(this))
		function backjkt(){
			this.gotoAndPlay(71)
		}
		
		this.backlocation.addEventListener("click",backjkt.bind(this))
	}
	this.frame_383 = function() {
		this.stop()
		
		function backjkt(){
			this.gotoAndPlay(312);
		}
		
		this.back1.addEventListener("click",backjkt.bind(this))
	}
	this.frame_407 = function() {
		this.stop()
		
		function backjkt(){
			this.gotoAndPlay(312)
		}
		
		this.back2.addEventListener("click",backjkt.bind(this))
	}
	this.frame_502 = function() {
		this.stop()
		
		function backjkt(){
			this.gotoAndPlay(71)
		}
		
		this.backabout.addEventListener("click",backjkt.bind(this))
	}
	this.frame_551 = function() {
		this.stop()
		
		function backjkt(){
			this.gotoAndPlay(71)
		}
		
		this.backmedia.addEventListener("click",backjkt.bind(this))
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(47).call(this.frame_47).wait(71).call(this.frame_118).wait(145).call(this.frame_263).wait(96).call(this.frame_359).wait(24).call(this.frame_383).wait(24).call(this.frame_407).wait(95).call(this.frame_502).wait(49).call(this.frame_551).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.parent = this;
	this.___camera___instance.setTransform(768,396);
	this.___camera___instance.depth = 0;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(359).to({regX:0.2,regY:0.2,scaleX:0.45,scaleY:0.45,x:433.3,y:337.1},24).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:768,y:396},0).to({scaleX:0.5,scaleY:0.5,x:1121.1,y:349},23).to({_off:true},1).wait(144));

	// Continue
	this.enterbtn = new lib.enter();
	this.enterbtn.name = "enterbtn";
	this.enterbtn.parent = this;
	this.enterbtn.setTransform(771.9,619.8);
	this.enterbtn._off = true;
	new cjs.ButtonHelper(this.enterbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.enterbtn).wait(47).to({_off:false},0).to({_off:true},1).wait(504));

	// IconI
	this.instance = new lib.icon();
	this.instance.parent = this;
	this.instance.setTransform(768,356.2,0.648,0.648,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({regX:0,scaleX:1.69,scaleY:1.69,y:245.5},47).to({_off:true},1).wait(504));

	// INs
	this.instance_1 = new lib.INs("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(767.2,425.3,0.388,0.388);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({scaleX:1,scaleY:1},47).to({_off:true},1).wait(504));

	// Audio
	this.playBtn = new lib.playBtn();
	this.playBtn.name = "playBtn";
	this.playBtn.parent = this;
	this.playBtn.setTransform(1436.6,198.7,0.625,0.625,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.playBtn, 0, 1, 1);

	this.muteBtn = new lib.muteBtn();
	this.muteBtn.name = "muteBtn";
	this.muteBtn.parent = this;
	this.muteBtn.setTransform(1436.6,196.7,0.625,0.625,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.muteBtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.muteBtn},{t:this.playBtn}]},118).to({state:[]},1).to({state:[]},384).wait(49));

	// About
	this.aboutbtn = new lib.Tween1();
	this.aboutbtn.name = "aboutbtn";
	this.aboutbtn.parent = this;
	this.aboutbtn.setTransform(791.5,904.1);
	this.aboutbtn.alpha = 0;
	this.aboutbtn._off = true;
	new cjs.ButtonHelper(this.aboutbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.aboutbtn).wait(71).to({_off:false},0).to({alpha:1},47).to({_off:true},1).wait(433));

	// Media
	this.instance_2 = new lib.mediabtn();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1297,665);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.mediabtn = new lib.mediabtn();
	this.mediabtn.name = "mediabtn";
	this.mediabtn.parent = this;
	this.mediabtn.setTransform(1297,665);
	new cjs.ButtonHelper(this.mediabtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_2}]},71).to({state:[{t:this.mediabtn}]},47).to({state:[]},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(71).to({_off:false},0).to({_off:true,alpha:1},47).wait(434));

	// Location
	this.instance_3 = new lib.locationbtn();
	this.instance_3.parent = this;
	this.instance_3.setTransform(975.8,665);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.locationbtn = new lib.locationbtn();
	this.locationbtn.name = "locationbtn";
	this.locationbtn.parent = this;
	this.locationbtn.setTransform(975.8,665);
	new cjs.ButtonHelper(this.locationbtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},71).to({state:[{t:this.locationbtn}]},47).to({state:[]},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(71).to({_off:false},0).to({_off:true,alpha:1},47).wait(434));

	// Social
	this.instance_4 = new lib.Tween19("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(1312.2,199.2);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween20("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(1312.2,199.2);

	this.instagram = new lib.instagram_1();
	this.instagram.name = "instagram";
	this.instagram.parent = this;
	this.instagram.setTransform(1354.2,199.2);
	new cjs.ButtonHelper(this.instagram, 0, 1, 1);

	this.facebook = new lib.facebook_1();
	this.facebook.name = "facebook";
	this.facebook.parent = this;
	this.facebook.setTransform(1270.2,199.2);
	new cjs.ButtonHelper(this.facebook, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},71).to({state:[{t:this.instance_5}]},46).to({state:[{t:this.facebook},{t:this.instagram}]},1).to({state:[]},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},0).to({_off:true,alpha:1},46).wait(435));

	// Menu
	this.instance_6 = new lib.menubtn();
	this.instance_6.parent = this;
	this.instance_6.setTransform(589,665);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.menubtn = new lib.menubtn();
	this.menubtn.name = "menubtn";
	this.menubtn.parent = this;
	this.menubtn.setTransform(589,665);
	new cjs.ButtonHelper(this.menubtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_6}]},71).to({state:[{t:this.menubtn}]},47).to({state:[]},1).wait(433));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(71).to({_off:false},0).to({_off:true,alpha:1},47).wait(434));

	// Title
	this.instance_7 = new lib.title();
	this.instance_7.parent = this;
	this.instance_7.setTransform(450,190.2);
	this.instance_7.alpha = 0;
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(71).to({_off:false},0).to({x:500,alpha:1},47).to({_off:true},1).wait(433));

	// Icon
	this.instance_8 = new lib.icon();
	this.instance_8.parent = this;
	this.instance_8.setTransform(150,156.7);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(71).to({_off:false},0).to({x:200,alpha:1},47).to({_off:true},1).wait(433));

	// Header
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000033").s().p("Eh3+AVrMAAAgrVMDv9AAAMAAAArVg");
	this.shape.setTransform(767.9,138.7);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(71).to({_off:false},0).to({_off:true},48).wait(433));

	// Picture
	this.instance_9 = new lib.Tween15("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(786.4,470.5);
	this.instance_9.alpha = 0;
	this.instance_9._off = true;

	this.instance_10 = new lib.Tween16("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(786.4,470.5);

	this.mediapic = new lib.mediapicbtn();
	this.mediapic.name = "mediapic";
	this.mediapic.parent = this;
	this.mediapic.setTransform(1282.8,470.6);
	new cjs.ButtonHelper(this.mediapic, 0, 1, 1);

	this.locationpic = new lib.locationpicbtn();
	this.locationpic.name = "locationpic";
	this.locationpic.parent = this;
	this.locationpic.setTransform(963.1,470.4);
	new cjs.ButtonHelper(this.locationpic, 0, 1, 1);

	this.menupic = new lib.menupicbtn();
	this.menupic.name = "menupic";
	this.menupic.parent = this;
	this.menupic.setTransform(596.1,470.4);
	new cjs.ButtonHelper(this.menupic, 0, 1, 1);

	this.aboutpic = new lib.aboutpicbtn();
	this.aboutpic.name = "aboutpic";
	this.aboutpic.parent = this;
	this.aboutpic.setTransform(286.5,470.5);
	new cjs.ButtonHelper(this.aboutpic, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},71).to({state:[{t:this.instance_10}]},46).to({state:[{t:this.aboutpic},{t:this.menupic},{t:this.locationpic},{t:this.mediapic}]},1).to({state:[]},1).to({state:[]},361).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(71).to({_off:false},0).to({_off:true,alpha:1},46).wait(435));

	// Motion
	this.instance_11 = new lib.icon();
	this.instance_11.parent = this;
	this.instance_11.setTransform(768,967,1.489,1.489,53.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(143).to({_off:false},0).to({rotation:-85.5,x:1482.8,y:589.9},71).to({_off:true},1).wait(337));

	// Mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_143 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_144 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAj0jzg");
	var mask_graphics_145 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_146 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_147 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_148 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_149 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_150 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_151 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_152 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_153 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_154 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_155 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_156 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_157 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_158 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_159 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAj0jzg");
	var mask_graphics_160 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_161 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_162 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_163 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_164 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_165 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_166 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_167 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_168 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAj0jzg");
	var mask_graphics_169 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_170 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_171 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_172 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_173 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_174 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_175 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_176 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_177 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_178 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_179 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_180 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_181 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_182 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_183 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_184 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAj0jzg");
	var mask_graphics_185 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_186 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_187 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_188 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_189 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_190 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_191 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_192 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_193 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAj0jzg");
	var mask_graphics_194 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_195 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_196 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlXAAjyjzg");
	var mask_graphics_197 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_198 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_199 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_200 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_201 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_202 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_203 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_204 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_205 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_206 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_207 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_208 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_209 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_210 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");
	var mask_graphics_211 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQD0jyFWAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlWAAj0jzg");
	var mask_graphics_212 = new cjs.Graphics().p("ApKJKQjyjzAAlXIAAAAQAAlXDyjzIAAAAQDzjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjzjzg");
	var mask_graphics_213 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDyjyFXAAIAAAAQFXAADzDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjzDzlXAAIAAAAQlXAAjyjzg");
	var mask_graphics_214 = new cjs.Graphics().p("ApJJKQjzjzAAlXIAAAAQAAlXDzjzIAAAAQDzjyFWAAIAAAAQFYAADyDyIAAAAQDzDzAAFXIAAAAQAAFXjzDzIAAAAQjyDzlYAAIAAAAQlWAAjzjzg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(143).to({graphics:mask_graphics_143,x:413.7,y:709.1}).wait(1).to({graphics:mask_graphics_144,x:427.6,y:709.1}).wait(1).to({graphics:mask_graphics_145,x:441.4,y:709.1}).wait(1).to({graphics:mask_graphics_146,x:455.3,y:709.1}).wait(1).to({graphics:mask_graphics_147,x:469.2,y:709.1}).wait(1).to({graphics:mask_graphics_148,x:483,y:709.1}).wait(1).to({graphics:mask_graphics_149,x:496.8,y:709.1}).wait(1).to({graphics:mask_graphics_150,x:510.7,y:709.1}).wait(1).to({graphics:mask_graphics_151,x:524.5,y:709.1}).wait(1).to({graphics:mask_graphics_152,x:538.4,y:709.1}).wait(1).to({graphics:mask_graphics_153,x:552.2,y:709.1}).wait(1).to({graphics:mask_graphics_154,x:566.1,y:709.1}).wait(1).to({graphics:mask_graphics_155,x:580,y:709.1}).wait(1).to({graphics:mask_graphics_156,x:585.3,y:709.1}).wait(1).to({graphics:mask_graphics_157,x:590.6,y:709.1}).wait(1).to({graphics:mask_graphics_158,x:595.9,y:709.1}).wait(1).to({graphics:mask_graphics_159,x:601.2,y:709.1}).wait(1).to({graphics:mask_graphics_160,x:606.5,y:709.1}).wait(1).to({graphics:mask_graphics_161,x:611.8,y:709.1}).wait(1).to({graphics:mask_graphics_162,x:617.1,y:709.1}).wait(1).to({graphics:mask_graphics_163,x:622.5,y:709.1}).wait(1).to({graphics:mask_graphics_164,x:627.8,y:709.1}).wait(1).to({graphics:mask_graphics_165,x:633.1,y:709.1}).wait(1).to({graphics:mask_graphics_166,x:638.4,y:709.1}).wait(1).to({graphics:mask_graphics_167,x:643.7,y:709.1}).wait(1).to({graphics:mask_graphics_168,x:649,y:709.1}).wait(1).to({graphics:mask_graphics_169,x:654.3,y:709.1}).wait(1).to({graphics:mask_graphics_170,x:659.7,y:709.1}).wait(1).to({graphics:mask_graphics_171,x:665,y:709.1}).wait(1).to({graphics:mask_graphics_172,x:670.3,y:709.1}).wait(1).to({graphics:mask_graphics_173,x:675.6,y:709.1}).wait(1).to({graphics:mask_graphics_174,x:680.9,y:709.1}).wait(1).to({graphics:mask_graphics_175,x:686.2,y:709.1}).wait(1).to({graphics:mask_graphics_176,x:691.5,y:709.1}).wait(1).to({graphics:mask_graphics_177,x:696.9,y:709.1}).wait(1).to({graphics:mask_graphics_178,x:702.2,y:709.1}).wait(1).to({graphics:mask_graphics_179,x:707.5,y:709.1}).wait(1).to({graphics:mask_graphics_180,x:712.8,y:709.1}).wait(1).to({graphics:mask_graphics_181,x:718.1,y:709.1}).wait(1).to({graphics:mask_graphics_182,x:723.4,y:709.1}).wait(1).to({graphics:mask_graphics_183,x:728.7,y:709.1}).wait(1).to({graphics:mask_graphics_184,x:734.1,y:709.1}).wait(1).to({graphics:mask_graphics_185,x:739.4,y:709.1}).wait(1).to({graphics:mask_graphics_186,x:744.7,y:709.1}).wait(1).to({graphics:mask_graphics_187,x:750,y:709.1}).wait(1).to({graphics:mask_graphics_188,x:755.3,y:709.1}).wait(1).to({graphics:mask_graphics_189,x:760.6,y:709.1}).wait(1).to({graphics:mask_graphics_190,x:765.9,y:709.1}).wait(1).to({graphics:mask_graphics_191,x:771.3,y:709.1}).wait(1).to({graphics:mask_graphics_192,x:776.6,y:709.1}).wait(1).to({graphics:mask_graphics_193,x:781.9,y:709.1}).wait(1).to({graphics:mask_graphics_194,x:787.2,y:709.1}).wait(1).to({graphics:mask_graphics_195,x:801.2,y:709.1}).wait(1).to({graphics:mask_graphics_196,x:815.3,y:709.1}).wait(1).to({graphics:mask_graphics_197,x:829.3,y:709.1}).wait(1).to({graphics:mask_graphics_198,x:843.3,y:709.1}).wait(1).to({graphics:mask_graphics_199,x:857.4,y:709.1}).wait(1).to({graphics:mask_graphics_200,x:871.4,y:709.1}).wait(1).to({graphics:mask_graphics_201,x:885.4,y:709.1}).wait(1).to({graphics:mask_graphics_202,x:899.5,y:709.1}).wait(1).to({graphics:mask_graphics_203,x:913.5,y:709.1}).wait(1).to({graphics:mask_graphics_204,x:927.6,y:709.1}).wait(1).to({graphics:mask_graphics_205,x:941.6,y:709.1}).wait(1).to({graphics:mask_graphics_206,x:955.7,y:709.1}).wait(1).to({graphics:mask_graphics_207,x:969.7,y:709.1}).wait(1).to({graphics:mask_graphics_208,x:983.8,y:709.1}).wait(1).to({graphics:mask_graphics_209,x:997.9,y:709.1}).wait(1).to({graphics:mask_graphics_210,x:1012,y:709.1}).wait(1).to({graphics:mask_graphics_211,x:1026,y:709.1}).wait(1).to({graphics:mask_graphics_212,x:1040.1,y:709.1}).wait(1).to({graphics:mask_graphics_213,x:1054.2,y:709.1}).wait(1).to({graphics:mask_graphics_214,x:1068.3,y:709.1}).wait(338));

	// Text
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_1.setTransform(998.5,740.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_2.setTransform(972.8,740.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_3.setTransform(947.2,740.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_4.setTransform(921.5,740.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_5.setTransform(895.9,740.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_6.setTransform(870.2,740.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("Ag2A6QgPgPAAgpQAAgrAQgPQAPgPAnAAQAnAAAPAPQAPAOAAAqQAAAqgPAPQgQAPgnAAQgnAAgPgOg");
	this.shape_7.setTransform(844.6,740.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AhmEzQgmgJgYgPQgZgPgKgVQgMgUAAgaQAAgPAFgOQADgOAIgNQAIgNALgMQALgLAPgLQgUgLgLgSQgLgSAAgXQAAgbAMgWQANgXAUgSQgQgRgKgXQgKgWAAgjQAAglANgcQANgdAXgUQAXgUAggKQAggLAmAAQATAAASACQASADAPAEICFAAQAIAAAFAKQAFALAAAYQAAAXgFALQgGAKgHAAIgxAAQAKALAFAPQAEAOAAAQQAAAkgMAcQgMAdgXATQgXATggALQggAKgnAAQgUgBgSgEQgSgFgKgHQgGAGgEAJQgFAJAAAJQAAANANAJQALAIAWABIBlAEQAjABAcAKQAcAIATAQQATAPAKAXQAKAVAAAcQAAAfgOAcQgNAbgbAUQgbAUgpANQgqALg1AAQg2AAglgIgAhNCOQgIAIgEAHQgFAIgBAHQgCAHAAAIQAAAXAYANQAYALArABQAaAAASgGQASgFALgJQAMgJAEgLQAFgLAAgMQAAgWgRgLQgRgLgdgBIhTgCQgMAIgHAJgAgpjiQgNAGgIAJQgJAKgFAOQgEANAAAPQAAAfATAUQATASAhAAQARAAANgGQANgGAJgKQAIgJAFgNQAEgNAAgOQAAgigSgTQgTgSghAAQgSAAgNAGg");
	this.shape_8.setTransform(808.7,732.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("ABxDnQgMgCgHgCQgGgCgDgEQgDgDAAgFIAAjtQAAgfgEgSQgFgRgIgMQgJgNgNgGQgNgHgSAAQgWAAgXARQgXAPgZAgIAAEVQAAAFgCADQgDAEgHACQgHACgLACIgdABIgcgBQgLgCgHgCQgHgCgDgEQgDgDAAgFIAAmhQAAgFADgDQACgEAGgCQAGgDAKAAQAJgCAPAAQAPAAAKACQAKAAAFADQAFACADAEQACADAAAFIAAAwQAjglAkgTQAjgTAmAAQArAAAeAOQAdAPASAXQASAZAIAgQAIAhAAAtIAAEBQAAAFgDADQgDAEgGACQgHACgLACIgdABIgcgBg");
	this.shape_9.setTransform(760.6,724);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgcE/QgKgCgIgCQgGgCgDgEQgDgDAAgFIAAmgQAAgFADgDQADgEAGgCQAIgDAKgCQAMgBAQAAQASAAAKABQAMACAHADQAGACAEAEQACADAAAFIAAGgQAAAFgCADQgEAEgGACQgHACgMACIgcABIgcgBgAg1jQQgOgNAAgjQAAgjAOgOQAPgOAmAAQAoAAAOAOQAOANAAAiQAAAkgPANQgOAOgnAAQgnAAgOgNg");
	this.shape_10.setTransform(723,715.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhzE4QgigSgUggQgVgfgKgqQgJgqAAgvQAAg3AMgtQAMgrAXgfQAXggAigRQAigRAtAAQAiAAAcAPQAdAOAcAcIAAjjQAAgFADgDQACgEAHgDQAHgCALgBQALgCASAAQARAAALACQAMABAGACQAHADADAEQACADAAAFIAAJmQAAAFgCAEQgCADgGADQgGACgJABIgYABIgYgBQgKgBgFgCQgGgDgDgDQgCgEAAgFIAAguQghAigjAUQgkATgqAAQgwAAgggTgAgqgcQgRALgKASQgKATgFAYQgFAYAAAZQAAAaAEAZQAEAZAKATQAKAUAQALQAPAMAZAAQALAAAMgDQALgEAMgIQAMgIANgNIAbggIAAiLQgZgegXgRQgYgRgYAAQgXAAgQAMg");
	this.shape_11.setTransform(684.2,714.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AhjDjQgcgJgUgRQgVgRgLgZQgLgZAAgiQAAgkAOgbQAOgbAdgRQAcgSArgIQApgJA4AAIAoAAIAAgZQAAgUgDgOQgFgPgJgKQgJgKgPgFQgQgEgVAAQgdAAgYAGQgXAHgSAIIgdAPQgNAGgHAAQgGAAgDgDQgEgEgCgFQgEgHgBgJIgBgTQAAgPACgJQACgIAHgGQAGgIARgIQARgIAVgHQAXgHAZgEQAagFAbAAQAyAAAjAKQAiAJAWAVQAXATALAgQAKAfAAArIAAEYQAAAHgFAEQgFADgJACQgKACgVAAQgVAAgJgCQgJgCgEgDQgFgEAAgHIAAghQgaAcggAPQgiAQgnAAQghAAgcgJgAgRAkQgVAEgNAIQgMAJgGAMQgGAMAAAPQAAAbARAOQARAPAdABQAYgBAVgNQAUgMAWgZIAAhHIgtAAQgdAAgSAFg");
	this.shape_12.setTransform(634.7,724.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhmDcQgpgPgbgeQgbgdgNgsQgNgqAAg4QAAg0AOgtQAOgsAdgfQAdggAqgRQArgSA5AAQA4AAAqAPQAoAPAcAeQAbAeANArQANArAAA4QAAA0gOAsQgOAsgdAgQgdAggrARQgrASg5AAQg3AAgqgQgAgsiEQgUAKgMASQgNATgGAaQgHAaAAAhQAAAeAGAaQAEAaAMATQALATAUALQAUALAdAAQAZAAAVgKQATgKAMgSQAOgSAFgaQAHgaAAghQgBgegEgaQgFgbgMgSQgMgUgTgLQgUgLgdAAQgZAAgUAKg");
	this.shape_13.setTransform(586.5,724.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AiBExQgQAAgKgJQgLgKAAgUIAAomQAAgFAEgDQACgEAHgCQAIgDAMgBQALgCASAAQATAAALACQAMABAHADQAHACADAEQADADAAAFIAAHnIC+AAQAFAAADADQAEACACAGQACAGACAKIABAXIgBAYIgEAQQgCAGgEADQgDADgFAAg");
	this.shape_14.setTransform(543.3,716.4);

	var maskedShapeInstanceList = [this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6,this.shape_7,this.shape_8,this.shape_9,this.shape_10,this.shape_11,this.shape_12,this.shape_13,this.shape_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},143).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},71).to({state:[]},1).wait(337));

	// Item
	this.instance_12 = new lib.greenboba();
	this.instance_12.parent = this;
	this.instance_12.setTransform(821,534,0.379,0.379);

	this.instance_13 = new lib.ThaiBubbleDrink();
	this.instance_13.parent = this;
	this.instance_13.setTransform(228,530,0.272,0.272);

	this.instance_14 = new lib.shutterstock_1240497277_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(228,286,0.29,0.29);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},215).to({state:[{t:this.instance_14},{t:this.instance_13},{t:this.instance_12}]},48).to({state:[]},1).wait(288));

	// Back
	this.backmenu = new lib.backbtnpink();
	this.backmenu.name = "backmenu";
	this.backmenu.parent = this;
	this.backmenu.setTransform(1434,740.3,1.424,1.424);
	this.backmenu._off = true;
	new cjs.ButtonHelper(this.backmenu, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backmenu).wait(215).to({_off:false},0).wait(48).to({_off:true},1).wait(288));

	// Text
	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AAIBdIAAgFQAFAAABgCQABAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgEgFgIIgYglIgIAIIAAAXQgBAPADADQADAEAIABIAAAFIhCAAIAAgFQAJgBADgEQACgDAAgPIAAiBQAAgOgDgEQgCgDgJgCIAAgFIA1AAIAAB5IAcgdQAJgIACgEQACgEABgDQgBgEgDgCQgCgDgJgBIAAgFIA5AAIAAAFQgIAAgGAEQgGADgSASIgOANIAeAsQASAaADAEQAFAEAIABIAAAFg");
	this.shape_15.setTransform(1169,619.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("Ag7BfIAAgEQAyg8AKgUQALgUAAgTQAAgPgJgJQgIgKgNAAQgVAAgMAWIgFgDQAIgaAPgMQAPgMATAAQAOgBALAHQAMAGAGAMQAHALAAAKQAAATgKASQgOAYgtAuIAnAAQAOAAAFgBQAEgCADgDQADgCAFgKIAFAAIgLA2g");
	this.shape_16.setTransform(1153.3,619.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgzBYQgIgFAAgIQAAgHAFgEQAEgEAGAAQAFAAAEABIAPANQANAKALAAQAKAAAHgIQAIgIAAgMQAAgTgNgPQgOgQgYgGIAAgEQAQgFAGgDQAFgEAEgIQAFgIAAgJQAAgLgJgIQgHgJgMABQgTAAgOAUIgFgCQAKgWAPgMQAQgLASAAQATAAAMALQANAMAAAPQAAALgGAJQgGAKgMAHQAQAIAIALQAJALAAARQAAAdgVAUQgVAVgjgBQgXABgLgJg");
	this.shape_17.setTransform(1139,619.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AgPA9QgHgHAAgKQAAgJAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAJQAAAKgHAHQgHAHgJAAQgJAAgGgHgAgPgbQgHgIAAgJQAAgKAHgGQAHgHAIABQAJgBAHAHQAHAGAAAKQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
	this.shape_18.setTransform(1121,622.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhVBdIAAgFIAGAAQAJAAAEgDQAEgCACgFQABgDAAgOIAAh5QAAgOgBgEQgCgDgEgDQgFgDgIAAIgGAAIAAgFIBiAAIAAAFIgIAAQgHAAgFADQgEACgCAFQgBADAAAOIAAB1QAAAOABAEQACAEAFACQADABANAAIAPAAQAPAAAJgFQALgFAGgLQAIgLAGgWIAGAAIgHBBg");
	this.shape_19.setTransform(1094.3,619.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AAJBdIAAgFQADAAADgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQgBgEgFgIIgZglIgIAIIAAAXQAAAPADADQADAEAIABIAAAFIhBAAIAAgFQAHgBAEgEQACgDAAgPIAAiBQAAgOgCgEQgDgDgIgCIAAgFIAzAAIAAB5IAdgdQAJgIADgEQABgEAAgDQAAgEgCgCQgDgDgJgBIAAgFIA5AAIAAAFQgIAAgGAEQgHADgRASIgOANIAeAsQASAaAEAEQAEAEAHABIAAAFg");
	this.shape_20.setTransform(1171.3,586.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgVBfIAyiYIgmAAQgXAAgKAFQgJAFgFALIgFAAIANg6IBuAAIg+C9g");
	this.shape_21.setTransform(1156.1,586.7);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("Ag7BeIAAgCQAyg9AKgUQALgUAAgTQAAgOgJgKQgIgKgNABQgVgBgMAWIgFgCQAIgaAPgNQAPgNATAAQAOABALAGQAMAHAGALQAHALAAAKQAAASgKATQgOAZgtAtIAnAAQAOgBAFAAQAEgCADgDQADgDAFgJIAFAAIgLA1g");
	this.shape_22.setTransform(1141.6,586.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgPA9QgHgHAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAHQgHAGgJABQgJgBgGgGgAgPgcQgHgGAAgKQAAgJAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_23.setTransform(1123.3,589.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AAeBdIAAgFIAGAAQAIAAAFgDQAEgCACgFQABgDAAgOIAAiIIhGCoIgDAAIhIinIAACBIAAARQACAHAGAEQAGAFANAAIAAAFIhAAAIAAgFIACAAQAGAAAGgCQAFgCADgEQADgEABgGIAAgOIAAh0QAAgOgBgEQgCgDgEgDQgFgDgIAAIgGAAIAAgFIBMAAIAzB6IAzh6IBLAAIAAAFIgGAAQgIAAgFADQgEACgCAFQgBADAAAOIAAB5QAAAOABAEQACADAFADQAEADAIAAIAGAAIAAAFg");
	this.shape_24.setTransform(1098.4,586.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAOA9QgGgFgCgKQgXAVgSAAQgLAAgHgIQgIgHABgLQAAgOAMgMQAMgMAqgSIAAgNQAAgOgCgEQgBgEgEgDQgEgDgGAAQgIAAgGAEQgDADgBADQAAADAFAEQAEAGAAAGQAAAGgEAFQgGAFgIAAQgIAAgGgFQgGgGAAgHQAAgJAIgJQAIgJANgFQAOgFAPAAQASAAALAIQAKAIADAJQACAFAAAVIAAAxQAAAIABADIACADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQAEAAAEgFIADADQgHAKgGAFQgIAFgJAAQgMAAgFgGgAgSAOQgFAHAAAIQAAAGAEAFQAEAEAGAAQAHAAAIgIIAAgqQgQAJgIALg");
	this.shape_25.setTransform(1477.8,556.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgLBbQgIgDgIgHIgVANIgFAAIAAihQAAgLgBgDQgBgEgDgBQgDgCgHgBIAAgFIA1AAIAABHQAPgRATAAQAOAAALAIQAMAIAGAOQAHANAAATQAAAUgIASQgJARgOAJQgOAJgSAAQgJAAgIgEgAgPgLIAAA4IABAWQABAIAGAFQAFAFAHAAQAHAAAFgEQAFgEADgMQADgLAAgfQAAgcgHgLQgFgIgJAAQgLAAgLANg");
	this.shape_26.setTransform(1462.3,553.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgrAvQgQgUAAgbQAAgaAQgUQAQgVAbAAQAQAAAPAJQAOAIAHAQQAIAQAAASQAAAbgOASQgRAXgdAAQgcAAgPgVgAgLg0QgFAFgBAQQgCAPAAAbQAAAPACAMQABAKAFAFQAFAFAGAAQAGAAAEgDQAGgFABgIQADgNAAgnQAAgXgDgJQgDgIgEgEQgEgDgFAAQgHAAgFAFg");
	this.shape_27.setTransform(1447.9,556.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AhVBdIAAgFQANAAAFgDQAEgCADgEQABgEAAgPIAAh3QAAgPgBgEQgCgEgGgCQgEgDgNAAIAAgFIBYAAQAgAAANAGQANAGAJALQAHALAAANQAAANgKALQgJAKgZAGQAaAGALAIQAPANAAAUQABAVgSANQgUARgnAAgAgPA9IgBAHQAAAHAEAEQADAEAIAAQAKAAAKgFQAJgFAEgJQAGgKgBgLQABgNgHgKQgGgLgLgEQgKgEgTAAgAgPgIQARAAAKgFQAJgEAFgIQAFgIAAgMQAAgMgFgIQgEgIgKgEQgJgEgSAAg");
	this.shape_28.setTransform(1431.3,553.5);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AAEBdIAAgFQAHgBADgFQADgDAAgOIAAg5QAAgPgBgEQgCgEgDgCQgDgCgDAAQgFAAgFADQgFAEgGAKIAABDQAAAOACADQADAFAIABIAAAFIhBAAIAAgFQAIgBADgEQADgDAAgPIAAiBQAAgOgDgEQgDgDgIgCIAAgFIA0AAIAABKQAKgLAIgEQAJgFAJAAQANAAAIAHQAIAHAEAJQACAJABAVIAAAyQAAAPACADQADAEAIABIAAAFg");
	this.shape_29.setTransform(1407.5,553.5);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgNBRQgIgHgDgIQgBgEAAgVIAAhEIgRAAIAAgFQASgMAMgNQAMgOAIgQIAEAAIAAAuIAfAAIAAAOIgfAAIAABOQAAALACADQAAADADACQABABAAAAQABABABAAQAAAAABAAQAAAAABAAQAJAAAIgNIAEADQgLAagZAAQgLAAgJgHg");
	this.shape_30.setTransform(1395.1,554.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgiBfIAAgFQAJAAAEgFQADgDAAgNIAAhKQAAgOgDgDQgDgEgKgBIAAgFIA1AAIAABlQAAANADAEQADAEAKAAIAAAFgAgOg5QgGgHAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_31.setTransform(1386.5,553.3);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AAjBCIgjhdIghBdIgHAAIgjhcQgHgVgFgGQgEgFgHgCIAAgFIBBAAIAAAFQgGAAgDACQgDACAAADIAFANIATAxIASgxIgCgDQgEgKgDgDQgDgCgGgCIAAgFIBAAAIAAAFQgIABgCABQgCACAAADQAAADAEAKIASAxIAQgsQAEgLAAgDQAAgGgDgCQgCgCgIgBIAAgFIAmAAIAAAFQgGABgEAEQgDADgGARIgkBlg");
	this.shape_32.setTransform(1372.4,556.6);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_33.setTransform(1349.3,556.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFFFF").s().p("AgiBfIAAgFQAJAAAEgFQADgDAAgNIAAhKQAAgOgDgDQgDgEgKgBIAAgFIA1AAIAABlQAAANADAEQADAEAKAAIAAAFgAgOg5QgGgHAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_34.setTransform(1339.1,553.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFFFF").s().p("AAEBdIAAgFQAHgBADgFQADgDAAgOIAAg5QAAgPgBgEQgCgEgDgCQgDgCgDAAQgFAAgFADQgFAEgGAKIAABDQAAAOACADQADAFAIABIAAAFIhBAAIAAgFQAIgBADgEQADgDAAgPIAAiBQAAgOgDgEQgDgDgIgCIAAgFIA0AAIAABKQAKgLAIgEQAJgFAJAAQANAAAIAHQAIAHAEAJQACAJABAVIAAAyQgBAPADADQADAEAIABIAAAFg");
	this.shape_35.setTransform(1327.4,553.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFFFF").s().p("AgNBRQgIgHgDgIQgBgEAAgVIAAhEIgRAAIAAgFQASgMAMgNQAMgOAIgQIAEAAIAAAuIAfAAIAAAOIgfAAIAABOQAAALACADQAAADADACQABABAAAAQABABABAAQAAAAABAAQAAAAABAAQAJAAAIgNIAEADQgLAagZAAQgLAAgJgHg");
	this.shape_36.setTransform(1315,554.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFFFF").s().p("AgrAvQgQgUAAgbQAAgaAQgUQAQgVAbAAQARAAAOAJQAOAIAHAQQAIAQAAASQAAAbgOASQgRAXgdAAQgbAAgQgVgAgLg0QgEAFgCAQQgCAPAAAbQAAAPACAMQACAKAEAFQAGAFAFAAQAGAAAEgDQAFgFACgIQADgNAAgnQAAgXgDgJQgCgIgFgEQgEgDgFAAQgGAAgGAFg");
	this.shape_37.setTransform(1303.2,556.4);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFFFF").s().p("AgsAvQgPgUAAgbQAAgaAQgUQAQgVAbAAQARAAAOAJQAOAIAIAQQAHAQAAASQAAAbgOASQgQAXgeAAQgcAAgQgVgAgKg0QgFAFgCAQQgCAPAAAbQAAAPACAMQACAKAFAFQAEAFAGAAQAGAAAEgDQAGgFABgIQADgNAAgnQAAgXgDgJQgDgIgEgEQgEgDgGAAQgGAAgEAFg");
	this.shape_38.setTransform(1289.2,556.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFFFF").s().p("AAqBCIAAgFQAIgBADgFQADgEAAgNIAAg2QAAgRgCgFQgBgEgDgDQgDgCgEAAQgGAAgGAEQgGAFgGAIIAABEQAAAOACADQADAFAJABIAAAFIhBAAIAAgFQAGAAADgDQADgCABgEQABgDAAgLIAAg2QAAgRgCgFQgBgEgDgDQgDgCgEAAQgGAAgEADQgHAEgHAKIAABEQAAANADAFQADAEAIABIAAAFIhCAAIAAgFQAIgBAEgEQACgDAAgPIAAhHQAAgPgDgDQgCgEgJgBIAAgFIA0AAIAAARQALgMAJgEQAJgFAKAAQANAAAHAGQAIAGAFALQALgMAKgFQAKgGALAAQANAAAIAGQAIAGADAKQADAJAAAUIAAA0QAAAPADADQACAEAJABIAAAFg");
	this.shape_39.setTransform(1270.7,556.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#FFFFFF").s().p("AgPBfQgIgCgLgEQgHgDgEAAQgEAAgDADQgEACgDAGIgFAAIAAhGIAFAAQAGAdASAQQARAQASAAQAPAAAKgJQAIgJABgKQgBgHgDgGQgEgHgGgFQgIgFgRgKQgZgMgLgIQgLgIgGgLQgGgLAAgNQAAgWAQgQQARgPAYAAQAJAAAIACQAHABAJAFQAJAFADAAQAEAAACgDQACgCACgIIAEAAIACA9IgGAAQgEgXgPgOQgQgOgRAAQgOAAgIAHQgIAIAAAJQAAAHACAEQAEAHAJAHQAHAEAWAMQAgAQAMANQALAOAAASQAAAYgSAQQgSARgcAAQgIAAgIgCg");
	this.shape_40.setTransform(1251.3,553.6);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_41.setTransform(1230.3,556.4);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFFFF").s().p("AghBdIAAgFQAIAAAEgFQACgDAAgOIAAiDQAAgOgDgDQgCgEgJgBIAAgFIA0AAIAACeQAAAOADAEQAEADAIABIAAAFg");
	this.shape_42.setTransform(1220.2,553.5);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFFFF").s().p("AhEBgIAAgFQAIgBAEgEQADgDAAgNIAAiGQAAgOgDgEQgDgDgJgBIAAgFIA1AAIAAARQAHgKAHgEQAJgHAMAAQAOAAAMAJQALAJAGAQQAGAPAAASQAAAUgGAPQgGAQgMAIQgMAJgOAAQgLAAgIgFQgHgEgIgIIAAAvQABAKABAEQACADADACQADACAIAAIAAAFgAgPg6IAABDQAMARANAAQAHAAAFgIQAHgMAAgfQAAghgIgMQgFgIgJAAQgMAAgKAUg");
	this.shape_43.setTransform(1208,559.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFFFF").s().p("AhEBgIAAgFQAIgBAFgEQACgDAAgNIAAiGQAAgOgDgEQgDgDgJgBIAAgFIA1AAIAAARQAHgKAHgEQAJgHAMAAQAOAAAMAJQALAJAGAQQAGAPAAASQAAAUgGAPQgHAQgLAIQgMAJgPAAQgKAAgIgFQgHgEgIgIIAAAvQABAKABAEQACADADACQADACAIAAIAAAFgAgPg6IAABDQAMARANAAQAHAAAFgIQAHgMAAgfQAAghgIgMQgFgIgJAAQgMAAgKAUg");
	this.shape_44.setTransform(1192.5,559.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFFFF").s().p("AAJBeIAAgEIAEAAQALAAADgEQAEgCAAgEIgBgFIgEgKIgKgYIhAAAIgJATQgDAJAAAFQAAAJAGADQAEADAOABIAAAEIg+AAIAAgEQAKgCAHgHQAGgGAKgWIBBiTIADAAIBCCXQAKAWAHAFQAEAFAIABIAAAEgAgsAfIA4AAIgcg+g");
	this.shape_45.setTransform(1174.9,553.4);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFFFF").s().p("AAEBCIAAgFQAIgBACgFQADgEAAgNIAAg4QAAgQgCgEQgBgEgCgCQgDgCgEAAQgKAAgLAQIAABEQAAAOADAEQACAEAHABIAAAFIhAAAIAAgFQAIgBADgEQADgDAAgPIAAhHQAAgPgDgDQgCgEgJgBIAAgFIA0AAIAAAQQAKgKAIgFQAJgFAKAAQANAAAIAHQAIAHADAKQACAIAAAWIAAAxQAAAPADADQADAEAIABIAAAFg");
	this.shape_46.setTransform(1151.7,556.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_47.setTransform(1137.8,556.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_48.setTransform(1125.3,556.4);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFFFF").s().p("Ag2BCIAAgFQAIgBADgEQADgEAAgQIAAhGQAAgLgBgDQgBgEgDgCQgCgBgHgBIAAgFIA0AAIAAAdQAMgUAKgGQAJgHAJAAQAIAAAEAFQAFAFAAAIQAAAJgFAFQgEAFgGAAQgIAAgFgEIgGgFIgDgBQgEAAgEADQgGAEgCAJQgEANAAAPIAAAeIAAAHQAAAIABACQABAEADACQADABAIABIAAAFg");
	this.shape_49.setTransform(1113.5,556.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFFFF").s().p("AgoBaQgRgHgNgMQgOgMgHgOQgKgTAAgXQAAgpAdgdQAegdArAAQAOAAALACQAGABAOAFQANAGADAAQAEAAADgDQADgDADgIIAFAAIAABBIgFAAQgJgagTgOQgSgOgWAAQgTAAgOAMQgOALgGAVQgGAVAAAVQAAAbAHAUQAGAUAOAJQAOAKASAAIAOgCIAPgEIAAgmQAAgLgCgEQgCgDgEgCQgFgDgHAAIgEAAIAAgFIBaAAIAAAFQgLABgEACQgEACgCAFQgBACAAALIAAAmQgSAIgTAEQgTAEgVAAQgZAAgSgHg");
	this.shape_50.setTransform(1096.5,553.5);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFFFF").s().p("AAJBdIAAgFQADAAADgCQAAAAAAgBQABAAAAAAQAAgBAAAAQABgBAAAAQgBgEgFgIIgZglIgIAIIAAAXQAAAPADADQADAEAJABIAAAFIhCAAIAAgFQAHgBAEgEQACgDAAgPIAAiBQAAgOgCgEQgDgDgIgCIAAgFIAzAAIAAB5IAdgdQAJgIACgEQACgEAAgDQAAgEgCgCQgDgDgJgBIAAgFIA5AAIAAAFQgIAAgGAEQgGADgSASIgOANIAeAsQASAaAEAEQAEAEAHABIAAAFg");
	this.shape_51.setTransform(593.1,613.7);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFFFF").s().p("AgyBWQgJgGABgIQgBgFAFgFQAFgEAFAAQAGAAAFACQAFACAOAJIAOAIQADACAGAAQALAAAIgIQAIgJAAgLQAAgYgYgPQgXgOglAAIgLAAIAhheIBWAAIgOAkIhIAAIgHASQAvACAZAWQAVARAAAaQAAARgKARQgJAQgSAJQgSAJgUAAQgXAAgMgJg");
	this.shape_52.setTransform(577.6,613.9);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("AgzBYQgIgFAAgIQAAgHAFgEQAEgEAGgBQAFAAAEACIAPANQANAKALAAQAKAAAHgIQAIgIAAgMQAAgTgNgPQgOgQgYgGIAAgEQAQgFAGgDQAFgEAEgIQAFgIAAgJQAAgLgJgIQgHgJgMABQgTAAgOAUIgFgCQAKgWAPgMQAQgLASAAQATAAAMALQANAMAAAQQAAAKgGAJQgGAKgMAHQAQAIAIALQAJALAAARQAAAdgVAUQgVAVgjgBQgXABgLgJg");
	this.shape_53.setTransform(563.1,613.7);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#FFFFFF").s().p("AgPA9QgHgHAAgJQAAgKAHgHQAGgGAJAAQAJAAAHAGQAHAHAAAKQAAAJgHAHQgHAHgJAAQgJAAgGgHgAgPgbQgHgIAAgJQAAgKAHgGQAHgHAIABQAJgBAHAHQAHAGAAAKQAAAJgHAIQgHAGgJAAQgIAAgHgGg");
	this.shape_54.setTransform(545,616.6);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#FFFFFF").s().p("AhVBdIAAgFIAGAAQAIAAAGgDQADgCACgFQACgDAAgOIAAh5QAAgOgCgEQgBgDgFgDQgFgDgIAAIgGAAIAAgFIBiAAIAAAFIgIAAQgHAAgFADQgEACgBAFQgCADAAAOIAAB1QAAAOACAEQABAEAFACQADABAMAAIAQAAQAOAAALgFQAJgFAIgLQAGgLAHgWIAGAAIgHBBg");
	this.shape_55.setTransform(525.3,613.7);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#FFFFFF").s().p("AAIBdIAAgFQAFAAACgCQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAAAQAAgEgFgIIgYglIgIAIIAAAXQgBAPADADQADAEAIABIAAAFIhCAAIAAgFQAIgBAEgEQACgDAAgPIAAiBQAAgOgDgEQgCgDgJgCIAAgFIA1AAIAAB5IAcgdQAJgIACgEQACgEABgDQgBgEgDgCQgCgDgJgBIAAgFIA5AAIAAAFQgIAAgGAEQgGADgSASIgOANIAeAsQASAaADAEQAFAEAIABIAAAFg");
	this.shape_56.setTransform(602.4,580.7);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#FFFFFF").s().p("AgyBWQgIgGAAgIQAAgFAEgFQAEgEAHAAQAEAAAGACQAGACANAJIAOAIQAEACAFAAQALAAAIgIQAIgJAAgLQAAgYgYgPQgYgOgkAAIgLAAIAhheIBWAAIgOAkIhIAAIgHASQAvACAZAWQAVARgBAaQAAARgJARQgKAQgSAJQgRAJgUAAQgWAAgNgJg");
	this.shape_57.setTransform(586.9,580.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#FFFFFF").s().p("Ag7BfIAAgDQAyg9AKgUQALgTAAgUQAAgOgJgKQgIgKgNABQgVgBgMAWIgFgCQAIgaAPgNQAPgNATAAQAOABALAGQAMAHAGALQAHALAAAKQAAASgKATQgOAZgtAsIAnAAQAOABAFgBQAEgCADgDQADgDAFgJIAFAAIgLA2g");
	this.shape_58.setTransform(572.6,580.5);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#FFFFFF").s().p("AgPA9QgHgHAAgKQAAgIAHgHQAGgHAJAAQAJAAAHAHQAHAHAAAIQAAAKgHAHQgHAGgJABQgJgBgGgGgAgPgcQgHgGAAgKQAAgJAHgHQAHgGAIAAQAJAAAHAGQAHAHAAAJQAAAKgHAGQgHAHgJAAQgIAAgHgHg");
	this.shape_59.setTransform(554.3,583.6);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#FFFFFF").s().p("AAeBdIAAgFIAGAAQAIAAAFgDQAEgCACgFQABgDAAgOIAAiIIhGCoIgDAAIhIinIAACBIAAARQACAHAGAEQAGAFANAAIAAAFIhAAAIAAgFIACAAQAGAAAGgCQAFgCADgEQADgEABgGIAAgOIAAh0QAAgOgBgEQgCgDgEgDQgFgDgIAAIgGAAIAAgFIBMAAIAzB6IAzh6IBLAAIAAAFIgGAAQgIAAgFADQgEACgCAFQgBADAAAOIAAB5QAAAOABAEQACADAFADQAEADAIAAIAGAAIAAAFg");
	this.shape_60.setTransform(529.4,580.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#FFFFFF").s().p("AANA9QgGgFgBgKQgXAVgSAAQgLAAgHgIQgHgHgBgLQAAgOANgMQANgMApgSIAAgNQAAgOgCgEQgBgEgDgDQgFgDgFAAQgKAAgFAEQgEADABADQAAADADAEQAFAGABAGQgBAGgFAFQgFAFgHAAQgJAAgGgFQgGgGAAgHQAAgJAIgJQAIgJAOgFQAOgFAOAAQASAAAKAIQALAIADAJQACAFAAAVIAAAxQAAAIABADIACADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQADAAAEgFIAFADQgIAKgHAFQgHAFgKAAQgKAAgHgGgAgRAOQgGAHAAAIQAAAGAFAFQADAEAGAAQAHAAAIgIIAAgqQgQAJgHALg");
	this.shape_61.setTransform(707.4,550.5);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_62.setTransform(693.9,550.6);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#FFFFFF").s().p("AgwBdIAAgFIAHAAQAIAAAFgDQADgCACgFQACgDAAgOIAAiOIgOAAQgSAAgJAIQgMALgDAVIgFAAIAAgzIClAAIAAAzIgFAAQgEgSgFgHQgGgIgJgFQgFgCgNAAIgOAAIAACOQAAAOACAEQABADAFADQAEADAIAAIAHAAIAAAFg");
	this.shape_63.setTransform(680.7,547.7);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s().p("AgpAuQgLgSAAgaQAAgfARgTQARgTAWAAQAUAAAOAQQAOAQABAfIhFAAQACAZAMAOQAIAMAOAAQAIAAAGgFQAHgEAIgMIAEADQgKAVgNAJQgMAJgRAAQgbAAgPgWgAgIgzQgIAMAAAVIAAAFIAkAAQAAgWgCgIQgDgIgFgFQgDgCgFAAQgGAAgEAHg");
	this.shape_64.setTransform(658.8,550.6);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#FFFFFF").s().p("AghBdIAAgFQAIAAAEgFQADgDAAgOIAAiDQgBgOgDgDQgCgEgJgBIAAgFIA0AAIAACeQAAAOADAEQADADAKABIAAAFg");
	this.shape_65.setTransform(648.7,547.7);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#FFFFFF").s().p("AgLBbQgIgDgIgHIgVANIgFAAIAAihQAAgLgBgDQgBgEgDgBQgDgCgHgBIAAgFIA1AAIAABHQAPgRATAAQAOAAALAIQAMAIAGAOQAHANAAATQAAAUgIASQgJARgOAJQgOAJgSAAQgJAAgIgEgAgPgLIAAA4IABAWQABAIAGAFQAFAFAHAAQAHAAAFgEQAFgEADgMQADgLAAgfQAAgcgHgLQgFgIgJAAQgLAAgLANg");
	this.shape_66.setTransform(636.5,547.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#FFFFFF").s().p("AgLBbQgIgDgIgHIgVANIgFAAIAAihQAAgLgBgDQgBgEgDgBQgDgCgHgBIAAgFIA1AAIAABHQAPgRATAAQAOAAALAIQAMAIAGAOQAHANAAATQAAAUgIASQgJARgOAJQgOAJgSAAQgJAAgIgEgAgPgLIAAA4IABAWQABAIAGAFQAFAFAHAAQAHAAAFgEQAFgEADgMQADgLAAgfQAAgcgHgLQgFgIgJAAQgLAAgLANg");
	this.shape_67.setTransform(621,547.9);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#FFFFFF").s().p("AgoA8QgJgIgCgIQgDgJAAgXIAAgxQAAgPgDgDQgCgDgJgCIAAgFIA0AAIAABWQAAAOACAEQABAEACACQADACAEAAQAEAAAEgCQAFgEAIgLIAAhDQAAgPgDgDQgCgDgIgCIAAgFIA0AAIAABjQAAAPACAEQADADAIABIAAAFIg0AAIAAgRQgJALgIAFQgKAFgLAAQgLAAgIgGg");
	this.shape_68.setTransform(605.7,550.8);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#FFFFFF").s().p("AhUBdIAAgFQAMAAAFgDQAEgCACgEQACgEAAgPIAAh3QAAgPgCgEQgCgEgEgCQgFgDgMAAIAAgFIBXAAQAgAAAOAGQAMAGAIALQAIALAAANQAAANgKALQgJAKgZAGQAaAGALAIQAQANAAAUQgBAVgQANQgVARgoAAgAgQA9IAAAHQAAAHAEAEQAEAEAHAAQAKAAAJgFQAJgFAGgJQAEgKAAgLQAAgNgFgKQgHgLgKgEQgLgEgUAAgAgQgIQASAAAKgFQAJgEAFgIQAFgIAAgMQAAgMgFgIQgFgIgIgEQgKgEgTAAg");
	this.shape_69.setTransform(588.4,547.7);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#FFFFFF").s().p("AgiBfIAAgFQAJAAAEgFQADgDAAgNIAAhKQAAgOgDgDQgDgEgKgBIAAgFIA1AAIAABlQAAANADAEQADAEAKAAIAAAFgAgOg5QgGgHAAgJQAAgJAGgGQAGgGAIAAQAJAAAGAGQAGAGAAAJQAAAJgGAHQgGAFgJAAQgIAAgGgFg");
	this.shape_70.setTransform(568.5,547.5);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#FFFFFF").s().p("AANA9QgFgFgCgKQgWAVgTAAQgLAAgHgIQgHgHAAgLQAAgOAMgMQANgMApgSIAAgNQAAgOgCgEQgBgEgDgDQgFgDgFAAQgJAAgGAEQgDADAAADQAAADADAEQAFAGABAGQgBAGgFAFQgEAFgIAAQgJAAgGgFQgGgGAAgHQAAgJAIgJQAIgJAOgFQAOgFAOAAQASAAALAIQAKAIADAJQACAFAAAVIAAAxQAAAIABADIACADQAAAAABAAQAAABAAAAQABAAAAAAQABAAAAAAQADAAAEgFIAFADQgHAKgIAFQgHAFgKAAQgLAAgGgGgAgRAOQgGAHAAAIQAAAGAFAFQADAEAGAAQAHAAAIgIIAAgqQgQAJgHALg");
	this.shape_71.setTransform(557.9,550.5);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#FFFFFF").s().p("AAFBdIAAgFQAGgBAEgFQACgDAAgOIAAg5QAAgPgBgEQgBgEgEgCQgDgCgDAAQgFAAgFADQgFAEgGAKIAABDQAAAOACADQADAFAIABIAAAFIhBAAIAAgFQAIgBAEgEQACgDAAgPIAAiBQAAgOgCgEQgEgDgIgCIAAgFIA0AAIAABKQAKgLAIgEQAJgFAJAAQAMAAAKAHQAHAHAEAJQACAJAAAVIAAAyQABAPACADQADAEAIABIAAAFg");
	this.shape_72.setTransform(542.8,547.7);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#FFFFFF").s().p("AgwBdIAAgFIAHAAQAIAAAFgDQADgCACgFQACgDAAgOIAAiOIgOAAQgSAAgJAIQgMALgDAVIgFAAIAAgzIClAAIAAAzIgFAAQgEgSgFgHQgGgIgJgFQgFgCgNAAIgOAAIAACOQAAAOACAEQABADAFADQAEADAIAAIAHAAIAAAFg");
	this.shape_73.setTransform(525.5,547.7);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#FFFFFF").s().p("AgWBUQgIgIgBgOQABgNAIgKQAKgIAMgBQAOABAIAIQAKAKgBANQABAOgKAIQgJAKgNAAQgMAAgKgKgAgVgnQgKgKAAgMQAAgNAKgKQAJgJAMAAQAOAAAIAJQAKAKgBANQABAMgKAKQgIAJgOAAQgMAAgJgJg");
	this.shape_74.setTransform(442.1,489.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#FFFFFF").s().p("Ag4BSQgMgJgEgMQgEgNAAgeIAAhGQAAgUgEgFQgDgFgMgCIAAgHIBIAAIAAB5QAAATACAFQACAGAEADQAEADAFAAQAGAAAFgEQAIgFALgPIAAheQAAgUgEgFQgEgFgMgCIAAgHIBJAAIAACLQAAAUAEAFQADAFAMABIAAAHIhIAAIAAgYQgNAQgMAHQgNAHgQAAQgPAAgLgKg");
	this.shape_75.setTransform(415,490.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#FFFFFF").s().p("AAGBcIAAgHQAKgBAFgHQACgFAAgTIAAhOQAAgWgCgGQgBgGgEgDQgEgDgFAAQgPAAgPAXIAABfQABAUADAFQAEAGAKABIAAAHIhaAAIAAgHQALgBAFgGQADgFAAgUIAAhkQAAgUgDgFQgFgFgLgBIAAgHIBIAAIAAAXQAOgPAMgHQAMgHAPAAQARAAALAKQAMAKAEAOQACALAAAfIAABEQAAAUAFAGQADAFAMABIAAAHg");
	this.shape_76.setTransform(393.4,489.6);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#FFFFFF").s().p("Ag5BAQgQgYAAglQAAgsAYgaQAXgbAgAAQAbABAUAWQAUAWABArIhgAAQABAjASAUQAMAQASAAQALAAAKgGQAJgGALgRIAGAEQgOAegRAMQgSAMgXAAQgmABgVgfgAgMhHQgLAQAAAeIAAAHIAyAAQAAgfgCgLQgEgLgHgHQgEgDgHAAQgIAAgHAKg");
	this.shape_77.setTransform(374.1,489.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#FFFFFF").s().p("AA6BcIAAgHQALgBAFgHQADgGAAgSIAAhMQAAgXgBgHQgCgGgEgDQgFgEgFAAQgIAAgJAGQgIAGgJAMIAABfQAAATAEAFQAEAHAMABIAAAHIhbAAIAAgHQAIAAAEgEQAEgDACgFQABgEAAgQIAAhMQAAgYgCgGQgCgGgEgDQgFgEgFAAQgHAAgHAEQgJAGgKAOIAABfQAAATAEAGQAEAGAMABIAAAHIhcAAIAAgHQALgBAFgGQADgFAAgUIAAhkQAAgUgEgFQgDgFgMgBIAAgHIBIAAIAAAXQAPgQANgGQAMgHAPAAQARAAAKAIQAMAIAGARQAQgRAOgIQAOgIAPAAQASAAALAJQALAIAFANQAEANAAAdIAABIQAAAUAEAFQADAFAMACIAAAHg");
	this.shape_78.setTransform(349.1,489.6);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#FFFFFF").s().p("AhLBcIAAgHQALgBAEgFQAEgGAAgXIAAhiQAAgPgBgEQgCgFgEgDQgDgCgJgBIAAgHIBIAAIAAAoQARgcANgIQAOgKAMAAQALAAAGAHQAGAHAAAMQAAAMgGAHQgGAHgJAAQgKAAgHgGIgJgHIgEgBQgGAAgFAEQgIAGgEAMQgFATAAAVIAAApIAAALQAAAKACADQABAGAFACQAEACALABIAAAHg");
	this.shape_79.setTransform(315.4,489.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("Ag5BAQgQgYAAglQAAgsAXgaQAZgbAfAAQAbABAUAWQAUAWABArIhgAAQABAjASAUQAMAQASAAQALAAAKgGQAKgGAKgRIAGAEQgOAegRAMQgSAMgXAAQgmABgVgfgAgMhHQgLAQAAAeIAAAHIAyAAQAAgfgCgLQgEgLgHgHQgEgDgHAAQgIAAgHAKg");
	this.shape_80.setTransform(298,489.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("AAGCBIAAgHQAKgBAEgHQADgEABgUIAAhPQgBgVgBgFQgCgHgEgCQgEgEgFAAQgHAAgHAGQgHAFgIANIAABeQAAATACAFQAEAGALACIAAAHIhaAAIAAgHQALgBAFgGQADgFAAgUIAAi0QAAgUgEgEQgDgGgMgBIAAgHIBJAAIAABnQAOgQALgGQAMgHANAAQASAAAMAKQALAKAEANQAEANAAAdIAABFQAAAUADAGQAEAFAMABIAAAHg");
	this.shape_81.setTransform(278.3,485.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#FFFFFF").s().p("AgSBxQgMgJgDgMQgCgGAAgdIAAhfIgYAAIAAgHQAZgRARgSQAQgTAMgXIAHAAIAABBIAqAAIAAATIgqAAIAABtQgBAPACAFQABAEAEADQADADADAAQANAAALgTIAGAEQgQAlgjAAQgPAAgMgKg");
	this.shape_82.setTransform(261,486.8);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#FFFFFF").s().p("AhqBXQgeglAAgzQAAg5AngmQAngnA5ACQA9gCAnAmQAmAnAAA5QAAAwgdAmQgmAxhFAAQhFAAgmgvgAg0hUQgPAdAAA3QAABCAXAgQAQAWAcAAQAUAAANgKQARgMAJgaQAJgbAAgrQAAgzgJgZQgKgZgOgLQgPgKgTAAQgjAAgSAkg");
	this.shape_83.setTransform(239.2,486);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#FFFFFF").s().p("AAJBlIAAgFQAFAAACgCQABAAAAgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgEgGgIIgagpIgJAIIAAAaQAAAQADADQADAEAJACIAAAFIhIAAIAAgFQAJgBADgFQADgDAAgQIAAiNQAAgQgDgEQgDgDgJgCIAAgFIA5AAIAACEIAfggQAKgJACgEQADgEAAgEQAAgEgDgDQgEgDgJgBIAAgFIA+AAIAAAFQgJABgGAEQgHADgUATIgPAOIAhAwQAUAdADAEQAFAFAIABIAAAFg");
	this.shape_84.setTransform(588.4,396.5);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#FFFFFF").s().p("AgwBaQgRgPAAgVQAAgQAKgMQAJgNAWgKQgYgRgGgMQgHgLAAgQQAAgUARgPQARgQAdAAQAdAAAQAOQAPAOAAATQAAAOgIALQgJALgRAJQAVAOAIAOQAJANAAASQAAAYgTARQgSARgfAAQgeAAgQgPgAgTASQgDAFgCAKQgDAKAAALQAAAOAEAKQADAJAHAEQAHAEAGAAQALAAAHgIQAHgIAAgNQAAgdglgbQgFAFgCADgAgOhXQgHAHAAALQAAALAIALQAHAMAWAPQAGgHADgKQACgJAAgLQAAgTgIgLQgGgHgLAAQgJAAgHAHg");
	this.shape_85.setTransform(571.7,396.5);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#FFFFFF").s().p("AAHBnIAAguIhIAAIAAgeIBfiBIASAAIAACBIASAAIAAAeIgSAAIAAAugAgzAbIA6AAIAAhPg");
	this.shape_86.setTransform(556.2,396.3);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#FFFFFF").s().p("AgQBDQgIgIAAgKQAAgKAIgIQAHgHAJAAQAKAAAIAHQAHAIAAAKQAAAKgHAIQgIAGgKABQgJgBgHgGgAgQgeQgIgHAAgLQAAgKAIgHQAHgIAJAAQAKAAAIAIQAHAHAAAKQAAALgHAHQgIAHgKAAQgJAAgHgHg");
	this.shape_87.setTransform(536.1,399.6);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#FFFFFF").s().p("AhdBlIAAgFIAHAAQAJAAAGgEQADgCACgFQACgDAAgQIAAiDQAAgQgCgEQgBgDgFgDQgFgDgJgBIgHAAIAAgFIBrAAIAAAFIgJAAQgHABgFADQgEACgDAFQgCAEABAPIAACAQgBAPACAEQACAFAFACQAEAAANAAIASAAQAQAAAKgFQALgGAIgMQAHgMAIgYIAFAAIgHBHg");
	this.shape_88.setTransform(507,396.5);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#FFFFFF").s().p("AAJBlIAAgGQAFABACgCQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgDgGgKIgagoIgJAJIAAAZQAAAPADAFQADADAJABIAAAGIhIAAIAAgGQAJgBADgEQADgDAAgQIAAiMQAAgQgDgEQgDgFgJgBIAAgFIA5AAIAACEIAfggQAKgJACgEQADgEAAgEQAAgEgDgDQgEgCgJgCIAAgGIA+AAIAAAGQgJAAgGAEQgHAFgUASIgPAOIAhAwQAUAeADADQAFAFAIAAIAAAGg");
	this.shape_89.setTransform(590.9,361.5);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#FFFFFF").s().p("AgZBhQgMgGgJgPQgHgKgFgRQgGgXAAgXQAAghAJgbQAIgXAPgMQAQgMAQAAQARAAAQAMQAPAMAHAUQAKAcAAAgQAAAegIAbQgFAQgJAKQgJAKgKAGQgLAGgNAAQgOAAgLgIgAgKhbQgFAGgCANQgCANAABOQAAArADAOQACALAEAEQAEADAGAAQAIAAADgEQAHgJABgRIAAhAIAAg9QgCgVgGgHQgDgFgIAAQgGAAgEADg");
	this.shape_90.setTransform(574.2,361.5);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#FFFFFF").s().p("Ag3BhQgJgGAAgKQAAgHAFgEQAEgFAHAAQAFAAAEACIARANQAPAMALAAQAMAAAHgJQAIgJAAgNQAAgVgOgRQgOgRgbgGIAAgFQARgFAHgEQAFgEAFgJQAFgJAAgJQAAgMgJgJQgJgJgNAAQgVAAgOAWIgGgCQALgYARgNQARgMATAAQAVAAAOAMQANANAAARQAAAMgGAKQgGAKgOAIQARAJAKAMQAJALAAATQAAAggXAWQgXAWglAAQgaAAgLgIg");
	this.shape_91.setTransform(558.3,361.5);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#FFFFFF").s().p("AgQBCQgIgGAAgLQAAgLAIgGQAHgIAJAAQAKAAAIAIQAHAGAAALQAAALgHAGQgIAIgKgBQgJABgHgIgAgQgeQgIgIAAgJQAAgLAIgHQAHgHAJAAQAKAAAIAHQAHAHAAALQAAAJgHAIQgIAHgKAAQgJAAgHgHg");
	this.shape_92.setTransform(538.6,364.6);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#FFFFFF").s().p("AAhBlIAAgGIAGAAQAJAAAGgCQADgCADgGQABgEAAgOIAAiWIhMC4IgEAAIhPi2IAACNQAAAPABADQACAIAHAFQAGAFAOgBIAAAGIhFAAIAAgGIACAAQAHAAAFgCQAGgCADgEQADgEACgHIAAgPIAAh/QAAgPgBgEQgCgDgFgEQgFgCgJgBIgGAAIAAgFIBSAAIA4CEIA3iEIBSAAIAAAFIgGAAQgJABgGACQgDACgDAFQgBAEAAAPIAACFQAAAPABAEQACAEAFADQAFACAJAAIAGAAIAAAGg");
	this.shape_93.setTransform(511.5,361.5);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#FFFFFF").s().p("AAJBlIAAgGQAFABACgCQABAAAAgBQAAgBABAAQAAgBAAAAQAAgBAAAAQAAgDgGgKIgagoIgJAJIAAAZQAAAPADAFQADADAJABIAAAGIhIAAIAAgGQAJgBADgEQADgDAAgQIAAiMQAAgQgDgEQgDgFgJgBIAAgFIA5AAIAACEIAfggQAKgJACgEQADgEAAgEQAAgEgDgDQgEgCgJgCIAAgGIA+AAIAAAGQgJAAgGAEQgHAFgUASIgPAOIAhAwQAUAeADADQAFAFAIAAIAAAGg");
	this.shape_94.setTransform(813.9,326.4);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#FFFFFF").s().p("AglBlIAAgGQAKAAAEgEQADgEAAgPIAAiPQAAgPgDgDQgEgFgKgBIAAgFIA6AAIAACsQAAAPADAEQADAEALAAIAAAGg");
	this.shape_95.setTransform(800.7,326.4);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#FFFFFF").s().p("AgkBnIAAgFQAIAAAFgFQADgEAAgPIAAhQQAAgPgEgEQgDgDgJgCIAAgFIA4AAIAABtQABAPADAEQADAFALAAIAAAFgAgPg/QgHgGAAgKQAAgJAHgIQAGgGAJgBQAJABAHAGQAHAIAAAJQAAAKgHAGQgHAHgJAAQgJAAgGgHg");
	this.shape_96.setTransform(792.2,326.1);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#FFFFFF").s().p("AAhBlIAAgGIAGAAQAJAAAGgCQADgCADgGQABgEAAgPIAAiVIhMC4IgEAAIhPi2IAACNQAAAPABADQACAIAHAFQAGAFAOgBIAAAGIhFAAIAAgGIACAAQAHAAAFgCQAGgCADgEQADgEACgHIAAgPIAAh/QAAgPgBgEQgCgDgFgEQgFgDgJAAIgGAAIAAgFIBSAAIA4CEIA3iEIBSAAIAAAFIgGAAQgJAAgGADQgDACgDAFQgBAEAAAPIAACEQAAAQABAEQACAEAFADQAFACAJAAIAGAAIAAAGg");
	this.shape_97.setTransform(773.4,326.4);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#FFFFFF").s().p("AAFBlIAAgGQAHgBAEgEQACgEAAgPIAAg+QAAgRgBgEQgBgFgDgCQgEgCgEgBQgFABgFAEQgGAEgHAKIAABKQAAAOADAFQACAEAJABIAAAGIhGAAIAAgGQAIgBAEgEQADgDAAgQIAAiMQAAgQgDgEQgDgFgJgBIAAgFIA4AAIAABQQAMgLAIgGQAKgEAKAAQANAAAKAHQAJAIADAKQADAJAAAXIAAA3QAAAPADAFQADADAJABIAAAGg");
	this.shape_98.setTransform(743,326.4);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#FFFFFF").s().p("AgXBEIgHgCQgFAAgDAHIgEAAIgDgyIAFAAQAHAUALAKQAMAKAKAAQAGAAAGgFQAEgEAAgGQAAgHgEgGQgFgFgOgKQgYgQgGgIQgKgMAAgPQAAgQALgNQALgNAVAAQALAAAKAGQAEACACAAIAFgBIAFgGIAGAAIABAvIgFAAQgIgVgLgIQgJgIgJAAQgGAAgEAFQgFAEABAFQAAAEADAEQAEAGAVAPQAWAPAHAJQAHAKAAANQAAAMgGALQgGALgLAGQgKAGgMAAQgKAAgQgGg");
	this.shape_99.setTransform(728.6,329.5);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#FFFFFF").s().p("AgtAyQgMgTAAgdQAAghASgVQATgVAZAAQAVAAAPASQAQARABAiIhLAAQABAbANAQQAKAMAOAAQAJAAAHgFQAIgFAIgNIAFAEQgLAXgOAJQgOAKgSAAQgeAAgQgYgAgJg3QgJANAAAXIAAAFIAnAAQAAgYgCgJQgDgJgFgEQgDgDgGAAQgGAAgFAIg");
	this.shape_100.setTransform(716,329.5);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#FFFFFF").s().p("Ag7BIIAAgGQAJAAADgFQAEgEAAgSIAAhMQAAgMgBgDQgCgEgDgCQgDgCgHgBIAAgGIA5AAIAAAgQANgWAKgHQALgHAJAAQAJAAAFAGQAFAFAAAJQAAAKgFAFQgFAGgHAAQgIAAgGgFIgHgGIgCgBQgFAAgEAEQgGAFgDAJQgEAPAAAQIAAAgIAAAIQAAAJACACQAAAEADACQAEACAIAAIAAAGg");
	this.shape_101.setTransform(703.1,329.3);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#FFFFFF").s().p("AhUBlIAAgGIAGAAQAJAAAFgCQAEgCACgGQACgEAAgPIAAiEQAAgPgCgEQgBgDgFgEQgFgDgJAAIgGAAIAAgFICpAAIAAA6IgGAAQgCgUgJgLQgIgJgRgEQgIgCgZAAIgRAAIAABTIAFAAQANAAAIgFQAJgDAGgKQAGgJABgRIAGAAIAABkIgGAAQgCgcgNgJQgNgKgPAAIgFAAIAAA+QAAAQABAEQACAEAEADQAFACAJAAIAGAAIAAAGg");
	this.shape_102.setTransform(686.6,326.4);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#FFFFFF").s().p("Ag7BIIAAgGQAKAAADgFQACgEAAgSIAAhMQAAgMgBgDQgBgEgDgCQgCgCgIgBIAAgGIA5AAIAAAgQANgWALgHQAKgHAKAAQAIAAAFAGQAFAFAAAJQAAAKgFAFQgFAGgHAAQgHAAgHgFIgGgGIgEgBQgEAAgEAEQgGAFgDAJQgEAPAAAQIAAAgIAAAIQAAAJACACQAAAEAEACQADACAJAAIAAAGg");
	this.shape_103.setTransform(663.9,329.3);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#FFFFFF").s().p("AAPBDQgHgFgCgMQgYAXgUAAQgMAAgIgIQgIgIAAgMQAAgQAOgMQANgNAtgUIAAgOQAAgQgBgEQgCgEgDgDQgGgDgGAAQgJAAgGAEQgEADAAADQAAADAEAFQAFAGAAAGQAAAIgEAFQgGAFgJAAQgJAAgHgGQgGgFAAgIQAAgLAJgJQAIgKAPgFQAQgGAPAAQAUAAALAJQAMAIADAKQACAGAAAXIAAA1QAAAJABADQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAQAAABABAAQAAAAABAAQADAAAFgGIAEAEQgIALgIAFQgHAFgLAAQgLAAgHgGgAgTAPQgGAIAAAJQAAAGAFAGQADAEAIAAQAHAAAIgJIAAgtQgQAJgJAMg");
	this.shape_104.setTransform(649.6,329.4);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#FFFFFF").s().p("AgmBlQgPgEgHgGQgHgHAAgHQAAgHAFgFQAFgGAOgDQgTgKAAgRQAAgKAIgKQAIgJARgHQgUgHgJgMQgJgMAAgPQAAgVARgPQARgPAaAAQANAAAOAGIAvAAIAAAQIgaAAQAHAIADAGQADAIAAAJQAAAOgIAMQgIAKgOAHQgPAGgKAAIgSgBQgGAAgFADQgEAFAAAGQAAAFAEAEQAEADAJAAIAZAAQAfAAAMAHQARAJAAAUQAAANgIAKQgIAKgMAFQgUAIgYAAQgSAAgQgEgAghA+QgJAEAAAIQAAAIAJAGQAJAGAYAAQAUAAAMgFQALgGAAgKQAAgDgCgDQgEgEgIgCQgIgCgiAAQgPAAgFADgAgThWQgGAJAAAbQAAAXAGAIQAGAIAIAAQAIAAAGgIQAGgIAAgYQAAgbgHgJQgFgHgHAAQgJAAgGAIg");
	this.shape_105.setTransform(634.2,332.6);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#FFFFFF").s().p("AgsBBQgJgIgDgJQgDgKAAgYIAAg2QAAgQgDgEQgDgEgJgBIAAgGIA4AAIAABfQAAAPACAEQABAEADACQADADAEAAQAFAAAEgDQAGgEAIgMIAAhJQAAgQgDgEQgCgEgKgBIAAgGIA5AAIAABtQAAAPADAEQADAEAJABIAAAGIg5AAIAAgTQgKAMgJAGQgKAFgMAAQgMAAgJgHg");
	this.shape_106.setTransform(617.8,329.7);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#FFFFFF").s().p("AgQBoQgJgCgMgGQgIgDgEAAQgEAAgEADQgFADgCAGIgGAAIAAhMIAGAAQAGAgATARQASARAVAAQARAAAKgJQAKgJAAgMQAAgHgEgHQgEgHgIgGQgIgGgSgJQgcgOgMgJQgMgJgGgMQgHgMAAgOQAAgYASgRQASgRAbAAQAIAAAKADQAHABAKAFQAKAFAEAAQAEAAACgCQACgDACgJIAFAAIABBDIgGAAQgEgZgRgPQgRgQgTAAQgPAAgJAJQgJAIAAAKQAAAHADAFQAFAHAJAHQAHAFAZAMQAjASAMAOQANAQAAAUQAAAZgUASQgUATgeAAQgJAAgIgCg");
	this.shape_107.setTransform(601,326.4);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#FFFFFF").s().p("AAFBIIAAgGQAHgBAEgFQACgEAAgPIAAg9QAAgRgBgEQgBgFgDgCQgEgDgDAAQgMAAgMATIAABJQAAAQAEAEQACAEAJABIAAAGIhHAAIAAgGQAJgBADgEQADgEAAgQIAAhNQAAgQgDgEQgDgEgJgBIAAgGIA4AAIAAASQALgLAJgFQAKgGAMAAQANAAAJAIQAJAHADAMQACAIAAAYIAAA1QAAAQADAEQADAEAJABIAAAGg");
	this.shape_108.setTransform(576.3,329.3);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#FFFFFF").s().p("AAnBIIgnhlIgkBlIgIAAIglhkQgIgXgGgHQgEgFgHgCIAAgGIBGAAIAAAGQgHAAgDACQgCACAAADIAEAPIAVA1IATg1IgBgEQgFgLgDgDQgDgDgHgBIAAgGIBGAAIAAAGQgIAAgCACQgDACAAAEQAAADAFALIATA1IASgxQAEgKAAgEQAAgGgDgDQgDgCgIgBIAAgGIApAAIAAAGQgGABgEAEQgEAEgHASIgnBug");
	this.shape_109.setTransform(556.7,329.7);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#FFFFFF").s().p("AgvA0QgRgWAAgdQAAgdARgWQARgXAeAAQASAAAQAKQAPAJAIARQAIASAAATQAAAegPAUQgSAYggAAQgeAAgRgWgAgMg4QgFAFgCARQgCARAAAdQAAAQADAOQABALAGAFQAFAGAGAAQAGAAAFgEQAGgFACgJQADgOAAgqQAAgagDgJQgDgKgGgEQgDgDgHAAQgGAAgGAGg");
	this.shape_110.setTransform(538.1,329.5);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#FFFFFF").s().p("Ag7BIIAAgGQAJAAAEgFQADgEAAgSIAAhMQAAgMgBgDQgCgEgDgCQgDgCgHgBIAAgGIA5AAIAAAgQANgWAKgHQALgHAJAAQAJAAAFAGQAFAFAAAJQAAAKgFAFQgFAGgHAAQgHAAgHgFIgHgGIgCgBQgFAAgEAEQgGAFgDAJQgEAPAAAQIAAAgIAAAIQAAAJACACQAAAEADACQAEACAJAAIAAAGg");
	this.shape_111.setTransform(524.6,329.3);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#FFFFFF").s().p("AhcBlIAAgGQAOABAFgDQAFgDACgEQACgEAAgQIAAiDQAAgQgCgEQgCgFgFgCQgFgCgOgBIAAgFIBgAAQAiAAAPAGQAOAHAJALQAIANAAAOQAAAPgKALQgLALgbAHQAdAGAMAJQAQANAAAXQAAAWgSAPQgWASgsAAgAgRBCIAAAIQAAAIAEAEQAEAEAIAAQALAAAKgFQAKgGAFgKQAGgJAAgNQAAgOgHgMQgHgLgLgEQgLgFgWABgAgRhYIAABPQAUAAALgFQAJgEAGgKQAFgIAAgOQAAgMgFgJQgFgJgKgFQgKgEgRAAIgEABg");
	this.shape_112.setTransform(507.1,326.4);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#FFFFFF").s().p("AgTBMQgJgIAAgMQAAgMAJgIQAIgJALAAQAMAAAJAJQAHAIAAAMQAAAMgHAIQgJAJgMAAQgLAAgIgJgAgTgjQgJgJAAgLQAAgMAJgIQAIgJALAAQAMAAAJAJQAHAIAAAMQAAALgHAJQgJAIgMAAQgLAAgIgIg");
	this.shape_113.setTransform(556.9,250.5);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#FFFFFF").s().p("AgyBKQgLgIgEgLQgDgLAAgcIAAg/QAAgSgDgFQgEgEgLgBIAAgHIBBAAIAABtQAAARACAFQACAFADADQAEACAFAAQAFAAAFgDQAGgFAKgNIAAhVQAAgSgDgFQgEgEgKgBIAAgHIBBAAIAAB9QAAASAEAFQADAEAKACIAAAGIhBAAIAAgWQgLAOgLAGQgLAHgOAAQgOAAgKgJg");
	this.shape_114.setTransform(532.5,250.7);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#FFFFFF").s().p("AAFBTIAAgGQAJgCAFgGQADgEAAgRIAAhHQgBgTgBgGQgCgFgEgCQgDgDgFAAQgNAAgNAVIAABVQAAASAEAFQACAEAKACIAAAGIhRAAIAAgGQAKgBAEgGQADgEAAgSIAAhaQAAgSgEgFQgDgEgKgBIAAgHIBBAAIAAAVQANgNAKgGQALgHANAAQAPAAALAJQAKAJAEANQACAJAAAcIAAA+QAAASAEAFQADAEAKACIAAAGg");
	this.shape_115.setTransform(513,250.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#FFFFFF").s().p("AgzA6QgPgXAAggQAAgnAWgYQAVgYAcAAQAZAAASAUQASAUABAnIhXAAQACAfAPATQALAOAQAAQALAAAIgGQAJgGAJgOIAGADQgNAbgQALQgQALgUAAQgjAAgSgbgAgLhAQgKAPAAAbIAAAGIAuAAQAAgcgDgKQgDgKgHgGQgDgDgGAAQgIAAgGAJg");
	this.shape_116.setTransform(495.6,250.5);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#FFFFFF").s().p("AAmB0IAAgGIAHAAQAKAAAHgEQAEgCADgGQABgEAAgSIAAirIhYDTIgEAAIhbjSIAACjQAAASABAEQADAIAHAGQAHAFAQAAIAAAGIhPAAIAAgGIACAAQAIAAAHgDQAGgCAEgFQADgEACgIIAAgSIAAiSQAAgSgBgEQgCgEgGgEQgGgDgKAAIgHAAIAAgGIBfAAIBACYIA/iYIBfAAIAAAGIgHAAQgLAAgGADQgEADgDAGQgCAEAAARIAACYQAAASACAFQACAEAGAEQAGADAKAAIAHAAIAAAGg");
	this.shape_117.setTransform(471,246.9);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#FFFFFF").s().p("AgzA6QgPgXAAggQAAgnAWgYQAVgYAcAAQAZAAASAUQASAUABAnIhXAAQACAfAPATQALAOAQAAQALAAAIgGQAJgGAJgOIAGADQgNAbgQALQgQALgUAAQgjAAgSgbgAgLhAQgKAPAAAbIAAAGIAuAAQAAgcgDgKQgDgKgHgGQgDgDgGAAQgIAAgGAJg");
	this.shape_118.setTransform(438.1,250.5);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#FFFFFF").s().p("AhEBTIAAgGQALgBADgFQAEgFAAgVIAAhYQAAgNgBgEQgCgFgDgCQgEgDgIAAIAAgHIBCAAIAAAlQAPgZAMgIQAMgJALAAQAJAAAGAGQAGAGAAALQAAAMgGAGQgFAGgIAAQgJAAgHgGIgIgGIgEgBQgFAAgEAEQgHAGgEAKQgEARAAATIAAAlIAAAKQAAAJABADQABAFAEACQAEACAKABIAAAGg");
	this.shape_119.setTransform(423.2,250.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#FFFFFF").s().p("AgzBKQgKgIgEgLQgDgLgBgcIAAg/QAAgSgCgFQgEgEgLgBIAAgHIBBAAIAABtQAAARADAFQABAFADADQAEACAEAAQAGAAAFgDQAGgFAKgNIAAhVQAAgSgDgFQgEgEgKgBIAAgHIBBAAIAAB9QAAASAEAFQADAEAKACIAAAGIhBAAIAAgWQgLAOgKAGQgMAHgOAAQgOAAgLgJg");
	this.shape_120.setTransform(405.2,250.7);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#FFFFFF").s().p("AgRBnQgKgKgDgKQgCgFAAgaIAAhWIgVAAIAAgGQAWgPAPgRQAPgRALgUIAGAAIAAA6IAmAAIAAARIgmAAIAABiQgBAOACAEQABAEADADQAEACACAAQAMAAAJgRIAGAEQgPAhgegBQgPAAgLgHg");
	this.shape_121.setTransform(389.8,247.7);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#FFFFFF").s().p("AARBOQgIgHgBgNQgdAagXAAQgOAAgJgJQgJgJAAgOQAAgSAQgPQAQgOA0gYIAAgQQgBgSgCgFQgCgEgEgEQgFgDgIAAQgLAAgHAEQgEAEAAAEQAAADAEAGQAHAHAAAHQAAAIgGAGQgHAGgKAAQgLAAgHgGQgHgHAAgJQAAgMAKgLQAKgMARgGQARgGATAAQAWAAAOAKQANAKAEALQACAHABAaIAAA+IAAAOIACAEIAFABQAEAAAFgGIAFAEQgJAMgJAGQgJAGgLAAQgOAAgIgGgAgXASQgGAJAAAKQAAAIAFAGQAFAEAHAAQAJAAALgJIAAg1QgUALgLAOg");
	this.shape_122.setTransform(375.5,250.3);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#FFFFFF").s().p("AAFBTIAAgGQAJgCAFgGQACgEAAgRIAAhHQAAgTgBgGQgCgFgEgCQgDgDgFAAQgNAAgNAVIAABVQAAASAEAFQACAEAJACIAAAGIhQAAIAAgGQAKgBAEgGQADgEAAgSIAAhaQAAgSgDgFQgEgEgKgBIAAgHIBBAAIAAAVQANgNAKgGQALgHANAAQAPAAALAJQAKAJADANQADAJAAAcIAAA+QAAASAEAFQADAEAKACIAAAGg");
	this.shape_123.setTransform(356.5,250.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#FFFFFF").s().p("AgsB0QgSgEgHgHQgIgIAAgIQAAgIAGgGQAGgGAQgFQgWgLAAgTQAAgMAJgLQAJgLAUgIQgXgIgLgOQgKgNAAgTQAAgXATgRQATgSAfAAQAPAAARAHIA2AAIAAATIgfAAQAIAIAEAHQAEAKAAAKQAAARgKANQgJAMgRAHQgQAHgMAAIgUgBQgIAAgFAFQgGAFAAAHQAAAGAFAEQAFAEAKAAIAdgBQAkAAAOAIQATALAAAXQAAAPgJAMQgJAMgOAFQgWAJgcAAQgWAAgSgFgAgmBHQgKAGAAAJQAAAJAKAHQAKAHAcAAQAXAAAOgHQANgGAAgLQAAgFgCgDQgFgFgJgCQgKgCgnAAQgSAAgFADgAgWhjQgHAKAAAgQAAAZAHAKQAHAJAJAAQAJAAAHgJQAHgJAAgcQAAgegIgMQgFgIgJAAQgKAAgHAKg");
	this.shape_124.setTransform(338.2,254);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#FFFFFF").s().p("AgqB3IAAgGQAKAAAFgHQAEgEAAgRIAAhcQAAgRgEgFQgEgEgLgBIAAgGIBCAAIAAB9QAAARAEAFQAEAFALABIAAAGgAgShJQgHgIgBgLQABgKAHgJQAIgHAKAAQALAAAIAHQAIAJgBAKQABALgIAIQgIAIgLAAQgKAAgIgIg");
	this.shape_125.setTransform(324.4,246.6);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#FFFFFF").s().p("AgTB4IgYgJQgIgDgGAAQgEAAgFADQgFAEgDAHIgHAAIAAhYIAHAAQAHAlAWATQAVAUAYAAQAUAAALgLQALgKAAgOQAAgIgEgIQgEgIgJgHQgJgHgWgLQgggPgOgLQgNgKgIgOQgHgOAAgQQAAgcAUgTQAUgUAgAAQAKAAAKADQAJACALAGQAMAFAEAAQAFAAACgDQADgCACgLIAFAAIACBOIgHAAQgFgdgTgSQgUgSgVAAQgSAAgKAKQgKAJAAAMQAAAIADAGQAFAIALAIQAIAFAcAPQApAUAPARQAOASAAAXQAAAdgXAVQgXAVgjAAQgKAAgKgCg");
	this.shape_126.setTransform(309.7,246.9);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#FFFFFF").s().p("AhEBTIAAgGQALgBADgFQAEgFAAgVIAAhYQAAgNgBgEQgCgFgDgCQgEgDgIAAIAAgHIBCAAIAAAlQAPgZAMgIQAMgJALAAQAJAAAGAGQAGAGAAALQAAAMgGAGQgFAGgIAAQgJAAgHgGIgIgGIgEgBQgFAAgEAEQgHAGgEAKQgEARAAATIAAAlIAAAKQAAAJABADQABAFAEACQAEACAKABIAAAGg");
	this.shape_127.setTransform(284.2,250.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#FFFFFF").s().p("AgyBKQgLgIgEgLQgDgLAAgcIAAg/QgBgSgDgFQgDgEgKgBIAAgHIBBAAIAABtQAAARABAFQACAFAEADQADACAFAAQAFAAAFgDQAHgFAKgNIAAhVQAAgSgEgFQgDgEgLgBIAAgHIBBAAIAAB9QABASADAFQADAEALACIAAAGIhBAAIAAgWQgMAOgLAGQgLAHgPAAQgNAAgKgJg");
	this.shape_128.setTransform(266.2,250.7);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#FFFFFF").s().p("AhfBOQgcgiAAgtQAAg0AkgiQAjgjA0ACQA2gCAjAjQAjAiAAA0QAAArgaAiQgjAtg+AAQg+AAgigrgAgvhMQgOAbAAAxQAAA7AVAdQAPAUAZAAQASAAAMgJQAPgLAIgYQAJgYAAgnQAAgtgJgXQgIgXgOgJQgNgKgRAAQgfAAgRAhg");
	this.shape_129.setTransform(242.8,247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15}]},215).to({state:[]},49).to({state:[]},239).wait(49));

	// Button
	this.buy3 = new lib.Buy();
	this.buy3.name = "buy3";
	this.buy3.parent = this;
	this.buy3.setTransform(1294.5,607.6);
	new cjs.ButtonHelper(this.buy3, 0, 1, 1);

	this.buy2 = new lib.Buy();
	this.buy2.name = "buy2";
	this.buy2.parent = this;
	this.buy2.setTransform(706.6,602.6);
	new cjs.ButtonHelper(this.buy2, 0, 1, 1);

	this.buy1 = new lib.Buy();
	this.buy1.name = "buy1";
	this.buy1.parent = this;
	this.buy1.setTransform(699.6,386.3);
	new cjs.ButtonHelper(this.buy1, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.buy1},{t:this.buy2},{t:this.buy3}]},215).to({state:[{t:this.buy1},{t:this.buy2},{t:this.buy3}]},48).to({state:[]},1).wait(288));

	// Title
	this.instance_15 = new lib.menutitle();
	this.instance_15.parent = this;
	this.instance_15.setTransform(794.8,165.5);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(215).to({_off:false},0).wait(48).to({_off:true},1).wait(288));

	// Title
	this.instance_16 = new lib.locationtitle();
	this.instance_16.parent = this;
	this.instance_16.setTransform(762.3,90.4);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#FFFFFF").s().p("ABxDnQgMgBgHgDQgGgCgDgDQgDgEAAgFIAAjuQAAgegEgRQgFgRgIgNQgJgNgNgGQgNgHgSAAQgWAAgXAQQgXARgZAfIAAEVQAAAFgCAEQgDADgHACQgHADgLABIgdABIgcgBQgLgBgHgDQgHgCgDgDQgDgEAAgFIAAmhQAAgFADgDQACgEAGgCQAGgDAKgBQAJgBAPAAQAPAAAKABQAKABAFADQAFACADAEQACADAAAFIAAAwQAjgmAkgSQAjgTAmAAQArAAAeAPQAdANASAYQASAYAIAhQAIAgAAAuIAAEBQAAAFgDAEQgDADgGACQgHADgLABIgdABIgcgBg");
	this.shape_130.setTransform(906.5,100.3);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#FFFFFF").s().p("AhlDdQgpgQgcgdQgbgegNgrQgNgrAAg4QAAg0AOgtQAOgsAdgfQAcggAsgSQArgRA4AAQA4AAAqAQQApAOAbAeQAbAeANArQANArAAA4QAAA0gOAtQgOArgdAgQgdAggqASQgrARg5AAQg4AAgpgPgAgsiDQgUAIgMAUQgNASgGAaQgHAaAAAhQAAAeAFAbQAGAZALAUQAMASATALQAUALAdgBQAaAAATgJQAUgJANgTQANgSAGgaQAFgaABgiQAAgdgFgaQgGgagLgUQgMgTgTgKQgTgLgeAAQgaAAgTAKg");
	this.shape_131.setTransform(854.8,100.7);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#FFFFFF").s().p("AgcE/QgLgCgHgCQgGgCgDgEQgDgDAAgFIAAmgQAAgFADgDQADgEAGgCQAHgDALgCQAMgBAQAAQARAAAMABQALACAHADQAHACADAEQACADAAAFIAAGgQAAAFgCADQgEAEgGACQgHACgLACIgdABIgcgBgAg1jQQgOgNAAgjQAAgjAPgOQAOgOAnAAQAnAAAOAOQAOANAAAiQAAAkgPANQgOAOgnAAQgnAAgOgNg");
	this.shape_132.setTransform(817.2,91.5);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#FFFFFF").s().p("AgDEVQgagJgRgSQgRgTgIgcQgIgcAAgmIAAjWIgyAAQgJAAgEgKQgFgMAAgZIABgXQABgKADgFQACgGAEgCQADgCAFAAIAxAAIAAheQAAgEADgEQADgEAHgCQAGgDAMgBQALgBARAAQARAAALABQALABAHADQAHACACAEQADAEAAAEIAABeIBbAAQAFAAAEACQADACACAGQACAFACAKIABAXQAAAZgFAMQgFAKgIAAIhcAAIAADEQAAAiALARQALARAbAAQAKAAAHgBIAOgEIAKgEQADgCAEAAQADAAACACQADACABAFIADANIABAWQAAAUgDALQgCALgFAFQgEAEgIAEQgIADgLADIgYAEQgNABgNAAQgjAAgZgJg");
	this.shape_133.setTransform(788,95.5);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#FFFFFF").s().p("AhjDkQgcgKgUgQQgUgSgMgZQgLgaAAghQAAglAPgbQAOgbAcgQQAcgSAqgIQAqgJA3ABIApAAIAAgaQAAgTgEgPQgEgPgJgKQgJgKgPgEQgQgFgVAAQgdAAgXAHQgYAGgSAIIgeAOQgLAHgIAAQgFAAgEgEQgFgCgCgHQgDgGgBgIIgBgUQAAgPACgIQADgJAGgHQAHgHAQgHQAQgJAXgHQAVgHAbgEQAZgFAbAAQAyAAAiAKQAjAJAXAVQAWATAKAfQALAgAAArIAAEZQAAAGgFAEQgEADgLADQgKABgTAAQgWAAgJgBQgKgDgEgDQgDgEAAgGIAAgiQgbAcghAQQghAPgnAAQghAAgcgIgAgSAjQgUAFgNAJQgMAHgGANQgGALAAAQQAAAbARAPQAQAOAeAAQAYAAAVgMQAUgNAWgYIAAhHIgtAAQgcAAgUADg");
	this.shape_134.setTransform(747.2,100.7);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#FFFFFF").s().p("Ag4DdQgmgPgZgeQgZgdgNgqQgNgqAAg3QAAg+AQguQAPgtAdgeQAcgeAmgPQAngPAsAAQATABATADQARAEAQAFQAQAGAMAHQANAHAFAEIAHAJIAEAJIABAPIABATQAAAcgFAKQgFAMgHAAQgIAAgJgHIgVgPQgMgHgRgHQgRgGgXAAQgtAAgZAjQgYAjAABEQAAAiAGAZQAGAaAMARQAMASARAJQASAIAYAAQAYAAASgHQASgHANgKIAWgQQAJgHAGAAQAEAAADADQADABABAIIADAPIABAZIgBAVIgCANIgCAKIgIAJQgGAFgNAIQgOAIgRAFQgRAHgVADQgUAEgWABQgvAAglgPg");
	this.shape_135.setTransform(705,100.7);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#FFFFFF").s().p("AhlDdQgqgQgbgdQgbgegNgrQgNgrAAg4QAAg0APgtQAOgsAcgfQAcggArgSQArgRA5AAQA4AAApAQQApAOAcAeQAaAeAOArQANArAAA4QAAA0gOAtQgOArgdAgQgcAggrASQgsARg5AAQg3AAgpgPgAgsiDQgUAIgNAUQgMASgHAaQgGAaAAAhQAAAeAFAbQAGAZALAUQALASAUALQAUALAdgBQAaAAATgJQAUgJANgTQAMgSAHgaQAFgaAAgiQABgdgFgaQgFgagMgUQgMgTgTgKQgTgLgeAAQgZAAgUAKg");
	this.shape_136.setTransform(658.8,100.7);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#FFFFFF").s().p("AiBExQgQAAgKgJQgLgKAAgUIAAomQAAgFAEgDQACgEAHgCQAIgDAMgBQALgCASAAQATAAALACQAMABAHADQAHACADAEQADADAAAFIAAHnIC+AAQAFAAADADQAEACACAGQACAGACAKIABAXIgBAYIgEAQQgCAGgEADQgDADgFAAg");
	this.shape_137.setTransform(615.6,92.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},311).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},48).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},25).to({state:[{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130}]},23).to({state:[]},1).wait(144));

	// Text
	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#FFFFFF").s().p("AAWBrIAAgLIAMgFQAEgCADgDQACgEACgHIABgWIAAg5IgBgcQgBgMgCgIQgCgIgDgFQgDgEgEgDQgEgEgFgBQgGgCgIAAQgIAAgHADQgIADgJAJQgKAIgEAIQgEAIAAALIAABRQAAATACAHQACAHAFAEQAEAEAMADIAAALIhWAAIAAgLIAMgFIAGgFQACgEACgHQABgHAAgQIAAheIAAgXQgBgJgCgFQgDgFgFgCQgGgDgKgCIAAgLIA0gCIANAAIgCAkIADAAQAQgQAKgHQAKgHAKgEQAKgEALAAQAMAAAJADQAKADAHAFQAHAGAFAJQAEAIADAMQACAMAAASIAABSIABAWQABAHACADQACAEAEADQAEACALADIAAALg");
	this.shape_138.setTransform(1192.3,483.9);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#FFFFFF").s().p("AhDBmQgOgGgGgMQgHgMAAgPQAAggAggSQAggQA+gDIAAgOQAAgXgFgNQgDgNgKgHQgJgGgQAAQgQAAgLAJQgKAJgGASIgdAAIAAgcQAWgLAOgFQANgGAPgCQAOgEANAAQAWAAANAHQANAHAHAPQAGAOAAAdIAABLIABAXIABAMIADAKQACADAFACQAFADAJACIAAALIg9AAIACgfIgDgBQgUAUgPAIQgRAIgTAAQgRAAgMgHgAgiARQgWALAAAXQAAANAFAHQAFAHAIADQAIADAKAAQAPAAALgHQAMgIAHgLQAHgLAAgLIAAgfQgrAAgXAMg");
	this.shape_139.setTransform(1168.9,484);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#FFFFFF").s().p("AAuBpIguijIg6CjIgfAAIg0ihQgFgQgEgGQgDgHgEgEQgEgCgIgDIAAgKIBWAAIAAAKQgMADgFAEQgEAEAAAJIABAMIAEAPIAiBwIA5ipIAeAAIAwCpIAmhrIAGgQIABgOQAAgKgEgEQgFgFgMgDIAAgKIBMAAIAAAKQgGABgDACQgDACgDAEQgDADgDAGQgEAHgGAOIg/Cgg");
	this.shape_140.setTransform(1140.5,484.1);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#FFFFFF").s().p("AgoCUIAAgLIAMgEIAGgGQACgEACgHQABgHAAgQIAAheIAAgXQgBgIgCgFQgDgFgFgDQgGgCgKgDIAAgLIAzgCIANAAIAACcQAAATACAHQACAHAFAFQAEAEAMACIAAALgAgShpIAAgqIAnAAIAAAqg");
	this.shape_141.setTransform(1116.6,479.8);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#FFFFFF").s().p("AhDBmQgOgGgGgMQgHgMAAgPQAAggAggSQAggQA+gDIAAgOQAAgXgFgNQgDgNgKgHQgJgGgQAAQgQAAgLAJQgLAJgFASIgcAAIAAgcQAVgLAOgFQANgGAPgCQAOgEANAAQAWAAANAHQANAHAHAPQAGAOAAAdIAABLIABAXIABAMIAEAKQABADAFACQAFADAJACIAAALIg9AAIACgfIgDgBQgUAUgPAIQgRAIgTAAQgRAAgMgHgAgiARQgWALAAAXQAAANAFAHQAFAHAIADQAIADAKAAQAPAAAMgHQAMgIAGgLQAHgLAAgLIAAgfQgrAAgXAMg");
	this.shape_142.setTransform(1099.6,484);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#FFFFFF").s().p("AgxCWIAAgLIALgDIAJgEIAFgHQACgEABgGIABgVIAAjgIgbAAQgLAAgGADQgHACgGAFQgFAHgFALQgFAMgEASIgWAAIAAhNIDtAAIAABNIgWAAQgEgUgFgLQgFgKgFgGQgFgGgGgCQgGgDgNAAIgbAAIAADgQAAAOABAHQABAIADAEQADAFAFADQAFACALACIAAALg");
	this.shape_143.setTransform(1075,479.6);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#FFFFFF").s().p("AhEBmQgNgGgGgMQgHgMAAgPQAAggAggSQAggQA+gDIAAgOQAAgXgEgNQgEgNgKgHQgKgGgOAAQgSAAgKAJQgLAJgEASIgdAAIAAgcQAUgLAOgFQAOgGAPgCQAOgEAOAAQAVAAAOAHQANAHAGAPQAHAOAAAdIAABLIAAAXIABAMIADAKQACADAFACQAFADAJACIAAALIg8AAIABgfIgEgBQgSAUgRAIQgQAIgTAAQgRAAgNgHgAgiARQgWALAAAXQAAANAFAHQAFAHAIADQAIADAKAAQAPAAAMgHQALgIAIgLQAGgLAAgLIAAgfQgrAAgXAMg");
	this.shape_144.setTransform(488.1,484);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#FFFFFF").s().p("AgaB2QgOgSAAgjIAAh6IggAAIAAgKQAKgCAIgFQAGgEAEgHQAEgHACgLQACgKACgUIAgAAIAAA3IBGAAIAAAVIhGAAIAABhQAAAWACANQAAAMAGAHQAEAIAHACQAFADAKAAQAJAAAHgDQAIgEAIgGIAJALQgPAQgOAGQgOAHgPAAQgbAAgOgQg");
	this.shape_145.setTransform(469.8,481.5);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#FFFFFF").s().p("AhMBrIAAgLIAMgEIAHgGQACgEABgHQACgHAAgQIAAheIgBgXQAAgIgDgFQgCgFgGgDQgFgCgKgDIAAgLIAzgCIAOAAIgDAmIADABQANgOAJgJQAKgIAMgFQAMgFAPAAQANAAAKACIAAAyIgYAAQgGgMgGgFQgGgFgKAAQgIAAgIAEQgHAEgHAJQgHAJgDAIQgCAIAAAKIAABMQAAAUACAIQACAHAGAEQAFAEALABIAAALg");
	this.shape_146.setTransform(452.8,483.9);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#FFFFFF").s().p("AhEBmQgNgGgGgMQgHgMAAgPQAAggAggSQAggQA+gDIAAgOQAAgXgEgNQgEgNgKgHQgKgGgOAAQgSAAgKAJQgLAJgEASIgdAAIAAgcQAUgLAOgFQAOgGAPgCQAOgEAOAAQAVAAAOAHQANAHAGAPQAHAOAAAdIAABLIAAAXIABAMIADAKQACADAFACQAFADAJACIAAALIg8AAIABgfIgEgBQgSAUgRAIQgQAIgTAAQgRAAgNgHgAghARQgXALAAAXQAAANAFAHQAFAHAIADQAIADAKAAQAPAAAMgHQALgIAIgLQAGgLAAgLIAAgfQgrAAgWAMg");
	this.shape_147.setTransform(432.3,484);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#FFFFFF").s().p("AAcCdIAAgLQAFAAAEgCQACgCAAgEIgBgHIgFgIIgOgUIgZgjIgKgNIgHgEIgJgBIgNAAIAAA0QAAATACAIQACAHAEAEQAFAEALACIAAALIhWAAIAAgLQAKgCAEgDQAFgEACgEIACgLIABgUIAAi3IAAgdIgCgOQgCgGgBgDQgEgEgDgCQgFgCgLgCIAAgLIA1gCIANAAIAAC/IAHAAQAHAAAFgCQAGgCAGgEIARgQIAQgPQAFgHACgFQACgFAAgFQAAgGgEgEQgFgEgIgBIAAgLIBeAAIAAALQgKACgLAHQgMAHgMALIgyAvIA/BTQALAOAJAHQAJAHAKACIAAALg");
	this.shape_148.setTransform(410.1,478.8);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#FFFFFF").s().p("AhEBmQgMgGgHgMQgHgMAAgPQAAggAggSQAggQA+gDIAAgOQAAgXgEgNQgFgNgJgHQgJgGgQAAQgQAAgLAJQgLAJgEASIgeAAIAAgcQAVgLAOgFQAOgGAPgCQAOgEAOAAQAVAAAOAHQANAHAGAPQAHAOgBAdIAABLIABAXIABAMIADAKQADADAEACQAFADAJACIAAALIg8AAIABgfIgEgBQgSAUgRAIQgQAIgTAAQgRAAgNgHgAghARQgXALAAAXQAAANAFAHQAFAHAIADQAHADALAAQAPAAALgHQAMgIAIgLQAGgLAAgLIAAgfQgsAAgVAMg");
	this.shape_149.setTransform(386.8,484);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#FFFFFF").s().p("Ag2CuQAUgIAIgHQAIgIADgMQAEgKAAgUIAAj2QAAgTgCgHQgDgHgDgEQgFgEgNgDIAAgLIBbAAIAAALIgNAFQgFACgCAEQgDADgBAIQgCAHAAAPIAADlQABAegHASQgHATgQANQgQAMgdAJg");
	this.shape_150.setTransform(367.8,483.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},311).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},48).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},25).to({state:[{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138}]},23).to({state:[]},1).wait(144));

	// Back
	this.backlocation = new lib.backbtnpink();
	this.backlocation.name = "backlocation";
	this.backlocation.parent = this;
	this.backlocation.setTransform(1427.3,725.6,1.743,1.743,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.backlocation, 0, 1, 1);

	this.back1 = new lib.backbtnpink();
	this.back1.name = "back1";
	this.back1.parent = this;
	this.back1.setTransform(710.5,444.7,1,1,0,0,0,-0.3,0);
	new cjs.ButtonHelper(this.back1, 0, 1, 1);

	this.back2 = new lib.backbtnpink();
	this.back2.name = "back2";
	this.back2.parent = this;
	this.back2.setTransform(1438.5,485.4,1,1,0,0,0,-0.3,0);
	new cjs.ButtonHelper(this.back2, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.backlocation}]},359).to({state:[{t:this.back1}]},24).to({state:[]},1).to({state:[{t:this.back2}]},23).to({state:[]},1).wait(144));

	// Picture
	this.taiwanbtn = new lib.taiwanbtn();
	this.taiwanbtn.name = "taiwanbtn";
	this.taiwanbtn.parent = this;
	this.taiwanbtn.setTransform(1127.3,325.9);
	new cjs.ButtonHelper(this.taiwanbtn, 0, 1, 1);

	this.jakartabtn = new lib.jakartabtn();
	this.jakartabtn.name = "jakartabtn";
	this.jakartabtn.parent = this;
	this.jakartabtn.setTransform(427,321.5);
	new cjs.ButtonHelper(this.jakartabtn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.jakartabtn},{t:this.taiwanbtn}]},311).to({state:[{t:this.jakartabtn},{t:this.taiwanbtn}]},48).to({state:[{t:this.jakartabtn},{t:this.taiwanbtn}]},24).to({state:[{t:this.jakartabtn},{t:this.taiwanbtn}]},1).to({state:[{t:this.jakartabtn},{t:this.taiwanbtn}]},23).to({state:[]},1).wait(144));

	// Loading
	this.instance_17 = new lib.Tween5("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1279.6,-18.7);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(419).to({_off:false},0).to({guide:{path:[1279.6,-18.6,1288.5,-13.9,1296.6,-10.8,1310,-10.8,1323.4,-10.8,1323.4,-4.6,1323.4,1.7,1334.4,4.1,1336,6.4,1340.7,6.4,1345.4,6.4,1347.1,12.2,1349.1,15,1351,17.8,1353.3,17.5,1378.5,47.4,1403.7,77.3,1408.4,89.9,1408.5,93.1,1401.4,101.7,1394.3,110.4,1001.9,73.6,548.4,110.4,528.7,120.6,509,130.9,499.5,130.9,490.1,130.9,483,137.2,480.7,138.8,457.8,138.8,435,138.8,434.2,150.6,433.4,151.4,422.3,151.4,411.3,151.4,411.6,157.6,410.6,160.9,409.5,164.2,407.1,164.7,396.7,166.1,394.5,167.7,384.8,173.7,375.1,179.7,367,179.8,362.9,186.2,353.6,187.2,350.5,193.3,339.7,197.7,338.7,197.9,331.7,197.9,324.7,197.9,324.7,208.8,323.9,210.8,318,218,312.1,225.3,308.9,225.3,305.8,225.3,305.8,233.2,305.8,241.1,294.7,241.8,293.5,244.4,287.1,253,288.5,258.4,288.5,304.8,288.5,351.3,290.8,351.3,293.2,351.3,293.2,356,293.2,360.8,311.3,360.8,329.4,360.8,333.8,370.6,332.6,375,347.5,375,362.5,375,386.9,381.3,411.3,387.6,495.6,387.6,579.9,387.6,651.7,393.4,723.5,399.3]}},29).to({_off:true},6).wait(98));

	// running
	this.runningboy = new lib.runningboy();
	this.runningboy.name = "runningboy";
	this.runningboy.parent = this;
	this.runningboy.setTransform(614,640);
	this.runningboy._off = true;

	this.timeline.addTween(cjs.Tween.get(this.runningboy).wait(419).to({_off:false},0).wait(1).to({regX:-405.6,x:217.3},0).wait(1).to({x:226.2},0).wait(1).to({x:235},0).wait(1).to({x:243.9},0).wait(1).to({x:252.8},0).wait(1).to({x:261.7},0).wait(1).to({x:270.6},0).wait(1).to({x:279.4},0).wait(1).to({x:288.3},0).wait(1).to({x:297.2},0).wait(1).to({x:322.7},0).wait(1).to({x:348.1},0).wait(1).to({x:373.6},0).wait(1).to({x:399.1},0).wait(1).to({x:424.5},0).wait(1).to({x:450},0).wait(1).to({x:475.5},0).wait(1).to({x:500.9},0).wait(1).to({x:526.4},0).wait(1).to({x:554},0).wait(1).to({x:581.6},0).wait(1).to({x:609.2},0).wait(1).to({x:636.8},0).wait(1).to({x:664.4},0).wait(1).to({x:692},0).wait(1).to({x:719.6},0).wait(1).to({x:806.9},0).wait(1).to({x:894.1},0).wait(1).to({x:981.4},0).wait(5).to({_off:true},1).wait(98));

	// Picture
	this.instance_18 = new lib.aboutboba();
	this.instance_18.parent = this;
	this.instance_18.setTransform(1752.9,414.2);
	this.instance_18._off = true;

	this.instance_19 = new lib.Tween8("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1285.6,414.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_18}]},454).to({state:[{t:this.instance_19}]},48).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(454).to({_off:false},0).to({_off:true,x:1285.6,mode:"synched",startPosition:0},48).wait(50));

	// Title
	this.instance_20 = new lib.aboutext();
	this.instance_20.parent = this;
	this.instance_20.setTransform(790.9,-54.6);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(454).to({_off:false},0).to({y:93.9},48).to({_off:true},1).wait(49));

	// Back
	this.backabout = new lib.backbtnpink();
	this.backabout.name = "backabout";
	this.backabout.parent = this;
	this.backabout.setTransform(1433.1,725.4,1.635,1.635);
	this.backabout._off = true;
	new cjs.ButtonHelper(this.backabout, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.backabout).wait(502).to({_off:false},0).to({_off:true},1).wait(49));

	// Text
	this.instance_21 = new lib.abouttext();
	this.instance_21.parent = this;
	this.instance_21.setTransform(-512.8,410.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(454).to({_off:false},0).to({x:558.6},48).to({_off:true},1).wait(49));

	// Shape
	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#9900CC").s().p("As7I0IoCqpIKUodIHoq8ILPHMIMwD5IjXM5IAQNWItVAyIsmEXg");
	this.shape_151.setTransform(198.6,209.8);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#9B06CD").s().p("AnUU0IgDgHIAAAAIgCgFIgDABIAAgBIgBgCIgBgCIADgBIgBgCIAAgBIgDABIgDABIgOAFIAAABIABACIABABIABADIAOgFIAAAAIACAGIgOAFIgCgGIgJAEIgBgDIgJADIAAgCIgLAEIgBgDIgBgCIALgEIAIgDIgCgEIgBgDIgIADIgLAEIgCABIgLADIgDABIgPAFIgfhRIh5k3IiIlhIgPglIjIkNIhjiEIg9hQIhUhuIg7hOIDGikIE3j9ICMhxICWjUICZjXIAshAIBIhmIA8hXIAFAEIADACIADgFIAMAIIAEgFIAKAGIADgFIACgDIAFADIAFgHIANAIIADgFIAGAEIABgCIADACIACgCIAJAGIAAgBIAFADIACgDIAFADIACgDIFoDmIFXDbIDrBIIDpBGIAUAGIA8ASIBJAWIBbAcIBBAVIAAAAIAUAGIjRMnIABAwIAOMSIgaACIAAACIsrAwIl+CEImSCKIgBgCIgGACIgBgBIgKADIgBgCgAnjUYIgDABIACAEIgOAEIABAEIAOgFIADgBIADgBIgBgEIgCgDIgDABgAECQjIgCABIAQgBIADgBIAGAAIABgBIgGABIgBAAgAEpQgIAPgBIABAAIgQABgAQsPwIgRABIhAADIhlAGIiDAKIiYAJIgVACIhfAFIgdACIg2AEIgEAAIgZACICMgJIARgBIELgQIAEAAICmgKIBOgEIAVgCIAAAAIAQgBIAAAAIAPgBIAOgBIAAgBIgFAAIgPABIgJAAIAAABIgEABIAAgCIgMABgARzKoIABBdIABA9IABB3IABA1IADAAIAAAAIAAgPIgDi7IgFjUIABBYgA0EhqIBgCAIByCWIEoGDIABACIAOAhIBHCwIhWjdInnqFIgMgQIgHAGgAUhp6IAaAIIi/LaIgRBDIAFEhIAAgWIgBhjIAAgSIgCiTIAAgBIADgKIAahjIAGgXIBomQIBFkKIgCgBIACgIIgagIIgCAIgAig0GIA5AlIJFF1IGmCBIF3BzIjLMNIAAASICEoDIBKkeIkQhTIoEidIgDgCIgBAAIgHgFIglgXIjHh/ImSkAIgBABgASHiSIgsCxIAIgfICkp3IgEgBIh8HmgAIftkIA8ARIg/gUIADADgAnVu6IgEAGIAGgIIgCACgAi20UIAEACIgDAEIAEADIADgEIAFADIAAgBIABgCIADgDIAEgGIgFgDIACgCIAEgGIABgCIAFADIAAgBIADgDIgJgGIgDAEIgBACIgFAGIgBADIgEAFIgCADIgCACIgDgCIgBABgAjh0rIAIAGIACABIACgEIgBgBIgJgFIgCADg");
	this.shape_152.setTransform(213.5,215.3);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#9E0CCE").s().p("AmkUaIgMAEIgFgOIgdAKIgEgMIgSAGIAAgBIgIACIgBgEIgKADIgBgCIgDgGIgWAHIgCgEIAWgHIgCgIIgXAHIgDgHIgDABIgXAIIgEACIgfAKIgehPIh1kyIiGlcIgNglIjEkHIhgiDIg9hPIhShrIg7hOQBghQBjhQIEyj3ICLhvICTjOQBOhoBJhoIAsg+IBEhkIA6hTIAEAEIANAIIAGgJIAYAPIgBACIgSgLIgFAHIASALIADACIAFgHIAPAKIgFAHIABAAIAJAGIAFgHIABgCIADgEIgJgFIgDADIAAAAIACgEIgPgKIgDAEIgDgCIAIgLIASAMIALgPIAKAGIAKgPIAbAQIAGgIIALAGIACgDIAHAEIADgEIASAMIACgDIAJAGIAEgGIAKAGIAFgGIFfDhIFODVID/BOICdAvIAtANIA7ARIBHAWIBZAcIBAAVIAoANQhlGKhnGKIABAvIAOMAIg0ADIAAAEIsCAtIlzCAImHCHIgCgEIgNAEIAAgDIgVAHIgCgEgAmwUNIAGgCIgFgLIgFACIAAgCIgCgDIgBgCIAFgCIgCgGIgFABIgBgBIgBgDIAFgCIgDgIIgDgHIgFACIgGACIADAIIgdAJIADAIIAcgKIABADIgcAJIABACIADAGIAAACIACAFIAcgLIABADIAGgDIAEALgADMQKIgPAFIAhgCIAOgEIggABgAEGQKIgBABIATgCIgSABgAFRQGIAAAAIAIgBIgIABgAPiPdIglACIiDAIIihAJIhsAHIhEAFIg1ADIgUACIgXABIgGABIgMAAIgCABIGhgZIDMgNIAAgBIAXgBIAAgBIgXACgAQyPVIgfACIAAADIgRABIAAABIAOAAIAMgBIAJgBIATgBIAEAAIAAgEIgKAAgAzLhfIBeB+IBxCTQCQC+CTC8IACACIAOAgIBqEBIh5k4Inbp2IgJgMIgPAMgASABlIgRBCIAGFIIAAgeIAAg8IgBhaIAAiQIABgFIAQg7IAQg8IBlmGIBCkEIgEgBIi4LBgARUiUIg0DUIAQg9IChpoIgJgDIh0HUgAJHtTII+CvIC3A4IAAAAIp5jDIiAgnIAEADgApOp3IABgBIADgFIgEAGgAIytHIBqAfIhygkIAIAFgAiqzdIgCADIAIAEIgGAIIAJAGIAGgIIAJAGIABgDIADgDIgJgGIAFgHIAIgLIADgEIgJgHIgDAFIgIgEIgHALIAHAEIgFAHIgHgEIgDADgAiIz/IAKAGIACgDIgKgGIgCADgAjQ0FIAJAGIAIgKIgJgGIgIAKg");
	this.shape_153.setTransform(228.4,220.7);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#A013D0").s().p("Al1UAIgRAGIgJgVIgqAOIgGgRIgbAJIgCgDIgOAGIgEgHIgBgDIgEgJIgEgGIgIADIADAGIgiAMIgFACIgDgHIgEgMIgFgKIgTAGIgPAFIgHADIgtAPIgdhOQg5iUg5iZIiClWIgOgkIi+kEIheiAIg7hOIhShpIg6hMQBfhPBhhOQCWh6CYh4ICHhsICTjIQBMhmBIhkIAqg7IBChhIA4hRIAEAEIAWAOIAJgMIAjAWIgBADIgagRIgHAKIAZARIAIgKIAEACIAXAPIADgDIAEgFIgXgPIgFAGIgFgDIALgRIAdASIARgXIAOAJIAPgWIAoAYIAKgMIAQAKIADgFIAKAGIAFgGIAbARIACgDIAOAJIAHgJIAPAJIAGgJIFYDaIFGDQIFABhIBnAeIA8ARIBFAVIBXAcIA+AWIAAAAIA9ATIjHMBIABAvQAHF3AFF2IhMAFIAAAFIrWArIlpB8Il/CDIgCgGIgTAGIgBgEIggALIgDgGgAmaTUIABACIACAGIABADIAKgDIgBgDIgDgGIgBgDIAIgCIgEgKIgCgCIgHACIgBgDIgEgMIgEgKIgKADIAAAAIAEAKIgrAOIAFAMIAqgOIACADIgrAPIACADIAqgPIAEAKgACgPzIgXAIIAxgDIAXgIIgxADgAD4PzIgBABIAHgBIgGAAgAOYPBIAAAHIgsADIhZAFIivAKIg6ADIhgAHIgyAEIgrAEIgFAAIAAAAIAPAAIBagGIEogRICfgLIAAAAIAwgDIAZgCIAAgCIAugDIAAgEIgGAAIgoACIAAAFIgZACIgOABIAAgGIgiABgAyShVQAtA/AvA9IBvCRQCOC5CQC1IADAFIAPAfICSFdIiimeInPpoIgGgIIgWASgASEBhIgRBAIAGE7IAAhUIABhUIAAiKIAAgCIAIgbIAWhXIBjl8IBAj+IgHgCIiwKngAQhiVIhAELIAdhxICcpYIgNgEIhsHCgAJks8IIwCsICmAzIAAgBIppi/IhzgjIAGAEgAohppIACgBIANgUIgPAVgAJEsqIBvAhIh4gnIAJAGgAiUyzIAKAGIgGAJIgEAGIgDAEIgJANIAOAJIAJgNIANAIIAEgEIgOgJIAEgFIAGgJIANgSIAFgHIgOgJIgFAHIgLgGIgMASgAjgzWIgEAGIgCADIgIALIAOAJIAIgLIACgEIAEgFIAIgKIgOgJIgIAKgAhNzLIABgBIAIgMIgbgRIgKANIgDAEIAOAJIADgEIAOAIg");
	this.shape_154.setTransform(243.4,226.1);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#A319D1").s().p("AlFTmIgYAIIgKgcIg4ATIgKgYIgjANIgCgEIgXAIIgEgIIgKADIgCgDIgsAOIgFgMIgEgIIgGgQIgGADIgGgPIgtAQIAFAOIAugPIAGAPIg4ATIgMgeIg8AUIgbhMQg3iRg5iXIh+lQIgOgkQhciBhch/QguhAgug+Ig7hMQgpgzgng0Ig5hKQBchPBhhMQCTh3CWh1ICFhpQBKhhBHhiQBMhiBFhhIAqg5IA/heQAZgnAcgmIAEADIAfAUIAMgRIAwAdIgDAFIgigWIgKAOIAiAXIAGAEIAKgPIAfATIABABIADgFIAGgHIgCgBIgfgTIgFAIIgGgFIAOgWIAmAZIAXgfIASAMIAVgeIA1AhIAMgRIAWAOIAFgHIANAIIAFgIIAlAXIADgEIASAMIAJgMIAUAMIAJgMIFQDUIE/DLIEmBaIBhAaIA5AQIBFAVIBVAdIA8AVIAAAAIBQAZQhfF4hhF3IABAtQAHFvAEFtIhmAHIAAAGIqtAoIlcB4Il2B/IgDgIIgZAIIgCgGIgqAQIgEgIgAlkS2IAJAWIAKgDIgJgWIgKADgAoJSjIAGAOIAGAQIAIgDIgHgPIgHgOIgGACgAl3SsIABADIAEAIIANgFIgDgIIgBgDIAJgDIgGgNIgCgEIgIADIgCgEIgGgPIgEgLIgXg5IhAilIiimgInCpWIgBgCIgEgFIgdAZQAtA+AtA9IBtCOQCMCzCOCxIAkBbIDKH+IAFALIg6ATIAHAPIA5gSIABAEIg4ATIABAEIA5gTIAFANgAGAPzIinA5IjiBOIifA7IDthQIFQhzIgVABgALYO7IjRAMIg9AFIhiAIIA6gDIAmgDIADAAIEigSIBhgGIAAgCIh2AHgAOvOlIghABIAAAKIAAACIAigCIAAgCIA9gEIAAgHIg+ACgASIBeIgQA/IAFE3IABhMIAChZIABiHIAAgCIAHgYIAVhRIBglyIA/j4IgKgDIiqKOgAPuiXIg7D/IAZhgICYpJIgRgFIhlGvgAJVsNICMAqIHMCVIACgIIgcgJIgOgFIk6hfIhqggIiYgxIAMAHgAKBskQESBTERBUICWAvIAAgCIpai7IhqggIALAHgAnzpcIACgBIAHgLIgJAMgAijxUIAwAhIAOgUIAFgHIAFgGIAHgKIASgaIAHgLIgSgKIAQgXIAFgGIARALIACgBIALgRIglgXIgMASIgEAGIgRAXIgHAKIgNgIIgRAYIANAJIgIALIgFAGIgEAHIgNgIIgNASgAjgy7IASALIAQgWIgSgLIgQAWg");
	this.shape_155.setTransform(258.3,231.5);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#A51FD2").s().p("AkWTMIgOgiIgBgCIgMADIgLgaIgCgFIALgEIgFgKIgBgEIgKAEIgHgRIAKgDIgCgFIgKADIgCgFIAKgDIgJgTIgIADIgFgMIgRAFIAFANIAIATIACAFIhIAYIACAFIAHAQIACAEIBHgYIAEAKIACAFIAMAdIhGAXIgNgdIgsAPIgBgFIggAMIgFgKIgCgFIgKADIgGgPIAIgDIgFgKIgJgTIgGACIAIAUIAEAKIg4ATIgEgLIgJADIgIgTIgHgSIg4ATIgNAEIgMAFIg+AUIgbhLQg2iNg2iWIh8lKIgMgjQhaiAhbh8Qgsg/gtg9QgcgmgegkQgpgygmgzQgdglgbglQBahMBghLQCQh0CThyICEhmQBJhfBHheQBKhgBFhdIAng3QAggtAdgtQAZgnAaglIAEAEIAnAaIAQgVIA8AkIASgcIAvAfIAcgnIAXAPIAbglIBBApIAQgVIAbARIAGgIIAQAJIAuAbIAGgIIADgFIAZAPIALgPIAYAPIALgPIFJDOIE2DGIEHBQIBgAZQAcAIAcAIQAjAKAhALIBSAcIA7AWIAAAAIBlAfQhcFuhfFvIAAAsQAHFlAEFlIiAAIIAAAIIqDAmIlQBzIlsB8IgEgLIgfALIgDgHIg1ATIgFgKgAGWPiIiiA3IjQBHIicA9IDohPIFBhuIgbACgAKdOlIivAKIhtAMIAygDIAUgCIDNgNIBvgHIAAgDIA6gDIAAgMIg5AEIgBALIhmAGgANUObIAAACIApgCIAAgDIBOgFIgBgKIhNADIAAAMIgpADgAwgg/QArA9AtA8QA1BGA3BEQCICvCMCrIAHAHIANAfICWFRIinmpImxpCIgFgHIgBgBIgkAfgASLBbIgPA9IAFE4IAChGIAChhIADiEIAAgCIAFgSIAUhMIBclqIA+jwIgNgEIijJ0gAO6iYIg4D8IAXhZICUo6IgVgHIheGegAJnrwIBvAhIGzCQIACgLIgCgBIkzhdIiAgnIh5goIAKAHgAm5peIgMAQIACgCIAQgYIgGAKgAiAw9IgFAIIgGAJIgRAZIA6ApIATgbIgVgOIAHgKIAEgHIAJgMIAVAPIAYgiIgWgOIALgOIASgaIAFgIIACgCIAVANIAOgUIgsgcIgQAWIgFAHIgUAcIgKAOIgWAgIgQgLIgJANgAk0x9IAjAZIAEADIAVAOIAPgVIAGgHIAFgJIgWgOIgCgBIgHAIIgFAHIgkgYIgOATg");
	this.shape_156.setTransform(273.2,237);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#A825D3").s().p("AjlSxIgkAMIgQgpIAigLIgCgDIgOggIgNAFIgUAGIAPAjIhUAcIgPgiIg1ARIgCgGIgoAPIgGgNIgDgEIgJgTIgIADIAIATIhCAVIgIgSIBCgWIgEgNIAGgCIgLgWIgJgRIgDABIAHARIhEAWIgIgTIgKADIgbAIIgpAOIgPAEIgdAKIg9AUIgZhJQg0iKg1iUIh4lFIgMgiQhZh+hXh6Qgrg/gsg7QgbglgegkQgpgxglgxQgcgkgagkQBXhMBehKQCNhwCThvICBhjQBJhdBFhbQBKhdBDhZIAmg1QAegsAbgsQAYgkAagkIAEAEIAwAgIATgaIBIAsIgFAHIAJAGIArAcIgTAZIAFAEIATgaIAaARIAHgJIAHgKIgbgRIAOgUIgDgCIAjguIAcASIAggtIBOAxIATgYIAhATIAHgJIATALIAIgLIA3AiIAFgGIAdASIAMgSIAdASIAOgSIFADIIEvDAIDpBHIBdAYQAdAHAbAIQAhAJAhAMIBRAcIA4AWIB5AmQhZFkhcFlIABArQAGFdAEFbIiaALIAAAIIpaAlIlDBuIlkB4IgEgMIglAMIgEgJIg/AYIgFgNgAk7RBIhWAdIACAGIAJAUIACAEIAFALQAsgOApgMIARgFIADgBIgFgOIAMgEIgCgFIgKgUIgKADIgCgFIgCgFIgJgXIgGgOIgUAGIAGAPIhZAdIALAXIBXgdIACAFgAGuPQIieA2IjCBCIicA+IDphPIEzhpIggACgAAfOuIgsAPIBigFIApgOIhfAEgAL+N5IAAAOIhFAEIhXAFIhyAHIifASIgEABIBTgFIAOgFIDjgNIAogDIAAgDIBggHIAAACIAzgDIAAgDIBcgHIAAgMIhMAEIgQABIAAAOIgzAEIAAgPIgbACgAvog0QArA7AsA7QA0BFA2BEQCGCqCLCmIAGAIIAOAdQBMCnBLCkIiomtImiovIgHgJIgsAmgASPBYIgPA7IAFEuIAChDIADhbIAEiAIAAgDIAGgUIARhAIBZlgIA8jqIgPgFIicJbgAOIiaIg1D0IAUhMICQorIgagIIhVGLgAJ5rTIBXAbIhighIALAGgAiWvRIBFAxIAYgjIgagRIAKgNIAFgHIAIgMIAfgqIAaAQIAMgTIgagQIgcgRIgNASIgUgNIgbApIgKAOIgFAIIASAMIgJAMIgSgLIgVAggAAmxKIASgZIg3giIgSAbIAcARIACgCIAZARgAkZSUIAAAAgAkvx8IgHALIgJgGIAVghIA3AkIgPAUIgtgcgAjzx0IAAAAg");
	this.shape_157.setTransform(288.2,242.4);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#AA2CD5").s().p("Ai2SXIgVgvIgnAOIhhAfIgSgnIg+ATIgCgHIgxASIgHgOIgDgFIgLgWIgHgNIgNgbIgJgRIgBAAIhSAXIAJAVIAMAcIgMAEIgLgcIhPAaIgKgYIgTAGIguAPIg5ATIgZhIQgyiGgziTQg7icg6ijIgMghQhVh9hVh3Qgrg+grg7QgagjgdgjQgogxglgvQgcgkgZgjIAAAAQBUhLBdhIQCLhuCRhrIB/hgQBIhbBDhYQBLhaBAhVIAlgzQAegqAZgrQAWgjAZgiIAFADIA4AnIAWgeIBUAzIAYgnQAfAUAeAUIAEACIApg1IAhAUIAkgzIBbA4IAEgFIAUgXIAlAWIAIgLIAXAOIAJgOIBAApIAFgIIAjAVIAPgVIAiAVIAPgVIE4DDIEoC6IDCA8IBjAYQAcAHAaAIQAiAJAfALIBPAdIA3AWIAAAAICNAsQhWFbhaFcIABAqQAGFTAEFSIi0ANIAAAKIoxAhIk2BrIlbB0IgFgOIgrAOIgFgKIgIADIhCAZIgGgPgAHFO+IiZA1IizA9IiVA9IDjhNIEjhkIglACgAkaQUIhlAjIADAGIADAFIAIASIACAFIBkghIAHARIACAEIAWgIIgBgCIAOgEIgJgUIgMAFIgCgGIAMgEIgLgXIgLADIgCgGIgCgGIgLgaIAIgDIgHgPIgfAKIAHAQIhpAiIANAbIBmgjIACAGgAgMOXIg2ASIBzgGIAxgRIhuAFgAIoN7Ig5ADIhUAKIjLANIg/AGIgHADIDogNIBGgFIAOgFICpgKIEZgSIAhgEIgBgTIgjABIguADIg9ADIABARIg8AFIAAACIAAAAIhwAKIAAgHIBRgFIAAgNIhRAIIAAAKIhHAFgAuugpQApA5ArA7QA0BEA1BBQCDCnCJCgIAHAIIAOAdICUE9IimmqImRoaIgIgLIgzAtgASUBUIgQA6IAGEjIAChCIAEhRIAFh9IAAgEIAFgQIAPg7IBYlWIA4jjIgRgGIiUJBgANUibIgwDrIARg/ICLocIgdgJIhPF5gAKLq1IBBATIF1B/IADgOIjWhBIiigwIhKgaIAJAHgAhqvHIAUANIgLAQIgdApIA9AsIAfgsIgfgTIANgSIAfATIAFgHIgfgTIAHgKIAmg1IAOgWIgggVIgXgNIgPAVIAXAOIgkAyIgJANIgVgNIgFAIgAlZxLIAKAGIgWAfIAiAYIAxAkIAZgiIAIgMIAIgLIgfgTIgIALIgFgDIAIgLIg0ghIgIANIgLgGIgFAIgAAtwwIAfATIABgCIgegUIgCADgApASAIgGgOIBPgaIAFANIAJAXIhOAYIgJgUgApGRyIAAAAg");
	this.shape_158.setTransform(303.1,247.8);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#AD32D6").s().p("AiGR9Igag1IgCgEIgRAGIgQgqIgbAJIATAuIhvAkIgWgtIhFAWIgDgIIg5AVIgIgQIgKADIgCgGIAJgDIgOgZIgHgPIgQgeIgIgQIAHARIhbAdIgKgVIgMADIgwANIgsAMIAKAbIBbgdIAMAfIhuAjIgZg5Ig/AUIg4ASIgWhGQgxiDgyiSQg4iYg5ihIgMghQhTh7hTh0Qgpg9gpg5QgagkgdgiQgogvgkgvQgcgigYgjQBRhKBdhGQCIhrCPhoIB9heQBHhXBDhWQBKhXA+hRQASgYASgZQAcgpAYgoQAVgjAYggIAFADIA/AuIAbgkIBhA6IAbgrQAdASAcAUIAPAKIAxg9IAiAVIADABIAqg6IBoBAIAHgJIATgXIArAaIAIgMIAcAOIAKgPIBJAuIAGgIIAnAYIARgYIAnAYIASgYIEvC9IEhC1ICmAzIBeAWQAcAGAaAIQAgAJAfALIBNAdIA2AVICgAzQhTFShWFTIAAAoQAGFLADFJIjEAOIgKAAIAAAMIoGAfQiVA0iWAyIlRBxIgHgRIgxARIgFgNIgUAIIhAAYIgHgQgAHdOtIiWAzIinA5IiSA9IDlhNQCKguCKgwIgqACgAkOOzIAHARIAMAdIADAGIh3AoIAEAIIALATIADAHIACAFIBfgfIAUgHIAJAXIAEgBIAXgHIAOgFIgLgXIgMAEIgDgHIgLgbIgDgHIgCgGIAJgCIgOgdIgIgRgAHwNlIiQAUIgEACIBigJIAYgCIBPgGIAAAAIAJgBIE4gUIAlgFIAAgWIgoACIgTABQg1ACgzAGIABASIhEAFIAAACIgEABIh8AIIAAgFIg1ADgAt2geQAoA4ArA6QAzBCA0BBQCACgCHCbIAJALIAOAbICWE6IiomxImCoFIgKgOIg6A0gASXBRIgOA4IAEEiIAEhHIAEhNIAGh3IABgFIAGgTIAMguQAqinApimIA3jdIgTgGIiOIngAMhicIgrDdIALguICIoMIgggLIhIFogAKdqYIAmALIFaB4IADgQIimgyIi3g2IgtgQIAHAFgAk6onIAAAAIADgFIgDAFgAhOulIgJANIgFAIIAWAOIgPAVIgjAyIBFAyIAmg1IgjgXIAQgWIAjAWIAFgHIADgGIAwhDIARgYIgigWIglgYIgBAAIgRAZIgZgQIgoA9gAlRwSIAlAYIgeAmIArAfIAdgpIgigXIAJgNIAIgMIgGgEIgJAMIg7gjIgHAKIgLgHIhGgtIgWAfIBEAzIAJAHIAaglIATANgAAewQIAlAZIAMgRIgmgYIgLAQgAkBwoIAiAZIAigvIgkgXIggAtgApeRXIAOgFIAHAQIgOAFIgHgQgApeRXIAAAAg");
	this.shape_159.setTransform(318,253.2);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#AF38D7").s().p("AhXRjIg0ARIgZg9Ih9ApIgYgyIhOAZIgDgJIhBAYIgKgTIgDgGIgQgcIgEACIAMAdIhlAfIgMgaIgQAFIgHgSIAPgFIgPgjIgOAFIgJgXIhWAWIgTAEIgZAHIgEABIhMAZIg1ARIgWhFQgviAgxiPQg2iWg3ieIgMggQhQh5hQhzQgog8gog4QgagjgcggQgogvgkgtQgagigYgiQBPhJBchEQCFhpCMhlIB8hbQBGhUBChTQBJhUA9hOQARgWARgYQAbgoAWgnQAVghAXgfIADAEIBJA0IAegoIBuBAIABgDIAcgtQAcARAbAUIAZARIA4hFIAiAVIAIAFIAvhCIB1BIIAKgOIATgWIAxAdIAKgOIAfAQIAMgQIBSA0IAHgKIArAbIAUgbIAsAbIATgbIEoC3IEYCwICGApIBeAWQAbAFAaAIQAfAIAfAMIBKAcIA0AWIAJADICrA2QhPFIhUFKIABAoQAGFBABFAIi9AOIgqADIAAAMIncAdIkfBiIlIBtIgIgSIg4ASIgGgPIgeANIg/AYIgJgSgAjIPgIAEAIIALAbIAVgHIAJgDIAOgEIgOgbIgEgJIgOgcIgEgIIgHADIgBgDIgBgEIgNgfIgDgIIgvACIiCAqIAJATIARAhICIguIACAGIiHAuIAFAIICGguIALAegAoCPvIADAGIgDgGIAAAAgAGzNPIhYAFIhFAHQgVAEgUABIg5AFIgfADIgzAHIgJADIC5gKIBVgHIABgBIBzgRIAAgCIgoACgAs8gUQAmA4AqA5QAyBBAzA/QB+CbCFCXIAKALIAOAaICWExIipmyIlxnyIgMgPQghAdgfAdgAHZNeIgCAAIADAAIAAAAIgBAAgAIWNHIgeAEIBKgFIAAgHIgsAIgAJrNHIAAACIBMgFIAAgDICKgMIAAgTQg/ADg7AIIgQACIAAASIhMAGgASbBOIgOA2IAEEdIAFhBIAFhPIAHhzIAAgGIAGgQIAKgoQAqihAniiIA1jXIgWgGIiHIOgALuieIgpDbIAKgnICEn9IgkgMIhBFVgAKwp7IANAEIgRgGIAEACgAhcs/IAUAOIgqA8IBNA6IAthBIAUgcIgngZIAFgHIAEgFIAlAcIA4hQIgngYIATgbIgDgCIgngaIgdgSIgSAeIguBJIAWAQIgGAJIgGAHIgWgNIgQAZgAB3rmIABgCIgXgOIgPgJIAlAZgAmgvVIBPA7IAhgwIAmAZIAMgRIgngXIgKgGIhAgmIgJAMIgMgIIgcAsgACZvHIACgCIAbgmIhTgyIgcAnIgNASIApAcIAPgTIAnAYg");
	this.shape_160.setTransform(332.9,258.7);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#B23ED8").s().p("AgoRJIg5ATIgchDQhEAWhHAWIgbg3IgFACIhSAaIgDgLQgkANglAPIgLgVIgEgGIgSggIgDABIANAiIgFABIhrAhIgNgeIgRAGIgIgTIiKArIgghGIgZAHIhIAXIgzAQIgVhDQgth9gviOQg1iSg1ibIgMggQhOh4hOhvQgmg8gng3QgZgigcgfQgogugigsQgbghgXgiIAAAAQBNhHBahDQCDhmCLhiIB5hYQBGhRBAhRQBJhQA7hLQARgVAPgXQAagmAVglQATggAWgeIAFAEQAnAcAoAfIAiguIB7BIIgJAOIggAzIBXBBIAmg3IAqAbIAOgUIAJgMIgrgbIgKgGIhGgtIgMAQIgOgIIAGgJIAagtQAbARAaATIAjAZIBAhNIAhAUIAMAIIA1hJICCBQIAOgSIASgWIA3AgIALgPIAjASIANgSIBbA5IAHgKIAwAeIAWgeIAxAeIAVgeIEgCxIERCrIBpAgIBbAUQAaAFAZAHQAfAIAeAMQAlANAjAPIArATIApANICnA1QhME/hSFBIABAmQAFE5ABE3Ii4AOIhIAFIAAANImzAaIkTBeIk/BqIgJgVIg+AVIgHgSIgqASIg9AYIgKgUgAqMPbIgbAHQguANgsAJIAMAeIBygkIAPgEIgLgYIgNAFgAimO2IhTAfIg9AWIAEAHIAygRIBfggIANAfIAAAAIAigKIgBgBIAOgEIgQgfIgLAEIgEgNIAJgDIgPgdIgGACIgEgJIgCgHIgjAMIADAHIiXAzIAFAJICWgzIAMAfgAoPO1IALAVIANAZIgLgaIgIgWgArChEQgiAdgfAeQAkA3AqA4QAwA/AzA+QB8CYCDCRIAcBDIBwEWIgYAHIBCgDIgHgQIABAAIgDgFIiomvQixjviwjuIgNgRIgGAFgAGRM/IkOASQgbADgdAEIgMAFIBGgEIAQgGIC7gOIBBgFIgBAEIBzgTIAAgSQg5ALg4AIIhYALIA9gDIAagBgAIxMzIhVAHIBVgGIBUgGIAAgDICZgNIAAgVQguADgsAGIg/AIIAAARIhUAIgACLqOIDxBPIEjBgQhNE2hPE1IAAJaIAvgEQAFkQgEkUIgBg0QAzjUAvjVIAtjTIh/gpQjJg+jKg9IgVgNIgPAVgASfBKIgOA2IAFEUIAEhAIgBh+IAPg6IABgHIAFgPIAHgeQApidAmidIAzjQIgZgHIh/HzgAK6ifIgkDSIAHgaIB/nuIgngNIg7FDgAMvqYQDpBHDoBJIAyAQIABgDQj8hSj+hQIgjgMIAZARgAh8q3IAZATIAnAPIAvhBIAqAdIAYgiIgsgbIAEgHIAhAUIAMAIIAHAFIAUAMIAZAIIA+hWIgxgeIgsgbIAVgdIgsgdIgDgCIgWAfIg8BVIgDAFIgFAHIgWAfIgVgOIgsBLgADAudIABgBIAegpIhcg5IgeArIgQAVIAuAgIARgYIAsAbgAk9ueIgNgIIAOgSIAMAHIgNATIAAAAg");
	this.shape_161.setTransform(347.9,264.1);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#B444DA").s().p("AAHQvIg+AVIgfhKQhKAZhPAYIgeg8IgQAFIhOAYIgEgLQgnANgrARIgNgWIgDgGIgUgkIgKgQIAHARIAPAlIgSAGIhpAfIgPggIgJgVIgTgqIgLgYIgPAEIhCAUIg9AOIALAfIB+goIARArIiYAvIgjhKIgBAAQgXAFgVAGIhFAXIgxAOQgJgggLgiQgrh5guiMQgziPg0iZIgLgfQhLh2hLhtQglg8gng1QgYghgcgfQgngtgigrQgagggWggIAAgBQBKhGBZhBQCAhkCJheIB3hVQBFhPBAhOQBIhNA5hHQARgUAPgWQAYglATgkQATgeAVgcIADADQAsAgAsAiIAmgyICIBOIAJgOIAagtQAaAQAYATIAtAhIgaAfIAMAIIADgEIATgcIgIgHIBIhVIAgATIASALIA6hQICNBXIATgVIASgWIA9AjIAMgPIAmASIAOgTIBkA/IAIgMIA1AhIAYghIA2AhIAXghIEYCrQCFBSCEBUIBKAWIBaATQAZAFAYAHQAfAIAdAMQAlANAiAQIApASIBCAVIChA0QhJE1hPE3IABAmQAGEvAAEuIizAOIhnAJIAAAMImJAZIkHBZQibA0ibAyIgJgWIhEAWIgJgUIg2AXIg8AYIgLgWgAiEOMQhBAZhDAYIgcAKIAFAJIAdgKICEgtIAOAjIABABIAmgKIgBgDIgOgjIgHgQIAGgCIABgBIgRgdIgCABIgCgGIgPABIgZAIIioA5IAFAKICng5IANAhgAoSOOIAMAXIAWAoIABAAIBjggIgQgqIgIgXgAqLg5QghAdgeAdQAkA3AoA2QAwA/AyA8QB5CTCCCMIAZBAIBjDyIgUABIhaAcICigIIgBgEIgHgSIBUgDIhHiuIhGiuQi9j7i3j7IgKgOQDyjPD2jOIBVh6Ig2gYIArg9IAfgqIAAAAIABAAIAHACIAyAPIBAhZIgwgeIAYghIAggsIAUgcIAvAdIABgBIAhgtQgygggygfIgiAwIgSAYIgjAxIgXAgIhFBiIgBACIgFAHIgaAkIgTgNIgqBMIASAHIAxAYIhTBzIg9BUIjHCfIhMA9QhSBBhQBCIgOgTIgPANgAg3NMIAbgBIgDgHIgBAAIgXAIgAHqMFIgmAHIAAAQIh9AIIgBAIIjQAOIADAIIAOgFIC1gQIAKAAIAAAFIBvgMIBCgLIABgYgAH3MfIAAABIBcgHIAAgCICpgQIAAgXIg7AHQg4AHg2AKIAAAPIhcAIgASiBHIgNA0IAFERIAFg/IAHhHIAJhsIAAgHIAFgNIAGgYQAniXAkiZIAxjJIgbgIIh5HagAKIihIgiDPIAFgSIB7nfIgsgPIgyExgAB6puIA/AVIAEgGIAKgOIg7gSIgEgCIgOATgAmhusIgoA5IBTBBIAshAIgPgLIhIgvIAMgRIgQgJIgKARIgFgEIhcg8IgiAuIAlAfIA6AtIAkg6IAOAJg");
	this.shape_162.setTransform(362.8,269.5);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#B74BDB").s().p("AA2QVIhDAXIgihQQhRAbhWAZIgihAIgaAIQgmAMgmALIgDgMIgKADQgnANgpARIgPgYIgIADIgDgIIAHgCIgXgmIBFgXIAmgNIgHgUIgQgtIhwAjIgJgYIgLAEIANAWIAYAsIACAAIAGAOIACAGIARAoIggAKIhmAfIgRgkIgLgVIgUguIgRAFIASAvIilAzIglhOIgYAFQgXAEgTAFIhCAVIgvAOQgIgggLggQgqh2griLQgyiLgyiXIgKgeQhKh1hJhrQgjg6gmg0QgXghgbgeQgogrgggqQgagfgWghQBIhFBYhAQB+hgCHhbIB0hSQBFhNA/hLQBHhKA3hDQAQgTAOgVQAYgkASghQARgeAUgaIADADQAwAiAvAnIArg4ICWBVIAMgUIAYgrQAZAPAXARQAaAUAbAWIgbAgIhSgzIgMARIBSAvIgTAYIATAMIARgaIAKgOIAzAgIAUgcIA4hNIg2ggIgyBIIgLgIIBRhdIAgATIAXANIA/hXICbBfIAWgaIASgUIBCAmIANgSIAqAUIAOgUIBuBEIAIgMIA7AkIAagkIA7AkIAZgkIEPClIECCgIAsANIBXASQAaAEAXAHQAeAIAcALQAkAOAgAPIAmARIBeAeICcAzQhGEshMEuIABAkQAEEnAAEkIitAPIiGAKIgBAOIleAWQh9Arh/AqQiWAyiWAxIgKgYIhLAYIgKgYIhBAdIg6AYIgNgYgACVOUIAjBVIBKgYIgjhVIhKAYgAsQOzIghAHIAMAeICJgqIgKgZIhqAegAg5NPIgpARIgKAEQhRAhhUAfIAFAKIAHgDICqg5IAQAnIApgNIALgEIgWgmIgKgTIgCAAgAhzM4IADAHIgEACIAFgBIgBgBIAXgIgAhGMwIgBABIACAFIACAAIgDgGIAIgCIBRgFIgFgOIg/ADIgbABQhQjLhPjMQihjaihjaIgPgVIgXAUQghAcgdAdQAjA2AnA1QAvA+AxA6QB3COB/CHIANANIANAYQBFB9BBB5IgsACIAJAUIAogOIADgBIADAKgABlMjIAEAIIARgGIA/gFIgCgDIhSAGgAGFL4QhEAOhEAJIAAABIgBAPIC1gUIAMgBIABgdIg5ALgAK+LcQhQAKhMAUIgFABIhLAOIBQgGIAAgCIC3gRIAAgXIgbADgASmBEIgNAyIAEENIAHg/IAHhEIAKhoIABgIIAFgMIADgOQAmiUAjiTIAujDIgdgJIhyHBgAJUiiIgdDGIABgGIB4nPIgwgPQgWCMgWCSgAhbo7IAJAEIA9AaIA0hKIA/AWIAOgVIgDgBIgkgXIgPgJIAMgQIBAATIA5hRIAfgrIg3gcIglgTIgXgNIgaAkIhNBtIgEgCIgFgBIAIAFIAQAMIAkAaIABAAIgVAcIhAgVIgKgDIgJgGIgnBKgApVuhIAVATIBcBJIAuhBIgOgKIgRgLIhZg7IgnA1gACLtuIA3AoIAYghIg6gkIgVAdgAnVPnIAAAAg");
	this.shape_163.setTransform(377.7,274.9);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#B951DC").s().p("ABmP8IhLAYIgjhXQhXAeheAbIglhEIAAgBIglALQglALgkAKIgEgLIgUAFQgmAMgpASIgPgaIgHACIgEgHIguAOQgyAPgyAOIgSgmIgWAIIgKgZIgUgzIiUAuIgMgdIgmAIIgwAJQgVADgTAGIg+ATIgtANQgHgfgKggQgphygqiJQgwiIgxiVIgJgdQhHh0hHhoQgig5glgzQgWgfgbgeQgngqgggpQgZgfgVggIAAAAQBFhEBXg9QB6heCGhYIBzhQQBEhJA9hIQBIhIA0g/QAQgSANgVQAXghAPghQAQgbAUgZIADADQAzAlAzAsIAwg+ICjBbIAQgaIAWgqQAYAOAWASQAZASAZAVIAMAJIgdAiIhYg2IgMASIgQAWIBRA2IAXgbIAMgNIASALIgJAOIgVAeIA0AjIAYgiIAIgLIAUgbQgZgWgZgUIgNgKIBZhkIAgASIAcAQIBEheICnBmIAageIATgTIBHApIAOgTIAuAVIAPgVIB3BKIAKgOIA/AnIAcgnIA/AnIAcgnIEHCgQB9BNB9BNIARAGIBSAPQAYADAXAHQAdAHAcAMQAjANAgAQIAhAQIB5AnICYAxQhEEjhJElIAAAjQAGEegBEbIipAOIikAOIAAAOIk1ATQh4Aph4AoQiSAxiSAuIgLgaIhQAaIgLgaIgEABIhJAhIg5AYIgNgZgADMNwIAnBcIBQgaIgnhcIhQAagAnjOeIgBAAIADAFIgCgFIAxgQIBDgYIgHgUIgRgwIAAgDIhiAGIgvAOIANAYIAbAvIAEgCIAJAWgAhBM0IAJAWIASArIACAFIAsgMIgCgHIgRgtIABgBIgGgKIgHgNIgqASgAiVMsIBNgHIgCgGIA0gCIgEgKIBNgFIATgDIgEgKIhiAEIgFgNIiVl/QiZjPiZjQIgQgXIghAcQgfAcgdAcQAiA0AnA1QAtA8AxA5QB1CLB+CCIAMAMIAOAYQA+BsA6BpIAGAKIgoACIgFAAIABABIhTAcIAtgCIgcAKgABrMOIgUAIIBMgIIgCgEIg2AEgAF6L3IiCAJIABACIAbgCIBMgHIAygEIgYACgADzL0IABADIBTgGIAAgMQgqAJgqAGgAIfLhIg6ANIgtAEIAmgDIARgBIAAgBIDIgUIAAgXQhOALhKAUgASqBBIgMAwIAEEIIAHg9IAIhCIALhkIAAgJIAFgLIABgFQAkiPAiiOIAsi9IgfgJIhrGngAIhikIgaC+IBym6IgygQIgmEMgAg9oRIgJAUIADABIA4AVIAKAEQAhAMAjALIA8hUIAMgRIAFgIIhEgVIAKgNIANgTIA/hVIA5AjIAmg1Ig9gdIhCghIgfApIghgVQgjA6gfA5IAbAIIgMASIgEAEIgVAgIgSgHIghBEgADJoHIAFACIBEAXIAUgdIhKgXIgTAbgAoGseIAIAHIAzhJIgOgKIgtBMgACltFIA7AsIAcgnIAQAKIgQgKIAAAAIg/gmIgYAhg");
	this.shape_164.setTransform(392.7,280.4);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#BC57DD").s().p("ACUPiIhPAaIgnheQhcAghlAdIglhBIgFgIIgwAOIhFAUIgEgMIgfAJQgkALgoARIgSgbIgEgHIgGABIg7ATQgxAPgxANIgUgpIgXAHIgKgZQhiAehgAdIgphVQgmAIghAFQgUADgTAFIg7ASIgqAMQgHgegJggQgnhugpiIQguiFgviSIgJgdQhFhxhDhmQgig5gjgxQgWgfgbgdQgngpgfgnQgZgegUgfIAAgBQBDhCBWg9QB4haCDhWQA6gmA3gmQBDhHA8hFQBHhFAzg8QAQgQAMgTQAWghAOgeQAPgbASgXIADADQA2AoA3AxIA1hFICwBhIgOAaIgqgcIhTg3IgyBBICEBuIA6hSIARgZIgSgLIATgfIAWgpQAWAOAVAQQAXASAZAVIAWASIBjhtIAeASIAiASIBJhjIC1BsIAdghIASgTIBOArIAOgTIAzAWIAQgWIB/BPIAKgOIBFApIAegpIBEApIAegpID/CaQB3BIB4BKIBFAMQAYADAXAHQAcAHAcAMQAhANAfAQIAdAPICUAvICTAwQhAEahHEcIABAhQAFEVgCESIijAPIjEAQIAAAPIkKAQQhyAnhyAmQiOAviNAsIgLgbIhXAbIgMgbIgTAGIhGAgIg3AXIgQgagAEDNLIhXAcIArBkIBWgcIBWgdIgphiIhXAbgAsNNlIhUAXIAMAeICfgxIgLgbgAoaMgIAMAWIAeAyIANAWIAKAQIgIgRIAdgKIBhghIgHgWIgNgkgAAXMRIgtARIAVAwIAvgPIgMgfIgDgIIgEgMIgEABgAAWMDIAAABIAFAMIAlgNIAOgGIAPgFIALgBIAAgFIhMAFIgLABIgFgNIgKAAIgPgcIANgEIiJlgQiRjFiRjGIgRgYQgVAQgUASQgfAbgcAcQAhA0AmA0QAtA7AwA3QByCGB8B9IANAOIANAWIBnCtIglANIg8AUIhcAfICogJIABAAIgFgLIAvgDIABACIAHgBIAFAKgADaLpIABADIAAACIAvgGIAvgGIAAAAIhfAHgAJpLWIgXAIIgRAFIA3gJQAZgDAZgFIhBAEgAGVLcIApgEIAAgBIgpAFgAIhLIIgrAKICfgQIAAgWQg7ALg5ARgASuA9IgMAvIAEEEIAIg+IAIg+IAMhgIAEgQIABgDQAjiIAfiJIAri2IgigKIhkGNgAHuilQgKBZgMBdIBqmfIg0gRIggD6gAANpGIgPAgIgTAqQgIATgKASIgGAKIgFAJQAjAMAkALIBChbIA+AWIALAEIAVgeIhKgWIARgXIgUgEQghgFgfgGIgXgFIgEAHgAOko7QDFA8DFBAIABgDQjVhIjWhFIAgAUgAAdpkIAZAIIBNAZIBJAXIAwhDIgKgDIg1ghIApg3IAZgiIA4ArIAkgxIg8glIggArIhAgvIgiAvIgjAwIgigVQggA3gbA2gAmxqRIAxAoIBHhhIg3glIhBBegAlwsfIAYAOIAJgOIgVgNIgMANgAk1tFIgCADQAVARAUATIALAKIBHhhIg+glIg7BVg");
	this.shape_165.setTransform(407.6,285.8);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#BE5DDF").s().p("ADEPHIg+hjQgfAOgiANIgQAGQhbAfhkAdIglhAIgKgOIg5ARIhCATIgEgMQgUAEgVAHQgkALgnARIgUgdIgEgIIgEABIhKAXIhfAbIgWgsIgZAIIgLgaIAXgIIgag5IgUAGIgMgbIh2AiIg1AOIALAeICsgzIAXA7IgSAFIi9A5IgshXIgIACQguAJgnAFQgUADgRAEIg4ARIgoALQgGgegJgeQglhrgniHQgtiBgsiQIgKgcQhChwhChjQggg4ghgwQgXgegagcQgmgogegnQgZgdgTgfQBAhBBVg7QB2hYCBhSIBuhKQBDhEA7hCQBGhCAyg4QAPgPALgTQAVgeAMgeQANgZATgWIACADQA5ArA6A3IA7hLIC+BnIAWglIAUgoQAWANATAQQAWARAXAVIAhAbIBth1IAeARQAUAMATAJIBOhqIDBBzIAhglIASgSQAqAXApAXIAQgUIA2AWIARgXICIBVIALgOIBJArIAhgrIBJArIAggrQB7BIB8BLQBuBDBuBEIAwAHQAXADAXAGQAbAHAbAMQAhAOAdAPIAbAPICuA4ICOAuQg9EQhEETIAAAhQAFEMgCEJIieAOIjjATIAAAPIjgAOIjZBJQiJAtiIArIgNgeIhdAeIgMgeIggAKIhEAhIg2AXIgRgdgAKAM0Ih3AoIhFAXIAHASIBZgdICqg5IhOAFgAnoNEIAKAXIgFACIARAbIgMgdIAJgCIB/gsIgIgXIiKAugABcMrIAXA6IAQgFIgig3IgFACgAoBMIIACAFIgSAFIAgA0IAJgCIgXg3IANgEIAIgCgABBLmIgIADIgtAQIAXA2IA0gRIgEgKIgIgVIgKgZIAEgCIALgBIBSgKIANgCIgCgDIhwAIIgLABIAFAIIAJgBIABACgAiOLZIhkAhIA4gDIAkgMICYgLIAAABIADgBIgDAAIgFgNIgPgkIh8AqgABSLOIgaACIAEAJIAFAAQAQgCAQgFIA4gIIhHAEgACoLIIABABIAggCIAAgGIghAHgAKBK9IgLADIAXgEIgMABgAmugLQgeAbgaAcQAfAzAlAzQAsA5AwA2QBvCCB6B4IAOAOIANAVIBRCGIAVgIQg+ifg9igQiKi7iIi8IgTgaQgaAUgYAVgASxA6IgLAtIAED8IAJg7IAAhAIAWhVIABgLIAEgJQAgiAAch+IApiwIgjgLIhfF0gAG7inQgJBXgKBaIBjmGIg2gSQgOBxgMB2gAEWmfIA6AVIgKAoIAigbIAbgoIABgDIgwgQIglgLIgZAkgAAYn2IgGAPQgGAQgIAPIgIAPQgIAPgNAOIgIAKIAqALIAnAKIBPASIAWgSIAsg/IAYgiIhQgZIAagiIgGgCIAHABIA1hIIA2hKIgrgJIgpgSIgqA5IgTgMIgQgJQgcA0gZAzIAYAIIBMAZIhUgNIgRAYIgSgFIgOAfgArBswID8DXIBJhrIgggVIhYg7IgPgKIg2gkIhQg2Ig4BIgADZryIBEA0IAlgxIA/AoIACgDIiKhTIggArgAk3spIgKAOIAZAXIAdAcIBQhtIhCgmIg6BSgAlysHIgMAMIAcARIAJgOIAYgjIgRgPIggAjg");
	this.shape_166.setTransform(422.5,291.2);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#C164E0").s().p("ADyOuIhZAdIguhrIghAMQhYAfhjAbIglg9IgPgUIgIACIgFACIg1APQgfAKggAHIgEgLQgZAFgbAIQgjAKgmASIgVggIgGgHIgCABIhXAaQgvAOguAMIgYgvIgaAJIgLgcIgmAMIi4A2IguhbIgiAJQgtAIglAFQgTABgQAEIg1AQIgmAKQgFgdgJgeQgjhngmiFQgrh/griMIgJgdQhAhtg+hiQgfg3ghguQgVgegbgbQgmgngdglQgYgcgTgeIAAgBQA+hABUg6QBzhUB/hQIBthGQBChBA6hAQBGg/Avg1QAOgNALgRQAUgeAKgcQANgYARgUIACADQA8AuA9A8IBBhSQBlA2BnA3IAYgpIATgoQAVAMASAPIAqAmQAWARAUATQA9hCA7g8IAdASQAYAMAWAKIBShwIDOB6IAlgoIASgRQAtAXAsAZIAQgVIA2AVIAEACQBQAhBRAlIACgDIAMgQIBOAuIAiguIBPAuIAiguIDvCOQBkA8BkA+IAbAEQAYADAVAGQAbAGAaAMQAgANAcAQIAZAOIDHBAICJAuQg6EGhBEKIAAAfQAFEEgDD/IiYAPQiBALiBAKIAAAQIi2ALIjNBFQiEAriEApIgOgfIhjAfIgNgfIgsAOIhEAhIg1AXIgTgegAKYMiIh0AmIggALIAJATIBCgVICcg0IhTAFgAnyMlIAPAYIAYAmIgRgpIgKgZIgMAEgAt7M4IgVAGIALAdIC2g2IAWgGIgNgbgAApLFIADAHIACAFIAZA7IA2gSIACAAIAKgDIAcgDIBSgJIgVgxIgCgDIghACIAVgCIABgYQglAJglAHIAChXIhEAXIAbBFIgSABIgng8IgeAKIgtAQIgHApIA/gDIALgBIAvgDIACADIARgCIAEAKIABAEIgOACIgDgFIgwAEgAmRLIIhtAgIAEAIICkgIIgLghIgwABgAG1l1IAgALIhcFrIgDAfQAMBLALBNQANBaAGBcQAGBaACBfICmgMIgGmqIAMgwIB1ngQhigkhjgiIhPBwgAl5AwIAGAIQCaDVCjDTIAKAYIAPANIANAVIADAFIAIhQIADgkIgkhcQiCiyiAixIhRBEgAS2A3IgLArIADD4IAKg5IAJg5IANhUIABgCIAFgXQAeh2Aah0IAmipIgmgMIhWFbgADhmJIAsAQIgQBEIA/g1IAIgvIgggLIgngMIhVgbIAagiIgwgQIgngOIAXAEIBLALIAvhAIA/hUIgEgDIgugJIgvgKIgyBGIg9BVIgBAAIgWgDIgQAkIgLAYIgEANIgGANIgKATQgJAOgMAPIgZAfIgFAEIBcAUIAOgSIAxhDIBUAdgAPeoNQCoA0CmA2IABgDQi5hAi7g9IAlAWgAmKqXIA9ApIAkgwIhCglIgfAsgAE8qSIBXASIAVgdIgCgBIhCgoIgoA0gArlsJICQB+IAIgNIA1hgIhDgtIhNg0Ig9BQgAoJruIBbA+IAigmIhmg4IgXAgg");
	this.shape_167.setTransform(437.4,296.7);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#C36AE1").s().p("AEhOUIheAfIgyhzQgYAKgaAJQhXAehfAaIglg6IgVgaIgiAKIgRAFIgYAGQgeAJgeAHIgDgJQgeADghAKQgiALgmAQIgXggIgFgIIgCAAQgzARgyAPQgtANguALIgZgxIgbAJIgMgdIg5ARIizA0IgxheIg7AOQgrAIglAEQgRABgQADIgyAOIgjAJQgFgcgHgdQgihlgkiCQgqh8gpiKIgJgbQg9hsg8hfQgeg3gggsQgUgegbgaQglgmgcgkQgYgcgTgdIAAgBQA8g+BTg5QBwhRB+hNIBqhDQBCg/A4g9QBGg7AtgyQANgNALgPQATgcAIgaQALgXAQgTIAEADQA9AwA/BEIBJhaQBsA4BuA7IgUAlIAPAKIhQBxIBKBDQAyg8Ayg4IApAcIA/AsIApg2IhGgnIglgVIgmAqIhehAIAagkIgVgLIAbgvIASgmQATALARAPQATAPAUAVQAaAVAZAYQBDhGBBhAIAdARQAaAPAYAJIBXh2IDbCBIAqgrIARgRQAvAYAvAcIARgYIA1AUIAKAEQBVAiBXAoIABgBIAMgRIBTAwIAkgwIBUAwIAkgwIDnCHIC0BuIAHABQAXACAVAFQAaAHAZAMQAfAOAcAPIAVANQBxAjBxAmICEAsQg3D9g/EBIAAAeQAFD6gED2IiRAPQiRAOiRALIAAAPIiMAKIjBBAQiAApiAAnIgOggIhpAgIgPggIg4ASIhCAhIg0AXIgVgggAnjMdIAfAuIgVgyIgKAEgAupMfIAMAdIDCg4IgLgbgADIMkIAKgDIgVgeIgGgJIARAqgAClLfIAHgBQBDgHA7gJIgWgyIgBgDIh+ALIgBgCIgUADIAAABIgGAAIgpADIABADIACAEIAvgFIAiA0gAm8KxIhBATIgbAHIAKAQIDJgKIgLgiIhsACgAk9A6IAGAIQB1CjB7ChIBCBUIAKAbIAPAOIANAUIAlA4IgYAIIiZAzIgGAdIBPgDIBtgHIABABIAqgIIgog8IgIgLIAIgDIAggLIgehOIhFizIhKhmIiojoQgsAjgqAlgAS5AzIgKAqIADD1IALg5IAJg2IAOhPIADgSIAEgIQAahtAYhrIAkijIgngMIhRFAgAiFnqIgHAIIB1ApIBdAiIAKADIBYAfIghAsIgzBDIhnBQIgHAfQgIAbgCAlQBshhBvhfIBFg7IAJg4IAGglIgsgQIhaghIgTgHIgQApIiog0IghgUIgeAcgAP7n1QCYAuCYAyIABgDQirg7isg6IAmAYgACepGQgVArgSApIAYAEIBgAPIAHACIAqg5IA4hLIgugkIgqgHIgMgCIgsgJQgWApgUAogAFqp5IBbAUIAJgNIgJgFIg/gnIgcAlgAk7rwIgcAoIgWAgIBEAqIAMgQIAcglIBGhfIhLgqIg1BMg");
	this.shape_168.setTransform(452.4,302.1);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#C670E2").s().p("AFQN7IBYgdIg4iAIh5AkIgCgEIgEADIgKAGQgWANgaAMQgfAOgkANQhUAdheAZIglg4IgZgfIg6AQIgmAJIgvAMIgBgGIgCAAQgjABgnALQggAKgkARIgagiIgGgIIgBAAQg4ATg5AQQguANgrAKIgcg0IgOgcIgaAIIhNAXQhXAahWAYIg0hiIhUAUQgqAHgiADQgSAAgPADIguANQgPAFgSADQgEgbgIgdQgfhhgjiBQgoh4gniIIgJgaQg7hrg6hcQgbg2gggrQgTgdgagaQglgkgcgjQgYgbgRgdIAAgBQA5g9BSg2QBthQB8hJIBphBQBAg7A4g7QBFg4ArguQANgLAKgQQARgaAIgYQAJgWAPgRIAEADQA6AvA9BDIALAKIBPhgQBzA6B2A+IgXAqIAPAKIAdgpIgVgLIAcg0IARglQASAKAQAPQARAPAUATQAeAZAbAfQBLhMBGhDIAcAQQAeARAbAIIBch7IDnCHIAtguIARgQQAzAaAyAdIASgYIAzASIAPAGQBWAhBYAmIAKAEIAMgQIBYAzIAmgzIBYAzIAngzIDeCCICeBgQARABAPAEQAaAHAYAMQAfANAaAQIASALQB/AoB9AqIB/ArQgzD0g9D3IAAAdQAFDygFDtIiMAOQigARihAMIAAAPIhgAHIi3A8Qh7Aoh6AlIgQgiIhvAiIgPgiIhHAWIhBAhIgxAXIgXghgAm5LPIgqAOIgTAGIASAaIAnA4Igag8ICgg3IiCANgAsVLRIisAvIALAdIDPg6IAVgGIgHgPgADVJYIgjAMIAOAiIgcADIgtAEIADAGIAZA5IA7gHIAKgBQBHgKA8gLIgVgyIgag8gAnoKaIgUAGIggAJIhIAUIgvAOIFfgRIgMgjQhUADhUAAgAi2KCIgEARIBdgFIBqgHIAChHIA/gVIgLgaIgNgfIAPAOIAOATIAMASIAHgCIAGh0QADhZAAhbIhZh8IhOhvIgGgKICRiDIBWhLIAFghIAOhUIAog1IBHAYIAGhhIgTgDIAmgyIAxhBIAiguIhwgWIgDAEIhFBgIgsA/IgDAEIgSAaIgNASIgOALIgEAFQh0glh0gjIgBAAIgSARIgUANIA/AWIChA7IAVAIIAiAMIgdB6IiEBnIg9AvIgXASQgBAkgDAqIgFAiIgwhDQgtAlgtAoIAGAHQA6BRA7BQQABgqAAgqIAAgGQAJguAFgqICLDBIgCC7IAAAaIgDBvIjFBCgAS9AwIgKApIADDvIAMg5IAJgyIAPhJIADgUIADgHQAZhkAWhjIAiicIgrgNIhJEngAQXneQCKAqCJAtIABgDQidg2idg1IAmAXgAGXpfIBSASIgDgDIg+gmIgRAXgAkvpVIAIgMIAzhEIA5hMIhPgsIg0BKIglA2IgUAdIgngYIgKALIAqAXIAHgKIBIArg");
	this.shape_169.setTransform(467.3,307.5);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#C876E4").s().p("AF+NhIhoAiIg6iEQglATguAQQhRAchdAYIglg1IgfglIhOAWIgtALIgHABIgSAEIAAgCIgRAAQggAAgmAKQggAKgjAQIgcgjIgDgDIgEgGIABAAIgbhBIB+grIiLAPIANAcIgSAGIAsA7Qg/AWg/ASQgsAMgqAKIgeg3IgPgdIgbAIIhgAdQhUAZhUAWIg3hkIgLACQg1AOgsAKQgqAFghACQgRAAgNADIgrALIgeAHQgEgbgHgbQgfheghiAQglh0gniFIgIgaQg4hpg3hbQgbg1gegqQgTgcgagZQglgjgbghQgXgbgQgcIAAAAQA2g9BRg1QBqhNB7hFIBmg+QA/g5A3g4QBFg1ApgqQANgKAJgPQAQgZAGgWQAJgUAOgQIACACQA4AvA6BDIAWAUIBVhoQB7A8B+BCIAdg5IAQgkQARAKAOAOQARAOASATQAeAbAcAgIAGAHIgfAgIAtAbIgGAKIgrA+IhbCJIAVALICChrIAegYIAhgsIgMgHIg+gmIARgYIgfgjIADgEQBQhQBMhEIAbAQQAiASAeAGIBfh/QB6BGB5BIQAZgaAZgYIARgOQA2AaA0AeIATgZIAyARIAVAIQBSAeBTAjIAdANIALgOIBeA1IAog1IBdA1IAog1IDXB8ICJBSIALACQAaAGAXAMQAeAOAZAQIASALQCKArCKAvIB5ApQgwDrg6DuIABAcQAEDogFDkIiHAPQiuASivANIgDACIg1ASIisA4Qh3Amh2AkIgQgkIh1AkIgRglIhRAaIhBAiIgxAWIgZgigAtRK9IiHAkIAKAcIDag7IAWgHIgCgEgAEcLiIAAAAIgBgCIABACgACPJLIAPAkIieAOIiBAUIgHABIgfAPIAWAjQBVgeBTghICHgPIADAAIAaA8IA5gIIAQgDIgLgcIgMgeIgXg5IgSgvIgBgjIgLAEIAMAfIABA0IAAAwIgcgoIgaAKgAkvJ/QhlAEhkAAIARApIClgHIAcgKIAbgJIAEAAIAEgVIgsACgAjGJlIAKAWIAlgDIBmgGIACg+IiXAxgABaHQIAOAgIAOAMIBCgWIhLjCIg3hMIhWh5IAti7IAlidQgmAkgdAiQg0A7giA5QgIAPgMANIgBABIAXAgQguAlgsAoIgFAEIAFAHQBJBnBNBnIgBBCQAsAtAvAsIACgiIAnAzgATBAtIgKAnIACDrIAOg3IAKgxIAOg+IAFgcIADgFQAWhcAThZIAgiVIgtgOIhCENgAESANIAHAJQBkCQBoCOIgDjOIAKgrIBKkwQiVCAiPCCgAC/m6IAXAEIAhAGIgEBnIgBAYIgVAcIgvA9IhGA2IgSBoQBMhEBNhDIAwgqIBThIIBShzIABgCIhegiIAqg3IA0hFIAbAGIgVgNIgGAHQg6gNg9gLIgRAYIhABZIglgMIgZA/gAhzmxIgmAaIAOAEIDPBNIgHAgIBIg+IgFAlIANgPQALgLAHgMIABgDQAJgOAEgQIggAcIgHgCQh2gnh4glIgLAHgAIFopIAWANIANgSIhIgSIAlAXgAm6MYIAAAAgAnULXIAAAAg");
	this.shape_170.setTransform(482.2,312.9);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#CB7CE5").s().p("AGsNIIhrAiIhAiOQgqAag4ATQhQAchbAXIgkgzQgUgVgRgVIhkAcIgrAJQgVAFgUgCQgfgBglAKQgeAJgiAQIgnguIADgBIgdhEIBdggIhmAMIgeADIASAYQAXAgAYAeQhFAYhFAUQgqALgpAJQgRgbgQgeIgdAKIgOggIhzAiQhSAYhQAWIg7hoIgmAKIhfAWQgpAFgfAAQgQAAgNACIgnAKQgNAEgPACQgDgagGgbQgehagfh+QgkhxgliDIgHgaQg3hng0hYQgagzgcgpQgTgcgagYQglgigaggQgWgagQgcIAAAAQA0g8BPgzQBphKB4hCQAzgeAxgdQBAg3A1g0QBEgzAogmQALgJAJgOQAPgXAEgVQAIgTANgPIACAEQA1AsA4BDIAfAfQAug4Avg3QCCA+CGBFIAfg9IAPgjQAPAIANANQAPAOARATQAdAZAZAhIAQASIAUgVQBQhMBJhBIAbAQQAmAUAhAEIBiiCQCABICBBKQAagaAbgZIARgOQA5AbA2AgIAUgaIAxAQIAbAJQBLAaBOAgIA2AWIAJgLIBiA3IAqg3IBiA3IArg3QBmA5BoA9IB3BHQASAFASAJQAcAOAYAQIAQAKQCYAvCVAzIB1ApQgtDgg3DmIABAaQADDggGDbIiBAOQinATioANIgwAQIgKADQhQAbhRAaQhzAkhxAiIgRglIh7AlIgSglIheAcIhAAjIgvAWIgcgjgAuNKpIhkAaIALAbIDdg7IAJgBIAAgBIgJACgACSHSIgEABIgOAEIASAQIABA8IABA0IjTATIhVANIgFACQALAVANAVQBGgaBDgbICCgPIA9gHIAbA+IA2gKIAWgEIgJgaIgNggIgrAFIgwg9IgQAFIgLgZIgJgUIgHgRIAAgLIBLgaIg+ijIgQgWIADDTgAjSJjIhMAEIgtABIgKAjIAtgPIAQgCIB7gJIgJgQIgsACgATFAqIgKAlIADDlIAOg1IAJgmIACgIQAKgqAKgsIACgEQAThSARhRIAfiQIgvgOIg8D0gAhphdIAHALIAjAyIgBADIgRBGIg3AwIAGAHIAcAoQAxBFAzBFQABhDgBhEIgBgmIAIgmIAUhsIgGAFIg3AsIgagjIgBgBIAeh9IhIBAgAD4nUQgSAsgNArIgCAIQgEASgJAPQgFAKgJAJIAAAJIgBCKIAAAGIAABZIAPgNQBuhjByhhIBBhdIhiglIApg2IBcAsIAzhGIgcgQIg4gjIg7BNIgggPIhqhYQgbA2gVA1gAghidIBZhPIBkhWIg2gSIgfgKIizg4Ig3AjICkA+IgiCYIAAAAgAmJoxIgFAGIgwBHIhaCIIgGAFIAPAGQBFg7BHg6IA+gyIAIgKIg1ghIAiAKQgWgVgWgYIgNAVgARRmvQBsAhBrAjIAAgCQh+guh/gsIAmAYg");
	this.shape_171.setTransform(497.2,318.3);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#CD83E6").s().p("AHaMuIhwAkIhFiaIgIAGQgrAdg/AVQhMAbhbAWIgjgwQgXgXgUgYIh5AhIgqAJQgUAEgTgDQgegCgjAKQgeAJgiAQIgqgwIAGgDIgfhGIA/gVQBHgKBGgKIgEgLIB/gKQgQgfgNghIgGACIgCAuQgvAEgwACIgBAAQhDAEhCACIhZACIASArIAEAIIAGANIgZAJQAZAhAZAfQhJAbhLAUQgqALgoAIQgSgdgQgeIgfAJIgNggQhDAVhEATIidArQggg1geg1IhBAQQgzAMgpAIQgoAFgegBQgPgBgMACIgkAJIgaAFQgDgZgGgaQgbhXgeh9QgihtgjiCIgIgYQgzhmgyhVQgZgzgbgoQgSgbgZgXQglghgZgfQgWgZgPgbIAAgBQAxg6BPgxQBlhHB3g/IBig5QA+g0A0gyQBEgvAmgiQALgJAIgMQAOgWACgTQAHgSAMgNIACADQAzAsA1BCIApAqQAxg8Azg7QCKBACNBIIAhhBIANgiQAOAIAMAMIAdAfQAbAZAYAgIAYAfIAngnQBOhJBIg8QAQAKAKAEQApAWAiABIADABIBmiFQCGBLCGBNQAdgcAdgaIAQgOQA9AdA5AiIAUgbIAwAOIAhAKQBHAXBIAdIBLAeIAHgIIBnA6IAtg6IBnA6IAsg6IDHBwQBeA3BeA5QCeAxCdA2IBvAnQgqDXg0DcIAAAaQAEDWgGDSIh8APQigASihAMQhpAkhqAiQhuAihsAgIgSgnIiCAnIgSgnIhrAhIg/AjIgtAWIgfglgAFoKOIAIATIBPgWIhXADgAsMKAIg7APIBAgDIgFgMIAVgGQgMgTgOgPIgZghIAeBJgADJHrIhoAiIABA0IjeAVIgMABQALAVAMAVQA3gVA2gVIB6gPIB3gPIAfgEIAtA4IAUgFIAKgFIgHgSIgOgjIg2AHIgkgtIgNgRIgQgNIgCgCgACKhKIgMAKQgcAUgZAUIgtAiQgrAjgpAlIgTARIAEAHIANARQBKBrBPBpIABA+IAqAmIAbgJIAjgMQgChLgGhFIgEgjQgHg9gNg8QgOhBgQg9IAAgcIALgqIB0hXIArg4IB2iZIAqg1IhHgjIhMhBQgYAzgSAxQgNAkgJAjIgBAFQgEASgJARQgHAMgMANIgYAbIgGAFIgtC1IgLAIgATJAmIgJAkIACDhQAOgvAMgxQAMgpAJgqIACgEQARhJAPhHIAciJIgxgPIg1DagAgshcIAIAKIAJANIAHgsIgYAVgAgGjVIgOBkQBMhFBOhEIABAmIAFgFQAagYAcgWIACgJIgagKIgkgMIhQgbIgtgPIgPB7gApKpkIgoA4IBlBHIA3AnIANAFIhIBsIgkAhIAQAGQBIg/BLg/IBGg5IgGgFIgkgjIgbgIIgQgFIglgLIgNgHIAHgHIh1hGIgJANgAOmnoIA3ATIBqAlQhGgqhGgpIgVAbg");
	this.shape_172.setTransform(512.1,323.8);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#D089E7").s().p("AIIMVIhzAlIhNioIgZAUQgpAdg+AUQhKAahYAWIglguQgYgZgWgaIgMACQhCAThCARIgpAIQgTADgSgDQgcgEgjAKQgcAJghAPQgXgXgYgbIAJgEIgghIIAfgLIBLgaIBrgIIgGgUIhJAFQhLAEhJABIgKABIAGANIAPAjIglAFIAJALQAbAjAbAfQhPAfhPAUQgpALgmAIQgUgegRghIggAKIgOggQhNAXhNAWIiYAoQghg1ggg3IhdAXIhZATQgnADgcgCQgOgBgMABIghAIQgKADgNABQgCgYgFgaQgZhUgdh6Qghhrghh+IgHgZQgxhjgwhTQgYgygZgnQgTgagYgWQgkghgZgdQgWgYgOgbIAAgBQAvg4BOgxQBjhDB0g9IBgg1QA+gyAzguQBEgsAkggQAKgGAGgMQANgVABgRQAFgRANgLIABADQAwAqAyBDIAyA1QA2hBA3g/QCKA/COBHIAPAHIgfBCIAKAHIhMBsIgrA8QAjAaAlATQASAJASAIQAhAQAnAMIATAGQBKhDBNhCIBAg1IgJgJIgMgKQgQgQgRgSIgGgGIg2gQIgMgDQghAigiAmIgBAAIhlhIIAsg9IgXgMIAhhFIANghQANAHAKALQAMANAPASQAZAXAVAhIAhAqIA5g4QBNhFBHg5IAZAPQAoAUAfgBIAOADIBqiIQCMBNCNBRQAdgeAggaIAQgOQBAAeA7AkIAWgcIAvAMIAmALQBBAUBCAZQAyASAyAWIAEgFIBGAmIAoATIAtg5IBsA7IAvg7QBdAzBhA3QBaA0BaA2QCXAvCWA0IBrAmQgnDOgyDTIABAYQAEDOgIDJIh2AOQiZASiaANQhlAihlAfQhpAihoAdIgTgoIiIAoIgTgoIh4AkIg+AkIgrAWIgigmgAS5KFIhnAiIB3gIIACgcIgSACgACcGzIAAAeIhlAkIgIAEIABAzIikAQQAJARAKASQAWAkAdAiQA+gTBAgVIAYgBQB0gPBRgWIgbg+IAXgDIArAzIAIgDQATgGAPgGIgDgGIgQgpIhCALIgPgRIgNgQIgRgOQgygngvgqIABAdgAGXJ5IADAHIAhgJIgkACgAsYJfIhtAcIB2gFIgJgXIATgFQgIgLgKgJIgZgfIAYA4gAEBD5IAtB0IA9CeIAXgDIgCiiIgBhcQhQhvhMhxIgGgJQBrhlBxhkIAlifIgUgIIArg3Ihvg4IgsgnQgUAvgOAuQgJAbgGAaIAAACQgDAUgJARQgHAMgMAMIgXAaQgfAYgcAaQglAkgbAiIgNARIgQBBIgBgpIgEhAIAogjIAQhCIg+gWIAEBiIACAZIhFA+IAHAJIAhAwIAWAgIgJAlQgsAkgpAmIAFAGIA2BPQA1BLA4BJQgCgvgEgsQgIhNgRhKIgPg/ICWDUgATNAjIgJAiQACBuAABtQAPgsANgvQAMgnAKgpIABgCQAPhAAMg+IAaiDIgzgPIguDAgAlDleIAKAFIB/AwIBDgrIACgBIiAgnIgTgMIg7AqgAPhnGIALADIB5AsIAmAWQBOAYBNAaIABgCQhhgkhhgiIh0hFIgQAWgAm2LAIAAAAg");
	this.shape_173.setTransform(527,329.2);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#D28FE9").s().p("AI1L8Ih3AlQgshcgqheIgBAAQgIAIgHAKIgYAVQgmAcg8AVQhIAZhXAUIgkgrQgcgagXgbIgQACIgLABQhGAUhGARIgnAIQgTADgRgEQgbgFgiAJQgbAIggAQQgagYgZgdIALgEIAHAOQBDgTBEgVIBHgXIgPg0QgsAagsAYQg1Abg5AYIghhLIADgBIB2gTIBcgRIANgDIgpiLIgRg0QgDBbgFBVIhXAGIhdAEIATAsIgoAHIAFAGQAdAkAdAfIgDACQhTAhhTAVQgnAKgmAHQgVgfgSgiIggAKIgOghQhXAbhXAYQhKAUhJASQgjg2ghg5Ih3AdQgyALgmAHQgmADgbgDQgNgDgKACIgeAGIgVADQgBgXgFgZQgYhQgbh6Qgfhnggh8IgGgYQgvhigthQQgWgygZglQgRgagZgVQgkgfgXgcQgWgYgNgaIAAAAQAsg4BNgvQBghBBzg5IBdgyQA9gvAzgsQBCgpAjgcQAKgGAGgKQALgTAAgQQAEgQALgJIABADQAtApAwBCIA6BBQA6hGA8hCQCFA6CKBDIAoAUIAihJIALgfQAMAGAJAKIAYAdQAXAYAUAfQAUAeATAZQAngnAmgjQBMhCBFg0QAQAKAJAEQAnATAegDQAMACALADIBtiLQCTBQCTBTQAfgfAigbIAQgMQBCAdA/AnIAWgdIAtAKIAtAMQA8ASA+AWQA8AVA+AaIABgCIAZAOIBdAqIAsg4IBxA+IAwg+QBaAxBcA0QBXAxBWA0QCRAsCPAzIBlAkQgjDFgvDKIAAAXQADDEgIDAIhwAPQiSASiUAMQhfAhhhAeQhlAfhkAcIgUgqIiNAqIgUgqIiDAnQgeASggATIgrAWIglgngAR4KUIBVgGIABgWIhWAcgAw1JsIAHAUIBmgYIDOgJIgEgGQgKgRgMgNIgJgHIgYgcIARAnIikApgAFZlfIgIAfIAAACQgCAVgJARQgGAMgMAMIgXAZQgeAXgbAaQgkAigaAiQgeAngUAmIAqA8QgqAggnAjIghAeIAFAGIAwBGQA2BLA4BKIBNBiIASAqIADAGIAGANIALgCIAdgFIgBiVIAAgUIgDjPIgxhJIgGgIIBThPIAkiaIBxiQIADgMIiPhMIgMgMQgRAsgKAqgATQAgIgIAgQACBsAABrQAPgqAOgtQAMglALglQAMg5ALg5IAYh7Ig0gPIgpCmgAoemvIgYAbIgUAYQhHA4hCA/QA1AZBFAOIBXhQIAqhBIAyhLIANAHIgLgLIgCAEIhGgqIgyA1gAlrmWIhDA4IA8AYIAgAMICLA3IBMgxIibgwIgCgBIhDgoIgPgJIAAgBIgBABgAIUlbIBmA3IAcgmIAegpIgvgbIgxgdIhABQgASplpIB8AnIAAgBIigg7IAkAVgApsohIBIAmIAjAKIhkg6IgHAKg");
	this.shape_174.setTransform(541.9,334.6);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#D595EA").s().p("AJhLkIh5AlQgshbgqhcIgfABIgKAOIgXAVQgkAcg7AUQhGAYhVAUIgkgqQgfgagZgcIgiADIgHABQhKAVhKASIgmAHQgSADgQgFQgagGghAIQgaAIgfAQQgcgZgdgeIgRAHQhQAghRAVQgmAJgkAHQgWgggUgkIghALIgOgjQhgAfhiAaQhHAShGARQglg3gig5IiTAjQgwAKglAGQgkACgagEQgNgDgJABQgSAEgIAAQgIACgLABQgBgXgEgYQgWhNgah4Qgdhjgeh6IgGgXQgshggrhOQgVgxgYgkQgQgZgYgVQgkgegXgbQgVgXgNgZIAAAAQAqg3BLgsQBehABxg1IBcgwQA8grAxgqQBCgnAhgXQAJgEAFgKQALgRgCgPQADgOAKgJIABAEQAqAoAtBBIBDBOQA+hLBBhGQCAA1CGBAIBBAgIAihNIAKgeQALAFAIAKIAVAcQAVAWASAfQAXAmAXAfQAxgyAxgrQBKg+BEgwQAPAJAJAEQAlATAcgGQATACAOAGIBxiPQCaBSCZBXQAhghAkgbIAPgMQBHAeBAApIAXgeIAsAJIA0ANQA2AOA5ATQA9AVBAAaQA6AZA/AdIAaAGIAngyIB3A/IAyg/QBWAtBYAyQBTAtBSAyQCKAqCIAxIBhAjQghC7gsDCIAAAVQADC8gIC2IhsAPQiKATiNALQhbAghdAcQhgAdhfAbIgVgsQhKAXhJAVIgVgsQhJAXhIAUQgdASgfATIgpAVIgqgmgASdKCIA0gEIABgNIg1ARgAxKJWIAEALIA3gNIDxgKIgSgqIAKgDIgUgVIAKAYIgZAGIjGAugAoZIRIAbAhIAJALIAWgEIAXgDIBBgMIBUgQIhrAJIgrAPIgQgkIhAADgAF6kzIgBAGIgBAFQAAATgJASQgGALgMALIgWAYQgdAXgbAZQgjAigYAiQgWAdgQAcIAxBGQg+Avg5A1IAEAGQA7BVA/BVQAqA4AsA4IABAnIAjAaIgUguIgQgTIgBh4IBEgGIAzgEIgCiKIhAhgIgFgIIBGhCIA7lBIhcgzQgOAsgIApgATUAcIgIAfQACBqgBBoQARgoAOgsQAMgfALghQAKgyAJgzIAXh0Ig3gQIgiCMgAgRi0QAIA2AFA8IAliZIg5gUIAHA7gAIykuIBcAzQALg3AJg3IgsgaIhEBVgAm1mTIADAEIguBHIAkAOIAQAHIBKAeIBCgvIgcgJIg/gmIAAgBIgYgOIgcgRIgOgJIAIAJgATGlSIBeAeIAAgBIh8gvIAeASgAp9oAIg1BKIBOA5IAeAMIArgxIAegfIg3ghIhDgmIgGAIgAlKoqIhRB5IBKAbIBThEIBChVQg0gbgygYIgoA4g");
	this.shape_175.setTransform(556.9,340.1);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#D79BEB").s().p("AKNLLIh7AmQgshZgqhbIg+ACIgFAKIgVAUQgjAdg5ATQhDAYhUASIgkgmQghgbgbgdIg0AEIgEAAQhOAWhOATIglAGQgSACgOgFQgZgHggAIQgYAHgfAQQgfgagggfIgfANQhNAghPATQglAJgjAFQgXgggVgmIghALIgPgjQhqAihrAbQhEAShEAQQgmg3gkg6IitAoQgwAJgkAFQgjABgYgFQgMgDgIABQgSADgFgBQgHACgKAAQAAgWgDgXQgVhKgYh2Qgbhggdh3IgGgWQgqhggohKQgTgxgYgjQgPgZgYgTQgjgcgXgbQgUgWgMgZIAAAAQAng1BKgsQBbg8BwgyIBZgtQA8gpAwgnQBCgjAegUQAJgEAEgIQAJgQgDgNQABgNAKgHIACAEQAnAmAqBCIBKBaQBDhQBFhLQB8AyCBA7QAvAWAtAXIAhhQIAKgeQAJAEAGALQAJAKAKAQQATAWAQAeQAWAoAWAgIANAEQA5g6A5gwQBJg6BDgsIAXANQAjARAbgIQASABAMAGIALAGIB3iUQCgBUCeBYIABAAQAighAngcIAPgLQBKAfBDArIAXgfIArAIIA7AMQAwAMAzAQQA8ATA+AZQA6AXA9AcIBAARIAigrIB8BBIA0hBQBSAqBTAuQBQAsBOAvQCDAoCCAvIBcAiQgeCxgqC4IAAAVQAECzgKCtIhmAPQiDASiGAMQhXAehZAaQhbAchaAYIgWgsQhNAXhNAVIgVgsQhOAXhMAVIgBgBQAdgUAagVIg8ATIgFACIAKAUQgdAUghAUIgnAWIgvgogATEJvIAQgBIABgEIgRAFgAxfJBIAAABIAEgBIE1gMIgWgzIAEgBIgIgIIAEAJIgzAKIjsA1gAqCFkIAIAIQAvBNAyBAIAhAoIADAAIAwgJIAKgCIBLgQIA5gMQAViLAFiPIgCgFQglhIgkg0QgPgYgTgYIgSBNQAADLgNCrIgrADIgMgbQgmhdglhhIhFhjQgCBUgQBXgAI7GxIhAAkIADAIIAaBBIAugKQAXg/APhDQgaANgXASgAEaGEQAzAsA4AoIANAJIgDgFIgDgIIgQgjQgzhAgwhAIABBTgAEZExIAAgkIB8gLIATgCIgTgyIgBgCIgDjZIAGgkIAmgbIAkgsIBuiIIiEhNIg0EcIhMA4IgrAeIAAAAIAAABIgCABQhBAvg5A3IAFAFQAqA/AtA+IAZAiIAAAAgATYAaIgHAdQABBoAABmQARgnAPgqQALgcAKgdQAJgrAIgrIAUhtIg5gRIgbBzgADKhXIAGAIIAZAlQALgUAOgTQAXghAighIATgRIAMg3QhJBChHBCgAr4lLIhXB8QAkAQAtAJIApgqQA6g7BBg1Ig6gXIg0goIgwBEgAm4lrIgwBKIACABIAcAMIBXAjIBKg0Ig2gRIgqgZIAtgnIgzAEQgXAEgRAAIgFAAIAEADg");
	this.shape_176.setTransform(571.8,345.5);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#DAA2EC").s().p("AK5KzIh9AmQgshYgrhZIgGAAIhTADIgDAGQgIAJgLALQggAdg5ATQhBAWhRASIgkgkQgkgbgdgdIgDAAQglADgeABIgDAAQhRAXhRASQgVAFgPABQgQACgOgHQgXgHgfAHQgYAHgdAPQgjgZgkghIgsATQhKAehMASQgkAJgiAFQgZgigVgnIgiALIgQgkQhyAmh2AdQhCARhBAOQgmg0gjg4IGpgPIgYg4IgDgGIgDABQgvgsgyg5QhUg8hChJQgpgsghgyQgkg0gbg3IAAAAQA1hKBOhDQBEg6BNgyQg9geg1g9IgkgfIhliCIguA5QgkAtgiAvQiZCKh4CaIAAABQBeC0CBCiIAUAoQA0BiA6BaIggABIitAmQguAJgiAEQgjABgWgGQgMgEgHAAQgPACgEAAQgGABgJgBQABgVgDgXQgThGgXh0Qgahdgbh1IgFgWQgnhdgmhIQgSgxgWghQgPgYgYgTQgjgbgVgZQgUgWgMgXIAAgBQAlg0BJgqQBYg5BugvIBXgqQA7gnAvgkQBCggAcgQQAIgDAEgHQAJgPgGgLQABgMAIgFIABADQAlAmAoBCIBQBmQBIhWBLhOQB4AtB8A4QA8AbA5AeIAihUIAIgcQAIADAFAJIAQAaQARAUAOAeQATAmASAdIAjAMQA/hAA/gyQBIg3BBgoQAOAJAJAEQAiAQAZgKQARAAALAFQANAGAFAHIABACIB+icQCYBOCXBTIAkAKQAhgfAlgZIAPgKQBNAfBFAtIAZggIApAGQAhAFAhAIQArAJAsANQA7ASA+AXQA3AWA8AaIBnAaIAcgjIBhAyIAtAAIApgyQBOAoBPArQBMApBKAsQB9AmB6AtIBXAhQgbCognCvIABATQACCqgKCkIhgAPQh8ASh/AMQhTAchUAZQhXAahVAWIgXgsQhQAXhQAVIgWgsQhRAXhQAVIgBgDQgfAXgkAWIgmAVIgzgngAnoHdIgyAEIAdAiIABABIANgDIAtgJIAWgFIgXABIgVgvIgMgbIgEAzgASgkFIg8BUIg/A3IABABIAoALQBIASBEATIAXAHIgVBYIgHAcQABBlgBBkQASglAQgoQAMgZAKgbIAMhEIAShnIg6gRIAxjWIgEgCIgegJIgPgJIgogQIgpA3gAEIhWIAGAIIAHAKIgZBvIgDANIgFATIABA5IgUATIADAFIASAaIABA5IAlgDIBbgIIBagJIgLgcIhRh1IAAgsIgUAPIg+hbIgOgWIAIglIgVATgArhgQIABABIAxBMIAAgaQgCgpgJgbIgFgSIgiAjgAqcnCIhCBcIgmA0IhXB9IgPANQAYAHAbAEIAuAIQAdgiAgghQAsguAxgpIAxgpIAggjIh9hGIgBgBgAnsj/IgGAGIAcAMIBGAdIgEAQQAWgSAYgQIAzgkIhPgYIgUgMIgkgWIgHgDIgrBEgAzVIwIAAAAg");
	this.shape_177.setTransform(586.7,350.9);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#DCA8EE").s().p("ALkKbIh+AlQguhZgrhbIgEAGIg+ADIgyACIAAABQgHAKgLALQgdAcg3ATQhAAWhPAQIgkgiQgngagegfIgZADQgjACgcAAQhVAYhVATQgVAEgOABQgQABgNgHQgVgJgdAHQgYAGgcAQQgngagogjQgbANgcAMQhIAehJARQgkAHggAFQgbgigWgpIgiALIgRgmQh8Aqh/AgQhAAPg+AOQgmgygjg2IhDADIioAjQgtAJghADQgiAAgVgHQgKgFgGAAQgOACgCgCIgNAAQABgUgCgWQgShDgUhzQgZhagZhyIgFgVQgkhcgkhGQgRgvgVggQgPgXgXgSQgigbgVgXQgTgVgLgYIAAAAQAigzBJgoQBVg3BrgsIBWgnQA6gkAughQBBgdAagNQAIgBADgGQAIgNgHgKQgCgKAIgEIACADQAhAkAlBCIBXB1QBNhdBShTQByApB4A1QA7AaA7AdIAcAIIAfhSIAGgbQAIACADAJIAOAYQAPAUAMAdQAPAjAPAbIA4AVIACgCQBFhFBEg1QBGgzBAgjQAOAIAIAEQAhAPAXgMQAQgBAKAEQALAEAEAHQADAGAMACIAEgFIB9iaQCSBICOBOIAsAMIAcAHQAggcAjgXIAOgJQBPAeBFAvIAEADIAagiIAoAEQAkAFAlAHQAlAIAmAKQA6AQA9AWQA1AUA7AZIBvAcIAhAFIAUgZIA8AeQAgAAAhgDQASgCAOADIAJACIAYgeQBKAlBLAoQBIAnBGApQB2AkBzAsIBSAfQgXCeglCmIABATQACChgKCbIhaAOQh2ATh5ALQhOAahPAYQhTAYhRAVIgXguIgCABQhTAYhRAVIgUgnIgjACQhDAThEASIgDgGQggAZgmAZIgmAVIg4gngATijuIg5BPQgqAlgoAmIADAAQBEASBAASIAQAEIgPA/IgGAaQACBjgCBgIgDB+IgkAEIgoAFIgCAFIAYA0QAaA5AcA4IAKgBIACgkQAMhxABh1IANg3QANgzAJgzIAJgzIAPhhIg8gRIAzjeIgBgBIgDgBIgDgBIgYgKIggApgApZj6IBWAnQhlBhhiBlIABACQBWCJBaCCQgEBkgJBZIAiAoIABAAIAcgHIApgDIgDgGIAWgGQAhiugDi5IgBgeQAIguAGgsQgqgsgcgzIAAgBQAWgbAcgZQgXghgVgiIAfgfIAvgtIg5gZIgeAvIgQgJIg1gfIgCAAQgIABgGgCQgFgEgEgHIgDgEIgFgDIh/hHIhHBhIgbAmIhSB1IggAbQA5AKAzADIADAHQAlgvAsgtQAegfAggeIArATgAtJHaIAHAGIAMgTIgZgBIgKAAIAQAOgAkIHAQgFAGgGADIBLgKIAAgcQghATgfAKgAIYgdIhnBHIgOAKIgaASQgZASgXATQgfAagdAcIAEAFIAXAiIAigDICfgRIATgCIAWgDQAOhzACh5IgaAggAFGhVIAFAHIAQAZIALg/IggAfgAJDlHIgUAdIg3AwIBFAtQAQhMAKhJIgUAbg");
	this.shape_178.setTransform(601.7,356.3);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#DFAEEF").s().p("AMNKDIh+AlQg1hlgyhpIgagQQgMAbgQAaIg7ADIgPAAQgGAJgJAJQgbAdg2ASQg9AVhOAPIgkgeQgqgbgegfQgZAEgXAAQghABgZgBQhYAahXASQgVAEgNAAQgPABgMgHQgVgKgcAGQgWAGgcAQQgrgZgtgnQggARgiAPQhFAdhHAQQgiAHgfADQgdgigXgrIgjALIgPgiIgbAEQh4Aph9AdQg9APg8AMQglgvgjgzIhnAEIijAhQgsAIggACQgggBgUgHQgJgGgGgBQgMACgBgCIgJgCQABgUgCgVQgPg/gUhxQgWhXgYhwIgFgVQgihZghhEQgQgugTgfQgOgXgXgRQgjgagTgWQgUgUgKgWIAAgBQAggyBHgmQBTg0BqgpIBTgkQA6ghAsgfIBagjQAHAAACgFQAGgMgIgIQgCgJAGgDIABAEQAfAiAjBDIBbCCQBThjBYhXQBuAkB0AxQA5AYA4AcIA9ASIAchQIAGgaQAGACACAHIALAYQANATAKAcQAMAhAMAaQAmANAlAQIATgTQBDhCBDgxQBFgvA+ggQAOAJAIADQAgAOAVgOQAPgDAIAEQAKAEACAFQACAIAXgCIALABIAJgLIB3iQQCJBCCHBJIApALIBDARQAegZAhgUIAOgJQBMAcBDAuIAOAJQANgSAOgRIAnACQAoAEApAIQAfAGAgAHQA5AOA7AVQA0ASA6AZIBrAaQAoAHApABIAIgJIATAJQAgAAAhgEQARgDAOADQAUADARANIARAMIAcghQBFAhBIAmQBEAkBCAnQBvAhBtAqIBNAeQgUCUgiCeIAAARQADCYgMCSIhVAPQhuAShyALQhJAZhLAWQhOAWhNATIgYgvIgSAGQhOAWhMATIgSghIhLAFQg0APg0ANIgFgJQghAcgpAbIgkAWIhAgngAtOHKIgIgSIgQgBIAYATgAsHkbIBvAyIAFACIB9A5IgCAGQhOBOhNBRIABABQAuBLAvBIQgBBvgHBiQAnA6AqAvIADAEIBQgIIgRgmIgPgjQAViHgCiOIAAgdQAUh3AEh1IAChBIAAg8IgGgDIgfAxIgogYIg/gkIgCAAQgHACgFgCIgBgBIgFgIIgCgDIhyg/IhHBhgAG/BWQgzAjgrAqIgIAIIAEAFQBLB1BbBvIAKAMIAKAWQANggAKgiQASg/AFhHIgchLIgagnQAGgyADgyIg0AlIAAAAQgUAMgRANgAklGpQgEAFgEADIA0gHIAAgVQgXANgVAHgATviNQg0AugxAwIBYAXIAKADIgJAlIgFAYQABBggCBfIgDBvIgVACIAiBKIAGAOQAHhKAAhNIANgzQANg3AIg1IAGgjIAOhbIg+gRIAmioIgjAwgAjEhjIAMgvIgcgLQAJAbAHAfgAk7lMQA6g0BAgzQg6gcg4gWIgfAtIhIBsIA0AAIArAAg");
	this.shape_179.setTransform(616.6,361.8);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#E1B4F0").s().p("AJbHaIAPAIIAMAKQBTA9BEAvIAoAWIh8AjQgwhaguhdgACzIxQgtgZggggQgmAFghABQgeAAgXgCQhaAahaATQgVADgMAAQgOABgMgJQgTgLgbAGQgVAGgbAPQgxgXgygqQgkAUgnARQhCAdhFAOQggAHgfADQgcghgXgqIgDgFQgIgOgIgLIghAGIg7AJQhzAnh3AbQg7AOg5AKQglgsgjgwIiKAFIieAeQgsAHgdACQgggBgSgJQgJgGgEgBQgMAAACgDIgHgCQACgTgCgVQgOg7gShwQgUhTgWhuIgFgUQgfhYgfhBQgPgugSgdQgOgWgWgQQgigZgTgVQgTgTgJgWIAAgBQAdgxBGgkQBQgxBogmIBRgiQA5geAsgbQBAgYAXgFQAGABACgEQAFgKgKgHQgDgIAFAAIABACQAcAiAgBCIBgCSIAJgLQBUhlBbhXQBqAhBvAtQA3AWA1AaQAvANAvAPIAahNIAEgaQAFABABAIIAIAWQALASAIAcQAKAfAJAYIAzAUIAqASQARgTATgSQBCg/BBgtQBEgsA9gbQANAIAHADQAfANAUgQQANgEAIADQAIACAAAFQAAAHAVgDIAkABIANgQIBxiGQCBA8B/BDIAnAKIBpAcQAcgWAfgSIAPgIQBKAaBBAsIAXARQANgTAPgTIAmABQAsADAtAIIAxAJQA4AMA7ATQAyASA5AXIBoAZQBTAOBUgOQARgDANADQAUADAQANQAUANAOARQAKALAHAMIAAABIAsg1QBCAfBEAjQBAAgA+AlQBpAgBlAoIBIAdQgRCLgfCUIAAAQQADCPgMCJIhQAOQhoAThqAKQhFAYhHAUQhJAUhIARIgZgvIgiAKQhJAUhIARIgOgaIh1AJIhIARIgHgMQguhSgqhYIgSgnQhjAchgASIgVgzIghhTQgnAQgfAmIguAmQgIAZgLAYQgRAmgYAkIglACIgLANQgZAcg1ASQg6AVhNAOIgjgdgAtTG8IgLgYIgXgBIAiAZgAnrieQgBBwgTBxIABAbQABBIgGBFQgIBbgTBYIASATIBYgJQA2gHA1gIIAegEIAAgOQAAh+gCiCIANg6IAMgwQgRgYgXgTQgugsgagzIAAgBQAWgdAdgaQhBgXhEgVIgUgFIgBgBIgugbIg9giIgNgIIgBABQgGACgDgBQgDgEgCgFIgBgBIhgg1IhHBiIBNAkIAhAQIgEAEQhSBag4BdIABABQAlBYA5BYQAgAyAkAtQAEhEAAhMIAShRIAUhdQBAhEBDhCIgBAegAGWC3IACAEQA7BbBFBZQAahQABhcQAEgXAAgTQADgcgEgeIAAgBQgCgRgBgRIgOAJIgjg1QgEArgGApIgCANIgUADIAAAAQgpAegjAlgATgEOIAZAiIAAgSIAMgwQANg6AIg4IADgUIAMhUIg/gSIAPhFIAmiqIhIgfIg8BNIgzBGQgnAjgmAkIBWAWIBMATQgtAsgrAvIAEAFQAwBSA3BOIARgZIgBAwgAj/g8IALgvIAFgVIgNgFIhKgcIgIgDQAlA1AqAzgAy7k2QgXAZgXAbIgUAPIASAUQAsBBA1AcQAoAaA+AKQBEg1BRgpQAsgkAxgfIADgCIgigPQhdhMhfhGIgngeQhBA9hGBNg");
	this.shape_180.setTransform(631.5,367.1);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#E4BBF1").s().p("AKNHXIgRghIgPgfQgggngegnIAYgWQAegpAngQQARgIAVgFIgmhmIgng5IhChlIgGAvQgDAnAGAmIADAWQgtAfgkAoIACADQAfAxAiAwIAaAjIgkAiIgRAWIgEAGQgUAsgdAoIgBAAIgHAKQgYAcgzARQg4AUhKAOIgkgbQgwgZghgfIgHAAIgTACQgkAFgeAAQgcgBgUgDQheAbheASQgTADgMABQgNAAgLgKQgSgMgaAGQgUAEgaAQQg2gWg5gtQgnAXgrATQhBAchCAOQgfAFgdADQgcgegXgpIgHgLIgjALIgNgcQgsAJgtAHQhuAlhzAZQg3ANg2AJQglgpgjguIiuAGIiZAcQgrAGgcACQgegDgRgKIgMgIQgKAAAEgEIgFgDQACgSgBgUQgMg4gQhvQgUhPgUhsIgEgTQgdhWgcg/QgOgtgRgdQgNgUgWgQQgigXgRgUQgTgTgJgWIAAAAQAcgwBEgiQBNgvBmgiIBQgfQA4gcArgYQA/gVAVgCQAGADAAgEQAFgIgMgFQgFgGAFABIABACQAaAgAdBCIBjCjIAdgjQBQhgBZhRQBlAcBqApQA1AVAzAYQBBARA+AWIAYhMQACgNABgMQADABAAAGIAFAWQAJAQAHAdIANAzIAZAKIA8AbIAhgJIAKgBIAkgkQBBg7BAgpQBCgoA7gXQANAHAIADQAdAMASgRQAMgGAGABQAIACgCAEQgDAGAUgFQAVgCApACIAQgSIBqh9QB5A2B4A+IAkAJQBKASBGAVQAbgUAcgPIAPgHQBIAXA/ArQAQAMAPAMQAOgUARgUIAlgBQAvACAyAHIAhAGQA4ALA6ASQAyAPA3AWQBCAQAjAIQBRANBRgQQAQgEANACQATADAQANQASAOANAQQAJALAGANIgGAVIAUAJIAYANIA9hIQA+AbA/AgQA8AfA7AhQBiAeBfAmIBDAcQgOCBgdCMIAAAOQACCHgMB/IhKAOQhhAThjALQhBAVhCATQhFAShDAQIgbgwIgwAOQhEAShEAQIgTgiIgBANQhMAHhOAFIgkAJIgEgGIgSABIg2ADIg5ARIhKAWIh4AiQgshQgqhSgAs1jJIhBBeQg2AvgzAvQAMATAGAjQAFAogGAwIAAAEQAAAegCAfQgGBCgSBEQAVAOAWANQAcAYAbATQAYARAWANIgNgdQAjAAAlgCQAegCAcgCQAPhnADh/Qg1hTgihTIAAgBQAshNA+hKIhJglIgmgSIgIAJgAoniXIgBAyQgvAygtAzIABAAQAlBBAnA/QgBBqgTBmQAcAnAfAhQAwgFAwgHIBMgLIAHgBIAAgGQAAh4gCh9IANg1IAdh6QgdgfgRgkIAAgBIAOgTQAOgQARgQIgOgbQghhDgdgyIgHAAQgkA3giA6IgQAPIgvgOIgagPIABA3gATXioQgZAhgXAhQgxArgtAuIA0AMQA3AMA0ANIgCAHIAAAKIANgOIgJgCIgCgBIADgOQAbh2AYhyIgVgKIgyBAgAHsgGQANgYAXgYIgNgVIgEgFIAkglIgvgmQgBBNgHBIgAzSkkQgWAWgVAZQgZATgZAVIADAEQAoBCAyAbQAqAbBCAKIAqAFQBKg9BbgtQAlgcAogZIg3gaQhWhIhXhCIglgcQg8A3hDBGg");
	this.shape_181.setTransform(646.5,372.5);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#E6C1F3").s().p("ALBHVQhlgwhOhCIgEgDIgGAIQgPAagMANQgNANgCAdQgDAJgIAKQgVAcgzASQg1AShJANIgkgYQgwgXgggdIgngBIgSADQgiADgdAAQgZgCgSgEQhgAchgARQgUADgLAAQgMgBgKgJQgQgNgZAEQgTAFgZAPQg6gRg+gwIgGgDQgoAagwAVQg+Acg/AMQgeAGgcABQgcgcgWgnIgLgRIgjAKIgNgaQg7AOg9AKQhoAjhuAWQg1AMg0AIQgkgmgigrIjSAGIiUAaQgqAGgbABQgdgEgPgLIgKgJQgJgBAGgEIgDgEQAEgSgBgTQgLg0gPhuQgRhMgThpIgDgSQgbhVgag8QgMgtgQgaQgNgWgVgOQgigWgRgTQgSgRgIgWIAAAAQAYgvBEghQBLgrBkggIBNgbQA4gZApgXQA/gRATACIABABIgHgKIAAgCIABACQAOADgDAIQAAAAgBAAQAAABAAgBQgBAAgBAAQgBAAgBgBQAUAfAWA3IBmC2QAYgfAageQBOhcBVhLQBgAZBmAlQAzATAwAWQBSAVBOAeIAVhMIACgYQACAAgBAGQAAAHACANQAIAQAEAbIAJAzQAiAPAfAPIAjgKQAfgHAlgEIAfgdQA/g4A+glQBBglA6gSQAMAHAHADQAdAKAQgUQALgGAFAAQAGABgEADQgFAEASgHQAZgEA8ACIAFAAIASgUIBkhyQBxAxBvA3IAiAJQBeAWBYAcQAZgSAbgNIAOgHQBHAXA8ApQAWAPATAQQAPgWARgUIAkgCQAzgBA3AIIAUADQA3AIA5AQQAvAPA2AUQBBAQAhAGQBOAMBOgSQAQgEAMACQASADAQANQASANALARQAJALAFAMIgHAUIA7AcIAnATQAfglAfgkQA6AZA7AdQA4AbA3AfQBbAcBYAlIA+AaQgKB4gaCBIAAAOQACB9gOB3IhEAPQhaAThcAKQg9AUg9AQQhBASg+ANIgcgwIg/ARQhAASg/ANIgcgwIgjg/QAJhAABhCIAKgqQANg7AGg4IABgMIAAAAIgOAUQgVAfgWAbIgDBCIgbADIggAGIAYAgIAgBEIAXAuIgGAqIgEAiIgEAYQhWAJhbAGIhEADIg1AQIhCATIhyAgQgohFgkhHgAtdGcIgRgkIAXgBIA2gEQAShuABiQIAOhCQgMgagKgZIAAgBQAVgoAagmQAhgwApgwIAhgjIg9ghQAAABgBABQAAAAgBABQAAAAgBAAQAAAAAAAAIgBgFIg6geQglAxgkAyIgCADIg7BUQhOBFhIBFIgRAQIAGAHIANAUQA2BSA5BPIAbBAIAZA7IgsAAQAgAVAdAPIAAAAgApkiQQACBGgGBIIgFAEIABABIADAGQA8BsBDBlQAZBDAcA/IAJATIAdgFQABhygCh0IAMgyIAoiuQgkgQglgOIhCgWIhKgYIgogWIgNgIIACA2gAJ9BzQgQAJgOALQgtAdgkAoIADADQAYAoAcAnIAFgFQAbgpAkgRQAcgQArgBIANAAIgghWIgWghIgqAcgATlhVQg5A0gzA2IAQAEQAzALAuANIAAgXIAFgTIAfiUIgpA4gAxPgqIAAAAQBNhDBjgvQAbgTAcgSIhIglQhPhEhQg9IgigbQg4Awg/A/QgVAVgTAXQgkAagiAeIgOAMQAiA1ApAYQAnAbBAAJQA0AHArgBIAEACg");
	this.shape_182.setTransform(661.4,378);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#E9C7F4").s().p("AOhIsIgBAAIhpAcQgjg5ggg8QhlgrhMhAQgYgTgUgWIgKARQgNAagLANQgMANABAcQgDAJgGALQgUAcgxARQgzARhHAMIgjgWQgwgUghgaIhGgCIgRACQggADgbgCQgWgDgPgEIgGABQhgAchhARQgTACgLgBQgLAAgJgLQgPgOgYAEQgSAEgYAPQg5gLg+grIgXgQQAbgVAVgYQAMgOABgCQgBgBAAAAQgBgBAAAAQAAAAAAgBQABAAAAgBIgJgTIgSgqIgBibIAKgtIAkigQghgPghgMIgagKIAugyIAUgiQgmg1gigiIgmACIgKAKQg4ArgvA0IATALIAkAUQA0APAyASQg1A6gyA8IABABQA3BoA/BfQAPAoAQAnIgBA3QgtAIguAHQAdAfAeAZIgHAFQgmAcgvAVQg7Aag9ALQgdAFgbABQgbgagWglQgIgNgIgKIgiAKIgNgbQhKAUhMANQhjAihoAUQgzAKgxAHQgkgjghgoIj2AHIiPAXQgpAFgaAAQgcgEgOgMIgIgKQgHgBAHgGQACgBgCgEQAEgQAAgTQgJgxgOhsQgPhJgRhmIgDgSQgZhTgXg6QgLgsgPgZQgMgUgVgOQgigVgQgRQgSgSgHgUIAAgBQAWgtBDggQBIgoBigdIBLgYQA3gXAogTQAvgKAVAAQAUAeAYBBIBmDHIASgSQAagjAdgiQBKhVBThGQBbAVBiAhQAwARAuAUQBkAaBcAoIAThLQAFAPACAZIAFAyIAtAWQAPgGAVgHQAogKAygFIAkgCIAagYQA9g2A9ghQBAghA4gOQAMAHAHACQAbAKAPgWQAKgIADAAIABAAIAHgEQAXgIA6ACIAjgBIAEAAIARgTIBehoQBpArBnAxIAfAIQBmAXBfAfIgBAaQAigbAogSIAOgGQBEAUA6AoQAbATAWAWIABgBQAPgYATgWIAigDQA5gDA8AHIADAAQA2AHA5APQAvANA0ATQA/APAgAGQBLALBMgVQAPgEAMACQARACAPANQARANAKASQAIAKAEANIgGAVQAwAUAyAXIA0AZQAfglAhgkQA1AWA4AaQA0AYAzAdQBUAaBRAiIA6AZQgIBvgXB5IAAAMQACB1gOBtIhAAPQhSAShWAKQg4ATg5APQg8AQg6ALIgdgxQgnAMgnAKQg7AQg6ALIgegxQgnAMgnAKIgWAFIgDAWQhGAGhIAGQgWAWgdAXQgPALgPAJQgugHhBgWgAuEhHQhPBGhIBHIAFAHQA2BVA7BQIAYA7IAWAyIgbACIgfABQAqAbAlAOIgVgsIAXgCQAThkABiFQAXhtAShxIg0gdIgtBAgARsh6QgVAbgUAdQgjAfgfAhIBLAlIBIAQIAWAFIBEAQQAAA+gDA7QgPAQgQAOIAQAWQATAdAVAcIAEAJIAAgOIAJgmQAMg2AEg0IADgdIADgkIg2gPIgDgBIAAgzIAEgTIAGgbIAjiqQgogVgpgTQgwA2guA7gAKwCEQgPAJgNAJQgqAaggAlIACADIAMAUQAVgbAZgNQAbgRApgBQApgBAcAQIghhYIgGgJIg4AkgAAtAeIgFAWIABAvIApgMIgPg0QgGgagJgRIgHAmgAnvhwIAAAAgAr2lrIgBgDQgBgNACgGIABgDQABAKgCAMIAAADIAAAAgA5QnwQgEgBgIAAIAAAAIgBgDQgCgEAGAEQAPACgCAGIAAAAIgEgEg");
	this.shape_183.setTransform(676.3,383.4);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#EBCDF5").s().p("APTIdIgTgHIhfAZQgdgtgcgwQhkgohLg8QgkgbgZgiQgKgNgHgNIgVAhQgLAagJAMQgKANACAcQgBAJgGALQgRAcgxARQgwAQhGALIgjgTQgvgSgggYQg2AAgwgCIgQABQgfACgZgDQgRgDgMgEIgFABIgRADQhdAahdAPQgSACgKgBQgLgBgIgLQgOgQgXAEQgQAEgYAPQg4gGg9gmQgVgNgUgQIgOAMQglAbgsAVQg5Aag6AKQgcAEgaAAQgbgYgVgjQgMgTgKgJIggAJIgLgXIgNgEIAJgDQgVgrgUgtIgEgIQAMhIAAhaQAUhkARhoIgJgFIg7giIgGAEQhdAohHA+QgwAqgcAyQACAYgDAdQAMAcARAbQAZAnAhAgQA0AyBIAgIADABQAvAeApAOQhSAahXAPQheAghjASQgwAJguAGQgkggghgkIkaAHIiKAUQgoAFgYgBQgcgFgMgNQgGgIAAgDQgGgCAJgGQADgCgBgEQAFgQAAgSQgHgugMhpQgOhGgPhkIgDgRQgWhRgVg4QgJgsgPgYQgLgTgVgNQghgUgPgQQgSgRgGgTIAAgBQAUgsBBgeQBGgmBggZIBJgWQA2gUAngQQA+gLAQAJQAEAGgBAAQAAgFgRAAQgHgDACAGIAAACQASAdAVBCIBhDRIAEAHQAVgZAYgXQAYghAcgfQBHhRBQhAQBXARBdAeQAuAPAsASQBgAYBYApIAnATIAOg+IAAASIACAzIAZAOQAPgIAVgIQAmgMAwgGQAjgEAkgCIAOAMQARgRARgOQA8gzA7geQA/gdA3gKQAMAHAGACQAaAJANgYIALgKQABgBAAAAQAAAAAAAAQgBAAgBAAQgBAAgCAAQgKACAOgKQAUgKA6gBIAhgBIApgCIAPgRIBXhdQBiAlBfAsIAcAHQBfAUBWAdIAAAoQABAagCAcQA0hABJgdIAOgFQBCASA4AnQAhAXAYAbIAEgHQAPgXATgVIAhgFQBpgLB3AcQAsAMAzASQA+AOAeAGQBJAJBJgWQAOgFALACQARACAOANQARANAJARQAGALAEAMIgJAcQgOAigRAaQgIAJgDAIIAQAIQAggmAhgjQAyASAzAXQAhAPAgARQAhgmAhgjQAxASA0AXQAwAWAvAaQBOAYBKAhIA0AXQgEBmgVBvIAAAMQACBrgPBkIg5APQhMAShPAKQgzARg1AOQg3AOg2AJIgfgxQgtAOgvAMQg3AOg1AJIgggyQgtAPgvAMIg+AOIgDATIhrAJQgSAVgZAUIgcAUQgtgDhBgRgAragsQgBAvgGAwIAAADQAWA1AhA1QAlA9AwA1IAZAaIAYAcIAygKQABhUgBhXIAAgTIAJgpIAgiQQgXgLgXgJIgOgGQg3gVg7gSIghgSIgCgBQglAwgbAxgATBDcIgLAIIAggGIAWgDIACgkQgVAUgYARgAShhkIgnA0QgsApgoAsIA5AbIBCAOIA+AOIATAFIgCBBIAHANQAUgTATgXIAIgJIAAgNIgxgNIgDgBIABgeIAAgzIADgQQAUhcAQhZIgkgTQgrAvgqA1gAsKk7QgBgOgDgJQABgNADgFQABgBAAgBQABgBABAAQAAAAABAAQAAAAAAAAQABAKgBAMIgEAWIAAAAg");
	this.shape_184.setTransform(691.2,388.9);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#EED3F6").s().p("AQEIPIgngMIhSAUQgYgjgWgkQhlgjhKg5QgjgZgYgiQgYgfgIghQAHgVAQgTQAPgSAUgLQAPgIAEgJQAEgIgGgLIgEgPQgPAFgLAIQgcARgTAuIgmA9IgLAWQgLAagHAMQgIAMAEAdQAAAJgGALQgPAcguAQQgvAQhEAJIgjgQQgvgPgfgWQhIAAg+gDIgPABQgdABgYgFQgOgDgLgEIgSAEIgQACQhZAahZAMQgSACgJgBQgKgCgHgMQgMgQgXADQgPADgXAPQg3AAg9giQgfgQgdgYQAOgPAMgQQAJgPgDgCQgGgCADgDIACgLQARgPAVgkIgVg2Qgog+gjhEIAUhbIAAgBQgagNgagLQgxgUg2gPIgJgFQgmA3gXA4IAAABQAWBLAtBKQAjA7AuAyQAMANAMALIAGAIQAbAdAbAYIgUATQgjAagqAUQg2Aag4AIQgbAEgYAAQgbgXgVghQgMgSgKgIQgFgEgFgCQgIgCgJAAIgOgCQgWgEgYgIIAFgCIAcgLQAbgKAZgMQArh1gBiDIAAgVQAJhXgJhVIgFgnIgQgHIg3BIIgtBAIghAgIAKhFIgngZQhLAig6AzQg5AygZA9IAAABQANApAYAoQAYAmAgAdQAlAkAyAZQARAIATAIQAdAQAaAKQhTAehZAQQhYAeheAQQguAIgrAEQgkgcggghIgDgBIk7AIIiFASQgnAEgXgCQgagGgLgOQgFgJAAgDQgEgCALgHQAEgDAAgEQAGgPAAgRIgQiTQgMhDgOhhIgCgRQgUhPgSg2QgIgqgNgXQgLgTgVgMQghgSgOgPQgRgQgGgTIAAgBQARgrBBgcQBDgjBegXIBHgTQA2gQAmgOQA9gIAOAMQAEAIgDAAQAAgDgTACQgIgCABAHIAAADQAPAcASBBIBVDOIAQAfQAhgqAmgnQAXgeAbgeQBEhLBMg7QBTANBZAaQAsANApARQBbAWBSAnQAqAUAmAYIAEg4QADgagDgOQACgMAEgEQAGgFABADQACAJgBAMQgEAkgNA5IAAAAIACAHQAPgNAagMQAkgMAtgIQAigFAigDQAYANAaAVIAZgVIAigeQA7gvA6gaQA9gZA1gGQAMAGAGACQAYAIAMgbIAJgMQABgCgJAAQgMAAAMgLQASgNA4gDIAggCQAqgDAlgBIAMgNIBRhTQBZAfBXAmIAaAGQBXASBOAbIABAjQAFA7gKBBQAFAAAHgDQANgGAPgVQA2hOBVgdIANgFQBBAQA2AmQAnAbAZAiIAIgPQAPgWASgUIAfgHQBmgQBzAZQAsAKAxARQA9AOAcAEQBGAJBGgZQAOgFALABQAQACANANQAQANAIASQAFALADAMIgJAaQgOAigRAYQgJAMgCAJQAfAOAfARQAhgnAigjQAtAQAwAUQAoARAnAVQAggnAjgjQAtAQAvAUQAtATArAXQBHAWBDAfIAwAWQgCBcgSBnIABAKQABBigQBbQgZAIgbAHQhEAThIAJQgvAQgxALQgyANgxAHIgggwIgMABQgvAQgxALQgyANgxAHIgggwIgMABQgvAQgwALQgzANgxAHIgBgBIgFAVIhFAHQgQASgVARIgbAVIgPAAQgoAAg2gKgAPlAcIBpAxIgdAmIACADQAZAzAeAvQAygFAwgKIAQgEIATgDIACgUQAYgTAVgXIglgKIgFgBQADg2AAg4IADgPIAdiVIACgOQg8gjg/geIgegOQhIg3hTgpQg5A1gwBEIgMAQIgdAcIBVCdQAIASAMAJIAPALIACgCIAYAMgAL2hMIADADIANAYQAEgFABgEQAEgLgIgQIgDgIIgOARgAuYFfIAAAAg");
	this.shape_185.setTransform(706.2,394.3);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#F0DAF8").s().p("AQ2H/QgfgHgjgKIg/APIgigwQhmgfhJg2QgigYgYggQgXgegHggQAGgVAPgSQAPgSATgKQAPgIADgIQAEgIgHgLQgOgdAFgfIgPgBQgmAAgWASQgaASgRAuIgqBVQgJAagFAMQgHAMAHAdQAAAJgFALQgMAcguAPQgsAPhCAJIgjgOQgvgNgfgTQhbABhLgFIgOAAQgbABgVgGQgOgDgJgFIgeAHIgPACQhVAYhWALQgRACgJgCQgJgCgGgNQgLgRgVADQgOACgWAPQg3AFg8gcQgqgUgngiQgLAOgOAMQggAagpAUQgzAZg1AHQgaADgXgBQgbgUgUgfQgMgSgKgHQgKgHgQADQgsgBgzgVQAegMAbgNIAZAsIA3gOQAsgNArgQQBIgJBCgSIABghQABg5AAg8IAGggIAYhyQgXgMgXgKQghgOglgLIgUgGIgagOQg1gbgzgVIgVAaIgBgIIgDgSQgIAEgMADQgrAQgnAVQgfAMgcAPIguggQgjgZgjgWQgyg0g0guIgXgTQgnATgvAmQgQANgPAOQgZARgYAWQgqAngfAvIABABIAvBWIAcgDIAPABQAVgBAFgXQADgNATAKQASALALAeQAJAfgDAqIAAAEQABBFgbBKIBZAFIAmACQA+ARBHgDQAUgBASgCIAAgBQAhAUAoANIATAJIgHADQhQAfhWARQhTAchYAOQgrAHgpADQgigYgfgdIgEACIgxgDIkvAGIiAAPQgmAEgWgDQgZgGgJgQQgEgJABgEQgDgCANgIQAFgDABgFQAHgOABgRIgNiOQgLg+gMhgIgCgPQgRhPgPgzQgIgpgMgWQgJgSgVgLQghgSgNgNQgRgQgFgSIAAgBQAPgpA/gbQBAghBdgSIBEgRQA2gOAlgLQA9gFALARQAEAIgEABQgBgBgUADQgKAAAAAIIAAADQAMAaAQBCIBXDqQAGATAHAQQAohCA6g7QAWgcAZgcQBBhGBKg1QBNAIBVAXQApALAoAPQBVAVBNAlQAoAUAjAYIAIAdQACgGAFgIQAHgIALgIQAEgSADgZQAEgZAAgNQADgLAGgEQAGgEADAEQACAIAAAMQgCAZgHAlIACgBQAhgOArgJQAggGAhgDQAsAQAwAkQAVgUAYgSIAhgcQA5gsA4gXQA9gWAzgBQALAGAGABQAXAHAKgcQAHgLAAgDQAAgDgLgBQgPgCAKgNQAQgPA2gFIAfgDQBCgGA0gBIAIgIIBKhKQBSAZBPAhIAXAFQBPAQBGAYQACAPAAAQQAHA0gIA8IADAAQAIgBAGABQAMAEAEAGQABAAABAHQAGAPAVgGQANgGAOgUQA1hLBTgaIANgEQA/APA0AkQAmAbAXAiIAJAOQAGgNAIgNQAOgVARgTIAfgJQBigUBwAVQAqAJAwAPQA7AOAaAEQBEAHBDgbQAOgGAJABQAQACANANQAOANAHASQAFALACAMQgEAMgFANQgOAggRAYQgKAMgBAJIgBAHIAQAGQApAQAnAVIAOAEQAggmAjghQApAMArASQApAQAoAVIANAEQAhgmAjghQApAMArASQApAQAoAVQBAAUA8AdIAqAVQACBSgPBeIAAAJQABBZgQBSIguAPQg+AShBAJQgrAPgsAKQguAKgsAGQgRgWgQgYIgkAFQgqAPgtAKQguAKgsAGQgRgWgQgYIgkAFQgqAPgtAKQgtAKgtAGQgRgXgRgZQgEAVgHAUIgKAlIgfAEQgOAQgRAPQgMAKgOAKQgWAEgbAAQgbAAgggEgAlhj0QgnA9gjBBIgmAwQATAhAKAlQAKAtAABBIAAATIgXAkIADAFQARAwAVArQASAmAVAfQAdgDAfgIQA6gNAygeQAWgHAVgJQAygRAvgaIABhdIgGgjIgBgFQgQg1gOgYQgNgegegWQgmgdgNglIAAgBQASgmAtgcQgMgPgLgQQgPgGgQgFQgQgJgQgHQhBgbg4gHIgSAagAOpjQIgKAPQgeAbgbAeQgaAdgYAeIACADQAlBGAnBAIAaBGIgJAIIgTAQIg3AeIgVALQgcARgVAZIADAAQAdgMA9gVQAsgOAggRIgQgrIBKhDQAKAIAFAMQAHAQgDALQgJAPgRAMQgTATggARIAFALIANAeQBFAABLgUIAHgBQAkgCAhgFQAlgGAjgKIAHAAIAKgCIABgGIAUgPIgLgCIgHgCQAGhDgBhIIADgNIAIgqIAShoQg0ghg3gbIgagNQhAgzhLgjQg0AugrA8gAwcEaQgagQgVgTQgfgcgWglQgXgmgLgoIAAAAQAVg7A3gxQApgkAzgbIAPAKQgLBWgQBSQAABngWBEIAAAAg");
	this.shape_186.setTransform(721.1,399.9);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#F3E0F9").s().p("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");
	this.shape_187.setTransform(736.1,405.7);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#F5E6FA").s().p("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");
	this.shape_188.setTransform(751.1,411.6);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#F8ECFB").s().p("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");
	this.shape_189.setTransform(766.2,417.5);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#FAF3FD").s().p("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");
	this.shape_190.setTransform(781.4,423.6);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#FDF9FE").s().p("ASTGlIgMgBQhhgGg/giQgfgRgTgZQgTgagBgbQABgTALgQQALgQAQgHQAOgFABgHQABgGgMgKIgIgIIgBABQgJALgSAHQglAQheAFQhAAEgbgIQgJgDgHgFQgLgJAAgQQAAgIACgEIATgUQASgOAAhoQAAgmgGgXQgEgPgGgLQgOgYgiABQghAAgNATQgOAUgDAzIgHBbQgBAcACALQABAKASAdQAEAJAAALQgCAbgoAOQghALg5AEIgigCQhtgFgTgqQgeAfhOAJIgbABQhTAAg2gKIgJgCQgSgEgMgKQgMgLgCgOQgBgMAEgGQABgGATgPQAGgFAEgJQAEgJACgMQAEgdgBg0IgFg7IAAgEQgFgsgDgKQgFgVgXgMQgegQgDgaIAAgBQAEggAngRQAogRAsgPIANgEIgPACIgTgFQgfgHgVgPIgJgHQgfgYgFgkQAIgmApgbQAMgJAPgIQAWgNAVgKQAqgEAnAFIAKABQAoACAeAMIAKAKQAUAXgCAhQAAAsgeAeIgGADIgLAFQAFAAADABQANAIACATIAiEOIAAAMQgBAiAFASQAEARARAQQAOALAEAKIADAIIABgBQAMgKADgMIABgLIACgvQABg4gDg8QgBghgFgLQgGgKgYgQQgUgOgBgRIAAgBQABgUARgMQASgOA0gTQAvgSArgNQAqgMARgCQAHAAAGACQAHACAFAFQAKAJAAANIAAALQABAaATgBQAMAAAMgTQArg9BOgEIAMAAQA1AEAoAeQAfAWAOAfQAOAfAGA6IASCkQACASAGAKIALAMQAEgTAPgTQANgRARgMIARgKQALgGAAgGQABgHgNgOQgtguADg+QABggASgeQALgSAPgOQALgJANgIQBPgsBgAEQAiABAqAJQA0AKARABQA2ABA2gmQALgIAHABQANAAAJANQAKANABASQABALgDANIgIAVQgNAZgQAQQgLAKAAAGIAAAMQACAKgBAJQgBA6glAoQgTAUgYAPQgUANgXAKQg0AXg+AFQgPABgPgBIgSAAQgYACAAAaQAAAKAGAHQADAFAGAEQAOAIAZAAQAQABAigFQBHgKAfAAQAZAAATAFQAUAFANAJQAWAOAMAaQAMAZgCAdQgEAvglAtQgIAKgLAJQgoAihAAPQgvALg5AAIgqgCgARjDyIgJACIgZADIgJABQgQADgDAQ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");
	this.shape_191.setTransform(796.5,429.7);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#FFFFFF").s().p("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");
	this.shape_192.setTransform(811.7,435.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_151}]},504).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_160}]},1).to({state:[{t:this.shape_161}]},1).to({state:[{t:this.shape_162}]},1).to({state:[{t:this.shape_163}]},1).to({state:[{t:this.shape_164}]},1).to({state:[{t:this.shape_165}]},1).to({state:[{t:this.shape_166}]},1).to({state:[{t:this.shape_167}]},1).to({state:[{t:this.shape_168}]},1).to({state:[{t:this.shape_169}]},1).to({state:[{t:this.shape_170}]},1).to({state:[{t:this.shape_171}]},1).to({state:[{t:this.shape_172}]},1).to({state:[{t:this.shape_173}]},1).to({state:[{t:this.shape_174}]},1).to({state:[{t:this.shape_175}]},1).to({state:[{t:this.shape_176}]},1).to({state:[{t:this.shape_177}]},1).to({state:[{t:this.shape_178}]},1).to({state:[{t:this.shape_179}]},1).to({state:[{t:this.shape_180}]},1).to({state:[{t:this.shape_181}]},1).to({state:[{t:this.shape_182}]},1).to({state:[{t:this.shape_183}]},1).to({state:[{t:this.shape_184}]},1).to({state:[{t:this.shape_185}]},1).to({state:[{t:this.shape_186}]},1).to({state:[{t:this.shape_187}]},1).to({state:[{t:this.shape_188}]},1).to({state:[{t:this.shape_189}]},1).to({state:[{t:this.shape_190}]},1).to({state:[{t:this.shape_191}]},1).to({state:[{t:this.shape_192}]},1).to({state:[{t:this.shape_192}]},5).to({state:[]},1).wait(1));

	// Text
	this.instance_22 = new lib.mediatitle();
	this.instance_22.parent = this;
	this.instance_22.setTransform(859,80.6);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(551).to({_off:false},0).wait(1));

	// Video
	this.backmedia = new lib.backbtnpink();
	this.backmedia.name = "backmedia";
	this.backmedia.parent = this;
	this.backmedia.setTransform(1337.3,696.1,1.635,1.635);
	new cjs.ButtonHelper(this.backmedia, 0, 1, 1);

	this.instance_23 = new lib.an_Video({'id': 'instance_23', 'src':'videos/bobavideocomplete.mp4', 'autoplay':true, 'controls':true, 'muted':false, 'loop':true, 'poster':'images/', 'preload':true, 'class':'video'});

	this.instance_23.setTransform(614,442.2,2.4,1.8,0,0,0,200,150.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_23},{t:this.backmedia}]},551).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(767,395,1538,794);
// library properties:
lib.properties = {
	id: '20CD4E50F6164A409727E04541C8DCBA',
	width: 1536,
	height: 792,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/ProjectBoba_atlas_.png?1576529345136", id:"ProjectBoba_atlas_"},
		{src:"components/lib/jquery-2.2.4.min.js?1576529345301", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js?1576529345301", id:"sdk/anwidget.js"},
		{src:"components/video/src/video.js?1576529345301", id:"an.Video"}
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
an.compositions['20CD4E50F6164A409727E04541C8DCBA'] = {
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


// Virtual camera API : 

AdobeAn.VirtualCamera = new function() {
	var _camera = new Object();
	function VirtualCamera(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined )
	{
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VirtualCamera.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VirtualCamera.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VirtualCamera.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VirtualCamera.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VirtualCamera.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VirtualCamera.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VirtualCamera.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VirtualCamera.prototype.resetZoom = function() {
	this.setZoom(100);
};

VirtualCamera.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VirtualCamera.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VirtualCamera.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VirtualCamera.prototype.resetRotation = function() {
this.setRotation(0);
};

VirtualCamera.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VirtualCamera.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VirtualCamera.prototype.getZDepth = function() {
	return this.camera.depth;
}
VirtualCamera.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VirtualCamera.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VirtualCamera.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
if(this.camera.pinToObject != undefined) {
this.camera.pinToObject.pinOffsetX = offsetX;
this.camera.pinToObject.pinOffsetY = offsetY;
this.camera.pinToObject.pinOffsetZ = offsetZ;
}
};

VirtualCamera.prototype.unpinCamera = function() {
this.camera.pinToObject = undefined;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VirtualCamera(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
VirtualCamera.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};
}

function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;