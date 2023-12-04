import {body, param} from "express-validator";
import {inputModelValidation} from "../inputModel/input-model-validation";
import {blogsQueryRepository} from "../../repositories/blogs-db-query-repository";

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

const blogIdBodyValidation = body('blogId')
    .isString()
    .trim()
    .custom(async (value) => {
        const blog = await blogsQueryRepository.getBlogById(value)

        if (blog === null) {
            throw new Error('Invalid blogId')
        } else {
            return true
        }

    })
    .withMessage('Invalid blogId')

const blogIdParamValidation = param('blogId')
    .isString()
    .trim()
    .custom(async (value) => {
        const blog = await blogsQueryRepository.getBlogById(value)

        if (blog === null) {
            throw new Error('Invalid blogId')
        } else {
            return true
        }

    })
    .withMessage('Invalid blogId')

export const postBodyValidation = () => [titleValidation, shortDescriptionValidation, contentValidation, blogIdBodyValidation, inputModelValidation]
export const postBodyAndParamValidation = () => [titleValidation, shortDescriptionValidation, contentValidation, blogIdParamValidation, inputModelValidation]