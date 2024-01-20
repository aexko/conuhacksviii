import './css/HomePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="home-container">
            <button className="home-button" onClick={() => navigate('/survey')}>Check eligibility</button>

            <div className='stats-section'>stats</div>
        </div>
    )
}

export default HomePage