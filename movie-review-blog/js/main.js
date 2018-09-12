function myFunction(x)
{
	x.classList.toggle("change");
}

function ShowHide()
{
	this.classList.toggle("active");
	var panel = this.nextElementSibling;
	if (panel.style.maxHeight)
	{
		panel.style.maxHeight = null;
	}
	else
	{
		panel.style.maxHeight = panel.scrollHeight + "px";
	} 
}

window.onload = function()
{
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++)
	{
		acc[i].addEventListener("click", ShowHide);
	}
}
