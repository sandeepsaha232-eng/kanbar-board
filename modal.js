import { boardState, getCardById } from './state.js';

export function openModal(columnId, cardId = null) {
    boardState.currentColumn = columnId;
    boardState.currentEditingCard = cardId;
    const modal = document.getElementById('cardModal');
    const modalTitle = document.getElementById('modalTitle');
    const cardText = document.getElementById('cardText');

    if (cardId) {
        const card = getCardById(cardId);
        modalTitle.textContent = 'Edit Task';
        cardText.value = card.text;
    } else {
        modalTitle.textContent = 'Add New Task';
        cardText.value = '';
    }

    modal.classList.add('active');
    cardText.focus();
}
window.openModal = openModal;

export function closeModal() {
    document.getElementById('cardModal').classList.remove('active');
    boardState.currentEditingCard = null;
    boardState.currentColumn = null;
    document.getElementById('cardText').value = '';
}
window.closeModal = closeModal;