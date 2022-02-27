(function () {
    "use strict";
        $(document).ready(function () {
            $.get('_data/summary.yaml')
            .done(function (data) {
              console.log('File load complete');
              var data=jsyaml.load(data);
              console.log('Test 1');
              console.log(data[0].valueOf('Amount'));
              console.log('test with third bracket');
              console.log(data[0]['Amount']);
              console.log(data[0][1]);
              var jsonString = JSON.stringify(data);
              console.log(jsonString);
              console.log($.parseJSON(jsonString));
          });
        });
    }());