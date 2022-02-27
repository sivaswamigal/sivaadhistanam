(function () {
    "use strict";
        $(document).ready(function () {
            $.get('_data/summary.yaml')
            .done(function (data) {
              console.log('File load complete');
              var data=jsyaml.load(data);
              console.log(data[0].valueOf('Amount'));
              var jsonString = JSON.stringify(data);
              console.log(jsonString);
              console.log($.parseJSON(jsonString));
          });
        });
    }());