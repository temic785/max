function Math()
{
	
	var d, OneX, TwoX, Incr, y, reg, func = new Array;  
	d = document;
	var znach = new Array;

	OneX = d.getElementById("one").value;
	reg = /[^\d]/;
	zero = 0;
	if(reg.test(OneX))
	{
		alert('Вводить можно только цифры');
		return
	};
	if(OneX == 0){
		alert('Первое число должно быть меньше второго');
		return
	};
	if(Incr>TwoX-OneX){
		alert('Шаг не должен превышать разницы между начальным и конечным значением');
		return
	};
	for(var i = 0; i < 1; i++)
	{
		znach[i] = OneX;
		znach[i+1] = TwoX;

	}
	for(var i = 0; i < 1; i++){
		func[i] = 1/(2*OneX+1)*(2*OneX*OneX+3);
		func[i+1] = 1/(2*TwoX+1)*(2*OneX*OneX+3);
	}


	for (; OneX <= TwoX; OneX = TwoX+Incr)
	{
		y = 1/(2*OneX+1)*(2*(TwoX*TwoX)+3);

	};
	console.log(znach);
	console.log(func);
	d.getElementById("r").innerHTML=y;
	d.getElementById("x").innerHTML=znach;
	d.getElementById("y").innerHTML= func;
}