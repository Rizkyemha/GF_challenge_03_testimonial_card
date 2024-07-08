// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.

const testimonial_card = () => {
	return `
    <div class="card">
      <div class="card-profile">
        <div class="card-profile-thumbnail">
          <img src="/img/profile-thumbnail.png" alt="profile image testimonial user"/>
        </div>
        <div class="card-profile-title">
          <h2 class="card-profile-title-name">Sarah Dole</h2>
          <p class="card-profile-title-username">@sarahdole</p>
        </div>
      </div>
      <p class="card-testimonial">
        I've been searching for high-quality abstract images for my design projects, 
        and I'm thrilled to have found this platform. The variety and depth of creativity are astounding!
      </p>
    </div>
  `;
};

document.addEventListener("DOMContentLoaded", () => {
	const root = document.getElementById("root_container");
	root.innerHTML = testimonial_card();
});
