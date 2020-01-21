document.getElementById("new-card").addEventListener("click", getRandomCard);

function getRandomCard() {
	var url = "sentences.json";
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			var myObj = JSON.parse(this.responseText);
			var cardData = myObj.data;
			var randomCard = Math.floor(Math.random() * cardData.length);
			var randomSentence = Math.floor(Math.random() * cardData[randomCard].length);
			var example = cardData[randomCard].example;
			var translation = cardData[randomCard].translation;
			var source = cardData[randomCard].source;
			document.getElementById("sentence").getElementsByClassName("example")[0].innerHTML = example;
			document.getElementById("sentence").getElementsByClassName("translation")[0].innerHTML = translation;
			//document.getElementById("sentence").getElementsByClassName("source")[0].innerHTML = source;
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
