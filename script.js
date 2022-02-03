let featuredSelector = "#featured";
let secondarySelector = "#secondary";
let shortSelector = "#short";

/**
 * Create a card div with an image and text.
 * @param {String} textAmount Should be 'none', 'XS', 'S', 'M', 'L' or 'XL'
 * @param {String} headingLevel Should be 'none' or 'h1', 'h2' etc. If 'none', heading is not added. Otherwise heading is always added.
 */
function createCard(textAmount, headingLevel, alwaysImage=false, alwaysText=false, justImage=false, justText=false) {
  let cardDiv = document.createElement("div");
  let cardImage = document.createElement("div");
  let img = document.createElement("img");
  let cardText = document.createElement("div");
  let hasImage = false;
  cardDiv.className = "card";
  cardImage.className = "card-image";
  cardText.className = "card-text";
  cardImage.appendChild(img);

  // Don't add image if justText.
  // If alwaysImage, add image
  // Otherwise, 80% chance to add image to card
  if (!justText && (alwaysImage || Math.random() < 0.8)) {
    cardDiv.appendChild(cardImage);

    // random select image
    let imageID = Math.round(Math.random() * 3 + 1);
    img.src = "images/image" + imageID + ".png";
    hasImage = true;
  }

  // Don't add text-div if justImage.
  // If no image, or alwaysText/headingLevel add text-div
  // Otherwise, 80 % chance to add text-div to card
  if (!justImage && (!hasImage || headingLevel != 'none' || alwaysText || Math.random() < 0.8)) {
    // add heading if alwaysHeading, otherwise 80% chance to add heading
    if (headingLevel != 'none') {
      cardText.append(loremHeading(headingLevel, 50));
    }
    cardDiv.append(cardText);
  } else {
    // no text-div added, so we are done
    return cardDiv;
  }

  // random text
  let paragraphs;
  switch (textAmount) {
    case 'none':
      // no paragraphs
      paragraphs = [];
      break;
    case 'XS':
      // 1 paragraphs, between 1-2 sentences per paragraph
      paragraphs = loremParagraphs(1, 1, 1, 2);
      break;
    case 'S':
      // 1 paragraphs, between 3-6 sentences per paragraph
      paragraphs = loremParagraphs(1, 1, 3, 6);
      break;
    case 'M':
      // 1-2 paragraphs, between 2-5 sentences per paragraph
      paragraphs = loremParagraphs(1, 2, 2, 4);
      break;
    case 'L':
      // 2-3 paragraphs, between 3-8 sentences per paragraph
      paragraphs = loremParagraphs(2, 3, 3, 8);
      break;
    case 'XL':
      // 3-4 paragraphs, between 4-8 sentences per paragraph
      paragraphs = loremParagraphs(3, 4, 4, 8);
      break;
  }

  paragraphs.forEach((paragraph) => { cardText.append(paragraph); });
  return cardDiv;
}

function removeCard(cards, removeLast = true) {
  if (cards.length > 0) {
    let index;
    if (removeLast) {
      index =  cards.length - 1;
    } else {
      index = Math.floor(Math.random() * cards.length);
    }
    cards[index].remove();
  }
}

function addFeatured(amount = 1) {
  for (let i = 0; i < amount; i++) {
    // Large amount of text, h1 heading, always add image
    document.querySelector(featuredSelector).appendChild(createCard('L', 'h1', true));
  }
}

function addSecondary(amount = 1) {
  for (let i = 0; i < amount; i++) {
    // Medium amount of text. h2 headings, don't always add image
    document.querySelector(secondarySelector).appendChild(createCard('M', 'h2'));
  }
}

function addShort(amount = 1) {
  for (let i = 0; i < amount; i++) {
    // Just the heading and an image
    document.querySelector(shortSelector).appendChild(createCard('none', 'h3', true))
  }
}

function removeFeatured() {
  removeCard(document.querySelectorAll(`${featuredSelector} .card`));
}

function removeSecondary() {
  removeCard(document.querySelectorAll(`${secondarySelector} .card`));
}

function removeShort() {
  removeCard(document.querySelectorAll(`${shortSelector} .card`));
}