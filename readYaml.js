(function () {
    "use strict";
        $(document).ready(function () {
            $.get('_data/summary.yaml')
            .done(function (data) {
              console.log('File load complete');
                data=jsyaml.load(data);
              console.log(data[0]['Amount']);
              var jsonString = JSON.stringify(data);
              console.log(jsonString);
              console.log($.parseJSON(jsonString));
          });
        });
    }());