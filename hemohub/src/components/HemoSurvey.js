import React from 'react'
import { Survey } from 'survey-react-ui'
import { Model } from 'survey-core'

const surveyJson = {
    elements: [{
        name: "FirstName",
        title: "Enter your first name:",
        type: "text"
    }, {
        name: "LastName",
        title: "Enter your last name:",
        type: "text"
    }]
}

const HemoSurvey = () => {
    const survey = new Model(surveyJson)

    return (
        <div>
            <Survey model={survey} />
        </div>
    )
}

export default HemoSurvey