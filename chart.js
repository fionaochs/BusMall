const savedResults = JSON.parse(localStorage.getItem('results'));


const votes = [];
const labels = [];

savedResults.forEach(item => {
    votes.push(item.votes);
    labels.push(item.id);
});

const ctx = document.getElementById('chart').getContext('2d');


new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels,
        datasets: [{
            label: 'Number of Votes',
            data: votes,
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange', 'teal', 'black', 'brown', 'limegreen', 'pink', 'violet', 'red', 'lightblue', 'purple', 'aqua', 'forestgreen', 'salmon', 'magenta', 'brown', 'red']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});