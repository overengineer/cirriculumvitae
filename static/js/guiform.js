function updateJson(field,value) {
	jsonData=JSON.parse(document.getElementById('json-data').value);
	jsonData[field]=value;
	document.getElementById('json-data').value=JSON.stringify(jsonData);	
}

function addJsonElement() {
/*
	target = document.getElementById('gui-select').value;
	f = function(target,side){
		console.log(target);
		console.log(side);
		jsonDataString=document.getElementById('json-data').value;
		jsonData=JSON.parse(jsonDataString);
		var i;
		for(i=0;i<jsonData[side].length;i=i+1) {
			current=jsonData[side][i]
			console.log(current)
			console.log(current.title)
			if(current.title==target){
				var j;
fields=document.getElementById('gui-'target).getElementsByClassName('gui-form-field');
				for(j=0;j<fields.length;j=j+1){
				field=fields.id.split('-')[-1];
current.content[j][title]=fields.
				
				}
			}
		}
		document.getElementById('json-data').value=JSON.stringify(jsonData)
	}
	f(target,'left');
	f(target,'right');*/
}

function changeContentForm(target){
	contentForms=document.getElementsByClassName('gui-content');
	var i;
	for(i=0;i<contentForms.length;i=i+1){
		if(contentForms[i].id=='gui-'+target){
			contentForms[i].hidden = false;		
		}else{
			contentForms[i].hidden = true;
		}
	}
}
