'use strict';
$(document).ready(function() {
  var options = {
    target: '#output1',
    beforeSubmit: showRequest,
    success: showResponse,
    url: "https://api.moodfeeler.com/v2/form/MSSMHS/",
    type: "POST",
    dataType: "JSON",
    clearForm: true,
    reserForm: true,
    timeout: 3000
  };

  function showRequest(formData, jqForm, options) {
    var queryString = $.param(formData);
    console.log(queryString);
    return true;
  }

  function showResponse(responseText, statusText, xhr, $form) {
    console.log(responseText);
    console.log(statusText);
    if (statusText == "success") {
      alert("提交成功！");
    } else if (statusText == "error") {
      alert("出了点问题...");
    } else {
      alert("请检查网络是否正常");
    }  
/*
    if(statusText == "success") {
      alert('success'); 
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
  */
  }
  $('#myform').ajaxForm(options);
  
});
