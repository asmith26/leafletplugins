leafletFullScreenDependencies <- function() {
  list(
    htmltools::htmlDependency(
      "leaflet-fullscreen",
      '0.0.1',
      system.file("htmlwidgets/plugins/leaflet-fullscreen", package = "leafletplugins"),
      script = c("Control.FullScreen.js", 'leaflet-fullscreen.js'),
      stylesheet = 'Control.FullScreen.css'
  ))
}


#' Add full screen control to map
#'
#' Add full screen control (https://github.com/brunob/leaflet.fullscreen)
#' @param map the map to add the tile layer to
#' @return modified map object
#'
#' @examples
#' leaflet() %>%
#'   addControlFullScreen()
#' @export
addControlFullScreen <- function(
  map
) {
  map$dependencies <- c(map$dependencies, leafletFullScreenDependencies())
  invokeMethod(map, leaflet::getMapData(map), 'addControlFullScreen')
}



