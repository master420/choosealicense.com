// Generated by CoffeeScript 1.6.3
(function() {
  var Choosealicense;

  Choosealicense = (function() {
    Choosealicense.prototype.qtip_position = {
      my: "top center",
      at: "bottom center"
    };

    Choosealicense.prototype.categories = {
      required: "Required",
      permitted: "Permitted",
      forbidden: "Forbidden"
    };

    function Choosealicense() {
      this.initTooltips();
      if (typeof ZeroClipboard !== "undefined" && ZeroClipboard !== null) {
        this.initClipboard();
      }
    }

    Choosealicense.prototype.initTooltips = function() {
      var category, label, rules, text, _ref;
      for (category in annotations) {
        rules = annotations[category];
        for (label in rules) {
          text = rules[label];
          $(".license-rules ul.license-" + category + " li." + label).attr("title", text);
        }
      }
      _ref = this.categories;
      for (category in _ref) {
        label = _ref[category];
        $(".license-" + category + " li").qtip({
          content: {
            text: false,
            title: {
              text: label
            }
          },
          position: this.qtip_position,
          style: {
            classes: "qtip-shadow qtip-" + category
          }
        });
      }
      return false;
    };

    Choosealicense.prototype.initClipboard = function() {
      var clip;
      $(".js-clipboard-button").data("clipboard-prompt", $(".js-clipboard-button").text());
      clip = new ZeroClipboard($(".js-clipboard-button"), {
        moviePath: "/javascripts/ZeroClipboard.swf"
      });
      clip.on("mouseout", this.clipboardMouseout);
      clip.on("complete", this.clipboardComplete);
      return clip;
    };

    Choosealicense.prototype.clipboardMouseout = function(client, args) {
      return this.innerText = $(this).data("clipboard-prompt");
    };

    Choosealicense.prototype.clipboardComplete = function(client, args) {
      return this.innerText = "Copied!";
    };

    return Choosealicense;

  })();

  $(function() {
    return new Choosealicense();
  });

}).call(this);
