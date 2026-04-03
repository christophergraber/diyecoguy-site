
  var containerId = "buzzsprout-player-15589677"
  var buzzsproutPlayerContainer = document.getElementById(containerId);

  function renderBuzzsproutPlayerHTML() {
    return unescape("\n\n<iframe src=\"https://www.buzzsprout.com/2379718/episodes/15589677-portable-electric-induction-cooktops-a-natural-gas-alternative?client_source=small_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F2379718%2F15589677-portable-electric-induction-cooktops-a-natural-gas-alternative.js%3Fcontainer_id%3Dbuzzsprout-player-15589677%26player%3Dsmall\" loading=\"lazy\" width=\"100%\" height=\"200\" frameborder=\"0\" scrolling=\"no\" title=\"DIY Eco Guy, Portable Electric Induction Cooktops, a Natural Gas Alternative\"><\/iframe>\n\n\n"); 
  }

  if (buzzsproutPlayerContainer) {
    buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
  } else {
    document.write(renderBuzzsproutPlayerHTML());
  }

