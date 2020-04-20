let version = "1.2"
let thisName = 'ScriptLoader'
let validDomains = /groceries.morrisons.com|shoppingslot.co.uk|github.com/s
let icons = {"bell": '🔔',"hourglass": '⏳'};
let shouldReload = true;
let thisSettings = {};
    
function enableReloading(reload=false){
    beepNow();
    thisSettings.enabled =true;
    updateSettings(thisSettings);
    document.getElementById('scriptLoaderBtn').innerHTML = icons.hourglass;
    shouldReload=true;
    //stopBeeping();
    if(reload)
        reloadPage(1);
    document.getElementById('scriptLoaderBtn').onclick = function () { disableReloading();};
};

function updateSettings(value = null){
    if(value){
        thisSettings = value;
        localStorage.setItem(thisName,JSON.stringify(value));
    }else{
        thisSettings= JSON.parse(localStorage.getItem(thisName));
    }
};

function getSettings(value){
    return JSON.parse(localStorage.getItem(sName));
};

let startedBeeping = null;
var btnStopBeeping = document.createElement("input");
btnStopBeeping.setAttribute("type", "button");
btnStopBeeping.setAttribute("value", "🔔");
btnStopBeeping.setAttribute("id", "btnStopBeeping");

if(!document.domain.match(validDomains)){
    console.log ("Removing script loader");
    removeElement('scriptLoader')
    localStorage.removeItem(thisName);
}else{
    var scriptLoaderBtn = document.createElement("Button");
    scriptLoaderBtn.setAttribute('id','scriptLoaderBtn');
    scriptLoaderBtn.style = "width: 35px; height: 30px;"
    //scriptLoaderBtn.innerHTML = ;
    document.getElementById("scriptLoaderBtn")
    if(!localStorage[thisName]){
        updateSettings({pageUrl: window.location.href,enabled: true,reloading: false})
    }else{
        updateSettings();
        //console.log("Read settings", thisSettings);
    }
    if(thisSettings.reloading && thisSettings.pageUrl != window.location.href){
        reloadPage(30);
    }else{
        thisSettings.reloading =false;
        updateSettings(thisSettings);
    }
    addElement('scriptLoader',scriptLoaderBtn,icons.hourglass);
    document.getElementById('scriptLoaderBtn').onclick = function () { disableReloading();};
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
function createCookie(cookieName,cookieValue,daysToExpire){
    var date = new Date();
    date.setTime(date.getTime()+(daysToExpire*24*60*60*1000));
    document.cookie = cookieName + "=" + cookieValue + "; expires=" + date.toGMTString();
}
function getCookie(cookieName){
    var name = cookieName + "=";
    var allCookieArray = document.cookie.split(';');
    for(var i=0; i<allCookieArray.length; i++)
    {
    var temp = allCookieArray[i].trim();
    if (temp.indexOf(name)==0)
    return temp.substring(name.length,temp.length);
    }
};

function reloadPage(waitTimeSecs){
    if(!thisSettings.enabled)
        return;
	setTimeout(function () {
       
        if(shouldReload){
            if(!thisSettings.reloading) {
                thisSettings.pageUrl = window.location.href;
                thisSettings.reloading = true;
                updateSettings(thisSettings);
                document.location.reload();
            }else{
                window.location.href =thisSettings.pageUrl;
            }
        }
	},waitTimeSecs*1000)
};

	
if(!document.getElementByXPath){
	document.getElementByXPath = function(sValue) { var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); if (a.snapshotLength > 0) { return a.snapshotItem(0); } };
	document.getElementsByXPath = function(sValue){ var aResult = new Array();var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);for ( var i = 0 ; i < a.snapshotLength ; i++ ){aResult.push(a.snapshotItem(i));}return aResult;};

const a=new AudioContext() 



function disableReloading(){
    thisSettings.enabled =false;
    updateSettings(thisSettings);
    document.getElementById('scriptLoaderBtn').innerHTML = icons.bell;
    shouldReload=false;
    document.getElementById('scriptLoaderBtn').onclick = function () { enableReloading(true);};
    //stopBeeping();
};

function stopBeeping(){
	//console.log("stopBeeping()");
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
			} else{
                setTimeout(function () {

                })
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