$(() => {
	$("[data-id]").each(function () {
		const $this_paragraph = $(this);
		const id = $this_paragraph.data("id");
		const $img = $(`img[id='${id}']`);

		new Watch($this_paragraph).inView(() => {
			$("img.active").removeClass("active");
			$img.addClass("active");
		});
	});
});





const players = {};

function onYouTubeIframeAPIReady() {
	$(".yt_player").each(function () {
		const player = $(this);
		players[player.data("id")] = new YT.Player(player[0], {
			height: '390',
			width: '640',
			videoId: player.data("id"),
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange
			}
		});
	});

}

function onPlayerReady(event) {
	console.log(event);
	console.log("The player is ready");
}

function onPlayerStateChange(event) {
	console.log("The player has changed");
}

$("body").on("click", ".fa-play", function (e) {
	e.preventDefault();

	const this_play_button = $(this);
	const this_controls = this_play_button.closest(".controls");
	const player_id = this_controls.data("id");

	players[player_id].playVideo();
});


$("body").on("click", ".fa-pause", function (e) {
	e.preventDefault();

	const this_pause_button = $(this);
	const this_controls = this_pause_button.closest(".controls");
	const player_id = this_controls.data("id");

	players[player_id].pauseVideo();
});