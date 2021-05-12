function submit()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
            inputs.push(document.getElementById("input_box1" + i).value);
    
		}
	document.getElementById("commaz_submit\show").innerHTML = inputs.join(", ");
	}

	function show()
	{
		var inputs = [];
		for(var i = 1 ; i <=6 ; i++)
		{
			inputs.push(document.getElementById("input_box" + i).value);
		}
	document.getElementById("").innerHTML = inputs.join("");
	}
