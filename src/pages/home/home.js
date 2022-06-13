import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () =>
{
    let navigate = useNavigate();
    return(
        <div className="body-home">
            <div className="home__buttons">
                <button className="task1-button" onClick={() => navigate("/task-1")}>Task1</button>
                <button className="task2-button" onClick={() => navigate("/task-2")}>Task2</button>
            </div>
        </div>
    );
}
export default Home;

