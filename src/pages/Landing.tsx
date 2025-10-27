import "./landing.css";
import ImageCredit from "./ImageCredit";
function Landing() {
  return (
    <div className="landing">
      <div className="landing-main" style={{ position: "relative" }}>
        <div className="karibu">
          <span className="karibu-text">Hi,</span>
          <h1 className="karibu-text">Karibu Tanzania,</h1>
          <h1 className="karibu-text">Karibu Dar es Salaam,</h1>
        </div>
        <div className="image-credit">
          <ImageCredit />
        </div>
        {/* Animated down arrow for scroll prompt */}
        <div className="scroll-down-icon">
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14m0 0l-7-7m7 7l7-7"
              stroke="#333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="landing-body">
        <section>
          <p className="intro">
            We have put together this website to be a guide to travelers in Dar
            es Salaam. Especially first time travelers
          </p>
          <p className="intro">First let us talk about Dar es Salaam? 👇🏿</p>
        </section>
        <section>
          <h2>About Dar es Salaam</h2>
          <p>
            <a href="https://en.wikipedia.org/wiki/Dar_es_Salaam">
              Dar es Salaam
            </a>{" "}
            (mostly just abbreviated Dar) is the largest city and financial hub
            of Tanzania and the capital of the Dar es Salaam Region.
            <ul>
              <li>Population: Over 7 million people</li>
            </ul>
          </p>
        </section>
        <section>
          <h2>Budget (As a traveler)</h2>
          With the current cost of living in Dar es Salaam, we estimate that as
          a traveler you need a daily budget of <b>atleast 45 USD</b> for
          transport and meals within Dar es Salaam.
        </section>
        <section>
          <h2>Accommodation</h2>We are excited to host you at our lovely
          Apartment,{" "}
          <a href="https://www.airbnb.com/rooms/1404582654154251503?guests=1&adults=1&s=67&unique_share_id=b48d3913-6fa6-4fd7-a084-6ba1c6b9f752">
            the crib
          </a>
          .
          {/* <p>Address:-</p>
          <p>
            67R2+6M9, Mwai Kibaki Road <b>Wikicha Tower</b>, Mwai Kibaki Rd, Dar
            es Salaam
          </p>
          <p>Block A, Second Floor, Apartment 5A</p> */}
        </section>
        <section>
          <h2>Packing Tips</h2>
          <ul>
            <li>
              Dar es Salaam and Zanzibar boast a tropical climate, so pack
              lightweight and breathable clothing to stay comfortable in the
              heat.
            </li>

            <li>
              It's a good idea to bring a light sweater or blanket, especially
              if you plan to use air conditioning when indoors. Many people
              prefer it cooler indoors. A setting around 16 degrees Celsius can
              provide a refreshing escape from the heat.
            </li>
          </ul>
        </section>
        <section>
          <h2>Language and Culture</h2>
          <ul>
            <li>
              Dar es Salaam is a Swahili city. It is located on the Swahili
              Coast
            </li>
            <li>Swahili is the language</li>
            <li>
              Learning a few Swahili words and phrases can enhance your travel
              experience and show respect for the local culture. Start with
              basic greetings like "Jambo" (hello), "Asante" (thank you), and
              "Karibu" (welcome).
            </li>
            <li>
              Natives often appreciate it when tourists make an effort to
              communicate in Swahili, even if it's just a few words.
            </li>
          </ul>
        </section>
        <section>
          <h2>Currency and Payment</h2>
          <ul>
            <li>
              The official currency in Dar es Salaam and Zanzibar is the
              Tanzanian Shilling (TZS).
            </li>
            <li>Most common forms of transactions - Cash and Mobile money </li>
            <li>
              Most places accept debit and credit cards, but some may not — it
              is a good idea to sometime carry cash or keep some money on your
              mobile money.
            </li>
            <li>
              Mobile money payment options include: M-Pesa, Airtel Money, and
              Tigo Pesa.
            </li>
            <li>
              It's recommended to bring some US Dollars with you and exchange
              them at the airport or local forex bureaus upon arrival. Be
              cautious about bringing your home country's currency, as it may be
              challenging to exchange and less commonly accepted.
            </li>
          </ul>
        </section>
        <section>
          <h2>Restaurants To Explore in Dar</h2>
          <ul>
            <li>Veranda</li>
            <li>Bean There Cafe</li>
            <li>The Deck Masaki</li>
            <li>Red dragon</li>
            <br />
            <li>Burger Restaurants</li>
            <ul>
              <li>Crave</li>
              <li>Lobu</li>
              <li>Burger 53 at Dar Free Market</li>
              <li>Burger 53 at Mlimani City</li>
              <li>Burger Buddies</li>
            </ul>
            <li>
              Palm Village restaurants(Palm village mall is just a 5 minutes
              walk from the apartment)
            </li>
            <ul>
              <li>DM Cafe</li>
            </ul>
            <br />
            <li>
              Mikocheni Plaza restaurants(Mikocheni plaza is just 7 minutes walk
              from the apartment)
            </li>
            <ul>
              <li>KFC</li>
              <li>Pizza Hut</li>
            </ul>

            <li>Mlimani City Restaurants</li>
            <ul>
              <li>Samaki Samaki</li>
              <li>Kuku kuku</li>
              <li>MerryBrown</li>
              <li>Papparoti</li>
            </ul>

            <li>Karambezi Cafe</li>
            <li>Mama Africa</li>
            <li>Goong restaurant</li>
            <li>Toka Uje sekei</li>
            <li>Container Mikocheni</li>
            <li>Chipso</li>
            <li>Addis in Dar</li>
            <p>
              You can find more restaurants on{" "}
              <a href="https://duka.direct/">Duka Direct</a> - A food and
              grocery ordering application.
            </p>
          </ul>
        </section>
        <section>
          <h2>Gyms</h2>
          These gyms are close to the apartment
          <ul>
            <li>Azura Gym</li>
            <li>Champion Gym (at Palm village)</li>
            <li>Dar CrossFit Masaki</li>
          </ul>
        </section>
        <section>
          <h2>Shopping</h2>
          <ul>
            <li>Shoppers Plaza - Mikocheni</li>
            <li>Palm Village</li>
            <li>Mickocheni Plaza</li>
            <li>Dar Free Market</li>
            <li>Mlimani City</li>
            <li>Mwenge Sokoni</li>
            <li>Karume Market</li>
          </ul>
        </section>
        <section>
          <h2>Night Life</h2>
          <ul>
            <li>Wavuvi Kempu</li>
            <li>Samaki Samaki Masaki</li>
            <li>Elements Masaki</li>
            <li>Warehouse Masaki</li>
            <li>1245</li>
            <li>Olive Masaki</li>
            <li>Tips Coco beach</li>
            <li>Tips Mikocheni</li>
            <li>Polos(Just behind Shoppers)</li>
          </ul>
        </section>
        <section>
          <p className="intro">Ahsante Sana 😊</p>
        </section>
      </div>
    </div>
  );
}

export default Landing;
