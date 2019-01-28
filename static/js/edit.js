    function togglePanelVertical (button) {
		console.log(button)
		hide=document.getElementById('hide-vertical');
		if (hide.style["display"]=="block"){
			hide.style["display"]="none";
			button.value = "\u25BC";
		} else {
			hide.style["display"]="block";
			button.value= "\u25B2";
		}
	}

    function togglePanelHorizontal (button) {
		console.log(button)
		hide=document.getElementById('hide-horizontal');
		edit=document.getElementById('edit');
		view=document.getElementById('view');
		if (hide.style["display"]=="block"){
			hide.style["display"]="none";
			button.value = "\u25B6";
			edit.style["width"]="20px";
			view.style["left"]="20px";
		} else {
			hide.style["display"]="block";
			button.value= "\u25C0";
			edit.style["width"]="600px";
			view.style["left"]="600px";
		}
		button.disabled=false;
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
