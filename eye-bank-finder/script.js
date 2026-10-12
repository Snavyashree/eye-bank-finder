// Sample data for eye banks (focused around Bangalore/general locations)
const eyeBanks = [
    {
        name: "Minto Eye Hospital Eye Bank",
        city: "Bangalore",
        address: "Chamrajpet, Bengaluru, Karnataka 560018",
        contact: "+91 80 2670 1085"
    },
    {
        name: "Narayana Nethralaya Eye Bank",
        city: "Bangalore",
        address: "121/C, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010",
        contact: "+91 80 6612 1300"
    },
    {
        name: "Dr. Agarwal's Eye Hospital & Eye Bank",
        city: "Bangalore",
        address: "Shivaji Nagar, Bengaluru, Karnataka 560001",
        contact: "+91 80 2559 4433"
    },
    {
        name: "Vasan Eye Care Eye Bank",
        city: "Chennai",
        address: "Cathedral Road, Gopalapuram, Chennai, Tamil Nadu 600086",
        contact: "+91 44 3989 3989"
    }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const resultsContainer = document.getElementById('resultsContainer');

function displayEyeBanks(items) {
    resultsContainer.innerHTML = '';
    
    if (items.length === 0) {
        resultsContainer.innerHTML = `<p style="color: #718096;">No eye banks found matching your search. Try searching for "Bangalore".</p>`;
        return;
    }

    items.forEach(bank => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <h3>${bank.name}</h3>
            <p><strong>Location:</strong> ${bank.city}</p>
            <p><strong>Address:</strong> ${bank.address}</p>
            <p><strong>Contact:</strong> ${bank.contact}</p>
        `;
        resultsContainer.appendChild(card);
    });
}

// Initial load - display all
displayEyeBanks(eyeBanks);

// Search functionality
searchBtn.addEventListener('click', () => {
    const query = searchInput.value.toLowerCase().trim();
    const filtered = eyeBanks.filter(bank => 
        bank.city.toLowerCase().includes(query) || 
        bank.name.toLowerCase().includes(query)
    );
    displayEyeBanks(filtered);
});

searchInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        searchBtn.click();
    }
});