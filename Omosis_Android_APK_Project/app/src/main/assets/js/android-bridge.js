(function () {
  window.OmosisNative = {
    isAndroid: !!window.OmosisAndroid,
    share: function (text) {
      if (window.OmosisAndroid && OmosisAndroid.share) OmosisAndroid.share(String(text));
      else if (navigator.share) navigator.share({text: String(text)}).catch(()=>{});
    },
    toast: function (text) {
      if (window.OmosisAndroid && OmosisAndroid.toast) OmosisAndroid.toast(String(text));
    }
  };
})();
