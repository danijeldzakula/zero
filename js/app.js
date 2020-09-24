function submit_comment(){
  var comment = $('.commentar').val();
  el = document.createElement('li');
  el.className = "box_result row";
  el.innerHTML =
		'<div class=\"avatar_comment col-md-1\">'+
		  '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>'+
		'</div>'+
		'<div class=\"result_comment col-md-11\">'+
		'<h4>Anonimous</h4>'+
		'<p>'+ comment +'</p>'+
		'<div class=\"tools_comment\">'+
		'<a class=\"like\" href=\"javascript:void(0);\">Like</a><span aria-hidden=\"true\"> · </span>'+
		'<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>'+
		'<span aria-hidden=\"true\"> · </span>'+
		'<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>'+
			'<span>1m</span>'+
		'</div>'+
		'<ul class="child_replay"></ul>'+
		'</div>';
	document.getElementById('list_comment').prepend(el);
	$('.commentar').val('');
}

$(document).ready(function() {
	$('#list_comment').on('click', '.like', function (e) {
		$current = $(this);
		var x = $current.closest('div').find('.like').text().trim();
		var y = parseInt($current.closest('div').find('.count').text().trim());
		
		if (x === "Like") {
			$current.closest('div').find('.like').text('Unlike');
			$current.closest('div').find('.count').text(y + 1);
		} else if (x === "Unlike"){
			$current.closest('div').find('.like').text('Like');
			$current.closest('div').find('.count').text(y - 1);
		} else {
			var replay = $current.closest('div').find('.like').text('Like');
			$current.closest('div').find('.count').text(y - 1);
		}
	});
	
	$('#list_comment').on('click', '.replay', function (e) {
		cancel_reply();
		$current = $(this);
		el = document.createElement('li');
		el.className = "box_reply row";
		el.innerHTML =
			'<div class=\"col-md-12 reply_comment\">'+
				'<div class=\"row\">'+
					'<div class=\"avatar_comment col-md-1\">'+
					  '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>'+
					'</div>'+
					'<div class=\"box_comment col-md-10\">'+
					  '<textarea class=\"comment_replay\" placeholder=\"Add a comment...\"></textarea>'+
					  '<div class=\"box_post\">'+
						'<div class=\"pull-right\">'+
						  '<span>'+
							'<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\" />'+
							'<i class=\"fa fa-caret-down\"></i>'+
						  '</span>'+
						  '<button class=\"cancel\" onclick=\"cancel_reply()\" type=\"button\">Cancel</button>'+
						  '<button onclick=\"submit_reply()\" type=\"button\" value=\"1\">Reply</button>'+
						'</div>'+
					  '</div>'+
					'</div>'+
				'</div>'+
			'</div>';
		$current.closest('li').find('.child_replay').prepend(el);
	});
});

function submit_reply(){
  var comment_replay = $('.comment_replay').val();
  el = document.createElement('li');
  el.className = "box_reply row";
  el.innerHTML =
		'<div class=\"avatar_comment col-md-1\">'+
		  '<img src=\"https://static.xx.fbcdn.net/rsrc.php/v1/yi/r/odA9sNLrE86.jpg\" alt=\"avatar\"/>'+
		'</div>'+
		'<div class=\"result_comment col-md-11\">'+
		'<h4>Anonimous</h4>'+
		'<p>'+ comment_replay +'</p>'+
		'<div class=\"tools_comment\">'+
		'<a class=\"like\" href=\"#\">Like</a><span aria-hidden=\"true\"> · </span>'+
		'<i class=\"fa fa-thumbs-o-up\"></i> <span class=\"count\">0</span>'+
		'<span aria-hidden=\"true\"> · </span>'+
		'<a class=\"replay\" href=\"#\">Reply</a><span aria-hidden=\"true\"> · </span>'+
			'<span>1m</span>'+
		'</div>'+
		'<ul class="child_replay"></ul>'+
		'</div>';
	$current.closest('li').find('.child_replay').prepend(el);
	$('.comment_replay').val('');
	cancel_reply();
}

function cancel_reply(){
	$('.reply_comment').remove();
}

$(document).ready(function() {});

$(function () {

    var timerdate = new Date();
    var nextdate = new Date();

    var curr_day = timerdate.getDate();
    var curr_hrs = timerdate.getHours();
    var curr_min = timerdate.getMinutes();
    var curr_sec = timerdate.getSeconds();

    var sec = 59 - curr_sec;
    var min = 59 - curr_min;
    var hrs = 23 - curr_hrs;
    var days = (curr_day + 0) - curr_day;

    var timer = setInterval(function () {

        sec--;

        if (sec == -1) {
            sec = 59;
            min--;
        }

        if (min == -1) {
            min = 59;
            hrs--;
        }

        if (hrs == -1) {
            hrs = 23;
            days--;
        }

        if (days == -1) {
            days = 30;
        }
        
        days = days.toString();
        hrs = hrs.toString();
        min = min.toString();
        sec = sec.toString();
        
        if (hrs.length < 2){
            hrs = '0' + hrs;
        }
        if (days.length < 2){
            days = '0' + days;
        }
        if (min.length < 2){
            min = '0' + min;
        }
        if (sec.length < 2){
            sec = '0' + sec;
        }
        
        var daysArray = days.split("");
        var hrsArray = hrs.split("");
        var minArray = min.split("");
        var secArray = sec.split("");

        $('.counter-hours .value-first').text(hrs[0]);
        $('.counter-hours .value-second').text(hrs[1]);

        $('.counter-minuts .value-first').text(min[0]);
        $('.counter-minuts .value-second').text(min[1]);        

        $('.counter-seconds .value-first').text(sec[0]);
        $('.counter-seconds .value-second').text(sec[1]);

    }, 1000);
	
    $('.scrollToOrder').click(function(e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $($(e.target).attr('href')).offset().top - 102
        }, 600);
        return false;
    });
});



