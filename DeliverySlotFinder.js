let version = "1.1"
let validDomains = /groceries.morrisons.com|shoppingslot.co.uk|github.com/s

if(!document.domain.match(validDomains)){
	removeElement('scriptLoader')
}else{
console.log(`Delivery Slot Finder ${version} loaded`)
}
function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
};
function addElement(parentId, newElement, html) {
    var p = document.getElementById(parentId);
    newElement.innerHTML = html;
    p.appendChild(newElement);
};
let startedBeeping = null;
var btnStopBeeping = document.createElement("input");
btnStopBeeping.setAttribute("type", "button");
btnStopBeeping.setAttribute("value", "🔔");
btnStopBeeping.setAttribute("id", "btnStopBeeping");

	
if(!document.getElementByXPath){
	document.getElementByXPath = function(sValue) { var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); if (a.snapshotLength > 0) { return a.snapshotItem(0); } };
	document.getElementsByXPath = function(sValue){ var aResult = new Array();var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);for ( var i = 0 ; i < a.snapshotLength ; i++ ){aResult.push(a.snapshotItem(i));}return aResult;};

const a=new AudioContext() 


function stopBeeping(){
	console.log("stopBeeping()");
	clearTimeout(startedBeeping);
	removeElement('btnStopBeeping');
	document.onclick = docOnClick;
	startedBeeping = null;
}
let docOnClick = null;
function beepNow () {
	if(!document.getElementById('btnStopBeeping')){
	addElement('scriptLoader',btnStopBeeping,'');
	docOnClick= document.onclick ;
	}
	if(document.getElementById('btnStopBeeping')){
		document.getElementById('btnStopBeeping').onclick = function () { stopBeeping();};
		document.onclick = function () { stopBeeping();};
		beep(100,1230,100)
		startedBeeping= setTimeout(function () {
			beepNow();
		}, 3*1000);
	}
};

function reloadPage(waitTimeSecs){
	setTimeout(function () {
		document.location.reload();
	},waitTimeSecs*1000)
};

function beep(vol, freq, duration){
  v=a.createOscillator()
  u=a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type="square"
  u.connect(a.destination)
  u.gain.value=vol*0.01
  v.start(a.currentTime)
  v.stop(a.currentTime+duration*0.001)
}
	switch(document.domain) {
		case "groceries.morrisons.com" :
			if(document.location.href.match(/getAddressesForDelivery.do/)){
				setTimeout(function () {
					
					let rows= document.getElementsByXPath("//tbody/tr/td[@id]")
					let days= document.getElementsByXPath("//table[@class='table-header']/thead/tr/th[@id]")
					if (rows){
						if (document.getElementsByXPath("//*[@class='unavailable']").length < rows.length * days.length){
							console.log("Slot(s) could be available")
							beepNow();
						}else{
							console.log("No slot available")
							reloadPage(30);
						}
					}else{
                        console.log("No slot available")
                        reloadPage(60);
                    }
						
				},5*1000);
			}
			break;

		case "shoppingslot.co.uk" :
		
		if(! document.getElementByXPath("//img[@alt='Shopping Slot']")){
			reloadPage(30);
		}else{
			if(!startedBeeping){
				//if something goes wrong
				reloadPage(120);
			}
		}
		setTimeout(function () {
			if(document.getElementsByXPath("//*[contains(@alt,'Supermarket')]")){
				if (document.getElementsByXPath("//*[contains(text(),'Sorry, no slots currently available')]").length < document.getElementsByXPath("//*[contains(@alt,'Supermarket')]").length ){
					console.log("Slot(s) could be available")
					beepNow();
				}else {
					console.log("No slot available");
					let refresBtn = document.getElementByXPath("//a[contains(@href,'refresh') and contains(@class,btn)]")
					if (refresBtn) {
						setTimeout(function () {
							
							//console.log("Refreshing");
							refresBtn.click();
							}, 60*1000);
					}
				}		
			}
		},5*1000);
		break;

		default:
	}
}