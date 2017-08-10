(function(){
    window.weatherTpl = '<div class="panel panel-primary weather-panel">' 
            + '<div class="panel-heading">'
                + '<h3 class="panel-title weather-where">{{ weather.where }}</h3>'
            + '</div>'
            + '<div class="panel-body">' 
                + '<div class="weather-temperature">{{ weather.temperature }} <span class="weather-unit">{{ weather.unit }}</span></h4>'
                + '<h5 class="weather-description">{{ weather.description }}</h5>'
                + '</div>'
        + '</div> ';
})();