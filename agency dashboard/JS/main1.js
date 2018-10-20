// var selection = {};
// var button ={};
// $(document).ready(function(){
	
// 	  $('img').click(function () {
// 	/*$('#gallery img').click(function(){
// 		if('border-color = red')
// 			{
// 				$(this).css('border', '1px solid #fff');
// 			}
// 		else{
// 			$(this).css('border', '1px solid red');
// 		}*/
// 	var myClass = $(this).attr("class")
// 	if(selection[$(this).attr("class")] === true)	
// 	{	delete selection[$(this).attr("class")];
// 		$(this).removeClass('border-red');
// 	}
// 	else
// 	{	selection[$(this).attr("class")]=true;
		
// 		$(this).addClass('border-red');	
// 	}
// 	console.log(selection);

// 	});
	
// });	

// function ajaxfunc(){
// 	var selarr=[];
// 	$.each(selection, function(key,val){
// 		selarr.push(key);
// 	});
// 	console.log(selarr, JSON.stringify(selarr));
// 		$.ajax({
// 			type:"POST",
// 			url : "http://127.0.0.1:8000/select/",
// 			data: JSON.stringify(selection),
// 			contentType: "application/json",
// 			datatype: 'json',
// 			success: function(res){
// 				console.log(res);
// 				window.location.href = "http://www.google.com"
// 			},
// 			error: function(res){console.log('error occured')},
// 			complete: function(res){console.log('complete')}
// 		});
// 	};  

// function profilebutton(val){
// 	var host = window.location.origin;
	

// };


// function button (){
		
// 	$('.button1').click(function() {
// 		$(this).attr('class')
//     document.location.href=$(this).attr('id');
// 	});
	
// 	};

$(document).ready(function(){
$('input[type=checkbox]').attr('checked',false);
})