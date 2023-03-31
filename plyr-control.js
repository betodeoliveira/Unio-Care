$(".plyr_component").each(function (index) {
    let thisComponent = $(this);
  
    // create plyr settings
    let player = new Plyr(thisComponent.find(".plyr_video")[0], {
      controls: ["play", "progress", "current-time", "mute", "fullscreen"],
      resetOnEnd: true
    });
    
    // custom video cover
    thisComponent.find(".plyr_cover").on("click", function () {
      player.play();
    });
    player.on("ended", (event) => {
      thisComponent.removeClass("hide-cover");
    });
  
    // pause other playing videos when this one starts playing
    player.on("play", (event) => {
          $(".plyr_component").removeClass("hide-cover");
      thisComponent.addClass("hide-cover");
      let prevPlayingComponent = $(".plyr--playing").closest(".plyr_component").not(thisComponent);
      if (prevPlayingComponent.length > 0) {
        prevPlayingComponent.find(".plyr_pause-trigger")[0].click();
      }
    });
    thisComponent.find(".plyr_pause-trigger").on("click", function () {
      player.pause();
    });
  
    // exit full screen when video ends
    player.on("ended", (event) => {
      if (player.fullscreen.active) {
        player.fullscreen.exit();
      }
    });
    // set video to contain instead of cover when in full screen mode
    player.on("enterfullscreen", (event) => {
      thisComponent.addClass("contain-video");
    });
    player.on("exitfullscreen", (event) => {
      thisComponent.removeClass("contain-video");
    });
  });