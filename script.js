
// Shopping Cart //

if(document.readyState == 'loading'){
	document.addEventListener('DOMContentLoaded', ready)
} else{
	ready()
}

function ready(){
	var RemoveButton = document.getElementsByClassName("remove-btn")
	console.log(RemoveButton)
	for(var i = 0; i < RemoveButton.length; i++){
		var Button = RemoveButton[i]
		Button.addEventListener('click', function(event){
			var ClickedButton = event.target
			ClickedButton.parentElement.parentElement.parentElement.parentElement.remove()
			UpdateTotal()
		})
	}
	var Input = document.getElementsByClassName('quantity')
	for(var i = 0; i < Input.length; i++){
		var Item_Quantity = Input[i]
		Item_Quantity.addEventListener('change', ChangedQuantity)
	}

}

function RemoveItem(event){
	var ClickedButton = event.target
	ClickedButton.parentElement.parentElement.parentElement.parentElement.remove()
	UpdateTotal()
}

function ChangedQuantity(event){
	var Item_Quantity = event.target
	if(isNaN(Item_Quantity.value) || Item_Quantity <= 0){
		Item_Quantity.value = 1
	}
	UpdateTotal()
}

function UpdateTotal(){
	var CartRow = document.getElementsByClassName('cart-row')
	var TotalPrice = 0
	for(var i = 0; i < CartRow.length; i++){
		var CartInfo = CartRow[i]
		var PriceObject = CartInfo.getElementsByClassName('price')[0]
		var QuantityObject = CartInfo.getElementsByClassName('quantity')[0]
		var Price = parseFloat(PriceObject.innerText.replace('Price: $',''))
		var Quantity = QuantityObject.value
		TotalPrice = TotalPrice + (Price * Quantity)
		console.log(Price)
	}
	TotalPrice = Math.round(TotalPrice * 100) / 100
	document.getElementsByClassName('final-total')[0].innerText = '$' + TotalPrice
}