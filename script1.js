$(document).ready(function(){
		  
		  var $quote  = $('#quote');
		  var $author = $('#author');
    
		function ajaxCall() {
		  
		    $.ajax({
		      url: "https://api.forismatic.com/api/1.0/",
		      jsonp: "jsonp",
		      dataType: "jsonp",
		      data: {
		        method: "getQuote",
		        lang: "en",
		        format: "jsonp"
		      }
		    })
		    .done(update)
		    .fail(handleErr);
		}
    
    function update(response) {
			$quote.text(response.quoteText);
			$author.text(response.quoteAuthor);
      // set twitter url
		  $("#tweet-quote").attr('href','https://twitter.com/intent/tweet?text=' + response.quoteText + " " + response.quoteAuthor + '&hashtags=quotes,famous quotes') ;
		}

		function handleErr(jqxhr, textStatus, err) {
		  console.log("Request Failed: " + textStatus + ", " + err);
		}
  
    
		ajaxCall(); 
	    $('#new-quote').on('click', ajaxCall);
		 
		});