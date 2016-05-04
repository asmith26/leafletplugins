# leafletplugins
A collections of plugins for R package leaflet

* [Search toolbar](https://github.com/stefanocudini/leaflet-search)
* [full screen control](https://github.com/brunob/leaflet.fullscreen)
* Current GPS location with [leaflet-gps](https://github.com/stefanocudini/leaflet-gps) plugin
* Tile and satellite layers from [Gaode (Chinese)](http://ditu.amap.com/)

# Installation

You can install the development version from Github:

```r
if (!require('devtools')) install.packages('devtools')
devtools::install_github('byzheng/leafletplugins')
```

# Examples

## Search toolbar

```r
data(quakes)

map <- leaflet(data = quakes) %>%
	addTiles() %>%
	addMarkers(~long, ~lat, popup = ~as.character(mag),
			group = 'marker', label = ~as.character(mag))
			
# Search by popup
map %>% 
   addSearchMarker('marker', position = 'topleft', propertyName = 'popup')
# Search by label
map %>% 
   addSearchMarker('marker', position = 'topleft', propertyName = 'label')

```

## Full screen control

```r
leaflet() %>%
    addTiles() %>%
    addControlFullScreen()
```

## Current GPS location

```r
leaflet() %>%
   addTiles() %>%
   addControlGPS()
```

## Gaode map (in Chinese)

The zoom level has to be less than 3 in Gaode map.
```r
leaflet() %>%
   addTileGaodeMap() %>%
   setView(lat = 37.550339, lng = 104.114129, zoom = 4)
```
