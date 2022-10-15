const mass = document.querySelector("#mass")
const select = document.querySelector("#select")
const render = document.querySelector("#render-btn")
const planetCol = document.querySelector("#planet-col")
const resultDisplay = document.querySelector("#result-display")

const planets = [{
    planet1: {name: "earth", image:"images/earth.png", adg: 9.8},
    planet2: {name: "mars", image:"images/mars.png", adg: 3.7},
    planet3: {name: "jupiter", image:"images/jupiter.png", adg: 23.1},
    planet4: {name: "saturn", image:"images/saturn.png", adg: 9},
    planet5: {name: "neptune", image:"images/neptune.png", adg: 11},
    planet6: {name: "pluto", image:"images/pluto.png", adg: 0.7},
    planet7: {name: "moon", image:"images/moon.png", adg: 1.6},
    planet8: {name: "mercury", image:"images/mercury.png", adg: 3.7},
    planet9: {name: "venus", image:"images/venus.png", adg: 8.9},
    planet10: {name: "uranus", image: "images/uranus.png", adg: 8.7}
}]

const getPlanetWeight = function (mass, adg) {
	return mass * adg
}

const getPlanetMass = (mass,adg) => {
	return (mass * adg) / 9.8
}

const store = data => {
    localStorage.setItem("data", data)
}

select.addEventListener("change", event => {
    store(event.currentTarget.value)
    //console.log(localStorage)
})


const displayResult = (image, pName, calculatedWeight, calculatedMass) => {
    resultDisplay.innerHTML = `
    <div class="container-sm py-5 my-4" style="background-color: rgba(77, 75, 75, 0.568); max-width: 850px;">
	<div class="d-flex justify-content-center align-items-center">
      <div class="me-2 ms-lg-5 ms-md-5 text-center">
        <img class="img-fluid" src=${image} style="max-height: 300px;">
      </div>
      <div class="container my-5 py-3" style="background-color: rgba(77, 75, 75, 0.568); max-width: 300px;">
			<div class="text-center">
			  	<p class="lead pt-3 text-white mb-1">The weight of the object on <span id="planet-name" class="fw-bold">${pName.toUpperCase()}</span></p>
					<div id="result" class="d-inline text-light fw-bold fs-2">
						${calculatedWeight.toFixed(2)}N
						<p class="fs-4">(${calculatedMass.toFixed(2)}kg)</p>
					</div>
				</div>
			</div>
    </div>
  </div>`

}



render.addEventListener("click", () => {
        if (mass.value === "" || select.value === "") {
            alert("input value in all fields")
          } else {
    planets.forEach(planet => {
        if (localStorage.data == "earth") {
            displayResult(planet.planet1.image, planet.planet1.name, getPlanetWeight(mass.value, planet.planet1.adg), getPlanetMass(mass.value, planet.planet1.adg))
        } else if (localStorage.data == "mars") {
            displayResult(planet.planet2.image, planet.planet2.name, getPlanetWeight(mass.value, planet.planet2.adg), getPlanetMass(
							mass.value, planet.planet2.adg))
        } else if (localStorage.data == "jupiter") {
            displayResult(planet.planet3.image, planet.planet3.name, getPlanetWeight(mass.value, planet.planet3.adg), getPlanetMass(mass.value, planet.planet3.adg))
        } else if (localStorage.data == "saturn") {
            displayResult(planet.planet4.image, planet.planet4.name, getPlanetWeight(mass.value, planet.planet4.adg), getPlanetMass(mass.value, planet.planet4.adg))
        } else if (localStorage.data == "neptune") {
            displayResult(planet.planet5.image, planet.planet5.name, getPlanetWeight(mass.value, planet.planet5.adg), getPlanetMass(mass.value, planet.planet5.adg))
        } else if (localStorage.data == "pluto") {
            displayResult(planet.planet6.image, planet.planet6.name, getPlanetWeight(mass.value, planet.planet6.adg), getPlanetMass(mass.value, planet.planet6.adg))
        } else if (localStorage.data == "moon") {
            displayResult(planet.planet7.image, planet.planet7.name, getPlanetWeight(mass.value, planet.planet7.adg), getPlanetMass(mass.value, planet.planet7.adg))
        } else if (localStorage.data == "mercury") {
            displayResult(planet.planet8.image, planet.planet8.name, getPlanetWeight(mass.value, planet.planet8.adg), getPlanetMass(mass.value, planet.planet8.adg))
        } else if (localStorage.data == "venus") {
            displayResult(planet.planet9.image, planet.planet9.name, getPlanetWeight(mass.value, planet.planet9.adg), getPlanetMass(mass.value, planet.planet9.adg))
        }  else if (localStorage.data == "uranus") {
          displayResult(planet.planet10.image, planet.planet10.name, getPlanetWeight(mass.value, planet.planet10.adg), getPlanetMass(mass.value, planet.planet10.adg))
      }
    })  
	}
})