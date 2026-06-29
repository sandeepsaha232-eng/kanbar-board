export const STORAGE_KEY = 'kanban_board_data';

export const boardState = {
    currentEditingCard: null,
    currentColumn: null
};

export const columns = [
    { id: 'todo', title: 'To Do', icon: '📝' },
    { id: 'inprogress', title: 'In Progress', icon: '⚙️' },
    { id: 'done', title: 'Done', icon: '✅' }
];

export function getBoardData() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {
            todo: [],
            inprogress: [],
            done: []
        };
    } catch {
        return {
            todo: [],
            inprogress: [],
            done: []
        };
    }
}

export function saveBoardData(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function getCardById(cardId) {
    const boardData = getBoardData();
    for (let column in boardData) {
        const card = boardData[column].find(c => c.id === cardId);
        if (card) return card;
    }
    return null;
}

export function generateId() {
    return 'card_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
}

export function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

export function createColumnElement(column) {
    const columnDiv = document.createElement('div');
    columnDiv.className = 'column';
    columnDiv.innerHTML = `
        <div class="column-header">
            <div class="column-title">
                <span>${column.icon}</span>
                <span>${column.title}</span>
            </div>
            <button class="add-card-btn" onclick="openModal('${column.id}')">
                <i class="fas fa-plus"></i> Add
            </button>
        </div>
        <div class="column-count" id="count-${column.id}">0 tasks</div>
        <div class="cards-container" id="column-${column.id}" ondrop="handleDrop(event)" ondragover="handleDragOver(event)" ondragleave="handleDragLeave(event)">
            <div class="empty-state">Drop tasks here</div>
        </div>
    `;
    return columnDiv;
}

export function initializeBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    columns.forEach(column => {
        const columnEl = createColumnElement(column);
        board.appendChild(columnEl);
    });
}