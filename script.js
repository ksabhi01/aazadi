const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Aug 15, 2019 00:00:00').getTime(),
    x = setInterval(function() {

      let now = new Date().getTime(),
          distance = countDown - now;

      document.getElementById('days').innerText = Math.floor(distance / (day)),
        document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
		//document.getElementById('sec').classList.add("flip");

    }, second)
	
	
	
	// form
	
$(document).ready(function(){
	$('body').on('click', '#formsubmit', function () {
		$.ajax({
			url : 'https://reqres.in/api/users',
			type: 'POST',
			data: {
				name : $('#cname').val(),
				ticket : $('#tkt').val(),
			},
			success: function(result){
				console.log(result);
				$('form').css({
					'display' : 'none'
				});
				$('#thanks').css({
					'display' : 'block'
				});
				$('#conname').html(result.name);
			},
			error:function(){
				$('h1').html('ERROR');
			}
		});
	});
});	
	