var containerId = "buzzsprout-large-player"
var buzzsproutPlayerContainer = document.getElementById(containerId);

function renderBuzzsproutPlayerHTML() {
   return unescape("<div class=\"episode\">\n<iframe id=\"player_iframe\" src=\"https://www.buzzsprout.com/2379718?client_source=large_player&amp;iframe=true&amp;referrer=https%3A%2F%2Fwww.buzzsprout.com%2F2379718.js%3Fcontainer_id%3Dbuzzsprout-large-player%26player%3Dlarge\" width=\"100%\" height=\"375\" frameborder=\"0\" scrolling=\"no\" title=\"DIY Eco Guy\"><\/iframe>\n<\/div>\n"); 
 }

if (buzzsproutPlayerContainer) {
  buzzsproutPlayerContainer.innerHTML = renderBuzzsproutPlayerHTML();
} else {
  document.write(renderBuzzsproutPlayerHTML());
}
