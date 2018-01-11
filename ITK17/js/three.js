function maxim(){	
var My_array=new Array;
//в переменную str записываем содержимое поля
//array_str
var str=document.array_form.array_str.value;
//делим строку str по разделителю «пробел»
//и записываем полученные подстроки в массив
My_array=str.split(' ');
// находим максимальный элемент
var max=parseInt(My_array[0]);
for(var i=1;i<My_array.length-1;i++)
       if (parseInt(My_array[i])>max)
              max=parseInt(My_array[i]);
              alert ('Максимальный элемент: '+ max);
}
