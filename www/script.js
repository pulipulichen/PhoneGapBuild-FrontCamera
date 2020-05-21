ready = function () {
  var _config = {
    //action: "android.intent.extras.CAMERA_FACING",
    extras: {
      "USE_FRONT_CAMERA": true,
      "LENS_FACING_FRONT": 1,
      "CAMERA_FACING": 1,
    }
  };

  try {
    var exitApp = function () {
      navigator.app.exitApp();
    }

    window.plugins.webintent.startActivity(_config, exitApp, exitApp);
  } catch (e) {
    alert(e);
  }
};
