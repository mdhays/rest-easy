function loadChanges() {
	let xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			// The response object needs to be parsed so we can access it's properties.
			let parsedRes = JSON.parse(this.responseText);
			console.log(parsedRes[0]._id);
		}
	};
	xhttp.open("GET", "http://localhost:3000/tasks");
	xhttp.send();
}