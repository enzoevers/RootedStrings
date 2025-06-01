function buildDrivePreviewUrl(fileId) {
    return `https://drive.google.com/file/d/${fileId}/preview`;
}

// Set the iframe src after the page loads
window.onload = function () {
    const fileId = "1n0kp2L_iCLvipCzEJVGWj5shW0buDQUy";
    document.getElementById("driveFrame").src = buildDrivePreviewUrl(fileId);
};