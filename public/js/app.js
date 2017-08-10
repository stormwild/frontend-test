/* global jQuery */
(function($, weatherTpl){

    var weatherApp = {
        openWeather: {
            el: $('.open-weather'),
            handler: function(e) {
                e.preventDefault();
                var self = weatherApp;
        
                var jqxhr = $.ajax({
                    type: 'get',
                    url: e.target.href,
                    dataType: 'json'
                })
                .done(self.openWeather.render)
                .fail(self.errorHandler);
            },
            render: function(data) {
                var tpl = weatherTpl;
                
                var output = tpl
                    .replace(/{{ weather.where }}/, data.where)
                    .replace(/{{ weather.temperature }}/, data.temperature)
                    .replace(/{{ weather.unit }}/, data.unit)
                    .replace(/{{ weather.description }}/, data.description);
                
                weatherApp.weatherPnlCtnr.html(output);
            }
        },
        tremendousWeather: {
            el: $('.tremendous-weather'),
            handler: function(e) {
                e.preventDefault();
                var self = weatherApp;
        
                var jqxhr = $.ajax({
                    type: 'get',
                    url: e.target.href,
                    dataType: 'json'
                })
                .done(self.tremendousWeather.render)
                .fail(self.errorHandler);
            },
            render: function(data) {
                var tpl = weatherTpl;
                
                var output = tpl
                    .replace(/{{ weather.where }}/, data.name)
                    .replace(/{{ weather.temperature }}/, data.main.temp.value)
                    .replace(/{{ weather.unit }}/, data.main.temp.unit)
                    .replace(/{{ weather.description }}/, data.weather[0].description);
                
                weatherApp.weatherPnlCtnr.html(output);
            }
        },
        weatherPnlCtnr: $('.weather-panel-container'),
        errorHandler: function(xhr, status, error) {
            console.log('error', xhr, status, error);
        },
        init: function() {
            var self = this;
            
            // init handlers
            self.openWeather.el.on('click', self.openWeather.handler);
            self.tremendousWeather.el.on('click', self.tremendousWeather.handler);
            
            // set initial data
            self.openWeather.el.trigger('click');
        }
    };
    
    weatherApp.init();
    
})(jQuery, window.weatherTpl || '');

