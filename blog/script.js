// Função para adicionar um comentário
function addComment() {
    const commentInput = document.getElementById('commentInput');
    const commentText = commentInput.value.trim();

    if (commentText !== '') {
        const commentsList = document.querySelector('.comments-list');
        const newComment = document.createElement('li');
        newComment.textContent = commentText;
        commentsList.appendChild(newComment);

        // Limpar a caixa de comentários após adicionar um comentário
        commentInput.value = '';
    }
}
