import { boardState, getBoardData, saveBoardData, getCardById, generateId } from './state.js';
import { closeModal, openModal } from './modal.js';
import { renderCards } from './render.js';

export function saveCard(event) {
    event.preventDefault();
    const text = document.getElementById('cardText').value.trim();

    if (!text) return;

    let boardData = getBoardData();

    if (boardState.currentEditingCard) {
        const card = getCardById(boardState.currentEditingCard);
        card.text = text;
    } else {
        if (!boardData[boardState.currentColumn]) {
            boardData[boardState.currentColumn] = [];
        }
        boardData[boardState.currentColumn].push({
            id: generateId(),
            text: text,
            createdAt: new Date().toISOString()
        });
    }

    saveBoardData(boardData);
    renderCards();
    closeModal();
}
window.saveCard = saveCard;

export function deleteCard(cardId) {
    if (confirm('Delete this task?')) {
        let boardData = getBoardData();
        for (let column in boardData) {
            boardData[column] = boardData[column].filter(c => c.id !== cardId);
        }
        saveBoardData(boardData);
        renderCards();
    }
}
window.deleteCard = deleteCard;

export function editCard(cardId) {
    const columnId = Object.keys(getBoardData()).find(col => 
        getBoardData()[col].some(c => c.id === cardId)
    );
    openModal(columnId, cardId);
}
window.editCard = editCard;
