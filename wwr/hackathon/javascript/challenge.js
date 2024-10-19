document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the selected image and comment
    const fileInput = document.getElementById('image');
    const commentInput = document.getElementById('comment');
    const postContainer = document.getElementById('postContainer');

    if (fileInput.files.length === 0) {
        alert('Please select an image to upload.');
        return;
    }

    const file = fileInput.files[0];
    const comment = commentInput.value;

    // Create a FileReader to read the image file
    const reader = new FileReader();
    reader.onload = function(e) {
        // Create a new post element
        const postDiv = document.createElement('div');
        postDiv.classList.add('post');

        // Create image element
        const img = document.createElement('img');
        img.src = e.target.result;

        // Create comment paragraph
        const p = document.createElement('p');
        p.textContent = comment;

        // Append image and comment to postDiv
        postDiv.appendChild(img);
        postDiv.appendChild(p);

        // Add the post to the container
        postContainer.prepend(postDiv);

        // Clear the form
        fileInput.value = '';
        commentInput.value = '';
    };

    // Read the image file as a data URL
    reader.readAsDataURL(file);
});
