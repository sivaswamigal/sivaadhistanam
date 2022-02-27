(function () {
    "use strict";
        $(document).ready(function () {
            $.get('_data/summary.yaml')
            .done(function (data) {
              console.log('File load complete');
                yamlData=jsyaml.load(data);
              console.log(yamlData[0]['Amount']);
              var jsonString = JSON.stringify(yamlData);
              console.log(jsonString);
              console.log($.parseJSON(jsonString));
          });
        });
    }());