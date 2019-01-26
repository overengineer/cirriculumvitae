    window.onload = function(e) {
        tabs = document.getElementsByClassName("default-tab");
        var i;
        for (i = 0; i < tabs.length; i = i + 1) {
            tabs[i].click()
            console.log("default tab: " + tabs[i].id);
        }
    }


    function toggle_tab(evt, target) {

        tabs = document.getElementsByClassName("tab-panel");
        var i;
        for (i = 0; i < tabs.length; i = i + 1) {
            if (tabs[i].id == target) {
                tabs[i].hidden = false;
            } else {
                tabs[i].hidden = true;
            }
        }
        console.log("toggle tab: " + target);
    

		tablinks = document.getElementsByClassName("tab-link");
		for (i = 0; i < tablinks.length; i++) {
		    tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		evt.currentTarget.className += " active";
    }
