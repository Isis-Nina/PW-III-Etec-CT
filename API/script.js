document.addEventListener('DOMContentLoaded', () => {
    const accessKey = 'qQHFuth2pJWamhrw4Rjfe20ABe1i6zUigFfgtqIjFMQ';
    const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${accessKey}&count=10`;

    const photoContainer = document.querySelector('.photo-container');
    const fileInput = document.getElementById('fileInput');

    async function fetchPhotos() {
        try {
            const response = await fetch(apiUrl);
            const photos = await response.json();

            photos.forEach(photo => {
                const img = document.createElement('img');
                img.src = photo.urls.regular;
                img.alt = photo.alt_description;
                img.className = 'photo';
                photoContainer.appendChild(img);
            });
        } catch (error) {
            console.error('Erro ao buscar fotos:', error);
        }
    }

    function handleFileUpload(event) {
        const file = event.target.files[0];
        if (file) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(file);
            img.className = 'photo';
            photoContainer.appendChild(img);
        }
    }

    fetchPhotos();
    fileInput.addEventListener('change', handleFileUpload);
});
