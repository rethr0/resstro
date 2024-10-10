function navigateTopage() {
    var selectedPage = document.getElementById('navigation').value;

    if (selectedPage !== "") {
        window.location.href = selectedPage;
    }
}