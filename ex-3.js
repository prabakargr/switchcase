
	//switch case 1---------
	function checkPrize(){
		var text;
		var cars=document.getElementById('product').value;
		switch(cars) {
			case "cars":
			text="Please select the car";
			break;
			case "audi":
			text="Prize :22 laks";
			break;
			case"benz":
			text="Prize :50 laks";
			break;
			case"volvo":
			text="Prize :80 laks";
			break;
			default:
			text="i dont know abt"
		}
		document.getElementById('note').innerHTML=text;
	}
	//switch case 2------------
	function searchPin(){
		var text;
		var codes=document.getElementById('findpin').value;
		switch(codes) {
			case "Orathanad":
			text="Pincode: 614 625";
			break;
			case "Thennamanad":
			text="Pincode: 654 657";
			break;
			case"Adyar":
			text="Pincode: 454 534";
			break;
			case"Medavakkam":
			text="Pincode: 928 492";
			break;
			default:
			text="invalid"
		}
		document.getElementById('pin').innerHTML=text;
	}
	//switch case 1---------
	function translator(){
		var text;
		var meaning=document.getElementById('findmean').value;
		switch(meaning) {
			case "Tamil":
			text="Meaning :Tamil";
			break;
			case "Train":
			text="Meaning :Rail";
			break;
			case"Computer":
			text="Meaning :Kanini";
			break;
			case"Ear":
			text="Meaning :Kathu";
			break;
			default:
			text="invalid"
		}
		document.getElementById('tamil').innerHTML=text;
	}