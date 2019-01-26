    function togglePanel (button,id) {
		panel=document.getElementById(id);
		panel.hidden=!panel.hidden;
		if (panel.hidden) {
			button.value = "\u25BC";
		} else {
			button.value= "\u25B2";
		}
	}

      var readTextFile = function(event,targetId) {
        var input = event.target;
        var reader = new FileReader();
        reader.onload = function(){
          var text = reader.result;
          var node = document.getElementById(targetId);
          node.innerText = text;
		  node.value = text;
        };
        reader.readAsText(input.files[0]);
      };
