 LeafletWidget.methods.addSearchOSM = function(position) {
    if(this.search) {
    this.search.removeFrom( this );
    }

      var search = new L.Control.Search({
            url: 'http://nominatim.openstreetmap.org/search?format=json&q={s}',
            jsonpParam: 'json_callback',
            propertyName: 'display_name',
            propertyLoc: ['lat','lon'],
            circleLocation: false,
            markerLocation: false,
            autoType: false,
            autoCollapse: true,
            minLength: 2
        });
      search.addTo(this);
      this.search = search;
  };

 LeafletWidget.methods.addSearchMarker = function(group, position, propertyName, initial) {
    if(this.search) {
    this.search.removeFrom( this );
    }
    var layer_group = this.layerManager.getLayerGroup(group, true);
    var search = new L.Control.Search({
           layer: layer_group,
           position: position,
           propertyName: 'label',
           initial: initial
      });
    this.addControl(search);
    this.search = search;
  };

