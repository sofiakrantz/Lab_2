let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
let sentences = [
  "Aenean et sagittis tortor.",
  "Aenean iaculis lacinia sapien, id dignissim purus luctus ut.",
  "Aenean id iaculis tellus, lacinia ornare ligula.",
  "Aliquam consequat ligula eu suscipit posuere.",
  "Aliquam mi augue, molestie id dapibus ut, eleifend scelerisque magna.",
  "Aliquam odio arcu, scelerisque non aliquam nec, porttitor fermentum neque.",
  "Cras fermentum ante at eleifend tincidunt.",
  "Cras tincidunt, massa id euismod venenatis, mi dolor vulputate mi, nec hendrerit lorem risus ut ipsum.",
  "Cras tristique dui massa, et tincidunt turpis consectetur finibus.",
  "Curabitur ac eros et metus cursus varius eu varius eros.",
  "Curabitur efficitur semper hendrerit.",
  "Curabitur quis ex eget justo rutrum elementum.",
  "Curabitur tempus mi eu massa dapibus dapibus.",
  "Curabitur ultricies ligula elit, in maximus dui tincidunt eget.",
  "Curabitur ut quam nulla.",
  "Donec aliquet efficitur felis, non semper mauris eleifend vitae.",
  "Donec lobortis, sapien eu facilisis ultrices, purus sem pellentesque mauris, eu vulputate ex dui at lorem.",
  "Donec rutrum sollicitudin ligula, sed pharetra eros aliquam condimentum.",
  "Donec varius molestie massa.",
  "Donec vel odio in quam ultrices feugiat.",
  "Duis ac bibendum est.",
  "Duis eu leo pharetra, varius nisi eu, mattis justo.",
  "Duis in ipsum lacus.",
  "Duis mattis gravida luctus.",
  "Duis mauris arcu, laoreet at pellentesque ut, laoreet ut erat.",
  "Duis molestie in lacus ut dignissim.",
  "Duis ut pellentesque velit, vitae venenatis dolor.",
  "Etiam mauris est, pharetra ut turpis vitae, aliquet egestas erat.",
  "Etiam ut nulla in arcu pretium auctor vel quis sem.",
  "Etiam vitae sem velit.",
  "Fusce dignissim elit lacus.",
  "Fusce malesuada lorem tortor, quis tincidunt risus imperdiet id.",
  "Fusce quis mattis neque.",
  "Fusce rutrum accumsan feugiat.",
  "In at suscipit sem.",
  "In eu finibus massa.",
  "In hac habitasse platea dictumst.",
  "In nisi augue, varius luctus neque vel, malesuada ullamcorper purus.",
  "In nunc massa, sagittis nec turpis id, scelerisque volutpat velit.",
  "In sapien quam, sagittis non lorem a, posuere porttitor mi.",
  "In sodales venenatis elit, nec fringilla nunc maximus at.",
  "In tempus sem mi, id hendrerit nunc efficitur non.",
  "Integer sed enim eleifend, semper purus eget, efficitur tellus.",
  "Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  "Maecenas ac sollicitudin quam.",
  "Maecenas porttitor felis eu leo maximus, at dictum nunc eleifend.",
  "Mauris tristique orci mi, nec malesuada ex aliquam vitae.",
  "Nam eget vestibulum magna.",
  "Nam elit ante, faucibus a pharetra quis, venenatis non nisl.",
  "Nam ipsum lectus, varius sed tortor et, mattis gravida est.",
  "Nam odio quam, bibendum sed congue et, rhoncus at libero.",
  "Nam ullamcorper libero eget augue placerat, non fringilla libero vehicula.",
  "Nulla condimentum dapibus nibh, eget ornare nulla accumsan ac.",
  "Nulla elementum nisi vulputate, varius dui sed, vestibulum ipsum.",
  "Nulla id lorem lorem.",
  "Nulla tempor porttitor elit eget fermentum.",
  "Nullam bibendum leo diam, lacinia facilisis nisi mattis nec.",
  "Nullam congue velit lacus, a porta risus varius at.",
  "Nullam eleifend erat sed lacinia bibendum.",
  "Nullam lectus dui, consequat vel imperdiet quis, consectetur at nulla.",
  "Nullam placerat gravida lacinia.",
  "Nunc at vestibulum elit, quis semper nulla.",
  "Nunc nec justo nec velit condimentum fringilla sed eu ipsum.",
  "Nunc pharetra sagittis nulla, et eleifend augue.",
  "Nunc quis sodales nisl.",
  "Nunc sit amet libero a ante tincidunt luctus.",
  "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
  "Pellentesque hendrerit eros felis, consectetur volutpat nunc fringilla eget.",
  "Pellentesque imperdiet arcu sit amet blandit molestie.",
  "Pellentesque nec purus ligula.",
  "Phasellus auctor ligula at erat tincidunt ullamcorper.",
  "Phasellus commodo massa ut est dictum, ac iaculis odio iaculis.",
  "Phasellus congue eget nisl non egestas.",
  "Phasellus euismod nisi ligula, sit amet venenatis diam rhoncus vitae.",
  "Phasellus nec vehicula enim, sed commodo eros.",
  "Phasellus non fringilla leo, vel efficitur lectus.",
  "Phasellus pellentesque justo eu lorem sollicitudin, dignissim vehicula metus porttitor.",
  "Phasellus placerat, sem ut sollicitudin luctus, turpis turpis commodo libero, at feugiat massa ligula eu dolor.",
  "Phasellus sed tellus tellus.",
  "Phasellus venenatis metus vel pretium sollicitudin.",
  "Praesent a metus pulvinar, maximus diam a, iaculis quam.",
  "Praesent feugiat orci quis ullamcorper laoreet.",
  "Praesent pellentesque sapien vitae ultrices imperdiet.",
  "Praesent sed hendrerit magna.",
  "Praesent sed tincidunt massa.",
  "Proin at aliquam lectus, eget aliquam urna.",
  "Proin at dictum nunc.",
  "Proin bibendum ut metus in luctus.",
  "Proin ex justo, egestas sit amet suscipit ac, viverra in purus.",
  "Proin facilisis et mi in dictum.",
  "Proin mattis risus non malesuada condimentum.",
  "Proin varius massa eu erat blandit, eget lacinia arcu consectetur.",
  "Proin volutpat tincidunt dui, a vulputate felis iaculis vel.",
  "Quisque cursus enim arcu, et hendrerit metus viverra et.",
  "Quisque lobortis nec diam at ullamcorper.",
  "Quisque nec elementum turpis.",
  "Quisque ut ipsum ut felis mattis elementum.",
  "Quisque vel nibh risus.",
  "Sed at odio sit amet erat placerat hendrerit.",
  "Sed egestas, diam semper consectetur dignissim, leo dui posuere est, eu congue purus urna sit amet libero.",
  "Sed ornare lectus et arcu lobortis, in rutrum leo eleifend.",
  "Sed posuere justo semper, egestas ante eget, fermentum dui.",
  "Sed sit amet ante vel leo malesuada tempor vitae semper elit.",
  "Sed vulputate, metus nec laoreet porttitor, nulla tortor finibus velit, non suscipit justo diam id nisl.",
  "Suspendisse congue odio ex, vel efficitur risus ornare ut.",
  "Suspendisse potenti.",
  "Suspendisse sed rhoncus dolor.",
  "Ut fringilla quis erat a convallis.",
  "Ut hendrerit non nisi in egestas.",
  "Ut maximus fringilla turpis, in bibendum nibh lacinia id.",
  "Ut porttitor gravida fermentum.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In congue, nisl vitae lacinia dignissim, enim felis tincidunt ligula, vel congue urna ex tempor ex.",
  "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi sed lobortis elit, placerat suscipit leo.",
  "Vestibulum eu posuere dolor, semper consectetur magna.",
  "Vestibulum malesuada eu massa id consectetur.",
  "Vestibulum nec pretium lectus.",
  "Vestibulum vehicula pellentesque tempor.",
  "Vestibulum venenatis lorem massa, a convallis purus porttitor vitae.",
  "Vivamus augue velit, pharetra ut congue vel, malesuada in leo.",
  "Vivamus convallis nisi in tempus pretium.",
  "Vivamus et ipsum eget dui porttitor ornare.",
  "Vivamus imperdiet rhoncus sem, in ultrices nibh gravida sed.",
  "Vivamus massa risus, tempus eget elit quis, lobortis convallis elit.",
  "Vivamus pulvinar cursus sagittis."
];

