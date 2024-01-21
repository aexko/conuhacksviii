import './css/HomePage.css'
import { useNavigate } from 'react-router-dom'
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Label} from 'recharts';
import {PieChart,Pie, Cell, RadialBar,RadialBarChart} from 'recharts';

const HomePage = () => {
    const navigate = useNavigate()
    const dataStats = [
        {"year": "2019", "donors": 801281},
        {"year": "2020", "donors": 765809},
        {"year": "2021", "donors": 797490},
        {"year": "2022", "donors": 767424}
    ]
    const pieChartData = [
        {"Name": "Total eligible donors", "Value": 15100000},
        {"Name": "Actual amount of donors", "Value": 787000}
    ]
    const COLORS = ["#FF0000","#FFA500"]
    const provinceData = [
        {name: "NL", "donors": 350000, fill: "#990F02"},
        {name: "PEI", "donors": 497000, fill: "#FC5404"},
        {name: "NS", "donors": 396000, fill: "#FCB001"},
        {name: "NB", "donors": 345000, fill: "#FFFF00"},
        {name: "QC", "donors": 264000, fill: "#00FF00"},
        {name: "ON", "donors": 532000, fill: "#006400"},
        {name: "MB", "donors": 699000, fill: "#6F9CDE"},
        {name: "SK", "donors": 680000, fill: "#0000FF"},
        {name: "AB", "donors": 863000, fill: "#C08DFA"},
        {name: "BC", "donors": 704000, fill: "#4B0082"}

    ]
    return (
        <div className="home-container">
            <button className="home-button" onClick={() => navigate('/survey')}>Check eligibility</button>
            <button className="home-button" onClick={() => navigate('/medications')}>Check medications</button>

            <hr width='80%' color='black' />
            <div className='home-header'>Statistics</div>
            <div className='stats-section'>
                <BarChart width={730} height={300} data={dataStats}>
                <text x={200} y={20} style={{fontSize:'18px', fill:'black', fontWeight:'bold'}}>Amount of donors in the past 4 years</text>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis dataKey="donors"/>
                <Tooltip />
                <Legend />
                <Bar dataKey="donors" fill="#82ca9d" />
                </BarChart>

                <PieChart width={730} height={250}>
                    <text x={200} y={20} style={{fontSize:'18px', fill:'black', fontWeight:'bold'}}>Amount of donors over the total possible donors</text>
                <Pie data={pieChartData} dataKey="Value" nameKey="Name" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" label
                >
                {pieChartData.map((entry,index) => (
                <Cell key={`cell-${index}`}fill={COLORS[index%COLORS.length]}/>))}
                </Pie>
                <Legend />
                </PieChart>
            </div>
            <div className='stats-section'>
                <RadialBarChart 
                width={730} 
                height={300} 
                innerRadius="10%" 
                outerRadius="80%" 
                data={provinceData} 
                startAngle={180} 
                endAngle={0}
                >
                <text x={200} y={20} style={{fontSize:'18px', fill:'black', fontWeight:'bold'}}>Amount of donors in each Canadian province</text>
                <RadialBar minAngle={15} fill="#8884d8" background clockWise={true} dataKey='donors'/>
                <Legend iconSize={15} width={120} height={140} layout='vertical' verticalAlign='middle' align="right"/>
                <Tooltip />
                </RadialBarChart>
                </div>
        </div>
    )
}

export default HomePage