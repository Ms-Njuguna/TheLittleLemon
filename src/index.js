console.log('Heyyyy Trish')


function fetchSpecials() {
  fetch('http://localhost:3000/specials')
  .then(res => res.json())
  .then(specials => {
    specials.forEach(special => {
      displaySpecials(special);
    })
})
}

fetchSpecials();

function displaySpecials(special) {
  const specialsDisplay = document.querySelector('#specials-display');

  const specialCard = document.createElement('div');
  specialCard.classList.add('flex-1', 'bg-[#EDEFEE]', 'w-[300px]', 'rounded-t-[16px]')
  specialCard.innerHTML =`
    <img src="${special.image}" alt="${special.name}" class="w-[300px] h-[200px] object-cover rounded-t-[16px]">
    <div class="p-6">
      <div class="flex justify-between mb-[16px]">
        <h3 class="font-bold">${special.name}</h3>
        <p class="font-bold text-[#EE9972]">kes. ${special.price}</p>
      </div>
      <p class="mb-[20px] text-[14px]">${special.description}</p>
      <div class="flex justify-between">
        <button class="text-[#495E57] font-bold hover:bg-[#495E57] hover:rounded-[16px] hover:text-[#EDEFEE] py-2 px-4">Order a delivery</button>
        <svg xmlns="http://www.w3.org/2000/svg" height="26px" viewBox="0 -960 960 960" width="26px" fill="#495E57" class="mt-[6px]"><path d="M280-200q-50 0-85-35t-35-85H80v-120q0-66 47-113t113-47h160v200h140l140-174v-106H560v-80h120q33 0 56.5 23.5T760-680v134L580-320H400q0 50-35 85t-85 35Zm40-200Zm-40 120q17 0 28.5-11.5T320-320h-80q0 17 11.5 28.5T280-280Zm-80-360v-80h200v80H200Zm560 440q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35Zm0-80q17 0 28.5-11.5T800-320q0-17-11.5-28.5T760-360q-17 0-28.5 11.5T720-320q0 17 11.5 28.5T760-280ZM160-400h160v-120h-80q-33 0-56.5 23.5T160-440v40Z"/></svg>
      </div>
    </div>
  `;

  specialsDisplay.appendChild(specialCard);
}



function fetchTestimonials() {
  fetch('http://localhost:3000/testimonials')
  .then(res => res.json())
  .then(testimonials => {
    testimonials.forEach(testimonial => {
      displayTestimonial(testimonial)
    })
  })
}

fetchTestimonials();


function displayTestimonial(testimonial) {
  const testimonialDisplay = document.querySelector('#testimonials-display');
  const testimonialCard = document.createElement('div');
  testimonialCard.classList.add('max-w-[220px]', 'bg-white', 'rounded-[16px]', 'p-4')
  testimonialCard.innerHTML = `
    <div class="flex flex-row justify center px-12">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#495E57" class="bi bi-star-fill" viewBox="0 0 16 16"><path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/></svg>
    </div>
    <div class="flex flex-row justify center gap-[10px] my-4">
      <img src="${testimonial.image}" alt="image" class="h-[70px] w-[70px] object-cover rounded-full">
      <div class="mt-[15px]">
        <h3 class="text-[15px] font-bold">${testimonial.name}</h3>
        <h5 class="text-[10px]">${testimonial.user_name}</h5>
      </div>
    </div>
    <p>"${testimonial.review}"</p>
  `;
  testimonialDisplay.appendChild(testimonialCard);
}


const modal = document.getElementById("myModal");
const openBtn = document.getElementById("openModalBtn");
const closeBtn = document.getElementById("closeModalBtn");

openBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});
