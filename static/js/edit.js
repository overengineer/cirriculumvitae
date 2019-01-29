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

	function reloadPage() {
		window.location.replace(location.pathname);
	}

	function importJson() {
		document.getElementById("input-file").click();
	}

	function colorSelect() {
		checkbox = document.getElementById("auto-color");
		document.getElementById("theme-color").click();
		autoColorSet(checkbox,false);
}

	function colorUpdate(caller) {
		button = document.getElementById("color-button");
		button = document.getElementById("color-button");
		button.style["background-color"]=caller.value;
}

	function autoColorUpdate() {
		checkbox = document.getElementById("auto-color");
		autoColorSet(checkbox,checkbox.checked);
}

	function autoColorReset() {
		checkbox = document.getElementById("auto-color");
		autoColorSet(checkbox,false);
}

	function autoColorToggle() {
		checkbox = document.getElementById("auto-color");
		autoColorSet(checkbox,!checkbox.checked);
	}

	function autoColorSet(checkbox,check) {
		autobutton = document.getElementById("autocolor-button");
		colorbutton = document.getElementById("color-button");
		colorinput=document.getElementById("theme-color");
		checkbox.checked=check;
		if(check) {
			autobutton.value="autocolor \u2713";
			autobutton.style["background-color"]="darkslategray";
			colorbutton.style["background-color"]="darkorange";
		}else{
			autobutton.style["background-color"]="darkorange";
			autobutton.value="autocolor \u274C";
			colorbutton.style["background-color"]=colorinput.value;
		}
		}
window.onload=function(){
		checkbox = document.getElementById("auto-color");autoColorSet(checkbox,checkbox.checked)}

