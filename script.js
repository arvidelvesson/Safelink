// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all status boxes
    const statusBoxes = document.querySelectorAll('.status-box');

    // Add click event listener to each box
    statusBoxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Toggle the expanded class
            this.classList.toggle('expanded');
        });
    });
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get all status boxes
    const statusBoxes = document.querySelectorAll('.status-box');

    // Add functionality to each box
    statusBoxes.forEach(function(box) {
        const chevronBtn = box.querySelector('.chevron-btn');
        const editIcon = box.querySelector('.edit-icon');
        const boxId = box.querySelector('.box-id');
        const editSection = box.querySelector('.edit-section');
        const editInput = box.querySelector('.edit-input');
        const saveBtn = box.querySelector('.save-btn');
        const cancelBtn = box.querySelector('.cancel-btn');

        // Expand/collapse functionality
        chevronBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            box.classList.toggle('expanded');
        });

        // Edit name functionality
        editIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            boxId.style.display = 'none';
            editIcon.style.display = 'none';
            editSection.style.display = 'flex';
            editInput.value = boxId.textContent;
            editInput.focus();
        });

        // Save button functionality
        saveBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            const newName = editInput.value.trim();
            if (newName) {
                boxId.textContent = newName;
                box.setAttribute('data-id', newName);
            }
            boxId.style.display = 'block';
            editIcon.style.display = 'flex';
            editSection.style.display = 'none';
        });

        // Cancel button functionality
        cancelBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            editInput.value = boxId.textContent;
            boxId.style.display = 'block';
            editIcon.style.display = 'flex';
            editSection.style.display = 'none';
        });

        // Press Enter to save
        editInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                saveBtn.click();
            }
        });

        // Press Escape to cancel
        editInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                cancelBtn.click();
            }
        });
    });
});