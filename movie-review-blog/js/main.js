function ToggleNav(x)
{
	x.classList.toggle("change");
	
	if (document.getElementById("mySidenav").style.width == "250px")
	{
		CloseNav();
	}
	else
	{
		OpenNav();
	}
}

function OpenNav()
{
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function CloseNav()
{
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
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
