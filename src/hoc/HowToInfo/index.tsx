import React, { ReactElement } from "react"
const styles = require("./index.module.css")

interface Props {}

function HowToInfo({}: Props): ReactElement {
  return (
    <div className={styles.wrapper}>
      <div className="flex p-8 flex-col text-justify">
        <h3 className="text-2xl mb-4">It's damn easy!</h3>
        <h5 className="text-md">Hiring a car in the UK is easy with us:</h5>
        <ul className="my-4">
          <li>
            <b>Select a car</b> – we have everything from small city cars to
            SUVs and people carriers for larger families
          </li>
          <li>
            <b>Choose your collection time</b> – many of our locations have
            extended opening hours so you can collect at a time that suits you.
          </li>
          <li>
            <b>Pick up from the most convenient location</b> – there are
            hundreds of pick-up points in the UK in airports, city centres,
            retail centres, industrial estates and elsewhere.
          </li>
        </ul>
        <div>
          Our service includes access to the award winning Gold Plus Rewards
          programme, which rewards loyalty with a faster pick up experience and
          incredible savings.
          <br />
          <br />
          We’ll drive you through every step, sending a personalised code a few
          minutes before your arrival. Keys in hand, you’ll be free to explore
          the bountiful British Isles.
        </div>
      </div>
      <div className="flex p-8 flex-col text-justify">
        <h3 className="text-2xl mb-4">What cars can I hire in UK</h3>
        <h5 className="text-md">
          CarRental has a wide collection of cars available for hire in the UK:
        </h5>
        <ul className="my-4">
          <li>
            Compact hatchbacks are built for city driving. This type of rental
            car tends to be the most affordable and is easy to manoeuvre.
          </li>
          <li>
            Small family cars including the Vauxhall Astra are perfect for
            budget day trips or travelling with children.
          </li>
          <li>
            Estate cars provide that little extra leg room and boot space.
          </li>
          <li>
            SUVs like are great for road trips to remote areas such as the
            Scottish Highlands.
          </li>
          <li>People carriers are ideal for larger families and groups.</li>
          <li>Saloons are a favourite among our business customers</li>
          <li>Vans are available for more practical purposes.</li>
          <li>
            Dream collection. Fancy a treat? Hire from the Dream Collection to
            choose from a range of luxury and sports cars.
          </li>
          <li>
            British Collection. Hertz’s British Collection comprises some of the
            country’s best and most iconic cars, including the Mini One
            hatchback, Jaguar F-Type sports car and Land Rover Discovery SUV.
          </li>
        </ul>
        <div>Vehicle availability varies from location to location.</div>
      </div>
      <div className="flex p-8 flex-col text-justify">
        <h3 className="text-2xl mb-4">
          Are there any restrictions to hireing a car in UK?
        </h3>

        <div>
          You must be over 25 to hire a car with Hertz in the UK. There are a
          few exceptions – for some models, drivers over 23 can pay a young
          driver surcharge to hire a car.
          <br />
          <br />
          Certain heavy vehicles also have higher age limits – that’s why we ask
          your age before we ask you to choose a vehicle.
          <br />
          <br />
          You must have held a full driving licence for one year at the time of
          rental. For certain high-performance and heavy vehicles, this period
          is longer and you must have fewer than seven penalty points on your
          licence.
        </div>
      </div>
    </div>
  )
}

export default HowToInfo
