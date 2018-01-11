	day = new Date();
	hour = day.getHours();
	if (hour>=7 && hour<12)
	{
		greeting = "Доброе утро";
	}
	else { 
		if(hour>=12 && hour<17)
		{
			greeting = "Добрый день";
		}
		else
		{
			if(hour>=17 && hour<24)
			{
				greeting = "Добрый вечер";
			}
			else 
			{
				if (hour>=0 && hour<7)
				{
					greeting = "Доброй ночи"; 
				}
		}
	 }
	document.write("Приветсвие: " + greeting + "<br>"); 
	console.log(greeting);
}
