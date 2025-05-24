document.addEventListener('DOMContentLoaded', () => {
    fetch('data.json')
        .then(response => response.json())

        .then(data => {
            
            
            let index = 0;
            setInterval(() => {
                document.getElementById('abu').src = data.boss[index];
                index = (index + 1) % data.boss.length;
            }, 2000);



        })
        .catch(error => console.error('Error loading profiles:', error));
});




