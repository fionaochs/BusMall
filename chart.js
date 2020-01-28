const myVotes = [
    { id: 'coffee', votes: 3 },
    { id: 'banana', votes: 5 },
    { id: 'desk', votes: 7 },
    { id: 'chair', votes: 8 },

];

const votes = [];
const labels = [];

myVotes.forEach(item => {
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
            backgroundColor: ['lightblue', 'blue', 'yellow', 'green', 'purple', 'orange']
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