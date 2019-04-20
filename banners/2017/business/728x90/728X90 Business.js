(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
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


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#575757").s().p("AgOBVIAAipIAdAAIAACpg");
	this.shape.setTransform(2.2,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#727272").s().p("AhCBVIAAipICEAAIAACpg");
	this.shape_1.setTransform(-2.9,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#575757").s().p("AggAxQgFAAgDgEQgEgDAAgFQAAgFAEgEQADgDAFAAIAtAAQAIAAAAgIIAAghQAAgIgIAAIgtAAQgFAAgDgDQgEgEAAgFQAAgFAEgEQADgDAFAAIAtAAQANAAAJAKQAKAJAAANIAAAhQAAANgKAJQgJAKgNAAg");
	this.shape_2.setTransform(5.1,0.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.6,-8.4,19.2,17);


(lib.Table = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0A8A4").s().p("AglDEIAAmHIBLAAIAAGHg");
	this.shape.setTransform(204,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0A8A4").s().p("AglDEIAAmHIBLAAIAAGHg");
	this.shape_1.setTransform(7.8,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B18F88").s().p("AwhAxIAAhhMAhDAAAIAABhg");
	this.shape_2.setTransform(105.8,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Table, new cjs.Rectangle(0,-49.1,211.6,49.1), null);


(lib.GreyTable = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AFAFAF").s().p("AglDEIAAmHIBLAAIAAGHg");
	this.shape.setTransform(204,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#AFAFAF").s().p("AglDEIAAmHIBLAAIAAGHg");
	this.shape_1.setTransform(7.8,-19.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#999999").s().p("AwhAxIAAhhMAhDAAAIAABhg");
	this.shape_2.setTransform(105.8,-44.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreyTable, new cjs.Rectangle(0,-49.1,211.6,49.1), null);


(lib.Cup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#10798E").s().p("AgPBVIAAipIAfAAIAACpg");
	this.shape.setTransform(7.8,-8.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#189EB8").s().p("AhCBVIAAipICFAAIAACpg");
	this.shape_1.setTransform(2.7,-8.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#10798E").s().p("AggAxQgFAAgEgEQgDgDAAgFQAAgFADgEQAEgDAFAAIAtAAQADAAADgCQACgCAAgEIAAghQAAgDgCgCQgDgDgDAAIgtAAQgFAAgEgEQgDgDAAgFQAAgFADgEQAEgDAFAAIAtAAQAOAAAJAKQAJAJAAANIAAAhQAAANgJAKQgJAJgOAAg");
	this.shape_2.setTransform(10.7,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Cup, new cjs.Rectangle(-4,-16.9,19.2,17), null);


(lib.Clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CF4852").s().p("AgLALQgEgEAAgHQAAgGAEgFQAFgEAGAAQAHAAAEAEQAFAFAAAGQAAAHgFAEQgEAFgHAAQgGAAgFgFg");
	this.shape.setTransform(37,-7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F5646F").s().p("AgNAhIARhAQAAAAABgBQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAAAAAQABAAAAgBQABAAAAAAQABAAAAABQABAAAAAAQABAAAAAAQAAABABAAQAAABAAAAQAAAAABABQAAAAAAABQAAAAAAABQAAAAAAABIgRBAg");
	this.shape_1.setTransform(37.6,-10.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F5646F").s().p("AgEAjIAAhKIAJAAIAABKQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(37,-2.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E0D5D6").s().p("AgBAFQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQACgGAFACQAGACgDAFQgBAEgDAAIgCgBg");
	this.shape_3.setTransform(41.5,-18.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E0D5D6").s().p("AgBAGQgGgDACgEQADgGAEACQABAAAAABQABAAAAAAQABABAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAEgEAAIgBAAg");
	this.shape_4.setTransform(32.5,4.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E0D5D6").s().p("AgBAGQgGgDACgEQACgGAFACQAGADgDAEQgBAEgDAAIgCAAg");
	this.shape_5.setTransform(25.8,-11.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E0D5D6").s().p("AgBAFQgHgCADgEQABgBAAAAQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQAGACgCAFQgCAEgDAAIgCgBg");
	this.shape_6.setTransform(48.3,-2.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E0D5D6").s().p("AgEACQgDgEAFgDQAFgCADAGQACAEgFADIgDAAQgDAAgBgEg");
	this.shape_7.setTransform(48.2,-11.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E0D5D6").s().p("AgFADQgCgGAGgBQAEgDADAFQACAFgGACIgCABQgDAAgCgDg");
	this.shape_8.setTransform(25.9,-2.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E0D5D6").s().p("AgFACQgCgEAGgDQAEgCADAGQACAEgGADIgCAAQgDAAgCgEg");
	this.shape_9.setTransform(32.2,-18.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E0D5D6").s().p("AgFACQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAAAAAgBQABgBAAAAQAAgBABAAQAAgBAAAAQABAAAAgBQAEgCADAGQADADgGAEIgCAAQgDAAgCgEg");
	this.shape_10.setTransform(41.8,4.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E0D5D6").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQADgEAEAEQAFADgFAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_11.setTransform(45.6,-15.6);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E0D5D6").s().p("AgDAEQgEgEAEgDQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAABQAFADgFAEQgBABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_12.setTransform(28.5,1.5);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E0D5D6").s().p("AgDAEQgEgEAEgDQADgEAEAEQAFADgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_13.setTransform(28.4,-15.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#CFC4C5").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_14.setTransform(24.9,-7.1);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E0D5D6").s().p("AgDAEQgEgEAEgDQADgEAEAEQAFADgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_15.setTransform(45.6,1.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#CFC4C5").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_16.setTransform(49.1,-7.1);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#CFC4C5").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_17.setTransform(37,5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#CFC4C5").s().p("AgIAJQgEgDAAgGQAAgEAEgEQADgEAFAAQAFAAAEAEQAEAEAAAEQAAAGgEADQgEAEgFAAQgEAAgEgEg");
	this.shape_18.setTransform(37,-19.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#F8EBEC").s().p("AhkBlQgqgpAAg8QAAg6AqgqQAqgqA6AAQA7AAAqAqQAqAqAAA6QAAA8gqApQgqAqg7AAQg6AAgqgqg");
	this.shape_19.setTransform(37,-7);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7F7F7F").p("ACqAAQAAhGgygxQgygyhGAAQhGAAgxAyQgyAxAABGQAABGAyAyQAxAyBGAAQBGAAAygyQAygyAAhGg");
	this.shape_20.setTransform(37,-7);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#B8BED0").s().p("Ah3B4QgygyAAhGQAAhGAygxQAxgyBGAAQBGAAAyAyQAyAxAABGQAABGgyAyQgyAyhGAAQhGAAgxgyg");
	this.shape_21.setTransform(37,-7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Clock, new cjs.Rectangle(19,-25,36.1,36.1), null);


(lib.Path_1_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5646F").s().p("AAAAcQgMgBgHgIQgIgJAAgKQABgMAJgIQAIgHAKAAQAMABAIAIQAIAJgBAKQgBAMgIAHQgIAIgLAAIAAAAg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1_0, new cjs.Rectangle(0,0,5.6,5.6), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F5646F").s().p("AgRAUQgJgHgBgMQAAgKAIgJQAHgIAMgBQAKAAAJAHQAIAIABAMQABAKgIAJQgIAIgMABIgBAAQgJAAgIgIg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(0,0,5.6,5.6), null);


(lib.Path_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#A0A6B9").s().p("AhABRIArhhQAag/ACAAQAFgBAZAAIAcCgIgCABg");
	this.shape.setTransform(6.5,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_0, new cjs.Rectangle(0,0,13.1,16.2), null);


(lib.CompoundPath = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6F7786").s().p("AANA5IgIgCIgFgCIgEACIgIACIgCAAIgDgBIgGgEQgIgKgDgKIgDgNIgBgDIAAgFIABgEQABgIAGgGQAIgGAHAAQAFAAADABIAHADIABAAIAHgDIAIgBQAHAAAIAGQAGAGABAIIABAEIAAAFIgEAQQgDAKgIAKIgGAEIgDABgAAAgiQAAgHADgHQAFgGAJgBIAAgBIABAAIAAAFQgBAGgFAFQgEAFgEABIgEAAg");
	this.shape.setTransform(3.9,5.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.CompoundPath, new cjs.Rectangle(0,0,7.8,11.4), null);


(lib.ClipGroup_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgKIDAgdIAnAyIi/Adg");
	mask.setTransform(11.6,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE94E").s().p("AgVgYIAEAAIAnAwIgFABg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE94E").s().p("AgVgYIAFAAIAmAxIgFAAg");
	this.shape_1.setTransform(9.1,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4E6D7").s().p("Ag0gTIAGgBIAnAxIAEAAIgJABgAgpgVIAsgHIAnAyIgsAHgAAHgcIAGgBIAgAoIADAEIAFAFIgGABg");
	this.shape_2.setTransform(11.6,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F5B2A").s().p("AgtALIgGgIQgCgCAFgBIALgBIAKAMIgKACQgGAAgCgCgAAbgLIAMgBQAFgBACADIAGAHQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAIgDAAIgLACg");
	this.shape_3.setTransform(11.6,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F5B2A").s().p("AhIAdIgZgfQgBAAAAgBQAAAAAAgBQAAAAAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAtgHIAEAEIgtAHIAYAeIAtgGIAEAEIguAHIgDAAQgFAAgCgDgAAtALIAugHIgZgeIguAGIgDgDIAugHQAIgBADADIAZAfQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAQAAABgBAAQgBAAAAAAIgvAHg");
	this.shape_4.setTransform(11.6,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94C96F").s().p("AhPAjIghgoQgDgFAHgBIA4gIIAEAFIgtAHQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQAAABAAAAQAAABABAAIAZAfQACAEAIgBIAugHIAEAFIBBgKIgFgFIAvgHQAAAAABAAQABAAAAgBQABAAAAAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAIgZgfQgDgDgIABIguAHIgEgGIA5gJQAGgBAEAEIAhApQADAEgHACIixAbIgDAAQgFAAgDgEgAhZgDIAtgHIAHAJIgLABQgFABACADIAGAHQACACAGABIAKgCIAHAJIgtAGgAAmACIALgCIADAAQAAAAAAgBQABAAAAAAQAAgBgBAAQAAAAAAgBIgGgHQgCgDgFABIgMABIgHgJIAugGIAZAeIguAHg");
	this.shape_5.setTransform(11.6,4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_16, new cjs.Rectangle(0.3,0.1,22.8,7.7), null);


(lib.ClipGroup_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ah0gKIDAgdIApAyIjBAdg");
	mask.setTransform(11.7,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AgVgYIAEAAIAFAFIADAEIAfAoIgFAAg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAVIgbgjIgDgFIgEgEIAFgCIAmAyIgEAAg");
	this.shape_1.setTransform(9.1,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgLAJIgIgGQgDgDgBgDQgBgJANgCQALgCAMAIIAIAGQADADABADQABAJgNACIgEAAQgJAAgKgGgAgIgLQgHABgCAEQgBAEADAEQAFAFAHADQAHADAFgBQAHAAACgFQABgEgDgEQgFgFgHgDQgFgDgEAAIgDABg");
	this.shape_2.setTransform(11.7,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgDAKQgHgDgFgFQgDgEABgEQACgEAHgBQAFgBAHADQAHADAFAFQADAEgBAEQgCAFgHAAIgDAAQgEAAgFgCg");
	this.shape_3.setTransform(11.7,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AguALIgFgHQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBIADgBIAQgCIALANIgRACIgCAAQgDAAgDgCgAgbgCIAEgBQABADADADIAHAGIgFABgAAUgCIgIgGIAFgBIAKAMIgEABQAAgDgDgDgAAVgKIARgCQAGgBACADIAGAHQACADgFAAIgRADg");
	this.shape_4.setTransform(11.7,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AhIAdIgZgfQgDgEAHgBIAzgIIADAFIgyAHIAYAeIAzgHIADAEIgzAIIgDAAQgFAAgCgDgAgJATIAsgHIADAFIgsAGgAAnAMIA0gIIgZgeIgzAIIgDgFIAzgIQAIgBADAEIAZAfQAAABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQgBAAAAAAIg0AIgAglgPIAsgHIADAEIgsAHg");
	this.shape_5.setTransform(11.6,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhPAjIghgoQAAgBgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABgBQAAAAAAAAQABAAABgBQAAAAABAAIA9gJIAFAFIg0AIQgGABACAEIAZAfQADAEAIgBIAzgIIAEAFIg+AJIgDABQgEAAgDgEgAgGAXIAsgGIAEAFIgsAGgAhagDIAzgHIAHAIIgQACIgDABQAAABAAAAQgBAAAAABQAAAAABAAQAAAAAAABIAFAHQADADAFgBIARgCIAHAJIgzAHgAAqAQIA0gIQABAAABAAQAAAAABgBQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgZgfQgDgEgHABIg0AIIgEgFIA+gJQAIgBADAEIAhApQAAAAABAAQAAABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIg/AJgAgRAKIAFgBQAMAIAMgCQAMgCgBgJIAEgBIAHAJIgsAHgAAgADIARgDQAFAAgCgDIgGgHQgCgDgGABIgRACIgHgIIA0gIIAYAeIgzAIgAgigLIAsgHIAHAJIgFABQgMgIgLACQgNACABAJIgEABgAgqgVIAsgGIAEAFIgsAHg");
	this.shape_6.setTransform(11.7,3.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("Ah0gKIDAgdIApAyIjBAdg");
	this.shape_7.setTransform(11.7,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_15, new cjs.Rectangle(0,0,23.3,7.9), null);


(lib.ClipGroup_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgKIC/gdIAoAyIjAAdg");
	mask.setTransform(11.6,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AgVgXIAEgBIAFAEIADAFIAYAeIADAFIAEAEIgFABg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AgNgPIgIgJIAFgBIAmAyIgEABg");
	this.shape_1.setTransform(9.1,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgMAJIgHgGQgDgDAAgDQgBgJAMgCQAMgCAMAHIAHAHQACACABAEQABAJgMACIgGAAQgIAAgKgGgAgJgLQgGABgCAEQgBAEAEAEQADAFAIADQAHADAGgBQAGgBABgEQACgEgEgEQgDgFgIgDQgFgCgEAAIgEAAg");
	this.shape_2.setTransform(11.6,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgDAKQgIgDgDgFQgEgEABgEQACgEAGgBQAGgBAHADQAHADAEAFQAEAEgCAEQgBAEgGABIgDABQgGAAgEgDg");
	this.shape_3.setTransform(11.6,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AgtALIgGgIQgDgCAGgBIAQgCIALANIgRACIgCAAQgEAAgBgCgAgbgCIAEgBQABADADADIAHAGIgFABgAAUgCIgHgHIAEAAIAKAMIgEABQgBgEgCgCgAAVgKIARgCQAFgBADADIAGAHQADADgGAAIgRADg");
	this.shape_4.setTransform(11.6,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AhJAcIgZgeQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAIA0gIIADAEIgzAIIAZAeIAzgHIADAEIgzAHIgDABQgFAAgDgEgAgKATIAsgHIAEAEIgsAHgAAnALIAzgHIgYgeIg0AHIgDgEIA0gIQAHgBADAEIAZAfQAEAEgIABIg0AIgAgmgQIAsgGIAEAEIgsAHg");
	this.shape_5.setTransform(11.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhPAjIghgpQAAAAgBAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQAAgBABAAIA+gJIAEAFIg0AIQAAAAgBAAQgBAAAAABQgBAAAAAAQAAAAgBABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAABIAZAeQAEAFAHgCIAzgHIAEAFIg+AJIgCABQgFAAgDgEgAgGAXIAsgHIAEAGIgsAGgAhagDIAzgIIAHAJIgQACQgGABADACIAGAIQABADAGgBIARgCIAHAJIgzAHgAAqAWgAAvAVIgFgFIA0gIQAIgBgEgEIgZgfQgDgEgHABIg0AIIgEgFIA+gJQAHgCAEAFIAhAoQADAEgHACIhDAKgAgRAKIAFgBQAMAIAMgCQAMgCgBgJIAEgBIAHAJIgsAHgAAgADIARgDQAGAAgDgDIgGgHQgDgDgFABIgRACIgHgJIA0gHIAYAeIgzAHgAgigLIAsgHIAHAJIgEAAQgMgHgMACQgNACABAJIgEABgAgqgVIAsgGIAEAFIgsAGg");
	this.shape_6.setTransform(11.6,4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhzgKIC/gdIAoAyIjAAdg");
	this.shape_7.setTransform(11.6,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_14, new cjs.Rectangle(0,0,23.3,7.9), null);


(lib.ClipGroup_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgKIDAgdIAnAyIjAAdg");
	mask.setTransform(11.6,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AgVgYIAEAAIAFAFIADAEIAfAoIgFAAg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAVIgigsIAFgCIAmAyIgEAAg");
	this.shape_1.setTransform(9.1,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgMAKIgHgHQgDgDAAgDQgCgJANgCQALgCANAIIAHAGQADADAAADQABAJgMACIgFAAQgKAAgJgFgAgJgLQgGABgCAEQgBAEAEAEQADAFAIADQAGADAHgBQAGAAABgFQACgEgEgEQgEgFgHgDQgFgDgGAAIgCABg");
	this.shape_2.setTransform(11.6,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgDAKQgIgDgDgFQgEgEABgEQACgEAGgBQAHgBAGADQAHADAEAFQAEAEgCAEQgBAFgGAAIgDAAQgGAAgEgCg");
	this.shape_3.setTransform(11.6,3.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AgtALIgGgHQAAgBgBAAQAAAAAAAAQAAgBAAAAQABAAAAgBIADgBIAQgBIALAMIgRACIgCAAQgEAAgBgCgAgbgCIAFgBQAAADADADIAHAHIgFAAgAAUgCIgHgGIAEgBIAKANIgEAAQAAgDgDgDgAAVgKIARgCQAGgBACADIAGAIQACACgFAAIgRADg");
	this.shape_4.setTransform(11.6,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AhJAdIgZgfQgCgEAGgBIA0gIIADAFIgzAHIAZAeIAzgHIADAEIgzAIIgDAAQgEAAgEgDgAgKATIAsgHIAEAFIgsAGgAAnAMIAzgIIgYgeIg0AIIgDgFIA0gHQAHgCADAFIAZAeQABABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQgBABAAAAQgBAAgBAAIg0AIgAgmgPIAsgHIAEAEIgsAHg");
	this.shape_5.setTransform(11.6,3.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhPAkIghgpQgDgEAHgCIA+gJIAEAFIg0AIQgGABACAEIAZAfQAEAEAHgBIAzgIIAEAFIg+AJIgDABQgEAAgDgDgAgGAXIAsgGIAEAFIgsAGgAhagDIAzgHIAHAJIgQABIgDABQAAABAAAAQgBAAAAABQAAAAABAAQAAAAAAABIAGAHQACADAFgBIARgCIAHAJIgzAHgAAqAQIA0gIQABAAABAAQAAAAABgBQABAAAAAAQABAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAAAgBgBIgZgeQgDgFgHACIg0AHIgEgFIA+gJQAHgBAEAEIAhApQAAAAAAAAQABABAAAAQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAQAAABgBAAIg+AJgAgRAKIAFAAQALAHANgCQAMgCgBgJIAEAAIAHAIIgsAHgAAgADIARgDQAFAAgCgCIgGgIQgCgDgGABIgRACIgHgIIA0gIIAYAeIgzAIgAgigLIAsgHIAHAJIgEABQgNgIgLACQgNACACAJIgFABgAgqgVIAsgGIAEAFIgsAHg");
	this.shape_6.setTransform(11.6,3.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhzgKIDAgdIAnAyIjAAdg");
	this.shape_7.setTransform(11.6,4);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_13, new cjs.Rectangle(0,0,23.3,7.9), null);


(lib.ClipGroup_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgKIDAgdIAnAyIjAAdg");
	mask.setTransform(11.6,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AgVgXIAFgBIAfAnIADAFIAEAEIgFABg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AgVgYIAFgBIAmAyIgEABg");
	this.shape_1.setTransform(9.1,4.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgMAJQgEgCgDgEQgDgDAAgDQgCgJANgCQALgCANAIQAEACADAEQACACABAEQABAJgMACIgGAAQgJAAgJgGgAgJgLQgGABgCAEQgBAEAEAEQADAFAIADQAGADAHgBQAGAAACgFQABgEgEgEQgEgGgHgCQgEgCgFAAIgEAAg");
	this.shape_2.setTransform(11.6,4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgDAKQgIgDgDgFQgEgEABgEQACgEAGgBQAHgBAGADQAHACAEAGQAEAEgBAEQgCAFgGAAIgEABQgFAAgEgDg");
	this.shape_3.setTransform(11.6,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AgtALIgGgHQgDgDAGgBIAQgCIALANIgRACIgCAAQgEAAgBgCgAgbgCIAFgBQAAADADADQADAEAEACIgFABgAAUgCQgDgEgEgCIAEgBIAKAMIgEABQgBgEgCgCgAAWgKIAQgCQAFgBADADIAGAHQADADgGAAIgRADg");
	this.shape_4.setTransform(11.6,4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AhJAdIgZgfQAAgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQABgBAAAAQAAAAABgBQAAAAABAAQABAAAAAAIA0gIIADAEIgzAIIAZAeIAzgHIADAEIgzAIIgDAAQgFAAgDgDgAgKATIAsgHIAEAEIgsAHgAAnALIAzgHIgYgeIgzAHIgEgEIA0gIQAHgBADAEIAZAfQADAEgHABIg0AIgAgmgQIAsgGIAEAEIgsAHg");
	this.shape_5.setTransform(11.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhPAjIghgpQgBAAAAAAQAAgBAAAAQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAABgBIA+gJIAEAFIg0AIQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAZAfQAEAEAHgBIAzgIIAEAFIg+AJIgDABQgFAAgCgEgAgCAcIgEgFIAsgHIAEAGIguAHgAhagDIAzgIIAHAJIgQACQgGABADADIAGAHQABADAGgBIARgCIAHAJIgzAHgAAqAWgAAvAVIgFgFIA0gIQAHgBgDgEIgZgfQgDgEgHABIg0AIIgEgFIA+gJQAIgCADAFIAhAoQADAFgHABIhDAKgAgRAKIAFgBQAMAIAMgCQAMgCgBgJIAEgBIAHAJIgsAHgAAgADIARgDQAGAAgDgDIgGgHQgDgDgFABIgQACIgHgJIAzgHIAYAeIgzAHgAgigLIAsgHIAHAJIgEABQgNgIgLACQgNACACAJIgFABgAgqgVIAsgGIAEAFIgsAGg");
	this.shape_6.setTransform(11.6,4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_12, new cjs.Rectangle(0.3,0.1,22.8,7.7), null);


(lib.ClipGroup_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhzgKIDAgdIAnAyIjAAdg");
	mask.setTransform(11.6,4);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AgVgYIAFAAIAmAxIgFAAg");
	this.shape.setTransform(14.1,3.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AgVgYIAFAAIAmAxIgEAAg");
	this.shape_1.setTransform(9.1,4.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AgMAKIgHgHQgDgDAAgDQgCgJANgCQALgCANAIQAFADACADQACACABAEQABAKgMABIgFAAQgKAAgJgFgAgJgLQgGABgCAEQgBAEAEAEQADAFAIAEQAGADAHgBQAGgBACgFQABgEgEgEQgEgFgHgDQgFgDgGAAIgCABg");
	this.shape_2.setTransform(11.6,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgDAKQgIgDgDgFQgEgEABgEQACgFAGgBQAHAAAGACQAHADAEAFQAEAEgBAFQgCAEgGABIgEABQgFAAgEgDg");
	this.shape_3.setTransform(11.6,4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AgtALIgGgHQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgBABAAIADgBIAQgBIALAMIgRACIgCAAQgEAAgBgCgAgbgCIAFgBQAAADADADIAHAHIgFAAgAAUgCQgCgDgFgDIAEgBIAKANIgEAAQgBgEgCgCgAAWgKIARgCQAFAAACACIAGAIQACACgFAAIgRADg");
	this.shape_4.setTransform(11.6,3.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AhJAdIgZgfQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAIAzgIIADAEIgzAIIAZAeIAzgHIADAEIgzAIIgDAAQgFAAgDgDgAgKATIAsgHIAEAEIgsAHgAAnAMIA0gIIgZgfIgzAIIgEgEIA0gHQAIgBACADIAZAfQABAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgzAIgAgmgPIAsgHIAEAEIgsAHg");
	this.shape_5.setTransform(11.6,4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhPAjIghgoQgDgFAHgBIA+gJIAEAFIgzAIQgBAAgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAIAZAfQADAEAIgBIAzgIIAEAFIADAAIhBAKIgCAAQgFAAgDgEgAgGAXIAsgHIAEAGIACgBIguAIgAhagDIAzgIIAHAJIgQACIgDABQAAAAgBABQAAAAAAAAQAAABAAAAQABAAAAABIAGAHQACADAFgBIARgCIAHAJIgzAHgAArAQIAzgIQABAAABAAQAAAAABgBQAAAAABAAQAAgBABAAQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBgBAAIgZgfQgCgDgIABIg0AHIgEgFIA+gKQAIgBADAEIAhApQADAEgHACIg+AJgAgRAKIAFgBQALAIANgCQAMgCgBgJIAEAAIAHAIIgsAHgAAgADIARgDQAFAAgCgDIgGgHQgCgDgFABIgRACIgHgJIAzgIIAZAfIg0AIgAgigLIAsgHIAHAJIgEAAQgNgHgLACQgNACACAJIgFAAgAgqgVIAsgHIAEAGIgsAHg");
	this.shape_6.setTransform(11.6,4);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_11, new cjs.Rectangle(0.3,0.1,22.8,7.7), null);


(lib.ClipGroup_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA2g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE94E").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE94E").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4E6D7").s().p("AAsAcIggg3IAGAAIAfA3gAgGAbIgfg2IAsAAIAfA3gAgQAbIggg2IAGAAIAfA2g");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F5B2A").s().p("AAlAHIgIgNIALAAQAGAAABAEIAFAHQACADgFAAgAgnAHQgFAAgCgDIgFgHQgCgEAFAAIALAAIAJAOg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F5B2A").s().p("ABcAXIgvAAIgDgGIAuABIgTghIguAAIgDgGIAvABQAHAAADAFIAUAiQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDABIgBAAgAhCAWQgHAAgDgFIgUgiQgCgFAHAAIAuABIADAFIgtAAIATAgIAtABIADAFg");
	this.shape_4.setTransform(11.3,2.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94C96F").s().p("AAwAcIgDgFIAvAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAAAgBQAAAAAAgBQAAAAAAgBIgUgiQgDgEgHAAIgvgBIgDgGIA6ABQAHAAACAFIAbAtQACAFgHgBgAhKAbQgHAAgCgEIgbguQgCgEAHgBIA5ABIADAGIgugBQgHAAACAEIAUAjQADAEAHABIAuAAIADAFgAAqARIgFgKIAMABQAFAAgCgDIgFgHQgBgEgGAAIgLAAIgGgKIAuABIATAggAhEAQIgTghIAtABIAFAJIgLAAQgFAAACAEIAFAHQACADAFAAIALAAIAFAKg");
	this.shape_5.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_10, new cjs.Rectangle(0.2,0,22.3,5.7), null);


(lib.ClipGroup_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgMgCgIgIIgHgHQgCgDAAgEQAAgHALgCIADAAIACAAQAKABALAJQAEADACADQACAEAAADQAAAJgLABgAgPgJQgDAEAEAFQADAFAHAEQAFAFAHAAQAGAAACgEQADgEgEgGQgDgFgHgEQgFgDgHAAQgGAAgCADg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAJQgHgEgDgFQgEgFADgEQACgEAGAAQAHAAAFAEQAHAEADAFQAEAGgDAEQgCAEgGAAQgHgBgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAGAAABAEIAFAHQACADgFAAgAAXAHQAAgDgCgEQgCgDgEgDIADAAIAIAOgAgSAHIgIgOIAEAAQAAAEACADIAHAHgAgnAHQgFAAgCgDIgFgHQgCgEAFAAIARAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzAAIgTggIgzgBIgDgFIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgGIAsABIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIADAFIgzgBIATAhIAyAAIADAGgAgGgQIgCAAIgDAAIgUAAIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhKAbQgHAAgCgFIgbgtQgCgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIAEAFIAFAAIgDgFIAsAAIADAGIAFAAIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA/ABQAHAAADAEIAaAuQACAFgHAAgAAlARIgFgJIARAAQAFAAgCgEIgFgHQgBgDgGAAIgRAAIgFgKIAzABIATAggAAMARQALgBAAgJIADABIAGAJgAgMAQIgGgJIAFAAQAIAIAMACgAhEAQIgTghIAzABIAFAJIgRAAQgFAAACADIAFAIQACADAFAAIAQAAIAFAJgAAPgGQgLgJgKgBIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_9, new cjs.Rectangle(0.2,0,22.3,5.8), null);


(lib.ClipGroup_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgMgCgIgIQgEgDgDgEQgCgDAAgEQAAgIALgBIAFAAQAKABALAJQAEADACADQACAFAAADQAAAIgLABgAgPgJQgDAEAEAFQADAFAHAFQAFAEAHAAQAGAAACgEQADgEgDgGQgEgEgGgFQgGgEgHAAQgGAAgCAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAKQgHgFgDgFQgEgFADgEQACgEAGAAQAHAAAGAEQAGAFAEAEQADAGgDAEQgCAEgGAAQgHAAgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAfAIIgIgOIARAAQAFAAADADIAEAIQACADgGAAgAAWAIQABgDgCgFQgCgDgFgDIAEAAIAIAOgAgRAHIgJgOIAEAAQAAAEACADQADAEADADgAgoAHQgFAAgCgDIgEgIQgCgDAFAAIAQAAIAJAOg");
	this.shape_4.setTransform(11.4,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzABIgTghIgzgBIgDgFIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgFIAsAAIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIADAFIgzgBIATAhIAyABIADAFgAgfgQIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA/ABQAHABADAEIAaAtQACAFgHAAgAgHAcIgCgGIAsAAIACAGgAhJAbQgIAAgCgFIgbgtQgCgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIADAGgAAlARIgFgJIARAAQAFAAgCgDIgEgIQgDgDgFAAIgRAAIgFgKIAzABIATAhgAAMARQALgBAAgIIADAAIAGAJgAgMARIgFgKIAEAAQAIAIAMACgAhEAQIgTghIAzABIAFAJIgQAAQgGAAACADIAFAIQACADAFAAIAQAAIAFAKgAAPgGQgLgJgKgBIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_8, new cjs.Rectangle(0,0,22.7,5.8), null);


(lib.ClipGroup_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFABIAeA2g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIADAGIADAFIAYAsg");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgLgBgKgJQgEgDgCgEQgCgDAAgEQAAgIALgBIAFAAQALABAKAJIAFAGQADAEAAAEQgBAIgKABIgDAAgAgQgJQgCAEADAFQAEAFAGAFQAGADAHAAQAGAAACgDQADgFgDgFQgEgFgGgEQgHgEgGAAQgHAAgCAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAKQgHgEgDgGQgEgFADgEQACgEAGAAQAHAAAGAEQAGAFAEAEQADAGgDAEQgCAEgGAAQgHAAgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAFAAACADIAFAIQACADgGAAgAAXAIQAAgEgDgEIgFgGIADAAIAIAOgAgSAHIgIgOIAEAAQAAAEACADQACAEAEADgAgnAHQgGAAgBgDIgFgHQgCgEAGAAIAPAAIAJAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzABIgTghIgzAAIgDgGIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgFIATAAIADAAIACAAIAUAAIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIADAFIgzAAIATAgIAzABIACAFgAgfgQIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgFIA/AAQAHAAADAFIAaAtQACAFgHAAgAgGAcIgDgGIAsAAIADAGgAhJAbQgIAAgCgEIgaguQgDgFAHAAIA/ABIADAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIAEAGgAAlARIgFgJIARAAQAFAAgCgDIgEgIQgCgDgGAAIgRAAIgFgJIAzAAIATAhgAAMARQAKgBABgIIAEAAIAFAJgAgMARIgFgKIAEAAQAJAJALABgAhEAQIgTggIAzAAIAFAJIgQAAQgFAAABAEIAFAHQACADAFAAIAQAAIAGAKgAAPgGQgKgIgKgCIASAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_7, new cjs.Rectangle(0,0,22.6,5.8), null);


(lib.ClipGroup_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA2g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgYgsIgDgFIgDgGIAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgMgCgJgIIgGgHQgCgDAAgEQAAgHALgCIAFAAQALACAKAHIAFAHQADAFAAACQgBAIgKACgAgQgJQgBAEACAFQAEAFAGAEQAGAFAHAAQAGAAACgEQADgFgDgFQgEgFgGgEQgGgDgHAAIgBgBQgFAAgDAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AAIAOQgHAAgFgFQgHgEgDgFQgDgFACgEQACgEAHABQAGAAAGADQAGAEAEAFQADAFgDAFQgCAEgFAAIgBAAg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAfAHIgIgNIARAAQAGAAABAEIAFAHQACADgGAAgAAXAHQAAgCgDgFIgGgHIAEABIAIANgAgSAHIgIgOIAEAAQAAAEACADIAGAHgAgoAHQgFAAgCgDIgEgHQgCgEAFAAIAQAAIAJAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAXIgDgGIAzAAIgTggIgzgBIgDgFIA0ABQAHAAADAEIAUAiQACAFgHAAgAgJAWIgDgFIAsAAIADAGgAhCAWQgIgBgCgEIgUgjQgCgEAHAAIA0ABIADAFIgzgBIATAhIAzABIADAFgAgfgQIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgFIA0AAQAHAAgCgFIgUgiQgDgEgHAAIg0gBIgDgGIA+ABQAIAAACAFIAaAtQADAFgHgBgAgGAbIgDgFIAsABIADAFgAhJAbQgIAAgCgEIgaguQgDgEAHgBIA+ABIAEAGIg0gBQgHAAACAEIAUAjQACAEAIABIAzAAIAEAFgAAlARIgFgKIAQABQAGAAgCgDIgFgHQgBgEgGAAIgQAAIgGgKIAzABIATAggAAMARQAKgCABgIIADAAIAGAKgAgMARIgGgKIAEAAQAJAIAMACgAhEAQIgTghIAzABIAEAJIgPAAQgGAAACAEIAFAHQABADAGAAIAQAAIAFAKgAAPgHQgKgHgLgCIASAAIAGAKgAgagHIgFgJIAUAAQgLACAAAHgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA2g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_6, new cjs.Rectangle(0,0,22.6,5.7), null);


(lib.ClipGroup_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAbIgeg2IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgLgCgKgIIgFgHQgDgDAAgEQAAgHALgCIACAAIADAAQALABAKAJQAEADACADQACAEAAAEQAAAIgLABgAgPgJQgCAEACAFQAEAGAGAEQAGAEAHAAQAGAAACgEQADgEgDgGQgEgFgGgEQgGgDgHAAQgGAAgCADg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgFAKQgGgEgEgGQgCgFACgEQACgEAGAAQAHAAAGAEQAGAEAEAFQADAGgDAEQgCAEgGAAQgHAAgGgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgIgOIAQAAQAGAAABADIAFAHQACAEgGAAgAAXAIQAAgEgCgEQgCgDgEgDIADAAIAIAOgAgSAHIgIgOIAEAAQAAAEADADIAFAHgAgnAHQgFAAgCgDIgFgIQgCgEAGABIAQAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzAAIgTggIgzgBIgDgFIA0ABQAHAAADAEIAUAiQACAFgHAAgAgKAWIgDgGIAsABIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIAzABIADAFIgygBIATAhIAyAAIADAGgAgGgQIgDAAIgCAAIgUAAIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AgGAcIgDgGIAsAAIADAGIAFAAIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA+ABQAIAAACAEIAaAuQADAFgHAAgAhJAbQgIAAgCgFIgagtQgDgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQADAEAHAAIAzABIAEAFIACABgAAlARIgFgJIAQAAQAGAAgCgEIgFgHQgBgDgGAAIgQAAIgGgKIAzABIATAggAAMARQALgBAAgIIADAAIAGAJgAgMAQIgGgJIAEAAQAKAIALACgAhEAQIgTghIAzABIAFAJIgQAAQgGgBACAEIAFAIQACADAFAAIAQAAIAFAJgAAPgGQgKgJgLgBIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_5, new cjs.Rectangle(0,0,22.6,5.8), null);


(lib.ClipGroup_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE94E").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FEE94E").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F4E6D7").s().p("AArAcIgfg3IAGAAIAfA3gAgGAbIgfg2IAsAAIAfA3IAEAAgAgRAbIgfg2IAGAAIAfA2g");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#3F5B2A").s().p("AAlAIIgJgOIANAAQAFAAABADIAFAIQACADgGAAgAgnAHQgFAAgCgDIgFgIQgCgDAGAAIALAAIAIAOg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#3F5B2A").s().p("AAtAWIgDgFIAuAAIgTggIgugBIgDgFIAvABQAIAAACAEIAUAiQACAFgHAAgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIAuABIADAFIgtgBIATAhIAtAAIADAGg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#94C96F").s().p("AAwAcIgDgGIAvABQAHAAgCgFIgUgiQgCgEgHAAIgwgBIgCgGIA4ABQAIAAACAFIAaAtQADAFgHAAgAhJAbQgIAAgCgFIgagtQgDgFAHAAIA5ABIADAGIgugBQgHAAACAFIAUAiQADAEAHAAIAuABIADAFIAIABgAArARIgGgJIALAAQAGAAgCgDIgFgIQgBgDgFAAIgNAAIgEgKIAtABIATAggAhEAQIgTghIAtABIAGAJIgLAAQgGAAACADIAFAIQACADAFAAIALAAIAFAJg");
	this.shape_5.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_6.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_4, new cjs.Rectangle(0,0,22.6,5.8), null);


(lib.ClipGroup_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgKgBgLgJQgDgDgCgEQgDgDAAgEQABgIAKgBIAFAAQAMABAJAJIAGAGQACADAAAFQAAAHgLACIgDAAgAgPgJQgCAEACAFQAEAFAGAFQAHADAGAAQAHAAACgDQACgFgDgFQgDgFgHgEQgGgEgHAAQgGAAgCAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgFAKQgGgEgEgGQgDgFADgEQACgEAGAAQAHAAAFAEQAHAFADAEQAEAGgDAEQgCAEgGAAQgHAAgGgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgIgOIARAAQAEAAACADIAFAIQACADgGAAgAAXAIQAAgEgCgEIgGgGIADAAIAIAOgAgSAHIgIgOIAEAAQAAAEADADQACAEADADgAgnAHQgFAAgCgDIgFgIQgCgDAGAAIAQAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzABIgTghIgzgBIgDgFIA0ABQAIAAACAEIAUAiQACAFgHAAgAgKAWIgCgFIATAAIACAAIADAAIATAAIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIAzABIADAFIgyAAIATAgIAyABIADAFgAgfgQIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA+ABQAIAAACAFIAaAtQADAFgHAAgAgGAcIgEgGIAsAAIAEAGgAhKAbQgHAAgDgFIgagtQgCgFAHAAIA+ABIADAGIgzgBQgHAAACAFIAUAiQACAEAIAAIAzABIADAGgAAlARIgGgJIARAAQAGAAgCgDIgFgIQgCgDgFAAIgRAAIgFgKIAzABIATAhgAAMARQALgBAAgIIADAAIAFAJgAgMARIgGgKIAEAAQALAJAKABgAhEAQIgTggIAyAAIAGAJIgRAAQgFAAACADIAEAIQACADAGAAIAQAAIAFAKgAAOgGQgIgIgMgCIATAAIAFAKgAgagHIgFgJIAUAAQgKABgBAIgAgigVIgEgGIAsAAIAEAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_3, new cjs.Rectangle(0,0,22.6,5.8), null);


(lib.ClipGroup_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAEAGIACAFIAYAsg");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAJARIgCAAQgLgCgKgIIgGgHQgCgEAAgCQAAgJALgBIAFAAQAMABAIAJIAHAGQACAEAAAEQAAAHgLACgAgPgJQgDAEADAFQAEAFAHAFQAFADAHAAQAGAAACgDQADgFgEgFQgDgEgHgEQgFgFgHAAQgGAAgCAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAKQgHgEgEgGQgDgFADgEQACgEAGAAQAHABAFAEQAHAEADAEQAEAGgDAEQgCAEgGAAQgHAAgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAGAAABADIAFAHQACAEgGAAgAAXAIQAAgEgCgEIgHgGIAEAAIAIAOgAgSAHIgIgNIAEAAQAAACACAEIAGAHgAgnAHQgFAAgDgEIgEgHQgCgDAFAAIARAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("ABcAXIg0AAIgDgGIAzABIgTghIgzAAIgDgGIA0ABQAIAAACAEIAUAjQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABIgDABIgBAAgAgJAWIgDgFIATAAIACAAIAXAAIACAFgAhCAWQgIgBgCgEIgUgiQgCgFAHAAIAzABIADAFIgyAAIATAgIAyABIADAFgAgfgQIgDgFIAsAAIADAGg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0AAQABABAAAAQABAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAAAgBQAAAAAAgBQAAAAAAAAIgUgjQgCgFgIAAIg0AAIgDgFIA+AAQAIAAACAEIAbAuQACAEgHABgAgGAcIgDgGIArAAIAEAGgAhKAbQgHAAgDgFIgagtQgCgFAHABIA+AAIADAFIgzAAQgHAAACAFIAUAiQACADAIABIAzAAIADAHgAAlARIgFgJIAQAAQAGAAgCgEIgFgHQgBgDgGAAIgRAAIgFgJIAzAAIATAhgAAMARQALgCAAgHIADAAIAGAJgAgMARIgGgKIAEAAQAKAIALACgAhEAQIgTggIAyAAIAGAJIgRAAQgFAAACADIAEAHQADAEAFAAIAQAAIAFAKgAAOgGQgIgJgMgBIATABIAFAJgAgagGIgFgKIAUAAQgLABAAAJgAgigWIgDgFIArABIAEAFg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_2, new cjs.Rectangle(0,0,22.7,5.8), null);


(lib.ClipGroup_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgLgCgKgIIgGgHQgCgDAAgEQAAgHALgCIACAAIADAAQAMABAIAJQAEADADADQACAEAAADQAAAIgLACgAgPgJQgDAEAEAFQADAFAHAEQAFAFAHAAQAGAAACgEQADgEgEgGQgDgFgHgEQgFgDgHAAQgGAAgCADg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAJQgHgEgDgFQgEgFADgEQACgEAGAAQAHAAAFAEQAHAEADAFQAEAGgDAEQgCAEgGAAQgHgBgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAGAAABAEIAFAHQACADgFAAgAAXAHQAAgDgCgEQgDgDgEgDIAEAAIAIANgAgSAHIgIgOIAEAAQAAAEACADIAGAHgAgnAHQgFAAgCgDIgFgHQgCgEAFAAIARAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzAAIgTggIgzgBIgDgFIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgGIAsABIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIACAFIgygBIATAhIAyAAIADAGgAgGgQIgDAAIgWAAIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("ABqAcIg/AAIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA/ABQAHAAACAEIAbAuQACAFgFAAIgCgBgAgGAbIgDgFIAsAAIADAGgAhKAbQgHAAgDgFIgagtQgCgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIAEAFgAAlARIgFgJIARAAQAFAAgCgEIgFgHQgBgDgGAAIgRAAIgFgKIAzABIATAggAAMARQALgCAAgIIADAAIAGAKgAgMAQIgGgJIAEAAQAKAIALACgAhEAQIgTghIAyABIAGAJIgRAAQgFAAACADIAFAIQACADAFAAIAQAAIAFAJgAAOgGQgIgJgMgBIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_1, new cjs.Rectangle(0.2,0,22.3,5.7), null);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgLgCgKgIIgGgHQgCgDAAgEQAAgHALgCIACAAIADAAQAKABALAJQAEADACADQACAEAAAEQAAAIgLABgAgPgJQgDAEAEAFQADAFAHAFQAFAEAHAAQAGAAACgEQADgEgEgGQgDgEgHgFQgFgDgHAAQgGAAgCADg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAKQgHgFgDgFQgEgFADgEQACgEAGAAQAHAAAFAEQAHAFADAEQAEAGgDAEQgCAEgGAAQgHAAgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAGAAABADIAFAIQACADgFAAgAAXAIQAAgEgCgEQgCgDgEgDIADAAIAIAOgAgSAHIgIgOIAEAAQAAAEACADIAGAHgAgnAHQgFgBgCgCIgFgIQgCgDAFAAIARAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzABIgTghIgzgBIgDgFIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgFIAsAAIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIADAFIgzgBIATAhIAyABIADAFgAgGgQIgDAAIgCAAIgUAAIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgGIA/ABQAHAAACAFIAbAtQACAFgHAAgAgHAcIgCgGIAsAAIADAGIACAAgAhKAbQgHAAgCgFIgbgtQgCgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIADAGgAAlARIgFgJIARAAQAFAAgCgDIgFgIQgBgDgGAAIgRAAIgFgKIAzABIATAhgAAMARQALgBAAgIIADAAIAGAJgAgMARIgGgKIAEAAQAKAIALACgAhEAQIgTghIAzABIAFAJIgRAAQgFAAACADIAFAIQACACAFABIAQAAIAFAKgAAPgGQgLgJgKgBIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0.2,0,22.3,5.8), null);


(lib.ClipGroup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AhRAbIgfg3IDCACIAfA3g");
	mask.setTransform(11.3,2.9);

	// Layer 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E4C762").s().p("AANAcIgeg3IAFABIAeA2g");
	this.shape.setTransform(13.8,2.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E4C762").s().p("AANAcIgeg3IAFAAIAeA3g");
	this.shape_1.setTransform(8.8,2.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AAHARQgLgBgJgJQgEgCgDgFQgCgDAAgEQAAgIALgBIAFAAQALABAKAJIAGAGQACAFAAADQAAAHgLACIgCAAgAgPgJQgDAEAEAFQADAFAHAFQAFADAHAAQAGAAACgDQADgFgDgFQgEgFgGgEQgGgEgHAAQgGAAgCAEg");
	this.shape_2.setTransform(11.3,2.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7B813C").s().p("AgEAKQgHgEgDgGQgEgFADgEQACgEAGAAQAHAAAGAEQAGAFAEAEQADAGgDAEQgCAEgGAAQgHAAgFgEg");
	this.shape_3.setTransform(11.3,2.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7B813C").s().p("AAgAIIgJgOIARAAQAFAAACADIAFAIQACADgFAAgAAXAIQAAgDgCgFIgGgGIADAAIAIAOgAgRAHIgJgOIAEAAQAAAEACADQADAFAEACgAgnAHQgFAAgCgDIgFgIQAAAAAAAAQAAAAAAgBQAAAAAAAAQAAgBAAAAIADgBIARAAIAIAOg");
	this.shape_4.setTransform(11.3,2.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#7B813C").s().p("AAoAWIgDgFIAzABIgTghIgzAAIgDgGIA0ABQAIAAACAEIAUAiQACAFgHAAgAgJAWIgDgFIATAAIADAAIACAAIAUAAIADAFgAhCAVQgIAAgCgEIgUgiQgCgFAHAAIA0ABIADAFIgzAAIATAgIAyABIADAFgAgfgQIgDgFIAsAAIADAFg");
	this.shape_5.setTransform(11.3,2.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#94C96F").s().p("AArAcIgDgGIA0ABQAHAAgCgFIgUgiQgCgEgIAAIg0gBIgDgFIA/AAQAHAAADAFIAaAtQACAFgHAAgAgGAcIgDgGIAsAAIADAGgAhKAbQgIAAgBgFIgbgtQgCgFAHAAIA+ABIAEAGIg0gBQgHAAACAFIAUAiQACAEAIAAIAzABIAEAGgAAlARIgFgJIARAAQAFAAgCgDIgFgIQgCgDgFAAIgRAAIgFgJIAzAAIATAhgAAMARQALgBAAgIIADAAIAGAJgAgMARIgFgKIAEAAQAJAJALABgAhEAQIgTggIAzAAIAFAJIgRAAIgDABQAAAAAAABQAAAAAAAAQAAABAAAAQAAAAAAAAIAFAIQACADAFAAIAQAAIAFAKgAAPgGQgKgIgLgCIATAAIAFAKgAgagHIgFgJIAUAAQgLABAAAIgAgigVIgDgGIAsAAIADAGg");
	this.shape_6.setTransform(11.3,2.9);

	var maskedShapeInstanceList = [this.shape,this.shape_1,this.shape_2,this.shape_3,this.shape_4,this.shape_5,this.shape_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// Layer 1
	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#94C96F").s().p("AhRAbIgfg3IDCACIAfA3g");
	this.shape_7.setTransform(11.3,2.9);

	this.timeline.addTween(cjs.Tween.get(this.shape_7).wait(1));

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,22.7,5.8), null);


(lib.PC = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#070707").s().p("Ah0gsQAUAABNAfQBTAgA1AIIjpASg");
	this.shape.setTransform(34.5,44.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#1E1E1E").s().p("AgGAiQgmAAgMgKIgegqICtgPIgsA5QgMAKgiAAIgDAAg");
	this.shape_1.setTransform(36.8,50.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#686868").s().p("AjYAZQAhgbAcgOQAjgTApgDIEnAJQhsANhqA3QhwgfhqARg");
	this.shape_2.setTransform(40.1,3.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#070707").s().p("AihAXQAAgTAwgNQAugNBDAAQBEAAAuANQAwANAAATg");
	this.shape_3.setTransform(36.1,53.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#515151").s().p("AghDqQARhlgShcQgVhqhHhqQA9gmA7gSQBIgVA8AOIgJHEQgpAXgyAAQgcAAgfgHg");
	this.shape_4.setTransform(53,24.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#3F3F3F").s().p("AATC/QAVhQgZhqQgWhhg3hVIAXgZQBJBwAVBpQAQBZgTBjg");
	this.shape_5.setTransform(44.4,28);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#282828").s().p("AAACUQhVghgOgCIgegDIgOjpQBagmBqgXQB5DBgnCwQgzgFhUggg");
	this.shape_6.setTransform(32.9,28.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#1E1E1E").s().p("AhEARIgEhGICQASIAABZg");
	this.shape_7.setTransform(15.6,43.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#3F3F3F").s().p("AgcBxQgRgEgJgIQgpgmgDhDQgEhCAgg0QBGgTBVAlIAODqg");
	this.shape_8.setTransform(10,26.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#686868").s().p("AivASQBOgkBTgRIC+AMQhuAXhWAkQhTghhIAPg");
	this.shape_9.setTransform(20.5,12.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#3F3F3F").s().p("AhmALIgHgaQBtgUBtAiIgVAYg");
	this.shape_10.setTransform(29.4,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PC, new cjs.Rectangle(0,0,65.7,55.7), null);


(lib.Path_2_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909090").s().p("AAAAcQgMgBgHgIQgIgJAAgKQABgMAJgIQAIgHAKAAQAMABAIAIQAIAJgBAKQgBAMgIAHQgIAIgLAAIAAAAg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2_0, new cjs.Rectangle(0,0,5.6,5.6), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#909090").s().p("AgRAUQgJgHgBgMQAAgKAIgJQAHgIAMgBQAKAAAJAHQAIAIABAMQABAKgIAJQgIAIgMABIgBAAQgJAAgIgIg");
	this.shape.setTransform(2.8,2.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,5.6,5.6), null);


(lib.BgYell = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FEE94E").s().p("AyRSwMAAAglfMAkjAAAMAAAAlfg");
	this.shape.setTransform(117,-120);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.BgYell, new cjs.Rectangle(0,-240,234,240), null);


(lib.WhiteHalf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EDF2F4").s().p("AyRJVIAAypMAkjAAAIAASpg");
	this.shape.setTransform(182.5,-61.3,1.56,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.WhiteHalf, new cjs.Rectangle(0,-120.9,365,119.3), null);


(lib.Web = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AghAhQgKgNAAgTQAAgWANgOQAMgNASAAQAUAAAMAOQAMAOAAAbIg9AAQAAALAGAGQAFAGAIAAQAGAAAEgDQAEgDACgHIAYAEQgEAOgLAHQgKAHgPAAQgYAAgLgQgAATgHQAAgLgFgFQgGgGgHAAQgHAAgGAGQgFAGAAAKIAkAAIAAAAg");
	this.shape.setTransform(149.4,7.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfA7QgKgJAAgMIAAgDIAcADQAAAFADACQADADAHAAQAKAAAFgDQADgCABgEIACgMIAAgNQgMAPgPAAQgTAAgLgQQgJgNAAgRQABgYAKgMQAMgNARAAQAQAAAMAQIAAgOIAWAAIAABTQAAARgDAIQgCAIgFAFQgFAEgIADQgIADgNAAQgXAAgJgIgAgNgoQgHAHABAOQgBAPAHAGQAFAHAIAAQAJAAAGgHQAGgGAAgOQAAgPgGgHQgGgHgJAAQgIAAgFAHg");
	this.shape_1.setTransform(138.9,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_2.setTransform(131.1,11.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAsAwIAAg1QAAgNgDgFQgDgFgHAAQgFAAgFADQgFAEgCAGQgCAGAAAMIAAAtIgXAAIAAgyQAAgOgCgEQgBgEgDgCQgCgCgFAAQgGAAgEADQgFADgCAGQgCAGAAAMIAAAuIgZAAIAAhdIAXAAIAAANQAMgPARAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAIQADAGAAANIAAA7g");
	this.shape_3.setTransform(120.5,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgXArQgMgGgGgLQgGgLAAgPQAAgNAGgLQAGgMALgGQALgGANAAQAVAAAOAOQANAOAAAUQAAAVgNAOQgOAOgVAAQgMAAgLgGgAgPgUQgHAHAAANQAAAOAHAHQAGAIAJAAQAKAAAGgIQAHgHAAgOQAAgNgHgHQgGgIgKAAQgJAAgGAIg");
	this.shape_4.setTransform(107.1,7.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQARAAALAIQAJAHAFAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGAAAPQAAAQAGAHQAGAHAIAAQAHAAAEgEQAFgEACgKIAYAEQgDARgLAIQgLAJgSAAQgTAAgNgNg");
	this.shape_5.setTransform(96.8,7.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_6.setTransform(89.1,11.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgfAkQgMgNAAgXQAAgWAMgNQANgNATAAQASAAAJAIQALAHAEAPIgYAEQgCgHgEgEQgFgDgGAAQgJAAgFAGQgGAGABAPQgBAQAGAHQAFAHAJAAQAHAAAEgEQAFgEACgKIAYAEQgDARgMAIQgKAJgSAAQgTAAgNgNg");
	this.shape_7.setTransform(81.8,7.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgIA9QgIgDgGgIIAAANIgWAAIAAiAIAYAAIAAAvQAMgNAOAAQARAAAMAMQAKAMABAXQAAAYgMAMQgMAOgPAAQgHAAgIgFgAgOgFQgGAFAAAPQAAAPAEAGQAHAKAKAAQAHAAAGgHQAGgHAAgPQAAgQgGgGQgGgHgIAAQgJAAgFAHg");
	this.shape_8.setTransform(71.4,6.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAsAwIAAg1QAAgNgDgFQgDgFgHAAQgFAAgFADQgFAEgCAGQgCAGAAAMIAAAtIgXAAIAAgyQAAgOgCgEQgBgEgDgCQgCgCgFAAQgGAAgEADQgFADgCAGQgCAGAAAMIAAAuIgZAAIAAhdIAXAAIAAANQAMgPARAAQAJAAAHAEQAFAEAFAHQAGgHAHgEQAHgEAIAAQAKAAAHAFQAIAEADAIQADAGAAANIAAA7g");
	this.shape_9.setTransform(57.6,7.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgLAMIAAgXIAXAAIAAAXg");
	this.shape_10.setTransform(47.2,11.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAQAvIgQg7IgPA7IgYAAIgehdIAYAAIASA9IAQg9IAWAAIAQA9IASg9IAZAAIgeBdg");
	this.shape_11.setTransform(38.4,7.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AAPAvIgPg7IgPA7IgYAAIgdhdIAYAAIARA9IAQg9IAXAAIAPA9IASg9IAYAAIgdBdg");
	this.shape_12.setTransform(24.4,7.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAQAvIgQg7IgPA7IgYAAIgehdIAYAAIASA9IAQg9IAWAAIAQA9IASg9IAZAAIgfBdg");
	this.shape_13.setTransform(10.4,7.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Web, new cjs.Rectangle(1.3,-5.7,155.3,24.1), null);


(lib.Tel = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag0BPQACgQAIgOQAJgOAZgYQATgSAGgGQAFgKAAgJQABgKgGgFQgGgGgJAAQgJAAgFAGQgGAFAAANIgfgCQADgaAOgKQAOgLAVAAQAXAAANANQAOAMAAASQAAALgEAKQgEAKgIAJQgGAHgOANIgRARIgGAJIA7AAIAAAcg");
	this.shape.setTransform(142.1,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgkA/QgOgSAAgtQAAgsAPgTQANgQAWAAQAXAAANAQQAPATAAAsQAAAtgPATQgNAQgXAAQgWAAgOgRgAgJgzQgEAEgCAJQgDALAAAbQAAAcACAKQADALAEADQAFADAEAAQAGAAAEgDQAEgEADgJQADgLAAgcQAAgbgDgKQgDgKgEgEQgEgDgGAAQgEAAgFADg");
	this.shape_1.setTransform(130,7.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgkA/QgOgSAAgtQAAgsAPgTQANgQAWAAQAXAAANAQQAPATAAAsQAAAtgPATQgNAQgXAAQgWAAgOgRgAgJgzQgEAEgCAJQgDALAAAbQAAAcACAKQADALAEADQAFADAEAAQAGAAAEgDQAEgEADgJQADgLAAgcQAAgbgDgKQgDgKgEgEQgEgDgGAAQgEAAgFADg");
	this.shape_2.setTransform(105.6,7.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgkBEQgNgMgDgUIAegDQABAKAHAGQAGAGAIAAQAJAAAGgIQAHgHAAgQQAAgOgHgIQgGgGgKAAQgNAAgKALIgYgEIAPhRIBPAAIAAAcIg4AAIgFAbQAKgFAKAAQAUAAAOAOQAOAPAAAXQAAATgLAQQgQAUgaAAQgWAAgOgLg");
	this.shape_3.setTransform(93.7,7.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgkA/QgOgSAAgtQAAgsAPgTQANgQAWAAQAXAAANAQQAPATAAAsQAAAtgPATQgNAQgXAAQgWAAgOgRgAgJgzQgEAEgCAJQgDALAAAbQAAAcACAKQADALAEADQAFADAEAAQAGAAAEgDQAEgEADgJQADgLAAgcQAAgbgDgKQgDgKgEgEQgEgDgGAAQgEAAgFADg");
	this.shape_4.setTransform(69,7.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgkBEQgNgMgDgUIAegDQABAKAHAGQAGAGAIAAQAJAAAGgIQAHgHAAgQQAAgOgHgIQgGgGgKAAQgNAAgKALIgYgEIAPhRIBPAAIAAAcIg4AAIgFAbQAKgFAKAAQAUAAAOAOQAOAPAAAXQAAATgLAQQgQAUgaAAQgWAAgOgLg");
	this.shape_5.setTransform(57.1,7.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("Ag0BPQACgQAIgOQAJgOAZgYQATgSAGgGQAFgKAAgJQABgKgGgFQgGgGgJAAQgJAAgFAGQgGAFAAANIgfgCQADgaAOgKQAOgLAVAAQAXAAANANQAOAMAAASQAAALgEAKQgEAKgIAJQgGAHgOANIgRARIgGAJIA7AAIAAAcg");
	this.shape_6.setTransform(32.3,7.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AAhBLIgFgBIgGgCIgFgCIgGgCQgLgDgGgGQgPgIgOgPQgPgOgIgOQgGgIgDgKIgCgGIgCgFIgCgGIgBgGIgBgFQAAgKAGgKQAGgLAFgDIAIgBIAIgBIABAAQACAAAFAIIACAFIAEAHIAEAGIABADIACADIABAEQAAACgDADIgGAGIgHAGQgDACAAACIAAADIABACIACADIACACQAIAOAKAKQALALANAHIACACIADABIACACIADAAQACAAACgDIAGgHIAGgGQADgDACgBIADACIAEACIADABIAGAEIAHAEIAFACQAIAEAAADIAAABIAAAIIgCAIQgDAFgLAGQgKAGgKAAg");
	this.shape_7.setTransform(7.9,7.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Tel, new cjs.Rectangle(-1.8,-6.5,152.3,29.4), null);


(lib.SesxiText3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3212B").s().p("AAaBJQgGgCgEgGQgEgEgDgHQgCgIAAgKQAAgHACgIQACgGAEgFQAEgGAGgDQAGgBAIAAQAHAAAHABQAGADAEAFQAFAEADAIQACAHAAAJQAAAJgCAIQgDAGgFAFQgEAFgGADQgHACgGAAQgIAAgGgCgAAhAOIgFAEIgDAIQgCAFAAAGQAAAHACAEIADAHQADADADACQACABAEAAQADAAADgBIAGgFIADgIIABgLQAAgGgBgEQgBgFgCgDQgDgCgDgBQgDgCgDAAIgHABgAgyBLIBUiVIARAAIhUCVgAg1AAQgGgCgEgFQgEgFgDgHQgCgHAAgKQAAgJACgGQACgHAEgFQAEgFAGgDQAGgDAIAAQAHAAAHADQAGACAFAFQAEAFADAHQACAHAAAKQAAAJgDAHQgCAHgFAFQgEAEgGADQgGACgHgBQgHABgHgCgAgtg6QgDABgCADQgDADgBAEQgBAFAAAHIABALIADAHIAGAEIAGABIAHgBQADgBACgDIADgIIABgLIgBgLIgDgHQgDgDgDgBIgGgBIgGABg");
	this.shape.setTransform(173.1,23.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3212B").s().p("AgNBFQgHgCgFgDIgJgHIgJgIIAMgLQAGAHAJADQAIAEAIAAQAGAAAFgDQAFgCADgEIADgGIACgHIACgJIACgLQgHAIgHADQgHADgHAAQgJAAgIgEQgIgDgGgHQgHgGgDgIQgDgIAAgKQAAgKADgJQADgIAHgHQAGgGAIgEQAIgDAJAAIALABIAJAEQAEACAEAEIAGAIQAEAFACAFIADANIACANIAAAOQAAARgDANQgDANgFAJQgGAJgIAEQgJAFgLAAQgHAAgGgBgAgKgyQgFACgEAEQgIAHAAAPQAAAHACAGQACAFAEAEQAEACAFACQAEACAGAAIAJgCIAIgEQAEgCACgFQADgFAAgHQAAgIgCgGQgBgGgEgEQgEgFgEgCQgFgCgGAAQgFAAgFACg");
	this.shape_1.setTransform(160.4,23.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3212B").s().p("AgTBBQgIgDgGgJQgFgJgDgNQgDgNAAgSQAAgjALgRQAMgRAVAAQAMAAAJAEQAIAEAGAJQAFAIADANQACANAAASQAAASgCAMQgDAOgFAJQgFAIgJAEQgJAFgMAAQgKAAgJgFgAgLgwQgFAEgEAGQgDAHgCAJQgCAKAAAMQAAAMACAJQACAKAEAHQADAGAGAEQAFAEAFAAQAGAAAFgEQAFgDAEgHIAAAAQAEgHACgKQACgJAAgMQAAgLgCgKQgBgKgEgHQgDgGgFgEQgGgDgHgBQgGABgFADg");
	this.shape_2.setTransform(150.9,23.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3212B").s().p("AgDALIgFgCIgDgEIgBgFIABgEIADgDIAFgDIADgCIAFACIAEACIADAEIABAEIgBAFIgDAEIgEACIgFABg");
	this.shape_3.setTransform(143.5,29.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3212B").s().p("AgTBBQgIgDgGgJQgFgJgDgNQgDgNAAgSQAAgjALgRQAMgRAVAAQAMAAAJAEQAIAEAGAJQAFAIADANQACANAAASQAAASgCAMQgDAOgFAJQgFAIgJAEQgJAFgMAAQgKAAgJgFgAgLgwQgFAEgEAGQgDAHgCAJQgCAKAAAMQAAAMACAJQACAKAEAHQADAGAGAEQAFAEAFAAQAGAAAFgEQAFgDAEgHIAAAAQAEgHACgKQACgJAAgMQAAgLgCgKQgBgKgEgHQgDgGgFgEQgGgDgHgBQgGABgFADg");
	this.shape_4.setTransform(136.1,23.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3212B").s().p("AgsBGIAAgRIA/hCQADgDACgEQACgFAAgEIgBgHQgCgFgCgCQgEgFgFgCQgGgCgGAAQgFAAgGACQgFACgEAFIAAgBIgEAJQgCAFgBAFIgRAAQAAgHADgIQACgHAFgGQALgQAXAAIAJAAIAJADIAJAEQAEABADADIAFAGIADAIIACAJIABAIQAAAJgDAGQgDAGgGAGIg0A0IBAAAIAAASg");
	this.shape_5.setTransform(126.5,23.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3212B").s().p("AAGAzQAGAAAEgKQADgKAAgRIAAgfIgBgOQgBgHgCgEQgCgEgEgCQgDgDgGAAQgEAAgEADQgEACgCAEIgDALIAAAOIAAAfIAAAPIABAMIADAHQACADADAAIAAAUQgIgBgEgDQgGgDgDgFQgDgEgDgGIgCgLIgCgMIgBgMIAAgeIACgNQAAgHACgGQABgGADgFQAEgFAEgEQAEgEAGgCQAHgDAHAAQANAAAHAFQAJAEAEAHQAEAIACAJQABAKAAALIAAAeIgBATQgCAJgDAJQgEAIgFAFQgHAGgKADg");
	this.shape_6.setTransform(112.9,23.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3212B").s().p("AAVAzQAFAAAEgCQAFgDADgEQADgEACgFQACgEAAgEIAAgNQAAgIgCgEQgCgEgCgDIgGgDIgFgBIgGABQgDABgCACQgDADgCAEQgBADAAAGIAAAZIgVAAIAAgZQAAgGgCgDQgBgEgDgDIgFgDIgGgBIgGABQgDABgCACQgDADgBAEQgCAEAAAIIAAANQAAAEACAFQACAEADAEQADAEAEADQAEACAGAAIAAAUQgIAAgGgCQgGgDgFgDQgFgEgEgFIgGgKIgEgLIgBgJIAAgMQAAgLABgJQACgKAFgJQAEgJAHgIQAHgIAMgGQALgGAPgDQAPgDAUAAIAAAUQgZAAgQAGQgRAFgJAKIAGgBIAIAAIAHADIAHAFIAFAIQADgFAEgDIAHgFIAHgDIAHAAQAHAAAHACQAHACAFAFQAGAFADAJQADAHAAAMIAAANIgBAJIgFAKIgGAKQgEAFgFAEQgFAEgGACQgGACgHAAg");
	this.shape_7.setTransform(100.3,23.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3212B").s().p("AgIBHQgIgDgFgFQgFgFgDgIQgDgHAAgJIAAgIQAAgHADgFQACgFAGgFIAQAIQgDADgBAEIgCAHIAAAIQAAAFACADQABAEADADQACACADACQAEABAFAAQAFAAADgCQADgBACgDQACgDABgEIABgJIAAhMQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAAAgBgBIgHgBIgGABQAAABgBAAQAAAAAAABQgBAAAAAAQAAABAAAAIAAAgIgSAAIAAggQAAAAAAgBQAAAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBAAAAAAIgCABIgCACIgFAEQgCACgEAAIgEgBIgFgCIgEgDIgDgEIAAgYIAFAEIAFAFIAEADIADABIAAAAIACgCIAFgDQACgCAEAAQAFAAAFADQAEACACAEQADgEAFgCQAEgDAFAAQAFAAAFACIAKAFQAFADADAEQACAEAAAFIAABMQAAALgCAHQgDAIgFAGQgFAFgHACQgHADgJAAQgJAAgIgDg");
	this.shape_8.setTransform(87,23.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3212B").s().p("AgMBFQgHgBgFgEQgGgDgFgEQgFgFgDgGQgFgFgCgHQgBgHAAgHIAAgZQAAgKADgJQADgJAGgHQAGgHAHgFQAHgEAJgCIgEgHIgCgFIAfAAIgEALQAHACAIAFQAIAFAFAHQAGAHAEAJQAEAJAAAKIAAAZQgBAHgCAHQgCAHgDAFIgJALQgFAEgGADQgGAEgGABQgGACgHAAQgGAAgGgCgAgQgjQgFADgDAEQgCAEgDAGQgBAGAAAHIAAAZQAAAGACAFQACAGAEAEQAFAFAFACQAGADAGAAQAHAAAFgCQAGgDAEgEQAEgEADgGQACgGAAgGIAAgZQAAgPgGgIQgGgJgKgCIAAAOIABAOIABAOIAAANIgWAAIADg3QgEABgEADg");
	this.shape_9.setTransform(75.8,23.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3212B").s().p("AgPBFQgHgDgGgEQgFgFgDgHQgDgGAAgIIAAgEQAAgEACgDQACgEAEgEIARAIQgEAGAAAGQAAAGAFAEQAEAEAJAAIAIgBIAGgCQACgCABgDQACgCAAgDIAAgnIgBgHIgDgIQgDgDgEgDQgFgCgFAAIgGAAIgDADIgCADIAAACIABAGIADAFIgOAIIgFgDIgDgFIgCgFIgBgGQAAgGACgFQACgFAEgEQAEgEAGgCQAGgCAIAAQAGAAAFADQAGACAFAFIAAgRIgSAAIAAgTIAmAAIAABrQAAAIgDAGQgDAHgFAEQgGAEgHADQgHACgJAAQgIAAgHgCg");
	this.shape_10.setTransform(64.5,23.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3212B").s().p("AgPBEQgIgCgFgFQgFgFgDgHQgDgHAAgHIAAgKIACgIIADgGIAGgHIAQAHIgDAFIgCAFIgBAGIAAAIQAAAIAFAEQAEAEAJAAQAJAAAFgEQAFgEAAgHIAAhJQAAgGgEgDQgFgEgHAAQgGAAgFADQgFAEAAAGIABAFIABAGIgRAGIgCgEIgCgDIgBgEIAAgGQAAgHACgGQADgHAFgEQAEgEAHgDQAHgCAHAAQAIAAAHACQAHACAFAEQAFAFADAGQADAGAAAIIAABJQAAAKgDAGQgDAHgGAEQgFAEgIACQgHACgIAAQgIAAgHgDg");
	this.shape_11.setTransform(54.5,23.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D3212B").s().p("AgDBGIgMgCQgHgBgFgDQgFgDgEgEQgEgFgBgGQgCgGAAgJIAVAEQAAAFABACIAFAFIAFADIAHABIAHAAIAIAAIALgBIAKgCQAEgCADgEQACgDAAgFIAAgEIgBgGIgBgGIgEgFQgCgBgDAAIgIAAIAAgTIAIAAQAEAAACgCIAEgEIACgGIABgHIAAgEIgBgJIgCgGQgBgDgEgBQgDgBgFAAQgEAAgCACQgDABgCADQgCADgBAEIAAAJIAAAJQAAAJgCAIQgDAHgEAFQgEAGgIADQgHADgKAAQgKAAgGgDQgIgDgFgFQgFgGgCgGQgDgIAAgKIAAgIQAAgLADgIQADgIAFgFQAFgGAHgDQAHgCAJAAIAHAAIAIADIAGAEIAGAGIAFgHIAHgEIAHgCIAGAAQAKAAAHACQAHADAFAFQAEAFACAIQADAHAAAJIAAAEIAAAIIgDAIQgBAEgDADQgDAEgFABQAEADADADQADADAAAEIACAHIAAAIIAAAFQAAAJgDAHQgEAHgHAFQgHAEgKADQgKACgKAAgAgggxQgDABgDACQgCADgBAFIgBALIAAAIIABALQABAEACADQADABADABIAHABIAIgBQADgBACgCQACgDABgEIABgKIAAgIIgBgLQgBgEgCgDIgGgEIgHgBg");
	this.shape_12.setTransform(42.3,23.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D3212B").s().p("AgPBEQgIgCgFgFQgFgFgDgHQgDgHAAgHIAAgKIACgIIADgGIAGgHIAQAHIgDAFIgCAFIgBAGIAAAIQAAAIAFAEQAEAEAJAAQAJAAAFgEQAFgEAAgHIAAhJQAAgGgEgDQgFgEgHAAQgGAAgFADQgFAEAAAGIABAFIABAGIgRAGIgCgEIgCgDIgBgEIAAgGQAAgHACgGQADgHAFgEQAEgEAHgDQAHgCAHAAQAIAAAHACQAHACAFAEQAFAFADAGQADAGAAAIIAABJQAAAKgDAGQgDAHgGAEQgFAEgIACQgHACgIAAQgIAAgHgDg");
	this.shape_13.setTransform(29.8,23.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#D3212B").s().p("AAaBIQgGgCgEgEQgEgFgDgIQgCgHAAgKQAAgIACgGQACgHAEgFQAEgFAGgDQAGgDAIAAQAHAAAHADQAGACAEAEQAFAGADAHQACAHAAAJQAAAKgCAGQgDAHgFAGQgEAEgGACQgHADgGAAQgIAAgGgDgAAhAOIgFAEIgDAIQgCAEAAAIQAAAGACAFIADAHQADADADAAQACACAEAAQADAAADgCIAGgEIADgHIABgMQAAgGgBgFQgBgEgCgDQgDgDgDgBQgDgBgDAAIgHABgAgyBLIBUiVIARAAIhUCVgAg1AAQgGgCgEgFQgEgFgDgHQgCgIAAgKQAAgHACgHQACgHAEgFQAEgFAGgDQAGgDAIAAQAHAAAHACQAGADAFAFQAEAFADAHQACAHAAAJQAAAJgDAIQgCAHgFAFQgEAEgGADQgGACgHAAQgHAAgHgCgAgtg6QgDABgCACQgDADgBAFQgBAFAAAHIABALIADAHIAGAEIAGABIAHgBQADgBACgEIADgHIABgMIgBgKIgDgHQgDgDgDgBIgGgBIgGABg");
	this.shape_14.setTransform(145.2,-5.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D3212B").s().p("AgRBDQgIgDgHgFQgGgHgDgHQgDgGAAgIQAAgVASgLQgHgGgDgIQgEgHAAgIQAAgKADgHQADgHAGgFQAGgFAHgCQAHgDAIAAQAJAAAHADQAHACAGAFQAGAGADAGQADAIAAAJQAAAJgDAHQgEAHgHAGQASALAAAVQAAAIgDAGQgDAHgHAHQgGAFgIADQgIADgKAAQgJAAgIgDgAgLAKQgGABgDADQgDACgCAFQgCADAAAHQAAALAIAFQADACAFACIALABIAMgBQAFgCADgCQAEgDACgEQACgFAAgEQAAgGgCgEQgBgEgEgDQgDgDgFgBQgGgCgHAAQgGAAgFACgAgJgyIgHAFQgDADgCADQgBAEAAAFQAAAFABAEQABADADAEIAHAEQAFACAFAAQALAAAGgGQADgDACgEQABgEAAgFQAAgJgFgGQgHgHgLABQgFAAgEABg");
	this.shape_15.setTransform(132.5,-5.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#D3212B").s().p("AACBGIAAhnIgUAAIAAgSIAMgBQAEgBACgCIABgEIABgKIARAAIAACLg");
	this.shape_16.setTransform(124.3,-5.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#D3212B").s().p("AAGAzQAGAAAEgKQADgKAAgRIAAgfIgBgOQgBgHgCgEQgCgEgDgCQgEgDgFAAQgFAAgEADQgEACgCAEIgDALIAAAOIAAAfIAAAPIABAMIADAHQACADADAAIAAAUQgIgBgFgDQgFgDgDgFQgDgEgCgGIgDgLIgCgMIgBgMIAAgeIABgNQABgHACgGQABgGADgFQADgFAFgEQAEgEAGgCQAHgDAHAAQANAAAHAFQAJAEAEAHQAEAIACAJQABAKAAALIAAAeIgBATQgBAJgEAJQgDAIgGAFQgHAGgKADg");
	this.shape_17.setTransform(112.4,-5.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#D3212B").s().p("AgKBDQgIgEgFgGQgGgGgDgHQgEgIAAgIIAAgMQAAgJADgHQADgHAGgGQAGgGAHgEQAIgDAIAAIAFAAIAFABIAGACIAGADIAAgPIAAgIIgCgFQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAAAgBAAIgGgBQgEAAgDACQgDADAAAEIAAAHIgOAAIAAgHQAAAAgBgBQAAgBAAAAQAAAAAAgBQgBAAAAgBIgDgDIgEgCIgEAAIgCAAIgCACIgBABIAAACIAAAQIgUAAIAAgQQAAgFACgEQACgFADgDQADgDAEgCQAFgCAFAAIAHABIAFACIAFAEIAEAFIAEgFIADgDIAGgDIAGgBQAIAAAFACQAGACADAEQAEAFACAGQABAHAAAIIAABBQAAAKgDAHQgDAIgHAGQgFAFgIADQgHADgJAAQgHAAgIgEgAgCgEQgEACgCADQgDADgCAEQgBAFAAAFIAAAJIABAJQACAFADADQACADAEACQADACAEAAQAFAAADgCQAEgBADgDQADgDABgEQABgEAAgFIAAgOQAAgMgEgEQgFgFgLAAQgEAAgDACg");
	this.shape_18.setTransform(101.4,-5.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#D3212B").s().p("AAVAzQAFAAAEgCQAFgDADgEQADgEACgFQACgEAAgEIAAgNQAAgIgCgEQgCgEgCgDIgGgDIgFgBIgGABQgDABgCACQgDADgCAEQgBADAAAGIAAAZIgVAAIAAgZQAAgGgCgDQgBgEgDgDIgFgDIgGgBIgGABQgDABgCACQgDADgBAEQgCAEAAAIIAAANQAAAEACAFQACAEADAEQADAEAEADQAEACAGAAIAAAUQgIAAgGgCQgGgDgFgDQgFgEgEgFIgGgKIgEgLIgBgJIAAgMQAAgLABgJQACgKAFgJQAEgJAHgIQAHgIAMgGQALgGAPgDQAPgDAUAAIAAAUQgZAAgQAGQgRAFgJAKIAGgBIAIAAIAHADIAHAFIAFAIQADgFAEgDIAHgFIAHgDIAHAAQAHAAAHACQAHACAFAFQAGAFADAJQADAHAAAMIAAANIgBAJIgFAKIgGAKQgEAFgFAEQgFAEgGACQgGACgHAAg");
	this.shape_19.setTransform(88.7,-5.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#D3212B").s().p("AgQBEQgIgEgFgFQgFgGgDgIQgCgHAAgJIAAgGIABgGIACgHIAEgHIAFgHIAQAHIgFAMIgCAIIAAAHIABAJQABAEADADQACACADACQAEABAEAAQAFAAADgBQAEgBACgDIAEgIIABgLIAAgJQAAgGgCgFIgEgIIgGgHIgGgIIgHgIIgGgJQgDgEgCgGQgCgFAAgHIAAgPIAUAAIAAAPIABAIIAEAGIAFAHIAGAHIAJAJIAHAKIAFALQACAHAAAIIAAAKQAAArgoAAQgJAAgHgDg");
	this.shape_20.setTransform(76.3,-5.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#D3212B").s().p("AAaBGQgSAAgOgDQgPgDgMgGQgMgGgJgIQgKgHgHgKQgFgJgEgKQgEgJABgKIAAgNQAAgJACgJQACgIAEgGQAEgGAHgDQAHgDAKAAIAHABIAHACIAGAFIAFAHQAEgIAGgEQAFgEAHAAQAHAAAHAEQAFAEAFAIQAFgIAGgEQAHgDAGAAQAIAAAHACQAGADAFAFQAFAFADAIQACAIAAAKIAAAMIgBAJIgDAJIgFALIgGAKIgHAIIgJAHIgPgOQAGgEAEgFQAFgGADgGQADgEACgGQACgFAAgFIAAgKIgBgKIgDgHQgCgDgDgBQgCgBgDAAQgFAAgCABIgGAEIgBAHIgBAHIAAAaIgVAAIAAgaIgBgHIgCgHIgDgEQgDgCgEAAQgDAAgCACIgEAEIgCAGIgBAIIAAAaIgVAAIAAgaIAAgHIgCgHQgCgCgCgCQgEgBgEAAQgEAAgDACQgDACgCADQgBADgBAFIgBAKIAAALQAAAKADAHQAEAIAFAHQAGAGAJAGQAIAFAJAEQAKAEAKACQAMACAMAAIARAAIAAAVg");
	this.shape_21.setTransform(62.2,-6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SesxiText3, new cjs.Rectangle(22.7,-16.8,160.7,55.8), null);


(lib.SesxiText2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBEQAIABAFgNQAEgNAAgYIAAgrIgBgSQgBgJgDgGQgDgGgEgDQgFgDgHAAQgHAAgFADQgGAEgCAFQgDAGgBAJIgBATIAAAqIAAAVIACAQQACAFACAEQADADADAAIAAAcQgJgBgHgEQgHgFgFgGQgEgGgDgHIgEgQIgCgQIgBgQIAAgpIABgSQABgIADgJQACgIAEgHQAEgHAGgGQAGgFAIgDQAJgDAKAAQARAAALAGQALAGAFAKQAGAJADAOQACANAAAOIgBAqQAAAMgCANQgBANgFALQgFAKgIAIQgJAJgOADg");
	this.shape.setTransform(163.4,26.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgWBbQgJgEgIgHQgGgIgEgJQgEgJgBgJIAAiMIAeAAIAAA+QAHgFAGgCIALgBQAOAAAKAEQALAEAGAHQAHAHADAKQADAJABANIAAAgQgBAJgDAJQgDAJgHAIQgGAHgLAEQgKAFgOAAQgLAAgLgFgAgKgNQgEACgEAEQgDADgBAFQgCAGAAAIIAAAaQAAANAGAIQAHAHALAAQAMAAAHgHQAGgIAAgNIAAgZQABgPgHgHQgGgIgNAAQgFAAgFABg");
	this.shape_1.setTransform(149.9,26);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgVBcQgKgDgHgIQgIgHgDgMQgEgLgBgQIAAiCIAeAAIAACCQAAAJACAHQACAGADAEQAEAEAEACQAFACAEAAQAGAAAFgCQAFgDADgEQADgFACgGQABgGAAgIIAAgHQAAgIgDgIQgDgHgFgGIgEgHIgFgGIgDgHIgBgIIABgGIABgGIACgHIAGgIIAeAJIgCACIgCADIgDACIgBACIgDAFIgBAEQAAAEADAFIAIAJQAHAIADAIQAEAJABAMIAAAKQgBANgEALQgEALgGAIQgIAIgKAFQgKAEgMAAQgLAAgKgEg");
	this.shape_2.setTransform(136.4,26);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgVBcQgKgDgHgHQgHgHgFgJQgDgJAAgKIAAgNIACgLIAFgJIAIgIIAVAIIgEAHIgCAHIgBAJIgBAKQAAALAHAFQAGAGAMAAQALAAAHgFQAHgGAAgJIAAhjQAAgIgGgFQgFgFgKAAQgJAAgGAFQgGAFAAAIIAAAHIACAIIgXAIIgEgFIgCgFIgBgFIAAgIQgBgKAEgIQADgJAHgGQAGgGAJgDQAKgDAJAAQALAAAKADQAKADAGAFQAHAGAFAJQAEAIAAALIAABjQgBANgEAJQgFAIgHAGQgIAGgKACQgKADgKAAQgLAAgKgEg");
	this.shape_3.setTransform(122.4,26);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBcQgKgDgHgIQgHgHgFgMQgDgLAAgQIAAiCIAdAAIAACCQAAAJABAHQACAGAEAEQAEAEAEACQAFACAEAAQAGAAAFgCQAFgDADgEQAEgFABgGQACgGAAgIIAAgHQAAgIgEgIQgCgHgGgGIgEgHIgFgGIgDgHIgBgIIAAgGIACgGIACgHIAFgIIAfAJIgDACIgBADIgCACIgBACIgEAFIgBAEQAAAEADAFIAIAJQAGAIAEAIQAFAJAAAMIAAAKQAAANgFALQgDALgIAIQgHAIgKAFQgKAEgMAAQgLAAgKgEg");
	this.shape_4.setTransform(109.2,26);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBcQgKgDgHgIQgHgHgEgMQgFgLAAgQIAAiCIAeAAIAACCQAAAJACAHQACAGADAEQADAEAFACQAEACAFAAQAGAAAFgCQAFgDADgEQADgFACgGQACgGgBgIIAAgHQAAgIgCgIQgDgHgFgGIgGgHIgEgGIgDgHIgBgIIAAgGIACgGIADgHIAEgIIAfAJIgCACIgDADIgCACIgBACIgDAFIgBAEQAAAEAEAFIAHAJQAHAIAEAIQADAJAAAMIAAAKQAAANgDALQgEALgHAIQgIAIgKAFQgKAEgMAAQgLAAgKgEg");
	this.shape_5.setTransform(90.7,26);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgVBcQgKgDgHgHQgIgHgEgJQgDgJAAgKIAAgNIACgLIAFgJIAHgIIAWAIIgEAHIgCAHIgBAJIAAAKQgBALAHAFQAGAGAMAAQALAAAIgFQAGgGAAgJIAAhjQAAgIgFgFQgGgFgKAAQgJAAgGAFQgHAFABAIIAAAHIACAIIgXAIIgEgFIgCgFIgBgFIAAgIQAAgKADgIQAEgJAGgGQAGgGAKgDQAIgDAKAAQAMAAAJADQAJADAHAFQAIAGADAJQAFAIAAALIAABjQgBANgEAJQgFAIgHAGQgHAGgLACQgKADgKAAQgLAAgKgEg");
	this.shape_6.setTransform(76.7,26);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgVBeQgKgEgHgHQgIgHgDgKQgEgKAAgNIAAhgQAAgKADgHQACgIAFgEQAFgFAGgCQAGgDAHAAIAMACIAJACIAAAAIAIACIAIAAQAGAAAHgCIAUgJIAAAaIgKAFIgJAEIgIACIgIAAIgJAAIgIgCIgHgBIgHgCQgGAAgCAEQgDAEAAAFIAAAWQAHgFAHgDQAHgCAFAAQANABAKAEQALAFAGAHQAIAIADAKQAEAIAAALIAAAdQAAANgEAKQgDAKgIAHQgGAHgLAEQgKAEgMAAQgLAAgLgEgAgGgMQgFABgDACQgFADgDAGQgCAEAAALIAAAcIACALQABAFADAEQADADAFACQAFADAFAAQANAAAGgHQAHgIgBgPIAAgaQAAgGgBgGQgCgEgDgEQgDgDgEgDQgFgCgGAAg");
	this.shape_7.setTransform(63.6,25.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgPBdQgKgEgIgHQgHgHgFgKQgEgLAAgOIAAgSQAAgNADgIQAEgIAGgGQgOgEgGgKQgGgKAAgPIAAgFQAAgJADgHQADgHAHgFQAGgFAIgDQAIgCALAAQAMAAAIADQAJACAFAFQAGAFACAHQADAHAAAJIAAAGQAAAEgCAGIgGALQAKACAIAFQAIAFAGAHQAFAHADAIQACAIAAAJIAAATQAAAOgEALQgEAKgIAHQgIAHgKAEQgKADgMAAQgLAAgLgDgAgDgDQgFABgEADQgEADgCAGQgCAFAAAIIAAAOQAAAJACAFQACAGAEAEQAEAEAFACQAEACAGAAQAFAAAFgCQAFgCAEgEQAEgEACgGQACgHAAgIIAAgLQAAgIgCgGQgCgGgEgDQgEgDgFgCQgFgCgFAAQgGAAgEACgAgdhBQgFACAAAGIAAAJQAAAGAEAEQAFAEAJAAIAGgBIAGgDIAEgEQABgCAAgEIAAgJQAAgDgBgCIgEgDIgGgCIgGgBQgJAAgEADg");
	this.shape_8.setTransform(49.2,26);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAIBEQAIABAFgNQAEgNAAgYIAAgrIgBgSQgBgJgDgGQgDgGgEgDQgFgDgHAAQgHAAgFADQgGAEgCAFQgDAGgBAJIgBATIAAAqIAAAVIACAQQACAFACAEQADADADAAIAAAcQgJgBgHgEQgHgFgFgGQgEgGgDgHIgEgQIgCgQIgBgQIAAgpIABgSQABgIADgJQACgIAEgHQAEgHAGgGQAGgFAIgDQAJgDAKAAQARAAALAGQALAGAFAKQAGAJADAOQACANAAAOIgBAqQAAAMgCANQgBANgFALQgFAKgIAIQgJAJgOADg");
	this.shape_9.setTransform(34.7,26.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgXBbQgKgFgHgIQgGgHgEgKQgDgKAAgJIAAgaQAAgIACgIQACgJAFgHQAGgIAJgFQAIgGAMgCIACgFIABgEIAAgEIAAgDIgCgDIgHgDIgIgEIgHgHQgEgEgCgGQgCgGAAgJIAdAAIABAHIADAGIAFADIADADIAHAEIAHAEIAEAGQACADAAAFIgBAKIgDAIQAJAEAHAGQAGAGAEAHQAEAHADAHQACAIAAAHIAAAaIgBAMIgFAMQgDAGgEAFQgFAGgGAEQgHAEgGADQgJACgIAAQgMAAgLgFgAgKgKQgGADgCAEQgDADgCAGIgCAMIAAAVIACAMQACAFADAEQACAEAGADQAEACAGAAQAHAAAEgDQAGgCACgEQADgEACgFIABgKIAAgYIgBgKQgCgGgDgDQgDgEgFgDQgFgDgGAAQgGAAgEACg");
	this.shape_10.setTransform(21.2,26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SesxiText2, new cjs.Rectangle(12.2,12.1,160.6,34.3), null);


(lib.SesxiText1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B52532").s().p("AAHA6QAHAAAEgLQADgLAAgUIAAgkIgBgRQgBgGgCgFQgCgFgEgDQgFgCgFAAQgHAAgDACQgFADgCAFQgDAFgBAHIgBARIAAAjIAAARIADAOQAAAFADADQACADADAAIAAAYQgIgBgGgEQgGgDgEgGQgEgFgCgGIgDgOIgCgNIAAgOIAAgjIAAgPIADgOIAFgNQADgHAGgEQAFgFAHgCQAHgCAJgBQAPAAAIAGQAKAEAFAJQAFAJACAKQABAMAAAMIAAAkIgBAVQgCAKgEAKQgEAJgHAHQgIAGgLADg");
	this.shape.setTransform(118.7,24.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B52532").s().p("AgSBOQgJgEgGgGQgGgGgDgIQgDgIAAgIIAAh3IAYAAIAAA1QAHgEAFgBIAJgCQAMAAAJAEQAIADAGAGQAGAGADAJQACAHAAALIAAAbQAAAIgCAIQgDAIgGAGQgGAGgIAEQgJAEgMAAQgKAAgIgEgAgIgLQgEACgDADQgDADgBAEQgCAFAAAHIAAAWQAAALAGAHQAGAGAJAAQAKAAAGgGQAGgHAAgLIAAgVQAAgNgGgGQgGgHgKAAQgEAAgEABg");
	this.shape_1.setTransform(107.1,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#B52532").s().p("AgSBPQgIgDgGgHQgGgGgEgKQgDgKAAgNIAAhvIAYAAIAABvQAAAIACAFQACAGADADQACAEAEABQAEACAEAAQAFAAAEgCQAEgCADgEIAEgJQACgGAAgGIAAgGQAAgHgDgHQgCgGgFgEIgEgGIgEgGIgCgGIgBgGIAAgFIABgGIADgGIAEgGIAaAHIgCACIgCACIgCACIgBABIgCAFIgBAEQAAADADAEIAGAIIAAAAQAGAHADAGQADAIAAAKIAAAJQAAALgDAJQgEAKgGAGQgGAHgIAEQgJAEgKAAQgJAAgJgDg");
	this.shape_2.setTransform(95.6,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B52532").s().p("AgSBPQgIgEgGgFQgHgGgDgHQgEgIAAgJIABgLIADgJIADgIIAHgHIASAHIgEAGIgCAGIgBAHIAAAJQAAAJAGAFQAFAFAKAAQAKAAAGgFQAFgEABgJIAAhTQgBgHgEgEQgFgFgIAAQgIAAgFAEQgGAFABAHIAAAFIABAHIgTAHIgDgEIgCgEIgBgFIgBgGQAAgJADgHQADgHAGgFQAFgFAIgDQAIgDAJAAQAJAAAIADQAIACAFAFQAHAFADAHQAEAHAAAKIAABUQAAALgFAHQgDAIgHAEQgGAFgJADQgIACgJAAQgJAAgJgDg");
	this.shape_3.setTransform(83.7,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B52532").s().p("AgSBPQgIgDgGgHQgGgGgEgKQgDgKAAgNIAAhvIAYAAIAABvQAAAIACAFQACAGADADQACAEAEABQAEACAEAAQAFAAAEgCQAEgCADgEIAEgJQACgGAAgGIAAgGQAAgHgDgHQgCgGgFgEIgEgGIgEgGIgCgGIgBgGIAAgFIABgGIADgGIAEgGIAaAHIgCACIgCACIgCACIgBABIgCAFIgBAEQAAADADAEIAGAIIAAAAQAGAHADAGQADAIAAAKIAAAJQAAALgDAJQgEAKgGAGQgGAHgIAEQgJAEgKAAQgJAAgJgDg");
	this.shape_4.setTransform(72.5,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#B52532").s().p("AgSBPQgIgDgGgHQgGgGgEgKQgDgKAAgNIAAhvIAYAAIAABvQAAAIACAFQACAGADADQACAEAEABQAEACAEAAQAFAAAEgCQAEgCADgEIAEgJQACgGAAgGIAAgGQAAgHgDgHQgCgGgFgEIgEgGIgEgGIgCgGIgBgGIAAgFIABgGIADgGIAEgGIAaAHIgCACIgCACIgCACIgBABIgCAFIgBAEQAAADADAEIAGAIIAAAAQAGAHADAGQADAIAAAKIAAAJQAAALgDAJQgEAKgGAGQgGAHgIAEQgJAEgKAAQgJAAgJgDg");
	this.shape_5.setTransform(56.8,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B52532").s().p("AgRBPQgJgEgGgFQgHgGgDgHQgEgIABgJIABgLIABgJIAEgIIAGgHIATAHIgDAGIgCAGIgCAHIAAAJQABAJAFAFQAFAFAKAAQAKAAAGgFQAGgEgBgJIAAhTQABgHgFgEQgFgFgJAAQgHAAgFAEQgFAFgBAHIAAAFIACAHIgTAHIgDgEIgCgEIgBgFIgBgGQABgJADgHQADgHAFgFQAGgFAHgDQAIgDAIAAQAKAAAIADQAIACAGAFQAGAFADAHQADAHAAAKIAABUQAAALgDAHQgFAIgGAEQgGAFgIADQgJACgJAAQgJAAgIgDg");
	this.shape_6.setTransform(44.9,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#B52532").s().p("AgSBQQgIgDgGgGQgGgGgEgJQgDgJAAgKIAAhSQAAgJACgGQACgGAEgEQAEgEAGgCQAFgCAGAAIAKABIAHACIAIACIAGAAQAFAAAHgCIAQgHIAAAWIgIAEIgHADIgHACIgHAAIgIAAIgHgCIgGgBIgGgBQgFAAgCADQgCADAAAEIAAATQAGgEAGgCIAKgBQALAAAJAEQAIADAGAHQAGAGADAJQADAHAAAJIAAAZQAAAKgDAJQgDAJgGAGQgFAGgJADQgJADgLAAQgJAAgJgDgAgFgKQgEAAgDADQgEACgCAFQgDAEAAAJIAAAYIACAJQABAEADADQACAEAEACQAEABAFAAQALAAAFgGQAGgGAAgNIAAgWQAAgFgCgFIgEgHIgGgFQgFgCgFAAg");
	this.shape_7.setTransform(33.7,24.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B52532").s().p("AgMBPQgJgDgHgGQgGgGgEgJQgDgJAAgMIAAgQQAAgKADgHQACgHAGgFQgMgDgFgJQgGgIAAgNIAAgFQAAgHADgGQADgGAFgEQAFgFAIgCQAGgCAKAAQAKAAAHADQAHACAEAEQAFAEADAGQABAGABAHIAAAFIgCAJIgFAJQAJACAHAEQAGAFAFAGQAEAGADAGQACAHAAAIIAAAQQAAAMgDAJQgEAJgHAGQgHAGgIADQgJADgKAAQgKAAgIgDgAgCgDQgEACgEACQgDADgCAEQgCAFAAAHIAAAMQAAAHACAFQACAFADADQAEAEAEABIAIACQAEAAAFgCQAEgCAEgDQADgEABgFQACgFAAgHIAAgJQAAgHgCgFQgBgFgDgEIgIgEQgFgBgEAAIgIABgAgZg3QgEACAAAFIAAAIQAAAEAEAEQAEADAIAAIAFgBIAFgCIADgDQABgCAAgDIAAgIQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIgDgDIgGgCIgEgBQgIAAgEADg");
	this.shape_8.setTransform(21.4,24.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#B52532").s().p("AAHA6QAHAAADgLQAEgLABgUIAAgkIgCgRQgBgGgCgFQgDgFgDgDQgEgCgHAAQgFAAgFACQgEADgDAFQgCAFgBAHIgBARIAAAjIABARIABAOQACAFACADQACADADAAIAAAYQgIgBgGgEQgGgDgEgGQgEgFgCgGIgEgOIgBgNIgBgOIAAgjIABgPIADgOIAFgNQAEgHAFgEQAFgFAHgCQAHgCAJgBQAOAAAKAGQAIAEAFAJQAGAJABAKQACAMAAAMIAAAkIgCAVQgBAKgEAKQgEAJgIAHQgGAGgNADg");
	this.shape_9.setTransform(9.2,24.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#B52532").s().p("AgTBOQgJgFgGgGQgFgHgEgIQgCgIAAgIIAAgWQAAgHACgHQACgHAFgHQAEgGAHgFQAIgEAKgDIABgEIABgDIAAgDIAAgDIgCgCIgFgDIgHgEIgGgFQgEgEgCgFQgCgFAAgIIAaAAIAAAHIADAEIAEADIADACIAGADIAFAEIAEAFQABADAAAEIAAAJIgCAHQAHADAFAFQAGAFAEAGQAEAGACAGQABAHABAGIAAAWIgCAKIgEAKQgCAFgEAFIgJAIQgGAEgGACQgHACgHAAQgLAAgIgEgAgJgIQgEACgDAEQgCACgBAFIgCAKIAAATIACAJQABAFACADQADAEAFACQAEACAEAAQAGAAAEgCQAEgDADgDQACgEABgEIABgIIAAgUIgBgJIgDgIIgHgGQgEgCgGAAQgEAAgFACg");
	this.shape_10.setTransform(-2.4,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.SesxiText1, new cjs.Rectangle(-10,12.6,136.8,29.2), null);


(lib.RedHalf = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC3C40").s().p("AyRJYIAAyvMAkjAAAIAASvg");
	this.shape.setTransform(182.5,60,1.56,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RedHalf, new cjs.Rectangle(0,0,365,120), null);


(lib.RedFull = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC3C40").s().p("AyRSwMAAAglfMAkjAAAMAAAAlfg");
	this.shape.setTransform(0.7,188.1,3.12,1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.RedFull, new cjs.Rectangle(-364.3,68.1,730,240), null);


(lib.Money = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3F5B2A").s().p("AgEBKIAAgYQgIAAgJgCIgRgFIAAgOQAJAFAIADQAIACAJAAIAAgkQgRgDgIgGQgJgHAAgMQAAgNAJgIQAJgIAQAAIAAgUIAHAAIAAATIAPACIANADIAAAOIgNgFQgHgCgIAAIAAAiQATADAIAGQAJAIAAAMQAAAOgJAHQgJAIgSABIAAAYgAADAnQALgCAFgEQAFgEAAgIQAAgGgFgFQgFgEgLgCgAgSgmQgFAEAAAIQAAAGAFAEQAEAEAKABIAAggQgJABgFAEg");
	this.shape.setTransform(69.4,143.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#3F5B2A").ss(1.5).p("ACaAAQAABAgtAtQgtAthAAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/g");
	this.shape_1.setTransform(69.4,143.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#94C96F").s().p("AhsBtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_2.setTransform(69.4,143.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7F701B").s().p("AgsBFIAAgOIARAAQgagSAAgfQAAgZAPgRQAJgKAOgDIAAgTIAMAAIAAAQIAEgBIAGAAIAAgPIAMAAIAAARQANAEAIAJQAMANACAZIgPAAQAAgNgJgOQgEgFgHgEIAAAlIgMAAIAAgoIgGAAIgEAAIAAApIgMgBIAAgkQgHADgEAGQgKANAAATQAAAXAMAOQALAMATAAIAmAAIAAAOg");
	this.shape_3.setTransform(22.5,141.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#7F701B").ss(1.5).p("ACaAAQAABAgtAtQgtAthAAAQg/AAgtgtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/g");
	this.shape_4.setTransform(21.9,143.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FEE94E").s().p("AhsBtQgtgtAAhAQAAg/AtgtQAtgtA/AAQBAAAAtAtQAtAtAAA/QAABAgtAtQgtAthAAAQg/AAgtgtg");
	this.shape_5.setTransform(21.9,143.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Money, new cjs.Rectangle(5.5,126.8,80.3,32.8), null);


(lib.MBCText = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAIBFQAJAAAEgNQAEgNAAgYIAAgrIAAgTQgBgIgEgGQgDgGgEgDQgFgDgHAAQgHAAgFADQgFADgDAGQgDAGgCAJIgBATIAAAqIABAVIACAQQABAGADADQACAEAFAAIAAAcQgKgCgHgEQgHgEgFgGQgEgGgDgIIgFgPIgCgRIAAgQIAAgqIABgRQABgJADgIQACgIADgHQAFgIAFgFQAHgFAIgDQAJgDAKAAQARAAALAGQALAFAGAKQAGAKACAOQACANAAAOIAAAqIgCAaQgCAMgFALQgEALgJAIQgIAIgPADg");
	this.shape.setTransform(80.3,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgVBdQgKgDgHgJQgHgHgFgMQgEgLAAgQIAAiCIAdAAIAACCQAAAKACAGQADAHADAEQADAEAFACQAFABAEABQAGgBAFgCQAFgCADgFQADgEACgHQABgGABgIIAAgHQAAgIgDgHQgDgIgFgGIgGgHIgEgGIgDgHIgCgIIABgGIABgGIAEgHIAEgIIAfAJIgDACIgCADIgBACIgBACIgEAEIgBAFQAAAEAEAFIAIAJIgBAAQAHAIAEAIQAEAJAAAMIAAALQAAANgEALQgFALgHAHQgHAJgKAFQgKADgMAAQgLAAgKgDg");
	this.shape_1.setTransform(66.7,12.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAIBFQAIAAAFgNQAFgNgBgYIAAgrIgBgTQgBgIgCgGQgEgGgEgDQgFgDgHAAQgHAAgFADQgGADgDAGQgCAGgBAJIgBATIAAAqIAAAVIACAQQACAGACADQADAEADAAIAAAcQgKgCgGgEQgHgEgFgGQgFgGgDgIIgDgPIgDgRIAAgQIAAgqIABgRQABgJADgIQABgIAEgHQAFgIAGgFQAGgFAIgDQAJgDAKAAQARAAALAGQALAFAGAKQAGAKACAOQACANAAAOIAAAqIgCAaQgCAMgEALQgGALgIAIQgIAIgOADg");
	this.shape_2.setTransform(47.6,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgXBbQgKgEgHgIQgHgIgDgKQgEgJAAgKIAAgaQAAgIADgIQACgJAFgHQAGgIAIgFQAJgGAMgCIACgGIABgDIABgEIAAgEIgDgCIgGgDIgJgFIgIgHQgDgDgCgHQgDgGAAgIIAeAAIABAHIADAFIAEAEIAEADIAHADIAHAFIAEAFQACAEAAAFIgBAKIgDAIQAJAEAHAGQAGAGAFAHQAEAIACAGQADAIAAAHIAAAaIgCAMIgEANIgIALQgFAGgGADQgGAFgHADQgIACgJgBQgNABgKgGgAgLgKQgEADgEAFQgDACgBAGIgBAMIAAAWIABALQACAGADADQADAEAFADQAEACAGABQAHgBAFgCQAFgCADgFQADgEABgFIABgKIAAgYIgBgKQgCgFgDgEQgDgEgFgDQgFgDgGAAQgGAAgFACg");
	this.shape_3.setTransform(34,12.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgWBdQgKgFgHgIQgIgHgDgLQgEgKAAgMIAAgZQAAgKAEgJQADgLAIgHQAHgJAKgFQAKgGANABIANACQAGABAHAEIAAgUQAAgEgDgCIgFgFIgIgCIgJgBQgKAAgFADQgGACAAAFIAAAKIgdAAIAAgKQAAgIAEgHQAEgGAIgFQAHgGAJgCQAJgDAJAAQAKAAAKADQAKADAHAFQAHAGAFAHQAEAHAAAKIAABgQAAANgEAKQgEAKgHAHQgHAHgKAEQgKADgMAAQgNAAgKgDgAgKgLQgFACgDAFQgDAEgCAEIgBALIAAAZQAAAHABAFQACAGAEAEQADAEAFACQAFACAFAAQAMAAAGgIQAGgIAAgOIAAgZQAAgJgBgGQgCgEgEgEQgDgDgFgCQgEgBgGAAQgFAAgFADg");
	this.shape_4.setTransform(15.3,12.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgVBdQgKgEgHgHQgIgGgEgJQgEgJAAgLIABgNIACgKIAFgJIAHgJIAWAJIgEAHIgCAGIgBAJIAAALQAAAKAGAGQAGAFAMABQAMgBAHgFQAGgGAAgJIAAhjQAAgIgFgGQgGgEgKAAQgJAAgGAEQgGAFAAAJIAAAGIACAIIgXAJIgEgFIgCgFIgBgGIgBgHQAAgKAEgIQADgJAHgGQAGgGAJgDQAKgDAKAAQALAAAJADQAKACAHAGQAHAGAEAIQAEAJAAALIAABkQAAAMgFAJQgEAJgIAGQgHAFgKADQgKACgLAAQgLAAgKgDg");
	this.shape_5.setTransform(1.6,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.MBCText, new cjs.Rectangle(-7,-1.3,96.4,33.9), null);


(lib.Logo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AD/EUInnAAQgSgBgHgIQg8hSgbgwQgOgYAiguIDek/IAAABQAJgSAPgDIAGAAQBqgDAsABQATAAAIAEQAVAKASAjIDGFPQAFAKACALQACAbgyBYQgRAegbAAIgCAAgAE4BfIAFAJIACADQg0AVgpAmQgqAmgYAyIBNAAQAUAAAIgKIAUgbQAfgyAGgbQAFgUgIgNIABAAIgIgMIi1ktQgRgggTgJQgFgDgGgBIgLAAQgogBhiADIgHAAQgNADgJAQIABAAIjOEnQgfAqAMAXQAOAXAZAkIAqA5QAHAHAQABIFeAAQAZg4AsgrQAtgrA6gXgAAZBkQgRgQAAgYQAAgZARgRQASgQAaAAIAcAAIAAAwIgXAAQgQAAAAAIQAAAEAEACQAFADAIAAIAWAAIAAAxIgcAAQgcAAgQgQgAheB0IAAhyIA6AAQASAAAIAJQAIAKAAALQAAAJgFAGQgFAHgJADQAVAFAAAVQAAANgHAKQgHAKgaAAgAgvBZIACAAQAHAAAEgCQAEgDAAgGQAAgMgOAAIgDAAgAgvAwIABAAQAJAAACgCQAEgDAAgGQAAgKgNAAIgDAAgAifB0IAAgdIgBAAIgMATIgNgTIgBAAIAAAdIgxAAIAAhyIAuAAIAQAcIAQgcIAuAAIAAByg");
	this.shape.setTransform(34.9,27.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#B6222A","#83181D"],[0,1],5.1,-9.1,-6.4,10.1).s().p("AgECHQgFgBgCgCQgEgBgCgDIgIgLIg7hTIgPgXQgGgLAGgQQAGgSAOgTIA6hSIB8BVIhnCRQgJASAMAOQAEACASAHQgZAAgEgBg");
	this.shape_1.setTransform(12.9,39.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#B6222A","#83181D"],[0,1],0,-4.2,0,4.2).s().p("AixApIA7hSID5AAIAvBTg");
	this.shape_2.setTransform(35.8,37.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#B6222A","#83181D"],[0,1],-8.2,8.6,9.8,-9.4).s().p("Ah5AuIB5ivQAKgOAVAAQAUABAKAMIA9BgIh/Cyg");
	this.shape_3.setTransform(25.5,17.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#B6222A","#83181D"],[0,1],-11.6,0,11.6,0).s().p("AhzA4IAAhvIDFAAIAbAwQAOAcgPASQgOARgjAAg");
	this.shape_4.setTransform(45.4,47.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#B6222A","#B4212A","#AC2028","#9F1D24","#8D191F","#83181D"],[0,0.424,0.639,0.804,0.949,1],0,19.7,0,-19.7).s().p("AiXivQgHgJghgJICMgDQApgFAWAzIC0ErIh8Awg");
	this.shape_5.setTransform(46.8,22);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#B6222A","#83181D"],[0,1],1,10.7,-7.8,-13.4).s().p("Ah8hqQAMgWAXADIDWC+IjuA+g");
	this.shape_6.setTransform(37.9,15.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#B6222A","#83181D"],[0,1],1.5,-0.3,-5.7,6.9).s().p("AgqBRQgmgcgHgjIAXhjICYCjg");
	this.shape_7.setTransform(16.7,44.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B6232A").s().p("AjXD9QgQAAgHgIIgqg5QgZgjgOgYQgMgWAfgqIDOkoIgBABQAJgQANgDIAHgBQBigDAoABIALABQAGAAAFADQATAKARAgIC6E2QAKANgFAXQgGAagfAyIgUAcQgIAJgUAAg");
	this.shape_8.setTransform(35,27.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(0,0,69.8,55.2), null);


(lib.BTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3212B").s().p("AgOA8QgHgDgFgFQgEgFgCgHQgDgHAAgHIAAgFIABgGIACgGIAEgHIAEgFIAPAGIgFALIgCAHIAAAFIABAIQABAEACACIAFAEIAHABIAIgBQADgBACgCQACgDABgEIABgKIAAgJQAAgFgCgEIgDgHIgGgGIgFgHIgGgHIgGgIIgEgJQgBgFAAgGIAAgNIARAAIAAANQAAAEABADIADAGIAFAGIAFAGIAIAIIAGAJIAFAKQACAFAAAHIAAAKQAAAmgkAAQgIAAgGgDg");
	this.shape.setTransform(138.4,22.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D3212B").s().p("AgOA8QgHgDgFgGQgEgFgCgGQgDgGAAgGIAAgRIACgLQABgGAEgEQADgFAGgEQAGgEAIgBIABgEIABgCIAAgCIAAgDIgCgBIgEgCIgFgDIgGgFIgDgHQgCgDAAgGIATAAIABAFIACADIADACIACACIAFADIAEADIADADQABADAAADIAAAGIgCAGQAFACAFAEIAHAJIAEAJIACAJIAAASIgBAHIgDAIIgFAIIgHAGIgJAEQgFACgGAAQgIAAgGgDgAgHgGIgFAEIgDAGIgBAIIAAAOIABAHIADAGQACADAEACQADABADAAQAFAAADgBIAFgFIADgGIABgGIAAgQIgBgHIgDgFQgCgDgEgCQgDgCgEAAQgDAAgEACg");
	this.shape_1.setTransform(129.8,22.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D3212B").s().p("AgNA9QgHgDgFgEQgEgFgDgFQgDgGAAgHIABgJIABgHIADgGIAFgFIAOAFIgCAFIgCAEIAAAGIgBAHQAAAHAEAEQAFADAHAAQAIAAAEgDQAFgEAAgGIAAhBQAAgFgEgDQgEgEgGAAQgGAAgEAEQgEADAAAGIAAAEIACAFIgPAFIgDgDIgBgDIgBgEIgBgEQAAgHADgGQACgFAEgEQAFgEAGgCQAGgCAGAAQAHAAAGACQAGABAFAEQAFAEACAGQADAFAAAHIAABBQAAAIgDAGQgDAGgFAEQgFAEgGABQgHACgHAAQgHAAgGgCg");
	this.shape_2.setTransform(120.8,22.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D3212B").s().p("AgJA8QgHgEgFgFQgFgGgDgGQgDgHAAgHIAAgLQAAgIADgGQADgHAEgFQAFgFAHgDQAHgDAIAAIAEAAIAFABIAFACIAEACIAAgNIAAgHIgBgEIgDgDIgFAAQgEAAgCACQgDACAAAEIAAAGIgNAAIAAgGIgBgEIgCgCIgEgCIgEAAIgCAAIgCABIAAACIgBABIAAAPIgRAAIAAgPQAAgEACgEQABgEADgDIAHgFQAEgBAEAAIAHABIAFACIAEADIADAEIADgEIAEgDIAEgCIAGgBQAHAAAFACQAFABADAEQADAEABAGQACAGAAAHIAAA6QAAAIgDAHQgDAHgFAFQgGAFgGACQgHADgHAAQgHAAgHgDgAgCgDIgFADIgEAHQgCAEAAAFIAAAIIACAIIAEAHQACADADACQADABAEAAIAHgBIAFgEQADgDABgEQACgDAAgEIAAgNQAAgKgFgEQgEgEgJAAQgEAAgDACg");
	this.shape_3.setTransform(111.3,22.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D3212B").s().p("AAFAtQAFAAADgJQAEgIAAgQIAAgbIgBgNIgDgJQgBgEgDgCQgEgCgEAAQgFAAgDACQgDACgDAEQgBAEgBAFIgBANIAAAbIAAAOIACAKIADAHQAAAAAAABQABAAAAAAQABABAAAAQABAAABAAIAAASQgHgBgEgDQgFgCgDgEIgFgJIgDgKIgBgLIAAgLIAAgbIAAgLIACgLQACgFADgFQACgFAEgDQAFgEAFgCQAFgCAHAAQALAAAHAEQAHAEAEAGQAEAHACAJQABAIAAAKIAAAbIgBAQQgCAJgDAHQgDAHgGAFQgFAFgJADg");
	this.shape_4.setTransform(102.1,23);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D3212B").s().p("AATAtQAEAAAEgCIAGgGQADgDACgEIACgIIAAgMQgBgGgBgEQgCgEgCgCIgEgDIgGgBIgEABIgGADIgDAGQgBADAAAFIAAAWIgTAAIAAgWIgBgIQgBgEgDgCQgCgCgDgBIgEgBIgGABQgDABgCACQgCACgCAEQgBAEAAAGIAAAMIABAIQACAEADADQACAEAEACQAFACAEAAIAAASQgHAAgFgCQgFgCgFgEQgEgDgEgEIgGgJIgDgJIgBgJIAAgLIABgRQACgJAEgIQAEgIAHgHQAGgHAKgFQAJgFAOgDQANgDATAAIAAARQgXAAgOAGQgPAFgJAIIAGgBIAGABIAHACQAEABADADIAEAHQACgEADgDIAHgEIAHgCIAFgBQAHAAAHACQAFACAFAFQAFAEADAHQADAHAAAKIAAAMIgBAIIgFAJIgFAJIgIAIQgFADgFACQgFACgGAAg");
	this.shape_5.setTransform(90.9,22.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D3212B").s().p("AgOA8QgHgDgFgFQgEgFgCgHQgDgHAAgHIAAgFIABgGIACgGIAEgHIAEgFIAPAGIgFALIgCAHIAAAFIABAIQABAEACACIAFAEIAHABIAIgBQADgBACgCQACgDABgEIABgKIAAgJQAAgFgCgEIgDgHIgGgGIgFgHIgGgHIgGgIIgEgJQgBgFAAgGIAAgNIARAAIAAANQAAAEABADIADAGIAFAGIAFAGIAIAIIAGAJIAFAKQACAFAAAHIAAAKQAAAmgkAAQgIAAgGgDg");
	this.shape_6.setTransform(79.9,22.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D3212B").s().p("AgLA9IgKgEIgIgHIgHgIIgDgJIgBgIIAAgJQAAgHADgHQACgGAFgGQAFgFAHgEQAIgDAKgBIACgGIAEgGIgBgDIgDgDIgCgDIgDgBQgGAAgCACQgDACgBADIAAAHIgSAAIAAgHQAAgGADgEQACgEAEgEQAFgDAFgCQAFgBAGAAQAGAAAFACQAFACAEADQAEAEABAFQACAGAAAGIgHAOIAJAFIAIAIQADAEACAFQACAFAAAHIAAALQAAAGgDAHQgCAHgFAFQgFAGgIADQgIAEgKAAQgGAAgFgCgAgJgEQgEACgDACIgDAHQgCAEAAAFIAAAIQAAAEACADIADAHQADAEAEACQAEACAFAAQAFAAAEgCQAFgCACgDIAEgHQACgEAAgEIAAgKIgCgHIgDgGIgGgEQgDgCgEAAIgFAAQgEAAgEABg");
	this.shape_7.setTransform(70.8,22.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D3212B").s().p("AgNA+QgHgDgFgEQgEgFgDgGQgDgHAAgJIAAg+QAAgHACgFQACgEADgDQADgDAEgCQAEgBAFgBIAHABIAGABIAGABIAFABQAEAAAFgCIANgFIAAARIgHADIgGACIgFABIgFABIgHgBIgEgBIgFgBIgFAAQgDAAgCACQgCADAAADIAAAPQAFgEAEgCIAIAAQAJAAAGACQAHADAFAFQAEAFADAHQACAFAAAIIAAASQAAAJgCAHQgDAGgEAFQgFAEgHADQgGACgJABQgHgBgGgCgAgEgHQgDAAgCABQgDACgCAEQgCADAAAHIAAASIABAIIADAFQACACAEACQADABADAAQAIABAFgGQAEgEAAgJIAAgSIgBgIIgDgFIgGgEQgDgBgEAAg");
	this.shape_8.setTransform(61.6,22.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D3212B").s().p("AgOA8QgHgDgFgFQgEgFgCgHQgDgHAAgHIAAgFIABgGIACgGIAEgHIAEgFIAPAGIgFALIgCAHIAAAFIABAIQABAEACACIAFAEIAHABIAIgBQADgBACgCQACgDABgEIABgKIAAgJQAAgFgCgEIgDgHIgGgGIgFgHIgGgHIgGgIIgEgJQgBgFAAgGIAAgNIARAAIAAANQAAAEABADIADAGIAFAGIAFAGIAIAIIAGAJIAFAKQACAFAAAHIAAAKQAAAmgkAAQgIAAgGgDg");
	this.shape_9.setTransform(52.7,22.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D3212B").s().p("AgOA8QgHgDgFgFQgEgFgCgHQgDgHAAgHIAAgFIABgGIACgGIAEgHIAEgFIAPAGIgFALIgCAHIAAAFIABAIQABAEACACIAFAEIAHABIAIgBQADgBACgCQACgDABgEIABgKIAAgJQAAgFgCgEIgDgHIgGgGIgFgHIgGgHIgGgIIgEgJQgBgFAAgGIAAgNIARAAIAAANQAAAEABADIADAGIAFAGIAFAGIAIAIIAGAJIAFAKQACAFAAAHIAAAKQAAAmgkAAQgIAAgGgDg");
	this.shape_10.setTransform(44.1,22.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D3212B").s().p("AAOA/QgMAAgJgDQgKgDgHgFQgIgFgGgGQgGgHgDgIQgEgIgCgJQgCgJAAgIIAAgJIABgJIABgKIADgKIAGgIQAEgEAFgCQAFgCAHAAIAIAAIAGACIAEAEIAEAGIAEgGIAFgEIAHgCIAHAAQAHAAAFABQAFACAEADIAGAHIAEAIIACAKIABAKIAAANQAAAHgCAGQgCAIgEAFQgEAGgGAEQgHADgJAAQgIAAgGgDQgHgDgDgFQgEgGgCgHQgCgHAAgJIAAgMIgBgJIgCgIIgEgFQgCgCgEAAQgDAAgCACIgEADIgCAGIgBAGIAAAGIgBAFIAAAJQAAAKAEAKQADAKAHAHQAGAHAJAEQAJAEAMAAIASAAIAAATgAAPgrQgDABgBADIgCAIIgBAKIAAAMQAAAMAEAFQADAGAHAAQAFAAADgCQADgDABgDIACgHIABgIIAAgMIgBgJIgBgHQgCgDgDgCQgCgDgGAAQgEAAgDACg");
	this.shape_11.setTransform(33.4,22.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AsBDuQghgBgYgXQgXgXAAghIAAk6QAAgiAXgXQAYgYAhAAIYDAAQAhAAAYAYQAXAXAAAiIAAE6QAAAhgXAXQgYAXghABg");
	this.shape_12.setTransform(85,23.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.BTN, new cjs.Rectangle(0,0,170.1,47.5), null);


(lib.Line = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").p("AAlSwIhJAAMAAAglfIBJAAg");
	this.shape.setTransform(4.2,120.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC3C40").s().p("AgkSwMAAAglfIBJAAMAAAAlfg");
	this.shape_1.setTransform(4.2,120.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Line, new cjs.Rectangle(-0.5,-0.5,9.4,242), null);


(lib.ManSad = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595959").ss(0.5).p("AiuDeIFjgCIASmtQgaAnglAmQhLBNg7AAQg7AAhMhMIhAhLg");
	this.shape.setTransform(37.9,-66);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F1F1F1").s().p("AjGjVIBBBMQBMBMA7AAQA7AABKhNQAmgnAZgmIgRGtIljACg");
	this.shape_1.setTransform(38,-65.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#595959").ss(0.5).p("AhUC6QBEgiAtgjQBuhQgKhPQgIhAg7gkQgsgbhVgSIg6BUQBjAUApAcQAWAOABALQACAJgNARQgQAVgiAaQgoAegrAVg");
	this.shape_2.setTransform(64,-67.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F1F1F1").s().p("AhrBfQArgVAogeQAhgaARgVQAMgSgBgJQgCgKgVgOQgpgdhkgUIA7hTQBVASArAbQA7AkAIBAQAKBOhtBRQguAihDAjg");
	this.shape_3.setTransform(64.1,-67.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#595959").ss(0.5).p("ABSCyQgygZgugiQhthRAKhOQAMhcCnguQAOgDAKAsQAJAtgNADQhBASgcAXQgQAMAAAHQgBAJANARQAPAUAjAaQAYARAVAeQAbAkACADg");
	this.shape_4.setTransform(11.5,-93.4);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F1F1F1").s().p("AgNB3QhthQAKhPQALhcCogtQAOgEAJAtQAJAsgMAEQhCASgbAWQgQAMAAAIQgBAJAMAQQAQAUAiAaQAYASAWAeIAdAmIggAxQgxgYgugjg");
	this.shape_5.setTransform(11.4,-93.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#595959").ss(0.5).p("Ag2gbIBPgPQAZAAAFAfQAFAdgYAGIhTASg");
	this.shape_6.setTransform(23.7,-107.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0C0C0").s().p("Ag3gaIBQgPQAYAAAFAeQAGAdgYAGIhTASg");
	this.shape_7.setTransform(23.7,-107.6);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#909090").ss(1,1,1).p("AhjgGIAZAJQAcAKAOAAQALAAAWgNQAWgMARAAQAfAAAdAO");
	this.shape_8.setTransform(38.5,-90.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#414141").ss(1,1,1).p("AAfAQQgXgbgmgE");
	this.shape_9.setTransform(51.4,-111.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#414141").s().p("AgCAOQgMAAgJgSQgDgFAGgDIACgBQAEAAABAEQAGALAGABQAHAAAIgMQADgFAFADQAFADgDAFQgDADgFAGQgJAIgIAAIgBAAg");
	this.shape_10.setTransform(50,-106.8);

	this.instance = new lib.Path_2_0();
	this.instance.parent = this;
	this.instance.setTransform(51.5,-98.1,1,1,0,0,0,2.8,2.8);
	this.instance.alpha = 0.199;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#414141").ss(1,1,1).p("AgeAQQAYgbAlgE");
	this.shape_11.setTransform(25.6,-110.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#414141").s().p("AgPAFIgIgJQgDgFAFgDQAFgDADAFQAHAMAHAAQAHAAAGgLQABgDAEAAIACAAQAGADgDAFQgJARgNABIgBAAQgIAAgIgJg");
	this.shape_12.setTransform(27.1,-106);

	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,-98.1,1,1,0,0,0,2.8,2.8);
	this.instance_1.alpha = 0.199;

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#414141").s().p("AhJBbQgugJgYgdQgWgbAFggQAEgiAdgZQAggbAygFQANgBgPARQgSASAFACQAZgVAjgKQAsgMAtAMQAIACgXAOQgUAMAGgCQAugKAhAKQAbAHgEAJQgQAJgHAKQgOAUAfAjQAKAMgLARQgMAQgdAMQgsASg6AAQgnAAgugIg");
	this.shape_13.setTransform(35.1,-127.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#414141").s().p("Ag3AIIAMgeIAyAAIAxAtg");
	this.shape_14.setTransform(50.6,-2.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#414141").s().p("AgsCwIAllFQABgLAHgIQAIgHALAAQALABAHAIQAIAIgBALIgmFDg");
	this.shape_15.setTransform(50.6,-21.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#414141").s().p("AgGgWIAyAAIALAeIhtAPg");
	this.shape_16.setTransform(24.9,-2.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#414141").s().p("AgGCwIgmlDQgBgLAIgIQAHgIAMgBQALAAAHAHQAHAIABALIAmFFg");
	this.shape_17.setTransform(24.8,-21.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#414141").s().p("AiVA0QgZgZgDghIgDhDIFpgCIgDBCQgCAjgZAYQgYAZgkAAIi0ABQgiAAgagYg");
	this.shape_18.setTransform(38.2,-41.9);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#C0C0C0").s().p("AiRGsQgZgYgCgjIglqnQgDg5AngpQAmgqA5AAICdgBQA4gBAnAqQAnApgDA5IgcKmQgBAkgZAYQgZAZgjAAIi0ABQgjAAgagYg");
	this.shape_19.setTransform(37.8,-79.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#B1B1B1").s().p("AjuATQgIgIAAgKQAAgKAIgHQAHgIAKAAIG6gBQALAAAHAIQAIAHAAAKQAAAKgIAHQgHAIgLAAIm5ABQgLAAgHgHg");
	this.shape_20.setTransform(38.1,-106.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#414141").s().p("AjVBuQgRg2gBgzQgChmBQANQBQANBKgPQAqgIBBgSQBQgOAcAvQAhA3ggCNg");
	this.shape_21.setTransform(37.6,-119.1);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#414141").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_22.setTransform(60.6,-4.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#414141").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_23.setTransform(15.7,-4.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#595959").ss(0.5).p("Aiij1IFFAAQAoAAAbAcQAcAbAAAoIAAGMIoDAAIAAmMQAAgoAcgbQAcgcAnAAg");
	this.shape_24.setTransform(38.1,-71.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#707070").s().p("AkBD2IAAmMQAAgnAcgcQAcgcAnAAIFFAAQAoAAAbAcQAcAcAAAnIAAGMg");
	this.shape_25.setTransform(38.1,-71.6);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#595959").ss(0.5).p("ACvA/IldAAQgyAAgjgjQgjgiAAgyIAAgGIJNAAIAAAGQAAAygjAiQgjAjgyAAg");
	this.shape_26.setTransform(38.1,-33.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#707070").s().p("AiuA/QgyAAgjgjQgjgiAAgyIAAgGIJNAAIAAAGQAAAygjAiQgjAjgyAAg");
	this.shape_27.setTransform(38.1,-33.9);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#353535").s().p("AhJApQgggBgWgWQgXgWAAggIAAgDIEtAAIAAADQAAAggXAWQgVAWghABg");
	this.shape_28.setTransform(38.1,-26.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#BEBEBE").s().p("ABeAoIjYgeIAAgyIDfAfQAKABAGAHQAGAHAAAJQAAAMgJAHQgHAHgJAAIgEgBg");
	this.shape_29.setTransform(53.1,-11.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#BEBEBE").s().p("AhyAiQgIgHAAgMQAAgJAHgHQAGgHAJgBIDfgfIAAAyIjZAeIgEABQgIAAgIgHg");
	this.shape_30.setTransform(23.2,-11.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#A5A5A5").s().p("AgqAaIAAgzIBVAAIAAAzg");
	this.shape_31.setTransform(38.1,-23);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#BEBEBE").s().p("AgqBIIAAiPIBVAAIAACPg");
	this.shape_32.setTransform(38.1,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.instance_1},{t:this.shape_12},{t:this.shape_11},{t:this.instance},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ManSad, new cjs.Rectangle(-1,-137.6,79,137.7), null);


(lib.ManHappy = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#595959").ss(0.5).p("AAHAIIjNg0IB+BhIBPgtIBEAtIB8hkg");
	this.shape.setTransform(38,-82.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHAFIDAg2Ih8BjgAjGgvIDNA0IhPAtgAAHAFg");
	this.shape_1.setTransform(38,-82);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#595959").ss(0.5).p("AgMh/IgbDXIAnAnIAogkIgdjag");
	this.shape_2.setTransform(38.8,-63.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EC3C40").s().p("AgnBZIAbjYIAXAAIAdDbIgoAkg");
	this.shape_3.setTransform(38.8,-64);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#595959").ss(0.5).p("AADgWIgrAWIAhAYIAWAAIAbgVg");
	this.shape_4.setTransform(38.3,-79.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EC3C40").s().p("AgIAXIgggXIArgXIAmAaIgaAUg");
	this.shape_5.setTransform(38.4,-79.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#595959").ss(0.5).p("AivDZIFkgDIASmsIjAA3IjNg1g");
	this.shape_6.setTransform(38,-65.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EDF2F4").s().p("AjGjVIDNA1IDAg3IgSGtIlkACg");
	this.shape_7.setTransform(38,-65.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5F3241").s().p("AANAMQgFgOgIgBQgFgBgIAJQgDAEgDgCIgCgBQgBAAAAAAQAAgBgBAAQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAgBQAAAAAAAAQAAAAABgBQANgQALACQAOADAIAUQACAFgGACIgCABQgEAAgBgEg");
	this.shape_8.setTransform(50,-107);

	this.instance = new lib.Path_1_0();
	this.instance.parent = this;
	this.instance.setTransform(51.5,-98.1,1,1,0,0,0,2.8,2.8);
	this.instance.alpha = 0.199;

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#5F3241").s().p("AgeAIQgDgEAFgEQAPgLASACQAOACAKAHQAFACgDAFQgEAFgEgEQgGgEgJgCQgQgCgOAJIgDABQgDAAgCgCg");
	this.shape_9.setTransform(49.9,-111.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#5F3241").s().p("AgTAPQgGgCACgFQACgFAEgGQAHgKAJgCQALgCANAQQABABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAABAAAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABQgDACgDgEQgJgJgFABQgDAAgEAFQgEAFgBAFQgCAEgDAAIgCgBg");
	this.shape_10.setTransform(26.3,-107);

	this.instance_1 = new lib.Path_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(24.8,-98.1,1,1,0,0,0,2.8,2.8);
	this.instance_1.alpha = 0.199;

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#5F3241").s().p("AAXAJQgOgJgQACIgPAGQgEAEgEgFQgDgFAFgCQAKgHAOgCQASgCAPALQAFADgDAFQgCACgDAAg");
	this.shape_11.setTransform(26.3,-111.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F5646F").s().p("Ag4AOQgYgQAAgaQAAgDAFAAQADAAAAADQAAAXAVAOQAWAQAdAAQAeAAAWgQQAVgOAAgXQAAgDAEAAQADAAAAADQABAagYAQQgYASghAAQghAAgXgSg");
	this.shape_12.setTransform(38.3,-94.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#5F3241").s().p("AhJBbQgugJgYgdQgWgbAFggQAEgiAdgZQAggbAzgFQAMgBgPARQgSASAFACQAZgVAjgKQAsgMAtAMQAIACgXAOQgUAMAGgCQAvgKAgAKQAbAHgEAJQgQAJgHAKQgOAUAfAjQALAMgMARQgLAQgeAMQgsASg6AAQgnAAgugIg");
	this.shape_13.setTransform(35.1,-127.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#4A3B4E").s().p("AiVA0QgagZgBghIgEhDIFpgCIgDBCQgBAjgaAYQgZAZgiAAIi0ABQgkAAgZgYg");
	this.shape_14.setTransform(38.2,-41.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5F3241").s().p("AgZg5IAggBIATAwIgwBEg");
	this.shape_15.setTransform(17,-32.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#4A3B4E").s().p("AiwARIE9hRQAKgDAKAEQAKAFAEAKQAEALgFAKQgFAKgKADIk8BRg");
	this.shape_16.setTransform(34.5,-39.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDA899").s().p("AiRGsQgagYgCgjIgkqnQgDg5AmgpQAngqA4AAICdgBQA5gBAnAqQAnApgDA5IgcKmQgCAkgZAYQgZAZgjAAIi0ABQgjAAgZgYg");
	this.shape_17.setTransform(37.8,-79.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F39787").s().p("AjuATQgIgIAAgKQAAgKAIgHQAHgIAKAAIG6gBQALAAAHAIQAIAHAAAKQAAAKgIAHQgHAIgLAAIm5ABQgLAAgHgHg");
	this.shape_18.setTransform(38.1,-106.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#5F3241").s().p("AjWBuQgRg2gBgzQgChmBRANQBQANBKgPQApgIBBgSQBRgOAcAvQAhA3ggCNg");
	this.shape_19.setTransform(37.7,-119.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#5F3241").s().p("AgGgWIAyAAIAMAeIhuAPg");
	this.shape_20.setTransform(24.9,-2.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#4A3B4E").s().p("AgGCwIgmlDQgBgLAIgIQAIgIALgBQALAAAHAHQAHAIABALIAmFFg");
	this.shape_21.setTransform(24.8,-21.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#595959").ss(0.5).p("AhDC4QABAAAfgQQAjgVAcgWQBuhQgKhOQgIg/hPgpQg1gchggTIgSBZQBjAUApAcQAWAOACALQABAKgNAQQgQAWgiAaQgZASgfASQgZAOgCAAg");
	this.shape_22.setTransform(64.1,-94.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EDF2F4").s().p("AhrBnQACAAAYgOQAggSAZgTQAigZAQgXQAMgQgBgKQgCgLgVgOQgqgbhjgVIAThZQBfAUA1AcQBPAoAIA/QAKBOhtBRQgcAWgkAUIgfARg");
	this.shape_23.setTransform(64.1,-95);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#595959").ss(0.5).p("ABEC4QgygYgtgjQhthQAJhOQAIg/BPgpQA1gcBggTIASBZQhjAUgpAcQgOAJgGAIQgEAHAAABQgBAKANAQQAQAWAiAaQAoAdAqAVg");
	this.shape_24.setTransform(12.9,-94.9);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#EDF2F4").s().p("AgbB+QhthRAKhOQAIg/BPgoQA1gcBfgUIATBZQhjAVgqAbQgNAJgGAJIgEAHQgBAKAMAQQARAXAhAZQAoAeArAVIgoBSQgxgYgugjg");
	this.shape_25.setTransform(12.8,-95);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#4A3B4E").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_26.setTransform(60.6,-4.3);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#4A3B4E").s().p("AgRASQgIgHAAgLQAAgKAIgHQAHgIAKAAQALAAAHAIQAIAHAAAKQAAALgIAHQgHAIgLAAQgKAAgHgIg");
	this.shape_27.setTransform(15.7,-4.3);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#595959").ss(0.5).p("Aiij1IFFAAQAnAAAcAcQAcAbAAAoIAAGMIoDAAIAAmMQAAgoAcgbQAcgcAnAAg");
	this.shape_28.setTransform(38.1,-71.6);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#EC3C40").s().p("AkBD2IAAmMQAAgnAcgcQAcgcAnAAIFFAAQAnAAAcAcQAcAcAAAnIAAGMg");
	this.shape_29.setTransform(38.1,-71.6);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#595959").ss(0.5).p("ACvA/IldAAQgyAAgjgjQgjgiAAgyIAAgGIJNAAIAAAGQAAAygjAiQgjAjgyAAg");
	this.shape_30.setTransform(38.1,-33.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#EC3C40").s().p("AiuA/QgyAAgjgjQgjgiAAgyIAAgGIJNAAIAAAGQAAAygjAiQgjAjgyAAg");
	this.shape_31.setTransform(38.1,-33.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#3C2F40").s().p("AhJApQgggBgXgWQgWgWAAggIAAgDIEtAAIAAADQAAAggWAWQgXAWggABg");
	this.shape_32.setTransform(38.1,-26.8);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#B8BED0").s().p("ABfAoIjZgeIAAgyIDeAfQALABAFAHQAHAHAAAJQAAAMgIAHQgIAHgJAAIgDgBg");
	this.shape_33.setTransform(53.1,-11.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#B8BED0").s().p("AhxAiQgJgHAAgMQAAgJAGgHQAHgHAJgBIDfgfIAAAyIjZAeIgEABQgIAAgHgHg");
	this.shape_34.setTransform(23.2,-11.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#9FA5B4").s().p("AgqAaIAAgzIBVAAIAAAzg");
	this.shape_35.setTransform(38.1,-23);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#B8BED0").s().p("AgqBIIAAiPIBVAAIAACPg");
	this.shape_36.setTransform(38.1,-16.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.instance_1},{t:this.shape_10},{t:this.shape_9},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ManHappy, new cjs.Rectangle(-1,-137.6,79,137.7), null);


(lib.Mac = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.CompoundPath();
	this.instance.parent = this;
	this.instance.setTransform(29.8,-41.5,1,1,0,0,0,3.9,5.7);
	this.instance.alpha = 0.699;

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#7CAFEB").s().p("AglANQgIAAAAgIIAAgJQAAgIAIAAIBLAAQAIAAAAAIIAAAJQAAAIgIAAg");
	this.shape.setTransform(37.3,-1.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#668ABB").s().p("Ah7ANQgIAAAAgIIAAgJQAAgIAIAAID3AAQADAAADACQACACAAAEIAAAJQAAAEgCACQgDACgDAAg");
	this.shape_1.setTransform(27.6,-1.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#668ABB").s().p("AhJCOQgHAAgDgEQgDgFABgHIA+j8QABgGAGgFQAGgEAGAAIBOAAQAGAAAEAEQAEAFgCAGIg+D8QgBAHgGAFQgGAEgHAAgAgqAoQgDADgCAEIgJAlQgBAEACADQACADAFAAIAzAAQAKAAADgKIAKglQABgEgDgDQgCgDgEAAIgzAAQgFAAgEADg");
	this.shape_2.setTransform(26.5,-15.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#7CAFEB").s().p("AABASIgcgkIAuAEIAJARIgHAQg");
	this.shape_3.setTransform(33,-27.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#7CAFEB").s().p("AhHCHQgIAAgEgGQgCgFACgEIA6juQACgHAGgEQAGgFAGAAIBNAAQAHAAADAFQAEAEgCAHIg6DuQgCAGgGAFQgFAEgHAAgAg2AaQgEADgBAEIgJAlQgBAEACADQACADAFAAIA0AAQAJABADgLIAJglQABgEgCgDQgCgDgEAAIgzAAQgFAAgEADg");
	this.shape_4.setTransform(27.7,-14.1);

	this.instance_1 = new lib.Path_0();
	this.instance_1.parent = this;
	this.instance_1.setTransform(32.4,-17.9,1,1,0,0,0,6.5,8.1);
	this.instance_1.alpha = 0.699;

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#7F7F7F").ss(0.5).p("AElDVQABAIgFAFQgEAFgHAAIoiAAQgGAAgFgFQgFgFAAgIIgJmqQAAgHAFgFQAEgFAHAAIIiAAQAGAAAFAFQAFAFAAAHg");
	this.shape_5.setTransform(29.4,-33);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFCBD1").s().p("AkMDnQgGAAgFgFQgFgFAAgIIgJmqQAAgHAFgFQAEgFAHAAIIiAAQAGAAAFAFQAFAFAAAHIAIGqQABAIgFAFQgEAFgHAAg");
	this.shape_6.setTransform(29.4,-33);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#7F7F7F").ss(0.5).p("AkcDVQAAAHAQAGQAOAFAJAAIILAAQAHAAAEgFQAFgFAAgIIgJmqQAAgHgFgFQgFgFgGAAIoiAAQgGAAgFAFQgFAFABAHg");
	this.shape_7.setTransform(32.2,-33);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F4F7F8").s().p("Aj1DnQgJAAgOgFQgQgGAAgHIgImqQgBgHAFgFQAFgFAGAAIIiAAQAGAAAFAFQAFAFAAAHIAJGqQAAAIgFAFQgEAFgHAAg");
	this.shape_8.setTransform(32.2,-33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.instance_1},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Mac, new cjs.Rectangle(-1.3,-57.5,64.2,57.6), null);


(lib.GreyCup = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Tween2("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(9.6,-8.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.GreyCup, new cjs.Rectangle(0,-16.9,19.2,17), null);


(lib.Money_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FEE94E").s().p("AAAgPIADAAIgCAfIgDAAg");
	this.shape_6.setTransform(16.2,7.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FEE94E").s().p("AAAgPIADAAIgCAeIgDABg");
	this.shape_7.setTransform(11.2,8.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E8DACB").s().p("AgfgKIBBgKIgDAfIhAAKg");
	this.shape_8.setTransform(13.7,8);

	this.instance = new lib.ClipGroup_16();
	this.instance.parent = this;
	this.instance.setTransform(11.8,4,1,1,0,0,0,11.6,4);

	this.instance_1 = new lib.ClipGroup_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(11.9,4.7,1,1,0,0,0,11.7,4);

	this.instance_2 = new lib.ClipGroup_14();
	this.instance_2.parent = this;
	this.instance_2.setTransform(11.8,5.3,1,1,0,0,0,11.6,4);

	this.instance_3 = new lib.ClipGroup_13();
	this.instance_3.parent = this;
	this.instance_3.setTransform(11.7,5.9,1,1,0,0,0,11.6,4);

	this.instance_4 = new lib.ClipGroup_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(11.7,6.5,1,1,0,0,0,11.6,4);

	this.instance_5 = new lib.ClipGroup_11();
	this.instance_5.parent = this;
	this.instance_5.setTransform(11.6,7.2,1,1,0,0,0,11.6,4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FEE94E").s().p("AgFAPIAGgdIAFAAIgHAdg");
	this.shape_9.setTransform(22.2,11.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FEE94E").s().p("AgFAQIAGgfIAFAAIgHAfg");
	this.shape_10.setTransform(17.2,11.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E8DACB").s().p("AgkAPIAHgeIBCABIgHAeg");
	this.shape_11.setTransform(19.7,11.8);

	this.instance_6 = new lib.ClipGroup_10();
	this.instance_6.parent = this;
	this.instance_6.setTransform(18.5,7.5,1,1,0,0,0,11.3,2.9);

	this.instance_7 = new lib.ClipGroup_9();
	this.instance_7.parent = this;
	this.instance_7.setTransform(18.4,8.1,1,1,0,0,0,11.3,2.9);

	this.instance_8 = new lib.ClipGroup_8();
	this.instance_8.parent = this;
	this.instance_8.setTransform(18.2,8.7,1,1,0,0,0,11.3,2.9);

	this.instance_9 = new lib.ClipGroup_7();
	this.instance_9.parent = this;
	this.instance_9.setTransform(18.1,9.3,1,1,0,0,0,11.3,2.9);

	this.instance_10 = new lib.ClipGroup_6();
	this.instance_10.parent = this;
	this.instance_10.setTransform(18,10,1,1,0,0,0,11.3,2.9);

	this.instance_11 = new lib.ClipGroup_5();
	this.instance_11.parent = this;
	this.instance_11.setTransform(17.8,10.6,1,1,0,0,0,11.3,2.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FEE94E").s().p("AgFAPIAGgdIAFAAIgGAdg");
	this.shape_12.setTransform(16.7,16.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FEE94E").s().p("AgFAPIAHgdIAEAAIgGAdg");
	this.shape_13.setTransform(11.7,16.1);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E8DACB").s().p("AgkAPIAIgeIBBABIgHAeg");
	this.shape_14.setTransform(14.2,16.1);

	this.instance_12 = new lib.ClipGroup_4();
	this.instance_12.parent = this;
	this.instance_12.setTransform(13.1,11.8,1,1,0,0,0,11.3,2.9);

	this.instance_13 = new lib.ClipGroup_3();
	this.instance_13.parent = this;
	this.instance_13.setTransform(12.9,12.4,1,1,0,0,0,11.3,2.9);

	this.instance_14 = new lib.ClipGroup_2();
	this.instance_14.parent = this;
	this.instance_14.setTransform(12.8,13,1,1,0,0,0,11.3,2.9);

	this.instance_15 = new lib.ClipGroup_1();
	this.instance_15.parent = this;
	this.instance_15.setTransform(12.6,13.7,1,1,0,0,0,11.3,2.9);

	this.instance_16 = new lib.ClipGroup_0();
	this.instance_16.parent = this;
	this.instance_16.setTransform(12.5,14.3,1,1,0,0,0,11.3,2.9);

	this.instance_17 = new lib.ClipGroup();
	this.instance_17.parent = this;
	this.instance_17.setTransform(12.3,14.9,1,1,0,0,0,11.3,2.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Money_1, new cjs.Rectangle(0,0,29.9,17.7), null);


(lib.Money_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_18 = new lib.Money_1();
	this.instance_18.parent = this;
	this.instance_18.setTransform(14.8,-8.9,1,1,0,0,0,14.9,8.8);
	this.instance_18.shadow = new cjs.Shadow("rgba(0,0,0,0.098)",1,1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(1));

}).prototype = getMCSymbolPrototype(lib.Money_2, new cjs.Rectangle(-1.1,-19.7,37,25), null);


// stage content:
(lib._728X90Business = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Logo copy
	this.Logo = new lib.Logo();
	this.Logo.parent = this;
	this.Logo.setTransform(78.2,74.4,0.388,0.388,0,0,0,36.4,31.1);
	this.Logo.alpha = 0;
	this.Logo._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Logo).wait(166).to({_off:false},0).to({regX:36.5,regY:30.9,scaleX:0.78,scaleY:0.78,x:58.7,y:47.8,alpha:1},5).wait(34));

	// MBC Text
	this.MBC = new lib.MBCText();
	this.MBC.parent = this;
	this.MBC.setTransform(116.4,70.8,0.388,0.388,0,0,0,41.1,15.8);
	this.MBC.alpha = 0;
	this.MBC._off = true;

	this.timeline.addTween(cjs.Tween.get(this.MBC).wait(166).to({_off:false},0).to({regY:15.6,scaleX:0.78,scaleY:0.78,x:131.9,y:46.3,alpha:1},5).wait(34));

	// BTN
	this.BTN = new lib.BTN();
	this.BTN.parent = this;
	this.BTN.setTransform(607.8,16.8,0.388,0.388,0,0,0,85.2,23.8);
	this.BTN.alpha = 0;
	this.BTN._off = true;

	this.timeline.addTween(cjs.Tween.get(this.BTN).wait(166).to({_off:false},0).to({regX:85,regY:23.7,scaleX:0.78,scaleY:0.78,x:608.5,y:46.1,alpha:1},5).to({regX:85.1,regY:23.8,scaleX:0.93,scaleY:0.93,y:46.2},3).to({regX:85.2,scaleX:0.88,scaleY:0.88,x:608.6},1).to({regX:85,regY:23.7,scaleX:0.78,scaleY:0.78,x:608.5,y:46.1},2).wait(28));

	// Tel
	this.Tel = new lib.Tel();
	this.Tel.parent = this;
	this.Tel.setTransform(329.5,51.3,0.388,0.388,0,0,0,74.5,10.6);
	this.Tel.alpha = 0;
	this.Tel._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Tel).wait(166).to({_off:false},0).to({regX:74.4,regY:10.5,scaleX:0.78,scaleY:0.78,x:330.2,y:59.6,alpha:1},5).wait(34));

	// Web
	this.Web = new lib.Web();
	this.Web.parent = this;
	this.Web.setTransform(329.4,37.4,0.388,0.388,0,0,0,79.1,8.7);
	this.Web.alpha = 0;
	this.Web._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Web).wait(166).to({_off:false},0).to({regX:79,regY:8.4,scaleX:0.78,scaleY:0.78,x:330,y:31.6,alpha:1},5).wait(34));

	// Sesxi Text 2
	this.Sesxi = new lib.SesxiText2();
	this.Sesxi.parent = this;
	this.Sesxi.setTransform(5.9,28.8,1,1,0,0,0,92.5,13.2);
	this.Sesxi.alpha = 0;
	this.Sesxi._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Sesxi).wait(93).to({_off:false},0).to({x:179,alpha:1},5).wait(52).to({y:18.8,alpha:0},5).wait(50));

	// Red Half
	this.Red = new lib.RedHalf();
	this.Red.parent = this;
	this.Red.setTransform(-238,60,1,1,0,0,0,117,60);
	this.Red._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Red).wait(83).to({_off:false},0).to({x:117},9).wait(113));

	// Red Full
	this.Red_1 = new lib.RedFull();
	this.Red_1.parent = this;
	this.Red_1.setTransform(117,0,1,1,0,0,0,117,120);
	this.Red_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Red_1).wait(150).to({_off:false},0).to({x:481.4,y:-21.7},5).wait(50));

	// Money
	this.Money = new lib.Money();
	this.Money.parent = this;
	this.Money.setTransform(744.3,-84,1,1,0,0,0,39.8,16.1);
	this.Money.alpha = 0;
	this.Money._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Money).wait(93).to({_off:false},0).to({x:645.3,alpha:1},5).wait(52).to({alpha:0},5).wait(50));

	// Sesxi Text 3
	this.Sesxi_1 = new lib.SesxiText3();
	this.Sesxi_1.parent = this;
	this.Sesxi_1.setTransform(634.1,65.3,1,1,0,0,0,65.8,26.9);
	this.Sesxi_1.alpha = 0;
	this.Sesxi_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Sesxi_1).wait(93).to({_off:false},0).to({x:446.1,y:61.4,alpha:1},5).to({_off:true},57).wait(50));

	// White Half
	this.White = new lib.WhiteHalf();
	this.White.parent = this;
	this.White.setTransform(847,180.2,1,1.01,0,0,0,117,59.6);
	this.White._off = true;

	this.timeline.addTween(cjs.Tween.get(this.White).wait(83).to({_off:false},0).to({regY:59.7,x:482,y:180.4},9).to({_off:true},63).wait(50));

	// Line
	this.Line = new lib.Line();
	this.Line.parent = this;
	this.Line.setTransform(731.3,120,1,1,0,0,0,4.2,120.5);
	this.Line._off = true;

	this.timeline.addTween(cjs.Tween.get(this.Line).wait(26).to({_off:false},0).to({x:724.4},2).to({x:3.7},15).to({x:-3.6},2).to({_off:true},1).wait(159));

	// To Color Mask copy 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_28 = new cjs.Graphics().p("AgtSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_29 = new cjs.Graphics().p("AkcSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_30 = new cjs.Graphics().p("AoLSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_31 = new cjs.Graphics().p("Ar7SwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_32 = new cjs.Graphics().p("AvqSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_33 = new cjs.Graphics().p("AzZSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_34 = new cjs.Graphics().p("A3ISwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_35 = new cjs.Graphics().p("A64SwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_36 = new cjs.Graphics().p("A+nSwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_37 = new cjs.Graphics().p("EgiWASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_38 = new cjs.Graphics().p("EgmGASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_39 = new cjs.Graphics().p("Egp1ASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_40 = new cjs.Graphics().p("EgtkASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_41 = new cjs.Graphics().p("EgxTASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_42 = new cjs.Graphics().p("Eg1DASwMAAAglfMByDAAAMAAAAlfg");
	var mask_graphics_43 = new cjs.Graphics().p("Eg4yASwMAAAglfMByDAAAMAAAAlfg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(28).to({graphics:mask_graphics_28,x:725.4,y:120}).wait(1).to({graphics:mask_graphics_29,x:701.5,y:120}).wait(1).to({graphics:mask_graphics_30,x:677.6,y:120}).wait(1).to({graphics:mask_graphics_31,x:653.6,y:120}).wait(1).to({graphics:mask_graphics_32,x:629.7,y:120}).wait(1).to({graphics:mask_graphics_33,x:605.8,y:120}).wait(1).to({graphics:mask_graphics_34,x:581.9,y:120}).wait(1).to({graphics:mask_graphics_35,x:557.9,y:120}).wait(1).to({graphics:mask_graphics_36,x:534,y:120}).wait(1).to({graphics:mask_graphics_37,x:510.1,y:120}).wait(1).to({graphics:mask_graphics_38,x:486.1,y:120}).wait(1).to({graphics:mask_graphics_39,x:462.2,y:120}).wait(1).to({graphics:mask_graphics_40,x:438.3,y:120}).wait(1).to({graphics:mask_graphics_41,x:414.4,y:120}).wait(1).to({graphics:mask_graphics_42,x:390.4,y:120}).wait(1).to({graphics:mask_graphics_43,x:366.5,y:120}).wait(1).to({graphics:null,x:0,y:0}).wait(161));

	// Sesxi Text 1
	this.Sesxi_2 = new lib.SesxiText1();
	this.Sesxi_2.parent = this;
	this.Sesxi_2.setTransform(84.7,45.4,1,1,0,0,0,61.4,27.9);
	this.Sesxi_2._off = true;

	var maskedShapeInstanceList = [this.Sesxi_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Sesxi_2).wait(28).to({_off:false},0).to({_off:true},65).wait(112));

	// Logo
	this.Logo_1 = new lib.Logo();
	this.Logo_1.parent = this;
	this.Logo_1.setTransform(687.6,46.8,1,1,0,0,0,36.5,31);
	this.Logo_1._off = true;

	var maskedShapeInstanceList = [this.Logo_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.Logo_1).wait(28).to({_off:false},0).to({_off:true},65).wait(112));

	// Clock
	this.instance = new lib.Clock();
	this.instance.parent = this;
	this.instance.setTransform(469.2,14.4,0.831,0.831,0,0,0,17.1,-16.9);
	this.instance._off = true;

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).to({_off:true},65).wait(112));

	// Mac
	this.instance_1 = new lib.Mac();
	this.instance_1.parent = this;
	this.instance_1.setTransform(304.4,61.7,0.748,0.748,0,0,0,30.9,-28.7);
	this.instance_1._off = true;

	var maskedShapeInstanceList = [this.instance_1];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(28).to({_off:false},0).wait(6).to({regX:31,scaleX:0.48,x:304.5},0).to({scaleX:0.86,scaleY:0.86,y:54},8).to({regX:30.9,scaleX:0.75,scaleY:0.75,x:304.4,y:61.7},4).to({_off:true},47).wait(112));

	// Money
	this.instance_2 = new lib.Money_2();
	this.instance_2.parent = this;
	this.instance_2.setTransform(418.8,77,0.748,0.748,0,0,0,15,-8.7);
	this.instance_2._off = true;

	var maskedShapeInstanceList = [this.instance_2];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).to({regX:14.9,regY:-8.8,scaleX:1.05,scaleY:1.05,y:70.7},9).to({regX:15,regY:-8.7,scaleX:0.75,scaleY:0.75,y:77},6).to({_off:true},50).wait(112));

	// Cup
	this.instance_3 = new lib.Cup();
	this.instance_3.parent = this;
	this.instance_3.setTransform(400.5,76.9,0.748,0.748,0,0,0,9.8,-8.4);
	this.instance_3._off = true;

	var maskedShapeInstanceList = [this.instance_3];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(28).to({_off:false},0).wait(3).to({regY:-8.3,scaleX:0.9,scaleY:0.9,x:402.4,y:73.2},6).to({regY:-8.4,scaleX:0.75,scaleY:0.75,x:400.5,y:76.9},6).to({_off:true},50).wait(112));

	// Table
	this.instance_4 = new lib.Table();
	this.instance_4.parent = this;
	this.instance_4.setTransform(365.8,101.6,3.45,0.748,0,0,0,106,-24.4);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(28).to({_off:false},0).to({_off:true},65).wait(112));

	// Man Happy
	this.instance_5 = new lib.ManHappy();
	this.instance_5.parent = this;
	this.instance_5.setTransform(361.1,67.6,0.748,0.748,0,0,0,38.6,-68.7);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(28).to({_off:false},0).wait(4).to({regY:0.2,y:119.1},0).to({scaleX:0.8,scaleY:0.8,x:360},5).to({scaleX:0.75,scaleY:0.75,x:361.1},7).to({_off:true},49).wait(112));

	// Bg Yell
	this.instance_6 = new lib.BgYell();
	this.instance_6.parent = this;
	this.instance_6.setTransform(365,-134.4,3.12,3.12,0,0,0,117,-120);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(28).to({_off:false},0).to({_off:true},65).wait(112));

	// Clock Grey
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#717171").s().p("AgLALQgEgEAAgHQAAgGAEgFQAFgEAGAAQAHAAAFAEQAEAFABAGQgBAHgEAEQgFAFgHAAQgFAAgGgFg");
	this.shape.setTransform(485.9,22.8,0.8,0.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#909090").s().p("AgNAhIARhAQACgFAEACQAFABgBAFIgRBAg");
	this.shape_1.setTransform(486.4,20.1,0.8,0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#909090").s().p("AgEAjIAAhKIAJAAIAABKQAAAFgFAAQgEAAAAgFg");
	this.shape_2.setTransform(485.9,26.4,0.8,0.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#D8D8D8").s().p("AgBAGQgGgCACgFQADgGAEADQAGACgCAFQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAABIgDAAIgBAAg");
	this.shape_3.setTransform(489.5,13.7,0.8,0.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#D8D8D8").s().p("AgBAGQgGgDADgEQACgGAFACQAAABABAAQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgCAEgDAAIgCAAg");
	this.shape_4.setTransform(482.3,31.7,0.8,0.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#D8D8D8").s().p("AgBAGQgGgDADgEQACgGAEACQAGADgCAEQgCAEgDAAIgCAAg");
	this.shape_5.setTransform(476.9,19.1,0.8,0.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D8D8D8").s().p("AgBAGQgGgCADgFQACgGAEADQAGACgCAFQgCADgDAAIgCAAg");
	this.shape_6.setTransform(494.9,26.3,0.8,0.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#D8D8D8").s().p("AgFACQgCgEAGgDQAEgCADAGQACAEgGADIgCAAQgDAAgCgEg");
	this.shape_7.setTransform(494.8,18.9,0.8,0.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#D8D8D8").s().p("AgFADQgCgGAGgBQAEgDACAFQADAEgGAEIgCAAQgCAAgDgDg");
	this.shape_8.setTransform(476.9,26.6,0.8,0.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#D8D8D8").s().p("AgFACQgCgEAGgDQAEgCACAGQADAEgGADIgCAAQgDAAgCgEg");
	this.shape_9.setTransform(482,13.8,0.8,0.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#D8D8D8").s().p("AgFACQgCgFAGgCQAEgCADAGQACAEgGACIgCABQgDAAgCgEg");
	this.shape_10.setTransform(489.7,31.6,0.8,0.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#D8D8D8").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQADgEAEAEQAFADgFAEQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_11.setTransform(492.7,15.9,0.8,0.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#D8D8D8").s().p("AgDAEQgEgEAEgDQADgEAEAEQAFADgFAEQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_12.setTransform(479,29.6,0.8,0.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#D8D8D8").s().p("AgDAEQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQADgDAEADQAFAEgFAEQAAABgBAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_13.setTransform(479,15.9,0.8,0.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#C7C7C7").s().p("AgIAJQgEgEAAgFQAAgFAEgDQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_14.setTransform(476.2,22.7,0.8,0.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#D8D8D8").s().p("AgDAEQgEgEAEgDQAAgBAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAABQAFADgFAEQAAABgBAAQgBABAAAAQgBAAAAAAQgBAAAAAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_15.setTransform(492.7,29.6,0.8,0.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#C7C7C7").s().p("AgIAJQgEgEAAgFQAAgEAEgEQAEgEAEAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgEAEgFAAQgFAAgDgEg");
	this.shape_16.setTransform(495.6,22.7,0.8,0.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#C7C7C7").s().p("AgIAJQgEgDAAgGQAAgEAEgEQAEgEAEAAQAGAAADAEQAEAEAAAEQAAAGgEADQgDAEgGAAQgEAAgEgEg");
	this.shape_17.setTransform(485.8,32.4,0.8,0.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#C7C7C7").s().p("AgIAJQgEgEAAgFQAAgEAEgFQAEgDAEAAQAGAAADADQAEAFAAAEQAAAFgEAEQgDAEgGAAQgEAAgEgEg");
	this.shape_18.setTransform(485.8,13,0.8,0.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EFEFEF").s().p("AhkBlQgqgqAAg7QAAg6AqgqQAqgqA6AAQA8AAApAqQAqAqAAA6QAAA7gqAqQgpAqg8AAQg6AAgqgqg");
	this.shape_19.setTransform(485.9,22.8,0.8,0.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#7F7F7F").p("ACrAAQAAhGgygxQgygyhHAAQhFAAgyAyQgyAxAABGQAABGAyAyQAyAyBFAAQBHAAAygyQAygyAAhGg");
	this.shape_20.setTransform(485.9,22.8,0.8,0.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#BEBEBE").s().p("Ah4B4QgxgyAAhGQAAhGAxgxQAzgyBFAAQBGAAAyAyQAzAxAABGQAABGgzAyQgyAyhGAAQhFAAgzgyg");
	this.shape_21.setTransform(485.9,22.8,0.8,0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[]},46).to({state:[]},150).wait(9));

	// Grey Cup
	this.instance_7 = new lib.GreyCup();
	this.instance_7.parent = this;
	this.instance_7.setTransform(392.8,83.1,0.583,0.583,0,0,0,9.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({regX:9.7,scaleX:0.88,scaleY:0.88,x:399,y:74.8},5).to({scaleX:0.73,scaleY:0.73,x:395.6,y:77.9},3).to({x:396,y:83.4},3).to({_off:true},185).wait(9));

	// PC
	this.instance_8 = new lib.PC();
	this.instance_8.parent = this;
	this.instance_8.setTransform(309,83.1,0.583,0.583,0,0,0,32.9,55.8);
	this.instance_8.alpha = 0.602;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({regX:32.8,regY:55.7,scaleX:0.88,scaleY:0.88,x:292.4,y:83},5).to({regY:55.6,scaleX:0.73,scaleY:0.73,x:300.3,y:82.9},3).to({_off:true},38).wait(159));

	// Grey Table
	this.instance_9 = new lib.GreyTable();
	this.instance_9.parent = this;
	this.instance_9.setTransform(365.7,118.7,3.45,0.729,0,0,0,106,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({_off:true},196).wait(9));

	// Man Sad
	this.instance_10 = new lib.ManSad();
	this.instance_10.parent = this;
	this.instance_10.setTransform(360.6,114.3,0.623,0.623,0,0,0,38.6,0.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({regX:38.8,regY:0.2,scaleX:0.91,scaleY:0.91,x:364.8,y:125.7},5).to({regX:38.6,regY:0.1,scaleX:0.73,scaleY:0.73,x:360.6,y:117.2},3).to({_off:true},38).wait(159));

	// Bg Yell copy
	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#DEDEDE").s().p("AyRSwMAAAglfMAkjAAAMAAAAlfg");
	this.shape_22.setTransform(364,45,3.111,0.375);

	this.timeline.addTween(cjs.Tween.get(this.shape_22).to({_off:true},46).wait(159));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(364,45,730,118.7);
// library properties:
lib.properties = {
	width: 728,
	height: 90,
	fps: 25,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;