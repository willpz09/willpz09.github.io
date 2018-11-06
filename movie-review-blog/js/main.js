window.addEventListener("resize", AdjustFooter);

window.onload = function()
{
	var acc = document.getElementsByClassName("accordion");
	var i;
	
	for (i = 0; i < acc.length; i++)
	{
		acc[i].addEventListener("click", ShowHide);
	}
	
	AdjustFooter();
}

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

function AdjustFooter() 
{
	var x = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
	var y = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
	var start = "<div class='footer'>";
	var a1 = "<a href='#' class='fa fa-facebook'></a>";
	var a2 = "<a href='#' class='fa fa-twitter'></a>";
	var a3 = "<a href='#' class='fa fa-youtube'></a>";
	var a4 = "<a href='#' class='fa fa-instagram'></a>";
	var a5 = "<a href='#' class='fa fa-linkedin'></a>";
	var a6 = "<a href='#' class='fa fa-pinterest'></a>";
	var a7 = "<a href='#' class='fa fa-snapchat-ghost'></a>";
	var a8 = "<a href='#' class='fa fa-skype'></a>";
	var a9 = "<a href='#' class='fa fa-android'></a>";
	var index1 = "<a href='../index.html' class='home-icon'><img src='../images/favicon.ico' alt='To Portfolio'></a>";
	var index2 = "<p><a href='../index.html' class='home-icon'><img src='../images/favicon.ico' alt='To Portfolio'></a></p>";
	var a10 = "<a href='#' class='fa fa-dribbble'></a>";
	var a11 = "<a href='#' class='fa fa-vimeo'></a>";
	var a12 = "<a href='#' class='fa fa-tumblr'></a>";
	var a13 = "<a href='#' class='fa fa-foursquare'></a>";
	var a14 = "<a href='#' class='fa fa-stumbleupon'></a>";
	var a15 = "<a href='#' class='fa fa-flickr'></a>";
	var a16 = "<a href='#' class='fa fa-yahoo'></a>";
	var a17 = "<a href='#' class='fa fa-reddit'></a>";
	var a18 = "<a href='#' class='fa fa-rss'></a>";	
	var end = "</div>";
	var foot1 = start + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + index1 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 + a18 + end;
	var foot2 = start + index2 + a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10 + a11 + a12 + a13 + a14 + a15 + a16 + a17 + a18 + end;
	
	if (x > 900)
	{
		document.getElementById("foot").innerHTML = foot1;
	}
	else
	{
		document.getElementById("foot").innerHTML = foot2;
	}
}
