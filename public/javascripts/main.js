$(document).ready(function() {

             function valorSplit(valor){
	            var query = valor;
				var partes = query.split('&');
				var data = {};

				partes.forEach(function (parte) {
				    var chaveValor = parte.split('=');
				    var chave = chaveValor[0];
				    var valor = chaveValor[1];
				    data[chave] = valor;
			    });
			    return data;
             }

            //pegar valor da url
			var monitor=valorSplit(location.search.slice(1));

            // define se é monitor ou não
            if(monitor.monitor == 1 ){
            	$("#container").hide();
            	$("#monitor").show();
            }else{
            	$("#monitor").hide();
            	$("#container").show();

            } 
          
         //mostra a qtd dos captulos do livro escolhido   
		$("select").change(function(){
           
			var optionVal= $(this).val();
			var optionQtd = optionVal.split('=');
				    var idLivro = optionQtd[0];
				    var qtdChapter = parseInt(optionQtd[1]) + 1;
				  
			$("#chapter").children().remove();	    
		    var i=1;
			while(i < qtdChapter){
				//alert(i);
				$("#chapter").append('<div class="chapterSelect">'+i+'</div>');
				i++;
			}

				//seta o campo do input de capitulos
		    $(".chapterSelect").click(function(){
		    	// alert($(this).text());
		    	 $(".chapterSelect").removeClass("chapterSelected");
		    	 $(this).addClass("chapterSelected");
	             $('#cap').val($(this).text());
	             $('#botaoBuscar').removeAttr("disabled")
	            
		    });
		});
	    
	     
             
    	
	      // função do socket
	      $(function () {
	        var socket = io();
	        $('p').click(function(){
	        	 
	         socket.emit('text message',$(this).text(), $("#nCap").text(), $("#resultadoBusca h1").text());
	         //socket.emit('capitulo',$("#nCap").text());
	        
	          return false;

	        });
	        socket.on('text message', function(msg,cap,livro){
	          //$('#messages').val('');
	          $('#versiculo').text(msg);
	          $('#monitor p').text(cap);
	          $('#monitor h2').text(livro);

	        }); 

	        
	      });
        
     });