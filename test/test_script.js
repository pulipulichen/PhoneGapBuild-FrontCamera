ready = function () {
  var exitApp = function (e) {
    alert(e)
    navigator.app.exitApp();
  }
  navigator.camera.getPicture(exitApp, exitApp,
  {
      destinationType: Camera.DestinationType.FILE_URI,
      sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
      popoverOptions: new CameraPopoverOptions(300, 300, 100, 100, Camera.PopoverArrowDirection.ARROW_ANY, 300, 600)
  });
  
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
