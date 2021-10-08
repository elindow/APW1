let url = '';
let iframe_url = '';
let iframe = document.createElement('iframe');
let body = document.querySelector('body');


function onPageLoad() {
	fetch(
		"https://cors-anywhere.herokuapp.com/https://api-v2.soundcloud.com/me/play-history/tracks?client_id=yoxLvaFlJ3V5LbNCt53Cwvw5KXKKxWfn&limit=25&offset=0&linked_partitioning=1&app_version=1633006230&app_locale=en",
		{
			method: "GET",
			headers: {
				"Authorization": "OAuth 2-292970-726801460-PaQq9rJCoQsVOS"
			}
		},
	)
		.then(function (response){
			return response.json();
		})
		.then(function(text){
			console.log(text);
			console.log(text.collection[0].track.uri);
			url = text.collection[0].track.uri;
			iframe_url = "https://w.soundcloud.com/player/?url=" + url + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
			console.log(iframe_url);
			iframe.src = iframe_url;
			body.appendChild(iframe);
		})
}

window.onload = onPageLoad();

// curl -X GET "https://api-v2.soundcloud.com/me/play-history/tracks?client_id=yoxLvaFlJ3V5LbNCt53Cwvw5KXKKxWfn&limit=25&offset=0&linked_partitioning=1&app_version=1633006230&app_locale=en" -H "Authorization: OAuth 2-292970-726801460-PaQq9rJCoQsVOS"

// <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/842958388&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/jayeskar" title="Jay Eskar" target="_blank" style="color: #cccccc; text-decoration: none;">Jay Eskar</a> · <a href="https://soundcloud.com/jayeskar/atla" title="Jay Eskar - Atlantis" target="_blank" style="color: #cccccc; text-decoration: none;">Jay Eskar - Atlantis</a></div>

