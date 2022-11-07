function copyText() {
    // Get the text field
    var copyText = document.getElementById("text-copy");

    // Select the text field
    copyText.select();

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Nomer Rekening Sudah Tercopy");
}