let version = "1.3"
let thisName = 'ScriptLoader'
let validDomains = /groceries.morrisons.com|shoppingslot.co.uk|www.ocado.com|github.com/s
let icons = {"bell": '🔔',"hourglass": '⏳',
enabled: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5NiA0OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNzM5NzQ7IiBkPSJNNDk2LDI0OGMwLDEzNi44LTExMS4yLDI0OC0yNDgsMjQ4UzAsMzg0LjgsMCwyNDhTMTExLjIsMCwyNDgsMFM0OTYsMTExLjIsNDk2LDI0OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDA3NzI7IiBkPSJNMjQ4LDBjMTM2LjgsMCwyNDgsMTExLjIsMjQ4LDI0OFMzODQuOCw0OTYsMjQ4LDQ5NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VEMjY2RTsiIGQ9Ik03Mi44LDcyLjhjOTYuOC05Ni44LDI1My42LTk2LjgsMzUwLjQsMHM5Ni44LDI1My42LDAsMzUwLjQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDA3NzI7IiBkPSJNMzIwLDIzOC40YzAtMTYuOC0xMy42LTMwLjQtMzAuNC0zMC40aC04My4yYy0xNi44LDAtMzAuNCwxMy42LTMwLjQsMzAuNHY4NA0KCWMwLDE2LjgsMTMuNiwzMC40LDMwLjQsMzAuNGg4NGMxNi44LDAsMzAuNC0xMy42LDMwLjQtMzAuNHYtODRIMzIweiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zMjAsMjA2LjRjMC0xNi44LTEzLjYtMzAuNC0zMC40LTMwLjRoLTgzLjJjLTE2LjgsMC0zMC40LDEzLjYtMzAuNCwzMC40djg0DQoJYzAsMTYuOCwxMy42LDMwLjQsMzAuNCwzMC40aDg0YzE2LjgsMCwzMC40LTEzLjYsMzAuNC0zMC40di04NEgzMjB6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==',
disabled: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDQ5NiA0OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ5NiA0OTY7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGNzM5NzQ7IiBkPSJNNDk2LDI0OGMwLDEzNi44LTExMS4yLDI0OC0yNDgsMjQ4UzAsMzg0LjgsMCwyNDhTMTExLjIsMCwyNDgsMFM0OTYsMTExLjIsNDk2LDI0OHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDA3NzI7IiBkPSJNMjQ4LDBjMTM2LjgsMCwyNDgsMTExLjIsMjQ4LDI0OFMzODQuOCw0OTYsMjQ4LDQ5NiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0VEMjY2RTsiIGQ9Ik03Mi44LDcyLjhjOTYuOC05Ni44LDI1My42LTk2LjgsMzUwLjQsMHM5Ni44LDI1My42LDAsMzUwLjQiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNERDA3NzI7IiBkPSJNMjEyLjgsMzYwLjhjLTEuNiwwLTQtMC44LTUuNi0xLjZjLTQtMS42LTcuMi02LjQtNy4yLTEwLjRWMTk5LjJjMC00LDMuMi04LjgsNy4yLTEwLjQNCgljNC0xLjYsOC44LTEuNiwxMi44LDAuOGwxMDEuNiw3NS4yYzMuMiwyLjQsNC44LDUuNiw0LjgsOS42cy0xLjYsNy4yLTQuOCw5LjZMMjIwLDM1OS4yQzIxNy42LDM2MCwyMTUuMiwzNjAuOCwyMTIuOCwzNjAuOHoiLz4NCjxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjEyLjgsMzM0LjRjLTEuNiwwLTQtMC44LTUuNi0xLjZjLTQtMS42LTcuMi02LjQtNy4yLTEwLjRWMTcyLjhjMC00LDMuMi04LjgsNy4yLTEwLjQNCgljNC0xLjYsOC44LTEuNiwxMi44LDAuOGwxMDEuNiw3NS4yYzMuMiwyLjQsNC44LDUuNiw0LjgsOS42YzAsNC0xLjYsNy4yLTQuOCw5LjZMMjIwLDMzMi44QzIxNy42LDMzMy42LDIxNS4yLDMzNC40LDIxMi44LDMzNC40eiINCgkvPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=',
enabled0: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiCgkgdmlld0JveD0iMCAwIDQ3My45MzEgNDczLjkzMSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDczLjkzMSA0NzMuOTMxOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6I0YyODQwMDsiIGN4PSIyMzYuOTY2IiBjeT0iMjM2Ljk2NiIgcj0iMjM2Ljk2NiIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUNBNDQ4OyIgZD0iTTMyNC4xNDksMTQ3Ljc1NWMwLTYuNTE0LTUuMjgzLTExLjgwMS0xMS44MDItMTEuODAxaC00NS42NDZjLTYuNTI2LDAtMTEuODA5LDUuMjg3LTExLjgwOSwxMS44MDEKCXYxMTYuNzEzbDY5LjI1Ni02OS4yNlYxNDcuNzU1eiIvPgo8Zz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMzI0LjE0OSwzMjYuMTUxYzAsNi41MTgtNS4yODMsMTEuODAyLTExLjgwMiwxMS44MDJoLTQ1LjY0NmMtNi41MjYsMC0xMS44MDktNS4yODMtMTEuODA5LTExLjgwMgoJCVYxNDcuNzU1YzAtNi41MTQsNS4yODMtMTEuODAxLDExLjgwOS0xMS44MDFoNDUuNjQ2YzYuNTE4LDAsMTEuODAyLDUuMjg3LDExLjgwMiwxMS44MDFMMzI0LjE0OSwzMjYuMTUxTDMyNC4xNDksMzI2LjE1MXoiLz4KCTxwYXRoIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBkPSJNMjE5LjAxNiwzMjYuMTUxYzAsNi41MTgtNS4yODMsMTEuODAyLTExLjgwMiwxMS44MDJoLTQ1LjY1N2MtNi41MTgsMC0xMS44MDItNS4yODMtMTEuODAyLTExLjgwMgoJCVYxNDcuNzU1YzAtNi41MTQsNS4yODMtMTEuODAxLDExLjgwMi0xMS44MDFoNDUuNjUzYzYuNTE4LDAsMTEuODAxLDUuMjg3LDExLjgwMSwxMS44MDF2MTc4LjM5NkgyMTkuMDE2eiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=',
disabled0: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNTggNTgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU4IDU4OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxjaXJjbGUgc3R5bGU9ImZpbGw6I0VCQkExNjsiIGN4PSIyOSIgY3k9IjI5IiByPSIyOSIvPgo8Zz4KCTxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGRkZGRkY7IiBwb2ludHM9IjQ0LDI5IDIyLDQ0IDIyLDI5LjI3MyAyMiwxNCAJIi8+Cgk8cGF0aCBzdHlsZT0iZmlsbDojRkZGRkZGOyIgZD0iTTIyLDQ1Yy0wLjE2LDAtMC4zMjEtMC4wMzgtMC40NjctMC4xMTZDMjEuMjA1LDQ0LjcxMSwyMSw0NC4zNzEsMjEsNDRWMTQKCQljMC0wLjM3MSwwLjIwNS0wLjcxMSwwLjUzMy0wLjg4NGMwLjMyOC0wLjE3NCwwLjcyNC0wLjE1LDEuMDMxLDAuMDU4bDIyLDE1QzQ0LjgzNiwyOC4zNiw0NSwyOC42NjksNDUsMjlzLTAuMTY0LDAuNjQtMC40MzcsMC44MjYKCQlsLTIyLDE1QzIyLjM5NCw0NC45NDEsMjIuMTk3LDQ1LDIyLDQ1eiBNMjMsMTUuODkzdjI2LjIxNUw0Mi4yMjUsMjlMMjMsMTUuODkzeiIvPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo='
};
let shouldReload = true;
let thisSettings = {};

