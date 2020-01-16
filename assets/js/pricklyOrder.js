
function getRadioValue(theRadioGroup)
{
    var elements = document.getElementsByName(theRadioGroup);
    for (var i = 0, l = elements.length; i < l; i++)
    {
        if (elements[i].checked)
        {
            return elements[i].value;
        }
    }
}

function getProbeValue(theProbe)
{
    var element = document.getElementById(theProbe);
    return element.value;
}

function getProbeChecked(theProbe)
{
    var element = document.getElementById(theProbe);
    return element.checked;
}

function copyIDT(textarea){
  document.getElementById(textarea).select();
  document.execCommand('copy');
}

var a = document.getElementById("alphasvg");
/*


            // It's important to add an load event listener to the object,
            // as it will load the svg doc asynchronously
            a.addEventListener("load",function(){

                // get the inner DOM of alpha.svg
                var svgDoc = a.contentDocument;
                // get the inner element by id
                var delta = svgDoc.getElementById("RevProbeA");
                // add behaviour
                delta.addEventListener("mousedown",function(){
                        a.contentDocument.getElementById("RevProbeE").style.opacity = 1;
                        alert('hello world!')

                }, false);
            }, false);

function hideSVG() {
  var style = document.getElementById("RevProbeA").style.display;
  if(style === "none")
    document.getElementById("RevProbeA").style.display = "block";
  else
    document.getElementById("RevProbeA").style.display = "none";
  //or to hide the all svg
  //document.getElementById("mySvg").style.display = "none";
}  
*/

var directions = ["directionA", "directionB", "directionC", "directionD", "directionE", "directionF"]
var probeName = ["probeAname", "probeBname", "probeCname", "probeDname", "probeEname", "probeFname"]
var probeList =  probeName.map(i=> i.substring(0,6));
var probeInclude = ["probeAinclude", "probeBinclude", "probeCinclude", "probeDinclude", "probeEinclude", "probeFinclude"]
var colors = ["NA", "#20B24B", "#B61F24", "#A23D96", "#00B2B2"]
var fluorochrome = ["NA", "ATTO488N", "ATTO550N", "ATTO590N", "ATTO647N"]

updateProbeA = function(){
      var optionValue = probeAbase.value;
      var probeAdirection = getRadioValue('directionA');
      var emission = probeAemiss.value;
      var probeAcode = "";
      if(probeAdirection == ""){
        probeAcode = probeAname.value + "\t/5" + fluorochrome[emission] + "//ideoxyI//ideoxyI/*NN*N" + probeAdirection + optionValue + "NN\t" + "250nm\t" + "HPLC";
        document.getElementById('dnaorder').value = probeAcode;
        document.getElementById('rnaorder').value = "";
      }else{
        probeAcode = probeAname.value + "\t/5phos/NN" + probeAdirection + optionValue + "NN/ideoxyI//ideoxyI//ideoxyI//3" + fluorochrome[emission] + "/\t" + "250nmR\t" + "RNASE";
        document.getElementById('rnaorder').value = probeAcode;
        document.getElementById('dnaorder').value = "";

      }
      
    }


