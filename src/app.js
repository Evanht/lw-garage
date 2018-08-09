// TODO: Build an awesome garage!
const garage = "evansengines"

const insertCar = (car) => {
  // console.log(car)
  const carList = document.querySelector(".cars-list")
  carList.insertAdjacentHTML("beforeend", `<div class="car">
    <div class="car-image">
      <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
    </div>
    <div class="car-info">
      <h4>${car.brand} ${car.model}</h4>
      <p><strong>Owner:</strong>${car.owner}</p>
      <p><strong>Plate:</strong>${car.plate}</p>
    </div>
  </div>`)
}

fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`)
  .then((response) => response.json())
  .then((data) => {
    // console.log(data)
      data.forEach((datum) => {
        insertCar(datum)
      })
    // insertCar()
  })

// 1. Get the form element
const form = document.getElementById("new-car")
// 2. Bind an event listener to the form
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const brand = document.getElementById("brand").value;
  const model = document.getElementById("model").value;
  const plate = document.getElementById("plate").value;
  const owner = document.getElementById("owner").value;

  const data = {
    brand,
    model,
    owner,
    plate
  }

  // console.log(data)
  fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((response) => response.json())
    .then((data) => {
      // console.log(data)
      insertCar(data)
    })

})
// 3. Get the input.value
// 4. Post to api
// 5. Stick car into DOM
