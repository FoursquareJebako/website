
export let $ = (sel, type=undefined) => {
	if (type == 'id')
	return document.getElementById(sel);
	if (type == 'class')
	return document.getElementsByClassName(sel);
	if (!type)
	return document.querySelector(sel)
}