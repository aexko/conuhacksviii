import React from 'react'
import { Survey } from 'survey-react-ui'
import { Model } from 'survey-core'
import 'survey-core/defaultV2.min.css';

const surveyJson = {
    elements: [
        {
          "type": "boolean",
          "name": "question1",
          "title": "Do you agree?",
        }
      ]
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