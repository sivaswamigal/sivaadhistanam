(function () {
    "use strict";
        $(document).ready(function () {
            $.get('https://github.com/sivaswamigal/sivaadhistanam/blob/main/_data/summary.yaml')
            .done(function (data) {
              console.log('File load complete');
              console.log(jsyaml.load(data));
              var jsonString = JSON.stringify(data);
              console.log(jsonString);
              console.log($.parseJSON(jsonString));
          });
        });
    }());