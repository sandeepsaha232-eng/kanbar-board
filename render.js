import { columns, getBoardData, escapeHtml } from './state.js';

export function renderCards() {
    const boardData = getBoardData();

    columns.forEach(column => {
        const container = document.getElementById(`column-${column.id}`);
        const cards = boardData[column.id] || [];
        const count = document.getElementById(`count-${column.id}`);

        count.textContent = `${cards.length} task${cards.length !== 1 ? 's' : ''}`;

        if (cards.length === 0) {
            container.innerHTML = '<div class="empty-state">Drop tasks here</div>';
            return;
        }

        container.innerHTML = cards.map(card => `
            <div class="card" draggable="true" ondragstart="handleDragStart(event, '${card.id}')" ondragend="handleDragEnd(event)">
                <div class="card-text">${escapeHtml(card.text)}</div>
                <div class="card-actions">
                    <button class="card-btn" onclick="editCard('${card.id}')" title="Edit">
                        <i class="fas fa-edit"></i>
                    </button>
                    <button class="card-btn delete" onclick="deleteCard('${card.id}')" title="Delete">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        `).join('');
    });
}

export function loadCards() {
    renderCards();
}
