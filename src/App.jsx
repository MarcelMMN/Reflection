import React from 'react';

function App() {
  return (
    <div className="app-container">
      <style>{`
        .app-container {
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
          font-family: Arial, sans-serif;
          color: #333;
          line-height: 1.6;
        }
        h1 {
          color: #007bff;
          text-align: center;
          margin-bottom: 30px;
        }
        .section-card {
          background: #f9f9f9;
          border: 1px solid #ddd;
          padding: 20px;
          margin-bottom: 20px;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .section-card h3 {
          margin-top: 0;
          color: #0056b3;
        }
        p {
          margin: 0 0 10px 0;
          text-align: justify;
        }
        p:last-child {
          margin-bottom: 0;
        }
      `}</style>

      <h1>Moja Refleksja z Erasmusa i Kursu React</h1>

      <div className="section-card">
        <h3>1. Introduction</h3>
        <p>Hello! My name is Marcel, I am 16 years old, and I come from Poland, from a city named Zamość.</p>
      </div>

      <div className="section-card">
        <h3>2. Decision about Erasmus</h3>
        <p>I joined the Erasmus programme not only because I wanted to study, but also because I love to travel the world. Even though it was my first flight ever, it was a lot of fun.</p>
      </div>

      <div className="section-card">
        <h3>3. Why Portugal / Faro</h3>
        <p>मैं decided to choose Faro, Portugal, not only because of the amazing climate, but also because I wanted to understand Portuguese culture and lifestyle.</p>
      </div>

      <div className="section-card">
        <h3>4. Preparing for the flight</h3>
        <p>I started preparing two days before my flight to Portugal. My family helped me pack all the necessary things that I would need to survive this hot climate.</p>
      </div>

      <div className="section-card">
        <h3>5. Traveling and first impressions</h3>
        <p>Our trip started in Zwierzyniec, where we took a bus to Kraków. The journey wasn't very long—just a couple of hours—though it started raining right before we arrived at the airport.</p>
        <p>At the airport, my friends and I waited for two hours before boarding. It was totally worth it because the view from the plane window was incredible; we took a lot of pictures of the sun, the clouds, and our takeoff and landing in Portugal.</p>
      </div>

      <div className="section-card">
        <h3>6. Life in Faro</h3>
        <p>The first day felt a bit intense because of the heat that hit us seconds after stepping off the plane. However, after two weeks, I got completely used to the weather, which often reached 30–40 degrees.</p>
      </div>

      <div className="section-card">
        <h3>7. Favourite memories</h3>
        <p>All my favourite memories are from traveling across different places in Portugal. We also visited Sevilla, which is a really beautiful city. Another great memory was simply relaxing on the couch and watching Polish films after finishing all our planned work for the day.</p>
      </div>

      <div className="section-card">
        <h3>8. Challenges</h3>
        <p>There weren't many challenges that we encountered. The only difficulties were related to some coding tasks, but given the amount of time and hours we had, we could easily finish them.</p>
      </div>

      <div className="section-card">
        <h3>9. Learning React</h3>
        <p>During the React course, I enjoyed learning about components, props, and building interactive user interfaces the most. Managing state and working with hooks like useEffect were a bit more challenging at first, but with practice, I gained great frontend development skills that I can use in future projects.</p>
      </div>

      <div className="section-card">
        <h3>10. Personal and school growth</h3>
        <p>Erasmus changed me a lot, both personally and academically. I became much more independent, confident in speaking English, and better at solving problems on my own.</p>
      </div>

      <div className="section-card">
        <h3>11. Recommendation of Faro</h3>
        <p>I would definitely recommend Faro to future Erasmus students. It looks really nice, there a lot of places that you can travel to in Portugal, I also recommend visiting Sevilla i Spain.</p>
      </div>

      <div className="section-card">
        <h3>12. Advice for the next group</h3>
        <p>My main advice for the next group coming to Faro is: HAVE A TON OF SUN CREAM (atleast sun scream 50) without it you can just pray not to get burned everywhere.</p>
      </div>
    </div>
  );
}

export default App;