function App(): React.JSX.Element {
    return (
        <div className="App">
            <header
                className="App-header"
                style={{ backgroundColor: "#FF0000", padding: "20px" }}
            >
                Isaiah Moore's Portfolio
            </header>
            <h1>this is a header</h1>

            <div>
                <div>
                    <span style={{ color: "red" }}>
                        A wallpaper image of Clinical Data Science
                    </span>
                </div>
                <img src={IMG} alt="Clinical Data Science Wallpaper" />
            </div>
            <p> Top 3 most important concepts in Clinical Data Science:</p>

            {/* <ul>
                <li>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                    Data Quality and Integrity
                </li>
                <li>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                    Predictive Modeling and Machine Learning
                </li>
                <li>
                    <div
                        style={{
                            width: "100px",
                            height: "100px",
                            backgroundColor: "red",
                        }}
                    ></div>
                    Regulatory Compliance and Ethical Considerations
                </li>
            </ul> */}

            {/* <h4>Top Skills in Clinical Data Science</h4>
            {/* <ul>
                <li>Data Analysis and Cleaning</li>
                <li>Machine Learning Model Development</li>
                <li>Data Visualization with Python/R</li>
            </ul> */}

            <div>
                {/* <button
                    className="btn btn-primary mt-3"
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </button> */}
                <Button>Hello World!</Button>
            </div>

            <div>
                <Button
                    onClick={() => {
                        console.log("Hello World!");
                    }}
                >
                    Log Hello World
                </Button>
            </div>
            <ul>
                <li>Data Analysis and Cleaning</li>
                <li>Machine Learning Model Development</li>
                <li>Data Visualization with Python/R</li>
                <li>element 1</li>
            </ul>
        </div>
    );
}

export default App;
