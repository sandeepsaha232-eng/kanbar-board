import { getBoardData, saveBoardData } from './state.js';
import { renderCards } from './render.js';

export function handleDragStart(event, cardId) {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('cardId', cardId);
    event.target.closest('.card').classList.add('dragging');
}
window.handleDragStart = handleDragStart;

export function handleDragEnd(event) {
    document.querySelectorAll('.card.dragging').forEach(card => {
        card.classList.remove('dragging');
    });
}
window.handleDragEnd = handleDragEnd;

export function handleDragOver(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
    const container = event.currentTarget;
    container.classList.add('drag-over');
}
window.handleDragOver = handleDragOver;

export function handleDragLeave(event) {
    if (event.currentTarget === event.target) {
        event.currentTarget.classList.remove('drag-over');
    }
}
window.handleDragLeave = handleDragLeave;

export function handleDrop(event) {
    event.preventDefault();
    event.currentTarget.classList.remove('drag-over');

    const cardId = event.dataTransfer.getData('cardId');
    const targetColumnId = event.currentTarget.id.replace('column-', '');

    let boardData = getBoardData();
    let card = null;
    let sourceColumnId = null;

    for (let column in boardData) {
        const index = boardData[column].findIndex(c => c.id === cardId);
        if (index !== -1) {
            card = boardData[column][index];
            sourceColumnId = column;
            boardData[column].splice(index, 1);
            break;
        }
    }

    if (card && sourceColumnId !== targetColumnId) {
        if (!boardData[targetColumnId]) {
            boardData[targetColumnId] = [];
        }
        boardData[targetColumnId].push(card);
    }

    saveBoardData(boardData);
    renderCards();
}
window.handleDrop = handleDrop;
