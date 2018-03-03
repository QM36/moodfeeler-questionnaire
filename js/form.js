'use strict';
$(document).ready(function() {
  var options = {
    target: '#output1',
    beforeSubmit: showRequest,
    success: showResponse,
    url: "https://moodfeeler.com/api/v2/form/MSSMHS/",
    type: POST,
    dataType: JSON,
    clearForm: true,
    reserForm: true,
    timeout: 3000
  };

  function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);
    return true;
  }

  function showResponse(responseText, statusText, xhr, $form) {
    if(statusText == "success") {
      swal(
        '漂亮！',
        '你完美地完成了这份量表！',
        'success'
      );
    } else if (statusText == "error"){
      swal(
        'Oops...',
        'Something went wrong!',
        'error'
      )
    } else {
      swal(
        'The Internet?',
        'That thing is still around?',
        'question'
      )
    }
  }
  $('#myform').ajaxForm(options);
  
});