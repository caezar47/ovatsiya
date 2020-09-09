/*var card = $('[data-services-card]');
var result = $('#services-result ul');
card.on('change', function(){
	if($(this).prop('checked') == true){
  		$('#services-result').addClass('is--visible');
  		$(document).find(result).append('<li>'+$(this).val()+'</li>');
	} else {
  		$(document).find("li:contains('"+$(this).val()+"')").remove();
  		if($('#services-result ul li').length == 0 ){
  			$('#services-result').removeClass('is--visible');
  		}
	}
});*/