/**
 * @param {Number} min Min value
 * @param {Number} max Max value
 * @returns Random integer between min and max (inclusive)
 */
function randint(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Return a String of lorem ipsum sentences.
 * @param {Number} numSentences the number of sentences to return.
 * @param {Boolean} startWithLorem should the first sentence be "Lorem ipsum..."
 */
function loremSentences(numSentences, startWithLorem=true) {
  let sentenceList = [];
  // add "Lorem ipsum ..." to start?
  if (startWithLorem) {
    sentenceList.push(lorem);
    numSentences--;
  }
  // select remaining sentences
  for (let i = 0; i < numSentences; i++) {
    sentenceList.push(sentences[Math.floor(Math.random() * (sentences.length + 1))]);
  }

  return sentenceList.join(" ");
}

/**
 * Return paragraphs elements with lorem ipsum sentences.
 * @param {Number} numParagraphs Number of paragraphs to return.
 * @param {Number} minSentences Minimum number of sentences per paragraph.
 * @param {Number} maxSentences Maximum number of sentences per paragraph.
 */
function loremParagraphs(minParagraphs=1, maxParagraphs=1, minSentences=3, maxSentences=10) {
  let paragraphs = [];
  let numParagraphs = randint(minParagraphs, maxParagraphs);
  let numSentences;
  let tmpP;
  for (let parNum = 0; parNum < numParagraphs; parNum++) {
    numSentences = randint(minSentences, maxSentences);
    tmpP = document.createElement('p');
  
    // first sentence of first paragraph starts with lorem ipsum
    if (paragraphs.length == 0) {
      tmpP.innerHTML = loremSentences(numSentences, true);
    } else {
      tmpP.innerHTML = loremSentences(numSentences, false);
    }
    paragraphs.push(tmpP);
  }
  return paragraphs;
}

/**
 * Return a heading.
 * @param {String} elementType "h1", "h2" etc
 * @param {Number} maxlen Maximum number of characters in heading
 */
function loremHeading(elementType, maxlen) {
  let heading = document.createElement(elementType);
  let headingCandidates = [];
  sentences.forEach((sentence) => {
    if (sentence.length <= maxlen) {
      headingCandidates.push(sentence.slice(0, -1));
    }
  });
  heading.innerHTML = headingCandidates[Math.floor(Math.random() * headingCandidates.length)];
  return heading;
}