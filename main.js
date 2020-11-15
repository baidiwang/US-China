$(() => {
	$("p[data-id]").each(function () {
		const $this_paragraph = $(this);
		const id = $this_paragraph.data("id");
		const $img = $(`img[id='${id}']`);

		new Watch($this_paragraph).inView(() => {
			$("img.active").removeClass("active");
			$img.addClass("active");
		});
	});
});