updateProbe = function(probe = ""){
  var forwardCount = 0;
  var reverseCount = 0;
  var DNAprobes = "";
  var RNAprobes = "";



  for(var i = 0; i < directions.length; i++){
    var probename = getProbeValue(probeName[i]);
    var optionValue = getProbeValue(probeBase[i]);
    var probedirection = getRadioValue(directions[i]);
    var emission = getProbeValue(probeBase[i+directions.length]);
    var includeInOrder = getProbeChecked(probeInclude[i]);

    var probeOfInterest;
    if(probe == probeList[i]){
       probeOfInterest = {probename: probename, optionValue: optionValue, probedirection: probedirection, emission: emission, include: includeInOrder};
    }

    var probecode = "";
    if(includeInOrder){
      if(probedirection == ""){
        if(emission == 0){
          probecode = probename + "\t/5deoxyI//ideoxyI/*NN*N" + probedirection + optionValue + "NN\t" + "250nm\t" + "HPLC";
        }else{
          probecode = probename + "\t/5" + fluorochrome[emission] + "//ideoxyI//ideoxyI/*NN*N" + probedirection + optionValue + "NN\t" + "250nm\t" + "HPLC";
        }

        DNAprobes = DNAprobes + probecode + '\n';
      }else{
        if(emission == 0){
          probecode = probename + "\t/5phos/NN" + probedirection + optionValue + "NN/ideoxyI//ideoxyI//3InvdT/\t" + "250nmR\t" + "RNASE";
        }else{
          probecode = probename + "\t/5phos/NN" + probedirection + optionValue + "NN/ideoxyI//ideoxyI//ideoxyI//3" + fluorochrome[emission] + "/\t" + "250nmR\t" + "RNASE";
        }
        RNAprobes = RNAprobes +  probecode + '\n';
      }
    }
      
  }
  document.getElementById('dnaorder').value = DNAprobes;
  document.getElementById('rnaorder').value = RNAprobes;

  if(probeOfInterest != null){
  if(probeOfInterest.probedirection != "r"){
          
          a.contentDocument.getElementById("Fwd" + probe + "base").textContent = probeOfInterest.optionValue;
          a.contentDocument.getElementById("Fwd" + probe + "star").style.opacity = 1;
          if(colors[probeOfInterest.emission] == "NA"){
            a.contentDocument.getElementById("Fwd" + probe + "star").style.opacity = 0;
          }
          a.contentDocument.getElementById("Fwd" + probe + "star").style.fill = colors[probeOfInterest.emission];
          a.contentDocument.getElementById("Fwd" + probe + "animate").beginElement();
 
    
          if(probeOfInterest.include){
            a.contentDocument.getElementById("Fwd" + probe ).style.opacity = 1;
          }else{
            a.contentDocument.getElementById("Fwd" + probe).style.opacity = 0
          }

          forwardCount++;
    }else{
          a.contentDocument.getElementById("Rev" + probe + "base").textContent = probeOfInterest.optionValue;
          a.contentDocument.getElementById("Rev" + probe + "star").style.opacity = 1;
          a.contentDocument.getElementById("Rev" + probe + "InvdT").style.opacity = 0;
          if(colors[probeOfInterest.emission] == "NA"){
            a.contentDocument.getElementById("Rev" + probe + "star").style.opacity = 0;
            a.contentDocument.getElementById("Rev" + probe + "InvdT").style.opacity = 1;
          }
          a.contentDocument.getElementById("Rev" + probe + "star").style.fill = colors[probeOfInterest.emission];
          a.contentDocument.getElementById("Rev" + probe + "animate").beginElement();
          
          if(probeOfInterest.include){
            a.contentDocument.getElementById("Rev" + probe).style.opacity = 1;
          }else{
            a.contentDocument.getElementById("Rev" + probe).style.opacity = 0
          }

          reverseCount++;


    }

  }
      
}


 window.onload = function() {
    updateProbe();
    /*let probeAname = document.getElementById('probeAname');
    probeAname.oninput=function() {
      updateProbe();
    }
    let probeAbase = document.getElementById('probeAbase');
    

    

    probeAbase.onchange=function() {
      updateProbe();
    } 
     */

    for (var i = 0; i < probeName.length; i++) {
      var name = document.getElementById(probeName[i]);
      name.oninput=function(probe = i) {
        updateProbe(probe);
      }
    }
    
}

var prev = null;
  var probeBase = ["probeAbase", "probeBbase", "probeCbase", "probeDbase", "probeEbase", "probeFbase", "probeAemiss", "probeBemiss", "probeCemiss", "probeDemiss", "probeEemiss", "probeFemiss"]
  for (var i = 0; i < probeBase.length; i++) {
      var base = document.getElementById(probeBase[i]);
      base.addEventListener('change', function() {
          //console.log(this.id.substring(0, 6))
          //(prev) ? console.log(this.id.substring(0, 6) + " Hello: " + prev.value): null;
          if (this !== prev) {
              prev = this;
          }
          updateProbe(probe = this.id.substring(0, 6));
      });
  }


for(var j = 0; j < directions.length; j++){
  var rad = document.getElementsByName(directions[j]);
  var prev = null;
  for (var i = 0; i < rad.length; i++) {
      rad[i].addEventListener('change', function() {
          (prev) ? console.log(prev.value): null;
          if (this !== prev) {
              prev = this;
          }
          updateProbe(probe = i);
      });
  }
}


for (var i = 0; i < probeInclude.length; i++) {
      var includeIt = document.getElementById(probeInclude[i]);
      includeIt.addEventListener('change', function() {
          updateProbe(probe = this.id.substring(0, 6));
      });
  }


