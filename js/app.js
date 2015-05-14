$(function () {


	var interval,
		$span = $('.punkbit header p span');

	function setColour() {

		console.log('setColour');

		interval = setTimeout(function () {

			clearInterval(interval);

			var hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);

			// change colour
			$span.css('text-shadow', '0px 0px 11px ' + hex)

			setColour();

		}, 300);

	}

	setColour();

});