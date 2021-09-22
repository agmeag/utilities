function removeSpaces(string) {
	return string.split(' ').join('');
}

function myFunction() {
	var copyText = document.getElementById("myInput");
	document.getElementById("prev-clipboard").style.display = "flex";
	copyText.value = removeSpaces(copyText.value);
	copyText.select();
	copyText.setSelectionRange(0, 99999)
	document.execCommand("copy");
	//alert("Texto copiado: " + copyText.value);
	const alertHTML =
		'<button type="button" class="close" data-dismiss="alert">&times;</button><div style="display: flex; justify-content:space-around; align-items:center"><div>' + copyText.value + '</div><button type="button" class="btn btn-primary" style="border-radius:20px !important" onclick="copyStringToClipboard(`' + copyText.value + '`);">copy</button></div>';

	var alert = document.createElement('div');
	alert.classList.add('alert-message');
	alert.classList.add('alert');
	alert.classList.add('alert-success');
	alert.classList.add('alert-dismissible');
	alert.classList.add('fade');
	alert.classList.add('show');
	alert.innerHTML = alertHTML;
	document.getElementById("prev-clipboard").appendChild(alert);
}

// function myFunction() {
// 	var copyText = document.getElementById("myInput");
// 	copyText.value = removeSpaces(copyText.value);
// 	copyText.select();
// 	copyText.setSelectionRange(0, 99999)
// 	document.execCommand("copy");
// 	//alert("Texto copiado: " + copyText.value);
// 	const alertHTML =
// 		'<div class="alert alert-success alert-dismissible fade show" style="margin-top:1%; margin-left:20%; margin-right:20%"><button type="button" class="close" data-dismiss="alert">&times;</button><div style="display: flex; justify-content:space-around; align-items:center"><div>' + copyText.value + '</div><button type="button" class="btn btn-primary" onclick="copyStringToClipboard(`' + copyText.value + '`);">copy</button></div></div>'
// 	document.body.insertAdjacentHTML('beforeend', alertHTML);


// }

function copyStringToClipboard(str) {
	// Create new element
	var el = document.createElement('textarea');
	// Set value (string to be copied)
	el.value = str;
	// Set non-editable to avoid focus and move outside of view
	el.setAttribute('readonly', '');
	el.style = { position: 'absolute', left: '-9999px' };
	document.body.appendChild(el);
	// Select text inside element
	el.select();
	// Copy text to clipboard
	document.execCommand('copy');
	// Remove temporary element
	document.body.removeChild(el);
}


function clearClipboard() {
	document.getElementById('myInput').value = '';
	document.getElementById("prev-clipboard").style.display = "none";
	document.getElementById("prev-clipboard").innerHTML = '';
}