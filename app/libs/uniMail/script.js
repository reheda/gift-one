$(document).ready(function() {

	//E-mail Ajax Send
	$("#callback-form-popup, #callback-form-contacts").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find(".success").addClass(".active").css('display', 'flex').hide().fadeIn();
			$(th).find(".success").addClass(".active").css({
				'font-weight': 'bold',
				'color': '#fff',
				'display': 'flex'
			}).find('p').html('Спасибо за заявку!').hide().fadeIn();
			setTimeout(function() {
				// Done Functions
				$(th).find(".success").removeClass(".active").fadeOut();
				th.trigger("reset");
				$.magnificPopup.close();
			}, 3000);
		}).fail(function(){
			$(th).find(".success").addClass(".active").css({
				'font-weight': 'bold',
				'color': '#D24D57',
				'display': 'flex'
			}).find('p').html('Не удается отправить!<br><br>Попробуйте позже или обратитесь по указанному номеру на сайте').hide().fadeIn();
			setTimeout(function() {
				$(th).find(".success").removeClass(".active").fadeOut();
				// th.trigger("reset");
				$.magnificPopup.close();
			}, 5000);
		});
		return false;
	});

});