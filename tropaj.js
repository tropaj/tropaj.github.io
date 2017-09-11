tropaj = {
  variables = {};
  get get(){
    var vars = {};
    if(window.location.search.length!==0)
      window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
      key=decodeURIComponent(key);
      if(typeof vars[key]==="undefined") {vars[key]= decodeURIComponent(value);}
      else {vars[key]= [].concat(vars[key], decodeURIComponent(value));}
      });
    return vars;
    }
    function css(elem,st) {
      e = document.getElementByID(elem);
      e.style = st;
    };
    function addTextToElement(elem,text) {
      e = document.getElementById(elem)
      e.appendChild(document.createTextNode(text))
    };
    function getAllParameters() {
      return variables;
    };
    function addParameter(name,val) {
      variables[name] = val;
    }
};
