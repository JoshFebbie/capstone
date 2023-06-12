export default function Post() {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://www.tu.org/wp-content/uploads/2021/03/streamerbrown.jpg"
          alt=""
          className="brown"
        />
      </div>
      <div className="texts">
        <h2>Catching Big Buttery Browns, in Lakes or Rivers</h2>
        <p className="info">
          <span className="author">
            By: <a href="">Kirk Deeter</a>
          </span>
          <span className="time">March 23, 2021</span>
        </p>
        <p className="summary">
          When fishing for brown trout in lakes, try getting your fly as deep as
          possible by using larger-sized flies with weighted droppers. Streamers
          are an excellent choice for this situation. If you're fishing a river,
          then Terrestrials or Stoneflies imitations will work great.
        </p>
      </div>
    </div>
  );
}
