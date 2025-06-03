var card_number=0;


document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            console.log(data);

            let index = 0;
            setInterval(() => {
                document.getElementById('abu').src = data.abu[index];
                index = (index + 1) % data.abu.length; // FIXED THIS LINE
            }, 2000);
        })
        .catch(error => console.error('Error loading profiles:', error));
});


const cards = document.querySelectorAll('.profile-card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    const cardId = card.id;             // e.g., "card3"
    const personId = cardId.slice(-1);  // Get "3"
    localStorage.setItem('selectedPersonId', personId);
    window.location.href = 'portfolio.html';
  });
});
