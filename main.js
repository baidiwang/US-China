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




/* video part */
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



/* timeline part */
$(() => {
	$("p[id]").each(function () {
		console.log("Paragraph found");
		const $this_paragraph = $(this);
		const id = $this_paragraph.attr("id");
		const $a_tag = $(`a[href='#${id}']`);
		const $this_li = $a_tag.closest("li");

		new Watch($this_paragraph).inView(() => {
			$("li.active").removeClass("active");
			$this_li.addClass("active");
		});
	});
});