function updateScriptLoaderBtn(){
    scriptLoaderBtn.innerHTML = `<img src="${thisSettings.enabled?icons.enabled:icons.disabled}" style="border: none;background: none;" width=100% height=100% />`;
    scriptLoaderBtn.onclick = thisSettings.enabled ? function () { disableReloading()}: function () { enableReloading(true)}
};

function enableReloading(reload=false){
    beepNow();
    thisSettings.enabled =true;
    updateSettings(thisSettings);
    updateScriptLoaderBtn()
    shouldReload=true;
    //stopBeeping();
    if(reload)
        reloadPage(1);
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

function removeElement(elementId) {
    var element = document.getElementById(elementId);
    element.parentNode.removeChild(element);
};
function addElement(parentId, newElement, html) {
    var p = document.getElementById(parentId);
    if(html)
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

function loadPage(pageUrl){
    thisSettings.pageUrl = pageUrl;
    updateSettings(thisSettings);
    window.location.href =thisSettings.pageUrl;
}

function reloadPage(waitTimeSecs){
    if(!thisSettings.enabled)
        return;
	setTimeout(function () {
       
        if(shouldReload){
            if(!thisSettings.reloading) {
                //thisSettings.pageUrl = window.location.href;
                thisSettings.reloading = true;
                updateSettings(thisSettings);
                document.location.reload();
            }else{
                window.location.href =thisSettings.pageUrl;
            }
        }
	},waitTimeSecs*1000)
};

function disableReloading(){
    thisSettings.enabled =false;
    updateSettings(thisSettings);
    updateScriptLoaderBtn();
    shouldReload=false;
};

function stopBeeping(){
	//console.log("stopBeeping()");
	clearTimeout(startedBeeping);
	removeElement('btnStopBeeping');
	document.onclick = docOnClick;
	startedBeeping = null;
};

let docOnClick = null;
function beepNow () {
    disableReloading();
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


var scriptLoaderBtn = document.createElement("Button");
let startedBeeping = null;
var btnStopBeeping = document.createElement("input");
const a=new AudioContext();


scriptLoaderBtn.setAttribute('id','scriptLoaderBtn');
scriptLoaderBtn.style+= "border: none;background: none; width: 30px; height: 25px;margin: 0; border: 0;padding: 0;"

btnStopBeeping.setAttribute("type", "button");
btnStopBeeping.setAttribute("value", "🔔");
btnStopBeeping.setAttribute("id", "btnStopBeeping");
btnStopBeeping.style+= "border: none;background: none;margin: 0; border: 0;padding: 0;"

if(!document.domain.match(validDomains)){
    console.log ("Removing script loader");
    removeElement('scriptLoader')
    localStorage.removeItem(thisName);
}else{
    //document.getElementById("scriptLoaderBtn")
    if(!localStorage[thisName]){
        updateSettings({enabled: true,reloading: false})
    }else{
        updateSettings();
    }
    if(thisSettings.reloading && thisSettings.pageUrl != window.location.href){
       // reloadPage(30);
    }else{
        thisSettings.reloading =false;
        updateSettings(thisSettings);
    }
    addElement('scriptLoader',scriptLoaderBtn);
    scriptLoaderBtn = document.getElementById('scriptLoaderBtn');
    updateScriptLoaderBtn();
    console.log(`Delivery Slot Finder ${version} loaded`);
}

if(thisSettings.enabled){
    document.getElementByXPath = function(sValue) { var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null); if (a.snapshotLength > 0) { return a.snapshotItem(0); } };
    document.getElementsByXPath = function(sValue){ var aResult = new Array();var a = this.evaluate(sValue, this, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);for ( var i = 0 ; i < a.snapshotLength ; i++ ){aResult.push(a.snapshotItem(i));}return aResult;};

    
    switch(document.domain) {
        case "groceries.morrisons.com" :
            
            if(!document.location.href.match(/getAddressesForDelivery.do/) && thisSettings.enabled){
                loadPage('https://groceries.morrisons.com/webshop/getAddressesForDelivery.do')
            }
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
        
            case "www.ocado.com" :
                    if(!document.location.href.match(/getAddressesForDelivery.do/) && thisSettings.enabled){
                        loadPage('https://www.ocado.com/webshop/getAddressesForDelivery.do')                        
                    }
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
                                    reloadPage(45);
                                }
                            }
                            else if(!noFurtherSlots){
                                console.log("Slot(s) could be available")
                                beepNow();
                            }
                            else{
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
        break;
    }

}
    


    