import { initializeBoard } from './state.js';
import { closeModal } from './modal.js';
import { saveCard } from './crud.js';
import { loadCards } from './render.js';
import './dragdrop.js';

document.getElementById('cardModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('cardModal')) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

const modalForm = document.querySelector('#cardModal form') || document.getElementById('cardForm');
if (modalForm) {
    modalForm.addEventListener('submit', saveCard);
} else {
    const saveBtn = document.querySelector('.modal-footer .save-btn') || document.getElementById('saveCardBtn');
    if (saveBtn) {
        saveBtn.addEventListener('click', saveCard);
    }
}

initializeBoard();
loadCards();