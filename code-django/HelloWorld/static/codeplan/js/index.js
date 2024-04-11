document.addEventListener('DOMContentLoaded', function () {
    const days = 30;
    const tasks = [
        '早起8点',
        '代码加扩展项目',
        '看书刷题',
        '休息',
        '逛社区',
        '看文档写代码',
        '看源代码'
    ];
    const container = document.querySelector('.row');
    for (let day = 1; day <= days; day++) {
        let box = document.createElement('div');
        box.className = 'col-md-4 day-box';
        box.innerHTML = `<h5 class="day-title">第${day}天</h5><ul class="task-list">` +
            tasks.map(task => `<li><input type="checkbox" class="checkbox" id="day${day}-task${tasks.indexOf(task)}"><label for="day${day}-task${tasks.indexOf(task)}">${task}</label></li>`).join('') + '</ul>';
        container.appendChild(box);
    }

    // Restore checkbox states
    $('.checkbox').each(function() {
        const isChecked = localStorage.getItem(this.id) === 'true';
        $(this).prop('checked', isChecked).change();
    });
});

$(document).ready(function() {
    $(document).on('change', '.checkbox', function() {
        if (this.checked) {
            $(this).next('label').css('text-decoration', 'line-through').css('color', '#7f8c8d');
        } else {
            $(this).next('label').css('text-decoration', 'none').css('color', '#333');
        }
        // Save the state of the checkbox to localStorage
        localStorage.setItem(this.id, this.checked);
    });
});