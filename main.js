const mass = document.querySelector("#mass")
const select = document.querySelector("#select")
const render = document.querySelector("#render-btn")
const planetCol = document.querySelector("#planet-col")
const resultDisplay = document.querySelector("#result-display")

const planets = [{
    planet1: {name: "earth", image:"images/earth.png"},
    planet2: {name: "mars", image:"images/mars.png"},
    planet3: {name: "jupiter", image:"images/jupiter.png"},
    planet4: {name: "saturn", image:"images/saturn.png"},
    planet5: {name: "neptune", image:"images/neptune.png"},
    planet6: {name: "pluto", image:"images/pluto.png"},
    planet7: {name: "moon", image:"images/moon.png"},
    planet8: {name: "mercury", image:"images/mercury.png"},
    planet9: {name: "venus", image:"images/venus.png"},
    planet10: {name: "uranus", image: "images/uranus.png"}
}]


class WeightCalc {
    constructor(mass) {
        this.mass = mass
    }

    getEarthWeight() {
        return this.mass * 9.8
    }

    getMoonWeight() {
        return this.mass * 1.6
    }

    getMercuryWeight() {
        return this.mass * 3.7
    }

    getVenusWeight() {
        return this.mass * 8.9
    }

    getMarsWeight() {
        return this.mass * 3.7
    }
    
    getJupiterWeight() {
        return this.mass * 23.1
    }

    getSaturnWeight() {
        return this.mass * 9
    }

    getUranusWeight() {
        return this.mass * 8.7
    }

    getNeptuneWeight() {
        return this.mass * 11
    }

    getPlutoWeight() {
        return this.mass * 0.7
    }
}


const store = data => {
    localStorage.setItem("data", data)
}

select.addEventListener("change", event => {
    store(event.currentTarget.value)
    //console.log(localStorage)
})


const displayResult = (image, pName, calculatedWeight) => {
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
					</div>
				</div>
			</div>
    </div>
  </div>`

}



render.addEventListener("click", () => {
  if (mass.value === "" || select.value === "") {
    alert("input value in all fields")
  }
    const weight = new WeightCalc(mass.value)
    //console.log(weight)
    planets.forEach(planet => {
        if (localStorage.data == "earth") {
            displayResult(planet.planet1.image, planet.planet1.name, weight.getEarthWeight())
        } else if (localStorage.data == "mars") {
            displayResult(planet.planet2.image, planet.planet2.name, weight.getMarsWeight())
        } else if (localStorage.data == "jupiter") {
            displayResult(planet.planet3.image, planet.planet3.name, weight.getJupiterWeight())
        } else if (localStorage.data == "saturn") {
            displayResult(planet.planet4.image, planet.planet4.name, weight.getSaturnWeight())
        } else if (localStorage.data == "neptune") {
            displayResult(planet.planet5.image, planet.planet5.name, weight.getNeptuneWeight())
        } else if (localStorage.data == "pluto") {
            displayResult(planet.planet6.image, planet.planet6.name, weight.getPlutoWeight())
        } else if (localStorage.data == "moon") {
            displayResult(planet.planet7.image, planet.planet7.name, weight.getMoonWeight())
        } else if (localStorage.data == "mercury") {
            displayResult(planet.planet8.image, planet.planet8.name, weight.getMercuryWeight())
        } else if (localStorage.data == "venus") {
            displayResult(planet.planet9.image, planet.planet9.name, weight.getVenusWeight())
        }  else if (localStorage.data == "uranus") {
          displayResult(planet.planet10.image, planet.planet10.name, weight.getUranusWeight())
      }
    })  
    
})