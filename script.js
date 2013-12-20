const class_list = document.getElementById('grid').classList;
function show_grid() {
    window.addEventListener("scroll", hide_grid, false);
    class_list.remove('hidden');
}
function hide_grid() {
    window.removeEventListener("scroll", hide_grid, false);
    class_list.add('hidden');
}
function toggle_grid() {
    if (class_list.contains('hidden')) {
        show_grid();
    } else {
        hide_grid();
    }
};




const count_div = document.getElementById('notification-count')
function notification() {
    if(confirm("You have " + 
               notification.count + 
               " notifications\n" + 
               "Shall I add one?")) {
        notification.count += 1;
    } else {
        if (notification.count) {
            notification.count -= 1
        }
    }
    notification.update();
}
notification.count = parseInt(count_div.textContent);
notification.update = function update() {
    const previous = parseInt(count_div.textContent);
    const next     = notification.count;
    
    if (next === previous) {
        return;
    } else {
        if (next === 0) {
            count_div.style.display = "none"
            count_div.textContent = 0;
        } else {
            count_div.style.display = "inline"
            count_div.textContent = next;
        }
    }
}
