//Adjust copyright date yearly
function Copyright(startYear)
{
	var endYear = new Date().getFullYear();
	if(startYear == endYear)
	{
		document.write(startYear);
	}
	else
	{
		document.write(startYear + " - " + endYear);
	}
}
