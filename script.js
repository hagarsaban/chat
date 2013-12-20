const class_list = document.getElementById('grid').classList;
function show_grid() {
    window.addEventListener("scroll", hide_grid, false);
    class_list.remove('hidden');
}
function hide_grid() {
    class_list.add('hidden');
}
function toggle_grid() {
    if (class_list.contains('hidden')) {
        show_grid();
    } else {
        hide_grid();
    }
};

