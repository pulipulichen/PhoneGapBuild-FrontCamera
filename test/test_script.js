ready = function () {
  var exitApp = function (e) {
    if (e && e !== 'OK') {
      alert(e)
    }
    navigator.app.exitApp();
  }
  
  navigator.camera.getPicture(exitApp, exitApp,
  {
      destinationType: Camera.DestinationType.DATA_URL
  });
  
  // -----------------------------------------
  return false
  
  //alert('AAA')
  
  function setOptions(srcType) {
      var options = {
          // Some common settings are 20, 50, and 100
          quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
      }
      return options;
  }
  
  window.alert(JSON.stringify(Camera.PictureSourceType))
  var srcType = Camera.PictureSourceType.CAMERA;
  var options = setOptions(srcType);
  //window.alert(JSON.stringify(options))
  //var func = createNewFileEntry;
  //window.alert(navigator.camera.getPicture)
  navigator.camera.getPicture(function cameraSuccess(imageUri) {

      //displayImage(imageUri);
      // You may choose to copy the picture, save it somewhere, or upload.
      //func(imageUri);
      exitApp()
  }, function cameraError(error) {
      alert(error)
      //console.debug("Unable to obtain picture: " + error, "app");
    navigator.app.exitApp();
  }, options);
  
  return
  var _config = {
    action: "android.media.action.IMAGE_CAPTURE",
    //action: "",
    extras: {
      "USE_FRONT_CAMERA": 1
      //"android.intent.extra.USE_FRONT_CAMERA": true,
      //"android.intent.extra.LENS_FACING_FRONT": 1,
      //"USE_FRONT_CAMERA": 1,
      //"FLASH_MODE_ON": 1
      //"LENS_FACING_FRONT": 1,
      //"CAMERA_FACING": 1,
      //"android.intent.extra.CAMERA_FACING_FRONT": 1,
      //"CAMERA_FACING_FRONT": 1,
    }
  };

  try {

    window.plugins.webintent.startActivity(_config, exitApp, exitApp);
  } catch (e) {
    alert(e);
  }
};
