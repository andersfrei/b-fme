var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
    var element = elements[i];

    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];

        if (node.nodeType === 3) {
            var text = node.nodeValue;

            var replacedText1 = text.replace(/Brøndbyernes Idrætsforening|Brøndby IF|Brondby IF|Bröndby IF/gi, 'BØF');
            var replacedText2 = replacedText1.replace(/Brøndby Stadion|Brøndby Stadium|Brondby Stadium|Bröndby Stadium|Vilfort Park/gi, 'Hjalte Park');
            var replacedText3 = replacedText2.replace(/Brøndby|Brondby|Bröndby/gi, 'BØF');
            var replacedText4 = replacedText3.replace(/Jan Bech Andersen/gi, 'Jan "Oscar" Bech Andersen');

            if (replacedText4 !== text) {
                element.replaceChild(document.createTextNode(replacedText4), node);
            }
        }
    }
}