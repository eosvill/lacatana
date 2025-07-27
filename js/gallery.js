document.addEventListener('DOMContentLoaded', function() {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        download: false,
        getCaptionFromTitleOrAlt: false,
        backdropDuration: 500,
        hideBarsDelay: 6000,
        closable: true,
        mode: 'lg-fade',
        cssEasing: 'ease-in-out',
        backdropFilter: 'blur(8px)',
    });
});