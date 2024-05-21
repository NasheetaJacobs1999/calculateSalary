document.addEventListener("DOMContentLoaded", function() {
    let workingYes = document.querySelector('input[name="answer"][value="yes"]');
    let workingNo = document.querySelector('input[name="answer"][value="no"]');
    let workingDiv = document.getElementById('working');

    // Toggle for visibility of the working details
    const toggleWorkingDetails = function() {
        if (workingYes.checked) {
            workingDiv.style.display = 'block';
        } else {
            workingDiv.style.display = 'none';
        }
    };

    toggleWorkingDetails();

    // Event listener to toggle working details when radio buttons change
    workingYes.addEventListener('change', toggleWorkingDetails);
    workingNo.addEventListener('change', toggleWorkingDetails);
});