import React from 'react'
import { Survey } from 'survey-react-ui'
import { Model } from 'survey-core'
import 'survey-core/defaultV2.css';
import { useNavigate } from 'react-router-dom';
import { ThreeDimensionalLight } from 'survey-core/themes/three-dimensional-light'
import './css/HemoSurvey.css'

const surveyJson = {
    elements: [
        {
          "type": "boolean",
          "name": "q1",
          "title": "Are you younger than 18 years old?",
        },
        {
            "type": "boolean",
            "name": "q2",
            "title": "Do you weigh less than 110 pounds (50kg)?",
        }
        ,
        {
            "type": "boolean",
            "name": "q3",
            "title": "Do you feel unwell today (have a cold, cough or fever)?",
        }
        ,
        {
            "type": "boolean",
            "name": "q4",
            "title": "Are you pregnant?",
        }
        ,
        {
            "type": "boolean",
            "name": "q5",
            "title": "Have you had a tattoo or piercing within the last three months?",
        }
        ,
        {
            "type": "boolean",
            "name": "q6",
            "title": "Have you had dental work done in the last three days?",
        }
        ,
        {
            "type": "boolean",
            "name": "q7",
            "title": "Have you ever taken drugs intravenously?",
        }
        ,
        {
            "type": "boolean",
            "name": "q8",
            "title": "Have you had anal sex with a new partner or with multiple partners in the past three months?",
        }
        ,
        {
            "type": "boolean",
            "name": "q9",
            "title": "Have you been bitten by a tick in the last 30 days?",
        }
        ,
        {
            "type": "boolean",
            "name": "q10",
            "title": "Have you travelled to a place other than Canada, USA or Europe in the last 21 days?",
        }
        ,
        {
            "type": "boolean",
            "name": "q11",
            "title": "Have you taken any medications in the last week?",
        }
    ]
}

const HemoSurvey = () => {
    const survey = new Model(surveyJson)
    const navigate = useNavigate()

    const userValid = (data) => {
        return Object.values(data).every(value => value === false);
    } 

    survey.applyTheme(ThreeDimensionalLight)
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3))
        console.log(userValid(sender.data))
        navigate('/survey-done', {state: {valid: userValid(sender.data)}})
    })

    return (
        <div>
            <Survey model={survey} />
        </div>
    )
}

export default HemoSurvey