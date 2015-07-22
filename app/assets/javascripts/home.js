Dropzone.options.myForm = {
  paramName: "myFile", // The name that will be used to transfer the file
  maxFilesize: 2, // MB
  autoProcessQueue: false,
  uploadMultiple: true,
  init: function(){
  	var myFormDropzone = this;
  	$('input[name="submit"]').on('click', function(e){
  	  e.preventDefault();
      e.stopPropagation();
      myFormDropzone.processQueue();
	});
  }
};
