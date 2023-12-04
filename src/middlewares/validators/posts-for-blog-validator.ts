import {body} from "express-validator";
import {inputModelValidation} from "../inputModel/input-model-validation";

const titleValidation = body('title')
    .trim()
    .isLength({min: 1, max: 30})
    .withMessage('Invalid title')

const shortDescriptionValidation = body('shortDescription')
    .isString()
    .trim()
    .isLength({min: 1, max: 100})
    .withMessage('Invalid shortDescription')

const contentValidation = body('content')
    .isString()
    .trim()
    .isLength({min: 1, max: 1000})
    .withMessage('Invalid content')

export const postForBlogValidation = () => [titleValidation, shortDescriptionValidation, contentValidation, inputModelValidation]