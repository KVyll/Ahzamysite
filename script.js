let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

// Tampilkan slide pertama
showSlide(currentSlide);

function openModal(title, description) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-description').innerText = description;
    document.getElementById }

    const articles = [
        {
            title: "Banjir Besar Melanda Kota X",
            description: "Kota X mengalami banjir besar akibat hujan deras selama 3 hari berturut-turut."
        },
        {
            title: "Perayaan Tahun Baru di Tengah Pandemi",
            description: "Perayaan tahun baru kali ini berlangsung dengan protokol kesehatan yang ketat."
        },
        {
            title: "Olahraga di Masa Pandemi",
            description: "Berbagai cabang olahraga mulai kembali diadakan dengan protokol kesehatan."
        }
        // Tambahkan artikel lainnya di sini
    ];
    
    function searchArticles(event) {
        event.preventDefault(); // Mencegah form dari pengiriman default
        const query = document.getElementById('search-input').value.toLowerCase();
        const results = articles.filter(article => 
            article.title.toLowerCase().includes(query) || 
            article.description.toLowerCase().includes(query)
        );
    
        displaySearchResults(results);
    }
    
    function displaySearchResults(results) {
        const resultsContainer = document.getElementById('search-results');
        resultsContainer.innerHTML = ''; // Kosongkan hasil pencarian sebelumnya
    
        if (results.length > 0) {
            results.forEach(result => {
                const articleElement = document.createElement('article');
                articleElement.innerHTML = `<h3>${result.title}</h3><p>${result.description}</p>`;
                resultsContainer.appendChild(articleElement);
            });
        } else {
            resultsContainer.innerHTML = '<p>Tidak ada hasil ditemukan.</p>';
        }
    }

    