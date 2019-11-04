checkColor(color) {
      var hex = color.replace("#", "");
      var c_r,
        c_g,
        c_b,
        brightness = "";
      if (hex.length == 3) {
        c_r = parseInt(hex.substr(0, 2), 16);
        c_g = parseInt(hex.substr(1, 2), 16);
        c_b = parseInt(hex.substr(2, 2), 16);
        brightness = (c_r * 299 + c_g * 587 + c_b * 114) / 1000;
      } else {
        c_r = parseInt(hex.substr(0, 2), 16);
        c_g = parseInt(hex.substr(2, 2), 16);
        c_b = parseInt(hex.substr(4, 2), 16);
      }
      return brightness > 155;
    },
