document.addEventListener("DOMContentLoaded", function() {
    const visionBtn = document.getElementById("vision-btn");
    const missionBtn = document.getElementById("mission-btn");
    const visionContent = document.getElementById("vision-content");
    const missionContent = document.getElementById("mission-content");

    visionBtn.addEventListener("click", function() {
        // Switch to Vision
        visionBtn.classList.add("active");
        missionBtn.classList.remove("active");
        visionContent.classList.remove("hidden");
        missionContent.classList.add("hidden");
    });

    missionBtn.addEventListener("click", function() {
        // Switch to Mission
        missionBtn.classList.add("active");
        visionBtn.classList.remove("active");
        missionContent.classList.remove("hidden");
        visionContent.classList.add("hidden");
    });
});
