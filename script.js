function toggle_grid() {
    var class_list = document.getElementById('grid').classList;
    if (class_list.contains('hidden')) {
        class_list.remove('hidden')
    } else {
        class_list.add('hidden');
    };
};