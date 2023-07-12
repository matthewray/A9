dragElement(document.getElementById('eye1'));
dragElement(document.getElementById('eye2'));
dragElement(document.getElementById('eye3'));
dragElement(document.getElementById('eye4'));
dragElement(document.getElementById('eye5'));
dragElement(document.getElementById('eye6'));
dragElement(document.getElementById('eye7'));
dragElement(document.getElementById('eye8'));
dragElement(document.getElementById('eye9'));
dragElement(document.getElementById('eye10'));
dragElement(document.getElementById('eye11'));
dragElement(document.getElementById('eye12'));
dragElement(document.getElementById('eye13'));
dragElement(document.getElementById('eye14'));
dragElement(document.getElementById('eye15'));
dragElement(document.getElementById('eye16'));
dragElement(document.getElementById('eye17'));
dragElement(document.getElementById('eye18'));
dragElement(document.getElementById('eye19'));
dragElement(document.getElementById('eye20'));

function dragElement(faceElement) {
	//set 4 positions for positioning on the screen
	let pos1 = 0,
		pos2 = 0,
		pos3 = 0,
		pos4 = 0;
    faceElement.onpointerdown = pointerDrag;


function pointerDrag(e) {
	e.preventDefault();
	console.log(e);
	pos3 = e.clientX;
	pos4 = e.clientY;

    document.onpointermove = elementDrag;
    document.onpointerup = stopElementDrag;
}

function elementDrag(e) {
	pos1 = pos3 - e.clientX;
	pos2 = pos4 - e.clientY;
	pos3 = e.clientX;
	pos4 = e.clientY;
	console.log(pos1, pos2, pos3, pos4);
	faceElement.style.top = faceElement.offsetTop - pos2 + 'px';
	faceElement.style.left = faceElement.offsetLeft - pos1 + 'px';
}

function stopElementDrag() {
	document.onpointerup = null;
	document.onpointermove = null;
}
}