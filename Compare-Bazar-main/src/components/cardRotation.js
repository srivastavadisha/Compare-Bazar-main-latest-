// cardRotation.js - Card rotation utility functions

export const resetAllCards = () => {
  // Reset rotation on all cards
  document.querySelectorAll('.card-inner').forEach(card => {
    card.style.transform = 'rotateY(0deg)';
  });
  
  // Reset shadow effect on all card containers
  document.querySelectorAll('.card-container').forEach(container => {
    container.style.boxShadow = '0 10px 25px rgba(255, 134, 51, 0.3), 0 5px 10px rgba(255, 134, 51, 0.2)';
  });
};

export const activateCard = (cardElement) => {
  // First reset all cards
  resetAllCards();
  
  // Then activate only the selected card
  cardElement.style.boxShadow = '0 20px 40px rgba(255, 134, 51, 0.4), 0 0 20px rgba(255, 134, 51, 0.3)';
  const cardInner = cardElement.querySelector('.card-inner');
  if (cardInner) {
    cardInner.style.transform = 'rotateY(360deg)';
  }
};

export const resetCard = (cardElement) => {
  // Reset just this specific card
  cardElement.style.boxShadow = '0 10px 25px rgba(255, 134, 51, 0.3), 0 5px 10px rgba(255, 134, 51, 0.2)';
  const cardInner = cardElement.querySelector('.card-inner');
  if (cardInner) {
    cardInner.style.transform = 'rotateY(0deg)';
  }
};