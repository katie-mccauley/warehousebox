const packages = [
  { heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs', missing: false },
  { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk', missing: true },
  { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147', missing: false },
  { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145', missing: true },
  { heavy: true, priority: true, fragile: true, to: 'Brittany', missing: true },
  { heavy: false, priority: true, fragile: false, to: 'Zach', trackingNumber: '8081baz', missing: true },
  { heavy: true, priority: false, fragile: true, to: 'Jeremy', trackingNumber: 'suz2367', missing: true }]


let box = []

function draw() {
  let template = ""
  for (let i = 0; i < box.length; i++) {
    const package = box[i];

    template += `
    <div class="col-md-4 p-4">
      <div class="text-center bg-danger m-3">
        <h2>${package.to}</h2>
        <h2>Tracking number: ${package.trackingNumber}</h2>
        <h2>Missing: ${package.missing ? "The package is missing" : "The package is not missing"}
      </div>
    </div>
    
    `
    document.getElementById("package").innerHTML = template
  }
}

function randomMissing() {
  packages.forEach(package => package.missing = false)
  const randomM = Math.floor(Math.random() * packages.length)
  packages[randomM].missing = true
  box = packages

  draw()
}

function filterByWeight() {
  // let weight = []
  // for (let i = 0; i < packages.length; i++) {
  //   let weightP = packages[i];
  //   if (weightP.heavy) {
  //     weight.push(weightP)
  //   }
  // }
  // console.log(weight)

  // draw(weight)
  console.log('pre filter w', box);
  box = box.filter(package => package.heavy)
  console.log('post filter w', box);
  draw()
}

function filterByPriority() {
  console.log('pre filter p', box);
  box = box.filter(package => package.priority)
  console.log('post filter p', box);
  draw()
}

function filter(properties) {
  let missingBox = packages.find(packages => packages.missing)
  box = box.filter(package => package[properties] === missingBox[properties])
  console.log(box)
  draw()

}

function alert() {
  let boxes = packages.find(p => p.missing == true)
}




randomMissing()