
LeafletWidget.methods.addControlFullScreen = function() {
	if (this.fullscreencontrol) {
		this.fullscreencontrol.removeFrom(this);
	}
	var fsControl = new L.Control.FullScreen();
	this.addControl(fsControl);
	this.fullscreencontrol = fsControl;
};

